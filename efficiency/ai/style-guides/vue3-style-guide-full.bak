---
outline: deep
editLink: false
---

# vue3编编码风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

下列内容依据：https://www.vueframework.com/docs/v3/cn/style-guide/

> 说明：本文档以官方 A/B 规则为主结构，已将原文档第 1–46 行的项目级规则按性质分类并融合到对应小节中，去重并统一术语；上方旧区块已移除，避免双重口径。
> 本次已为“项目强化（PJ）”与关键规则补充可直接复制的代码模板/片段，并标注 ESLint/Stylelint/Volar 相关规则或诊断，以便自动化对齐。

---

## 优先级 A：必要（规避错误）

### A-1 组件名应为多个单词（根组件 App 例外）
- 原因：避免与原生 HTML 元素冲突，提升可读性与可搜索性。
- 正例：
  - `app.component('todo-item', { /*...*/ })`
  - `export default { name: 'TodoItem' }`
- 反例：
  - `app.component('todo', { /*...*/ })`
  - `export default { name: 'Todo' }`
- Lint 对齐：
  - ESLint: `vue/multi-word-component-names`
  - ESLint: `vue/no-reserved-component-names`

### A-2 组件的 data 必须是函数（选项式 API）
- 原因：每个组件实例拥有独立数据副本，避免状态污染。
- 正例：
  - `export default { data() { return { count: 0 } } }`
- 反例：
  - `export default { data: { count: 0 } }`
- Lint 对齐：
  - ESLint: `vue/no-shared-component-data`

### A-3 Prop 定义应尽量详细（类型、是否必填、默认值、校验）
- 原因：增强自文档化，在开发期暴露问题。
- 正例：
  - ```js
    props: {
      title: { type: String, required: true },
      page: { type: Number, default: 1, validator: v => v > 0 }
    }
    ```
- 反例：
  - `props: ['title', 'page']`
- 项目强化：
  - Props/Emits 必须显式类型化（TS）。
  - 模板：
    ```ts
    <script setup lang="ts">
    const props = defineProps<{ userId: number; title: string }>()
    const emit = defineEmits<{ (e: 'submitted', payload: { ok: boolean }): void }>()
    </script>
    ```
  - 反例：
    ```ts
    // any 或未声明类型
    const props = defineProps<any>()
    const emit = defineEmits(['submitted'])
    ```
- Lint 对齐：
  - ESLint: `vue/require-prop-types`, `vue/require-default-prop`
  - TS/IDE: Volar 对 props/emit 类型进行诊断（类型不匹配时报错）
  - ESLint: `@typescript-eslint/explicit-module-boundary-types`（可选）

### A-4 为 v-for 提供稳定且唯一的 key
- 原因：保障正确高效的虚拟 DOM Diff，避免渲染错乱。
- 正例：
  - `<li v-for="item in list" :key="item.id">{{ item.text }}</li>`
- 反例：
  - `<li v-for="(item, i) in list">{{ item.text }}</li>`（缺少 key）
  - `<li v-for="item in list" :key="Math.random()">...</li>`（不稳定 key）
- Lint 对齐：
  - ESLint: `vue/require-v-for-key`

### A-5 避免在同一元素上同时使用 v-for 与 v-if
- 原因：优先级与语义易误解，建议用计算属性或外层 template 包裹。
- 正例：
  - ```vue
    <template v-if="show">
      <li v-for="item in visibleList" :key="item.id">{{ item.text }}</li>
    </template>
    ```
  - ```js
    computed: { visibleList() { return this.list.filter(x => x.visible) } }
    ```
- 反例：
  - `<li v-for="item in list" v-if="item.visible" :key="item.id">{{ item.text }}</li>`
- Lint 对齐：
  - ESLint: `vue/no-use-v-if-with-v-for`

### A-6 避免使用保留字作为组件名
- 原因：与原生元素冲突或产生不可预期行为。
- 正例：`name: 'AppButton'`
- 反例：`name: 'Button'`
- Lint 对齐：
  - ESLint: `vue/no-reserved-component-names`

### A-PJ-1 组合式 API 与 `<script setup>`（项目强化）
- 原因：统一开发范式、减少样板代码、便于类型推断。
- 模板：
  ```vue
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  const count = ref(0)
  const doubled = computed(() => count.value * 2)
  </script>
  ```
- 反例：选项式 API 无必要混用；项目内风格不统一。
- Lint/IDE 对齐：
  - ESLint: `vue/script-setup-uses-vars`（避免未使用报错）
  - Volar: 提供 `<script setup>` 下的类型推断与诊断

### A-PJ-2 i18n 强制（项目强化）
- 原因：统一文案来源、支持多语言，避免硬编码。
- 模板：
  ```vue
  <template>
    <span>{{ t('common.save') }}</span>
  </template>
  <script setup lang="ts">
  const { t } = useI18n()
  </script>
  ```
- 反例：`<span>保存</span>` / `const label = 'Save'`
- Lint 对齐：
  - ESLint: `vue-i18n/no-raw-text`（来自 eslint-plugin-vue-i18n）

### A-PJ-3 API 分层（项目强化）
- 原因：解耦视图与数据访问，集中拦截与错误处理。
- 模板：
  ```ts
  // 组件内
  import { getUser } from '@/api/user'
  const user = ref()
  onMounted(async () => { user.value = await getUser(id) })
  ```
  ```ts
  // src/api/user.ts
  import { http } from '@/config/axios'
  export async function getUser(id: number) { return http.get(`/users/${id}`) }
  ```
- 反例：组件中直接 `await axios.get('/users/'+id)`
- Lint/策略对齐：
  - ESLint：无通用现成规则，建议通过自定义 lint 规则或 CodeReview/.cursorrules 约束

### A-PJ-4 类型安全（项目强化）
- 原因：减少运行时错误，提高可维护性。
- 模板：
  ```ts
  type User = { id: number; name: string }
  const user = ref<User | null>(null)
  ```
- 反例：`const user: any = {}`
- Lint 对齐：
  - ESLint: `@typescript-eslint/no-explicit-any`
  - TS: `strict: true`, `noImplicitAny: true`

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 组件名大小写与风格
- SFC 文件名与组件 `name` 推荐使用 PascalCase。
- 模板中引用组件推荐使用 PascalCase；若 DOM 内联模板（HTML）需使用 kebab-case。
- 正例：
  - 文件名：`TodoItem.vue`
  - `export default { name: 'TodoItem' }`
  - `<TodoItem />`
- 反例：
  - 文件名：`todoitem.vue` 或 `todoItem.vue`（不统一）
  - `<todoitem />`（在 SFC 模板中不推荐）
- Lint 对齐：
  - ESLint: `vue/component-name-in-template-casing`（模板中组件名大小写）
  - ESLint: `vue/match-component-file-name`（组件名与文件名匹配）

### B-2 基础组件使用前缀（Base-、App-、V- 等）
- 原因：快速识别“无业务语义”的可复用基础组件。
- 正例：`BaseButton.vue`, `BaseTable.vue`, `VInput.vue`
- 反例：`Button.vue`（难区分是否基础组件）
- Lint 对齐：
  - 无通用规则，依团队约定进行 code review / 约束

### B-3 单例组件以 The 前缀命名
- 原因：表明在应用中通常只有一个实例。
- 正例：`TheSidebar.vue`, `TheHeader.vue`
- 反例：`Header.vue`

### B-4 与父组件强耦合的子组件以父组件名为前缀
- 原因：名称体现从属关系，便于检索与重构。
- 正例：`TodoList.vue`, `TodoListItem.vue`, `TodoListFilter.vue`
- 反例：`List.vue`, `Item.vue`

### B-5 组件名中的单词顺序保持一致（通用在前、具体在后）
- 正例：`SearchButton`, `SearchButtonClear`
- 反例：`ClearSearchButton`

### B-6 无内容的组件在 SFC 或字符串模板中使用自闭合
- 正例：`<IconUser />`
- 反例：`<IconUser></IconUser>`
- Lint 对齐：
  - ESLint: `vue/html-self-closing`

### B-7 Prop 命名在 JS 中使用 camelCase，在模板/HTML 中使用 kebab-case
- 正例：
  - `props: { userId: Number }`
  - `<UserCard :user-id="id" />`
- 反例：
  - `<UserCard :userId="id" />`（在模板/HTML 中不推荐）
- Lint 对齐：
  - ESLint: `vue/attribute-hyphenation`

### B-8 组件选项顺序与模板属性顺序
- 推荐组件选项顺序（示例）：
  - `name` → `components/directives` → `props/emits` → `setup`（或 `mixins/provide/inject`）→ `data` → `computed` → `watch` → 生命周期（按调用顺序）→ `methods`
- 模板属性顺序（示例）：
  - `is` / `v-for` / `v-if` 系列 / `v-slot` → `id` / `ref` / `key` → `class` / `style` → `v-model` → 其它 `:prop` / `@event`
- 正例：团队统一约定并执行上述顺序。
- 反例：杂乱无序导致阅读与维护成本增加。
- Lint 对齐：
  - ESLint: `vue/order-in-components`, `vue/attributes-order`

### B-9 单文件组件的顶级块顺序
- 正例：
  - `<template> ... </template>`
  - `<script setup>` 或 `<script> ... </script>`
  - `<style scoped> ... </style>`
- 反例：将 `<style>` 放在最前或多处穿插。
- 项目强化：
  - 小型组件内样式使用 `<style scoped>`；跨组件复用样式放入 `src/styles/**`。
- Lint/IDE 对齐：
  - ESLint: `vue/block-tag-newline`（可选）
  - Stylelint: `max-nesting-depth`、`stylelint-order`（样式层面）

### B-10 模板中的复杂表达式下沉到计算属性/方法
- 正例：
  - `<div>{{ fullName }}</div>` + `computed: { fullName() { return \`${this.first} ${this.last}\` } }`
- 反例：
  - `<div>{{ first.trim().toUpperCase() + ' ' + last.trim().toUpperCase() }}</div>`
- 项目强化：
  - “直接在模板做复杂计算，建议用 `computed`”已并入此条。
- Lint 对齐：
  - ESLint: `max-lines-per-function`、`complexity`（可选，针对脚本复杂度）
  - 建议 CodeReview 关注模板可读性（无强制规则）

### B-PJ-1 组合式复用（项目强化）
- 规则：将可复用逻辑抽为 `src/hooks/**` 组合式函数（`useXxx`）。
- 模板：
  ```ts
  // src/hooks/useUserProfile.ts
  import { ref } from 'vue'
  export function useUserProfile() {
    const profile = ref(null as null | { id: number; name: string })
    async function load(id: number) { /* ... */ }
    return { profile, load }
  }
  ```
- 组件使用：
  ```ts
  const { profile, load } = useUserProfile()
  onMounted(() => load(id))
  ```

### B-PJ-2 表单规范（项目强化）
- 规则：表单使用项目统一 `<Form>` 组件 + schema 配置；事件命名用过去式（如 `@submitted`）。
- 模板：
  ```vue
  <Form :schema="schema" v-model="model" @submitted="onSubmit" />
  ```

### B-PJ-3 异步与错误处理（项目强化）
- 规则：在 `onMounted` 避免串联多个请求且无错误处理；抽离到 hooks 并加入 loading/错误处理。
- 模板：
  ```ts
  const loading = ref(false)
  const { load } = useUser()
  onMounted(load)
  ```

---

## 附录 A：命名与注册对照（结合示例）
- 注册（全局或局部）：`app.component('todo-item', { /*...*/ })`
- 组件内部命名：`export default { name: 'TodoItem' }`
- 模板中使用（SFC 模板）：`<TodoItem />`
- DOM 中使用（非 SFC、原生 HTML 模板）：`<todo-item></todo-item>`

## 附录 B：统一检查清单（合并版）
- [ ] 组件名为多词且文件名/导出名使用 PascalCase
- [ ] 列表渲染提供稳定唯一 key
- [ ] Props/Emits 显式 TS 类型，避免 any/未收敛 unknown
- [ ] 模板无复杂表达式，复杂逻辑下沉到 computed/methods
- [ ] 文案均使用 i18n t() 获取
- [ ] 网络请求经由 `src/api/**` 封装，组件不直接用 axios
- [ ] 可复用逻辑抽为 hooks；小型组件使用 `<style scoped>`；复用样式入 `src/styles/**`

## 附录 C：工具与规则映射
- ESLint：`plugin:vue/recommended`、`vue/multi-word-component-names`、`vue/require-v-for-key`、`vue/no-use-v-if-with-v-for`、`vue/component-name-in-template-casing`、`vue/attributes-order`、`vue/order-in-components`、`vue/html-self-closing`、`vue/attribute-hyphenation`
- TypeScript/ESLint：`@typescript-eslint/no-explicit-any`、`consistent-type-imports`
- Stylelint：`max-nesting-depth`、`stylelint-order`
- Volar：SFC 类型检查（props/emits/slots）

## 附录 D：项目内示例
- 参考：`src/views/Profile/components/BasicInfo.vue` 中的 `defineEmits`、表单校验、i18n、API 分层

## 官方链接
- Vue 3 官方风格指南（中）：https://cn.vuejs.org/style-guide/
- Vue 3 官方风格指南（英）：https://vuejs.org/style-guide/
