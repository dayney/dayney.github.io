---
outline: deep
editLink: false
---

# 官方风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

依据：
- Vue I18n 官方指南：https://vue-i18n.intlify.dev/guide/

说明：本文档以 A/B 结构为主，将原有项目级约定融合为“项目强化（PJ）”条目，统一正例/反例与检查清单，避免重复口径。并在规则下补充可复制代码模板/片段与相关 ESLint/Volar/TS 规则标注，便于自动化对齐。

---

## 优先级 A：必要（规避错误）

### A-1 所有用户可见文案必须使用 i18n（PJ）
- 规则：模板与脚本中禁止硬编码中文/英文，统一通过 `t()` 获取文案。
- 模板：
  ```vue
  <template>
    <button>{{ t('common.save') }}</button>
  </template>
  <script setup lang="ts">
  const { t } = useI18n()
  </script>
  ```
- 反例：
  - `<button>保存</button>` 或 `const label = 'Save'`
- 规则映射：
  - ESLint: `vue-i18n/no-raw-text`（eslint-plugin-vue-i18n）

### A-2 路由/菜单/面包屑标题统一走 i18n（PJ）
- 规则：在路由 `meta.title` 存储 i18n key（非中文），展示处调用 `t(meta.title)`。
- 模板：
  ```ts
  // 路由
  { meta: { title: 'routes.user.detail' } }
  // 渲染
  const route = useRoute()
  const { t } = useI18n()
  const title = t(route.meta.title as string)
  ```
- 反例：
  - `meta.title: '用户详情'` 或组件内手写标题字符串。
- 规则映射：
  - ESLint: `vue-i18n/no-raw-text`

### A-3 表单与校验消息使用 i18n（PJ）
- 规则：表单校验 message 与占位符统一来自 i18n。
- 模板：
  ```ts
  const { t } = useI18n()
  const rules = { name: [{ required: true, message: t('form.rules.nameRequired') }] }
  ```
- 反例：
  - `message: '请输入姓名'`
- 规则映射：
  - ESLint: 可自定义规则扫描硬编码中文（项目可选）

### A-4 语言 key 命名规范与唯一性（PJ）
- 规则：使用命名空间 + 语义化路径，例如：`profile.user.nickname`；禁止随意短 key（如 `txt1`）。
- 模板：
  ```ts
  t('profile.user.nickname')
  ```
- 反例：
  - `t('a.b.c')`、`t('txt1')`
- 规则映射：
  - ESLint: 无官方通用规则；建议用代码审查或自建 lint 规则

### A-5 语言资源集中管理与按语言拆分（PJ）
- 规则：语言资源集中存放于 `src/locales/**`，按语言与模块拆分（如 `zh-CN.ts`、`en.ts`），导出默认对象。
- 模板：
  ```ts
  // src/locales/zh-CN.ts
  export default {
    common: { save: '保存' },
    routes: { user: { detail: '用户详情' } }
  }
  ```
- 反例：
  - 将文案散落在各组件文件中，后期难以统一维护。

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 业务域前缀与公共域划分（PJ）
- 规则：用统一前缀区分业务域，如 `profile.*`、`common.*`、`menu.*`，便于检索与复用。
- 模板：
  ```ts
  export default {
    common: { ok: '确定' },
    menu: { dashboard: '仪表盘' },
    profile: { user: { nickname: '昵称' } }
  }
  ```

### B-2 具名占位插值，避免字符串拼接（官方/通用实践）
- 正例：
  ```ts
  t('common.hello', { name })
  // 语言文件：common: { hello: '你好，{name}' }
  ```
- 反例：
  - `t('common.hello') + name`
- 规则映射：
  - ESLint: 无专用；建议 code review

### B-3 日期/数字等本地化封装（官方/通用实践）
- 模板：
  ```ts
  const { n, d } = useI18n()
  n(123456.78, 'currency')
  d(new Date(), 'short')
  ```
- 规则映射：
  - 无专用；最佳实践落地

### B-4 文案组织与模块边界（PJ）
- 规则：避免同一语义在多个模块重复定义 key；公共语义归入 `common.*`。

### B-5 加载策略与语言切换（通用实践）
- 模板：
  ```ts
  import { createI18n } from 'vue-i18n'
  const i18n = createI18n({ legacy: false, locale: 'zh-CN', messages })
  // 切换
  i18n.global.locale.value = 'en'
  localStorage.setItem('locale', 'en')
  ```

### B-6 与路由、组件解耦（通用实践）
- 规则：组件只消费 key，不直接操作语言对象；路由层仅存 key，不存展示文案。

---

## 附录 A：统一检查清单（合并版）
- [ ] 组件/页面是否存在硬编码文案？
- [ ] 路由/菜单标题是否使用 `meta.title` + `t()` 渲染？
- [ ] 表单校验消息是否走 i18n？
- [ ] 新增 key 是否遵循命名空间与语义化？是否避免重复定义？
- [ ] 是否有日期/数字等本地化统一封装与用法？
- [ ] 语言资源是否集中于 `src/locales/**` 并按模块拆分？

## 附录 B：工具与规则映射
- ESLint：`vue-i18n/no-raw-text`（eslint-plugin-vue-i18n），自定义“禁止中文硬编码”规则（可选）
- TypeScript：可选的 KeyPath 类型提示（基于生成或类型体操）
- Volar：模板中对 `t()` 返回类型与插值参数诊断
- .cursorrules：国际化必须、文案禁止硬编码；路由标题走 i18n。

## 附录 C：项目内示例
- `src/locales/zh-CN.ts`、`src/locales/en.ts`
- `src/views/Profile/Index.vue` 使用 `const { t } = useI18n()` 与 tab 标题文案。

## 官方链接
- Vue I18n 官方指南：https://vue-i18n.intlify.dev/guide/
