---
outline: deep
editLink: false
---

# 官方风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

依据：
- Vue Router 官方指南：https://router.vuejs.org/guide/

说明：本文档以 A/B 结构为主，将原文档的项目级约定融合为“项目强化（PJ）”条目，统一正例/反例，避免重复口径。并在每条规则下补充可直接复制的代码模板/片段与 ESLint/Volar/TS 相关规则或建议，便于自动化对齐。

---

## 优先级 A：必要（规避错误）

### A-1 路由集中管理与模块化（PJ）
- 规则：所有路由定义集中于 `src/router/**`，模块化拆分在 `src/router/modules/**`，统一在入口聚合。
- 模板：
  ```ts
  // src/router/modules/user.ts
  import type { RouteRecordRaw } from 'vue-router'
  export const userRoutes: RouteRecordRaw[] = [
    { path: '/users', name: 'UserList', component: () => import('@/views/user/List.vue'), meta: { title: 'routes.user.list', requiresAuth: true } },
  ]

  // src/router/index.ts
  import { createRouter, createWebHistory } from 'vue-router'
  import { userRoutes } from './modules/user'
  const routes = [ ...userRoutes, { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/_builtin/NotFound.vue') } ]
  export const router = createRouter({ history: createWebHistory(), routes, scrollBehavior: () => ({ top: 0 }) })
  ```
- 反例：在组件中随意 `router.addRoute()` 无集中管理。
- 规则映射：无通用 ESLint 规则；以 CodeReview/目录约定约束。

### A-2 路由 name 必须唯一且使用 PascalCase（PJ）
- 原因：基于 name 的导航更稳健，避免路径变更引发联动修改。
- 模板：
  ```ts
  { path: '/users/:id', name: 'UserDetail', component: () => import('@/views/user/Detail.vue') }
  // 使用
  router.push({ name: 'UserDetail', params: { id } })
  ```
- 反例：`name: 'user-detail'` 以及 `router.push('/users/'+id)`。
- 规则映射：无通用 lint；建议在 PR 审查校验命名风格。

### A-3 懒加载视图组件（PJ）
- 模板：
  ```ts
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') }
  ```
- 反例：`import About from '@/views/About.vue'` 首屏引入。
- 规则映射：无专用 lint；构建分析工具验证体积。

### A-4 权限/登录校验的全局处理（PJ）
- 模板：
  ```ts
  // src/permission.ts
  import { router } from '@/router'
  router.beforeEach((to) => {
    const authed = isAuthed()
    if (to.meta.requiresAuth && !authed) return { name: 'Login', query: { redirect: to.fullPath } }
  })
  ```
- 反例：页面内重复 `onMounted` 手写登录校验。
- 规则映射：无通用 lint；在 permission.ts 统一实现。

### A-5 路由 meta 最低要求（PJ）
- 模板：
  ```ts
  { path: '/users', name: 'UserList', component: () => import('@/views/user/List.vue'), meta: { title: 'routes.user.list', requiresAuth: true, icon: 'user' } }
  ```
- 反例：缺少 `title` 导致面包屑/页签无法统一渲染。
- 规则映射：配合 i18n 文档使用 eslint-plugin-vue-i18n 的 `no-raw-text`（在渲染处提示）。

### A-6 使用返回值风格的导航守卫（官方建议）
- 模板：
  ```ts
  router.beforeEach((to) => {
    if (to.meta.requiresAuth && !isAuthed()) return { name: 'Login' }
  })
  ```
- 反例：大量 `next()` 分支。
- 规则映射：Vue Router 4 官方推荐模式；无专用 lint。

### A-7 使用 props 接收路由参数而非直接耦合 $route
- 模板：
  ```ts
  // 路由
  { path: '/users/:id', name: 'UserDetail', props: true, component: () => import('@/views/user/Detail.vue') }
  // 组件
  const props = defineProps<{ id: string }>()
  ```
- 反例：组件中大量 `useRoute().params.id`。
- 规则映射：无专用 lint；Volar 对 props 类型进行诊断。

### A-8 404 兜底路由与匹配顺序
- 模板：
  ```ts
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/_builtin/NotFound.vue') }
  ```
- 反例：通配路由置前导致后续路由失效。

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 使用命名路由优先于硬编码 path
- 模板：
  ```ts
  router.push({ name: 'UserDetail', params: { id } })
  ```
- 反例：`router.push('/users/'+id)`

### B-2 路由元信息驱动 UI（PJ）
- 模板：
  ```ts
  { meta: { title: 'routes.user.list', icon: 'user', hidden: false, order: 20, keepAlive: true } }
  ```
- UI 使用：
  ```ts
  const route = useRoute()
  const title = t(route.meta.title as string)
  ```

### B-3 模块化与基础前缀常量（PJ）
- 模板：
  ```ts
  const U = '/users'
  [{ path: `${U}/:id`, name: 'UserDetail', component: ... }]
  ```

### B-4 统一滚动行为与导航失败处理
- 模板：
  ```ts
  export const router = createRouter({ history: createWebHistory(), routes, scrollBehavior: () => ({ top: 0 }) })
  const failure = await router.push({ name: 'UserList' })
  if (failure) console.warn('navigation failure', failure)
  ```

### B-5 keep-alive 与缓存控制
- 模板：
  ```ts
  { name: 'UserList', meta: { keepAlive: true } }
  // 布局内：
  <KeepAlive include=["UserList"]>
    <RouterView />
  </KeepAlive>
  ```

### B-6 组合式 API 使用 useRoute/useRouter 与封装（PJ）
- 模板：
  ```ts
  import { useRouter } from 'vue-router'
  export function useNav() {
    const router = useRouter()
    const goUser = (id: string) => router.push({ name: 'UserDetail', params: { id } })
    return { goUser }
  }
  ```

### B-7 路由模块与 Chunk 命名（可选）
- 模板：
  ```ts
  // Vite 默认即可；如需分包策略在 vite.config.ts 配置 manualChunks
  () => import('@/views/user/Detail.vue')
  ```

### B-8 外链/iframe 页面统一组件（PJ）
- 模板：
  ```ts
  { path: '/help', name: 'HelpIFrame', meta: { iframe: 'https://...' }, component: () => import('@/views/_builtin/IFrame.vue') }
  ```

---

## 附录 A：统一检查清单（合并版）
- [ ] 新增路由是否使用懒加载？
- [ ] 路由 `name` 是否唯一、PascalCase？
- [ ] 是否优先使用命名路由而非硬编码 path？
- [ ] 是否通过 props 接收 params/query，避免直接耦合 `$route`？
- [ ] 是否在全局守卫（permission.ts）统一进行登录/权限校验？
- [ ] meta 是否完善（含 i18n title/权限/菜单信息）？
- [ ] 404 兜底是否放在最后且无冲突？

## 附录 B：工具与规则映射
- ESLint：`no-restricted-imports`（可自定义限制在组件中直接导入 axios 而非路由项）
- TypeScript：为 `params`/`query` 建模类型（`src/types/router.d.ts` 可声明辅助泛型）
- Volar：模板/脚本内对 Router API 的类型提示与诊断
- .cursorrules：Routing/Permission 由统一文件处理，组件内仅做最小导航。

## 附录 C：项目内示例
- `src/router/index.ts`（路由创建、scrollBehavior、模块聚合）
- `src/permission.ts`（全局守卫与登录、权限处理）

## 官方链接
- Vue Router 官方指南：https://router.vuejs.org/guide/
