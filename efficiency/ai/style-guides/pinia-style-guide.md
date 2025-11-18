---
outline: deep
editLink: false
---

# 官方风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

依据：
- Pinia 官方文档：https://pinia.vuejs.org/

说明：本文档以 A/B 结构为主，将原有项目级约定融合为“项目强化（PJ）”条目，统一正例/反例与检查清单。并补充可复制代码模板/片段与相关规则标注，便于自动化对齐。

---

## 优先级 A：必要（规避错误）

### A-1 Store 模块化与命名（PJ）
- 规则：每个业务域一个独立 Store 文件，命名 `useXxxStore`，位于 `src/store/modules/**`；在 `src/store/index.ts` 统一初始化。
- 模板：
  ```ts
  // src/store/modules/user.ts
  import { defineStore } from 'pinia'
  export interface User { id: number; name: string }
  export const useUserStore = defineStore('user', {
    state: () => ({ info: null as User | null, loading: false }),
    getters: { isLogin: (s) => !!s.info },
    actions: {
      async load(id: number) {
        this.loading = true
        try { this.info = await getUser(id) } finally { this.loading = false }
      }
    }
  })
  ```
- 初始化：
  ```ts
  // src/store/index.ts
  import { createPinia } from 'pinia'
  export const pinia = createPinia()
  // main.ts
  app.use(pinia)
  ```

### A-2 仅通过 Actions 修改 State（PJ）
- 模板（组件使用）：
  ```ts
  const user = useUserStore()
  await user.load(1)
  // 反例：user.info = { ... } // 组件直接改写 state
  ```
- 规则映射：
  - Code Review 约束；可选自定义 ESLint 规则

### A-3 类型安全（State/Actions/Getters）（PJ）
- 模板：见 A-1 示例（接口、state、getter/action 签名）。
- 规则映射：
  - ESLint：`@typescript-eslint/no-explicit-any`

### A-4 初始化与依赖注入（PJ）
- 规则：在应用入口 `app.use(pinia)` 后再使用 Store，避免创建前访问。

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 使用 Getters 作为派生状态（PJ）
- 模板：
  ```ts
  getters: { totalPrice: (s) => s.items.reduce((t, i) => t + i.price, 0) }
  ```

### B-2 统一错误处理与返回（PJ）
- 模板：
  ```ts
  actions: {
    async saveProfile(): Promise<boolean> {
      try { await api.updateProfile(this.info!); return true } catch { return false }
    }
  }
  // 组件侧
  const ok = await store.saveProfile(); if (!ok) ElMessage.error(t('common.failed'))
  ```

### B-3 组合式复用（PJ）
- 模板：
  ```ts
  // src/hooks/useCheckout.ts
  export function useCheckout() {
    const cart = useCartStore(); const user = useUserStore()
    const canCheckout = computed(() => cart.items.length > 0 && user.isLogin)
    return { canCheckout }
  }
  ```

### B-4 与视图/路由解耦（通用实践）
- 模板：
  ```ts
  // 路由跳转封装在 hooks 中，而非 actions 内直接 push
  ```

### B-5 持久化与订阅（可选）
- 模板（持久化插件）：
  ```ts
  // main.ts
  import persist from 'pinia-plugin-persistedstate'
  pinia.use(persist)
  // store
  export const useAuthStore = defineStore('auth', { state: () => ({ token: '' }), persist: true })
  ```
- 模板（订阅）：
  ```ts
  const store = useUserStore()
  store.$subscribe((mutation, state) => { console.log('user changed', state.info) })
  ```

---

## 附录 A：统一检查清单（合并版）
- [ ] Store 是否按业务域拆分并采用 `useXxxStore` 命名？
- [ ] 是否仅通过 Actions 修改 State？
- [ ] 是否使用 Getters 承载派生状态、模板无复杂计算？
- [ ] Actions 是否统一错误处理并返回标准结果？
- [ ] Store 与视图/路由是否解耦？

## 附录 B：工具与规则映射
- ESLint：`@typescript-eslint/no-explicit-any`、`@typescript-eslint/consistent-type-imports`
- .cursorrules：固化“状态经 Pinia 管理、仅 Actions 改写、Getters 负责派生”

## 附录 C：项目内示例
- `src/store/modules/**` 与 `src/views/**` 的使用方式。
