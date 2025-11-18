---
outline: deep
editLink: false
---

# 官方风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

依据：
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html

说明：本文档以 A/B 结构为主，将原有项目级约定融合为“项目强化（PJ）”条目，统一正例/反例、检查清单与工具映射。

---

## 优先级 A：必要（规避错误）

### A-1 禁止滥用 any，启用严格模式（PJ）
- 规则：`strict: true`、`noImplicitAny: true`；无法确定类型使用 `unknown` 并做类型收窄，禁止随意 `@ts-ignore`。
- 反例：
  ```ts
  let x: any
  // @ts-ignore
  const y = foo as unknown as Bar
  ```

### A-2 导出 API 必须显式类型（PJ）
- 规则：对外导出的对象/函数/组件的入参与返回值必须有显式类型。
- 正例：
  ```ts
  export function sum(a: number, b: number): number { return a + b }
  ```

### A-3 模型归档与命名（PJ）
- 规则：接口/数据模型在 `src/types/**` 维护，命名使用 PascalCase（如 `UserProfile`）。

### A-4 API 请求/响应模型分离（PJ）
- 规则：请求与响应定义独立 `interface`/`type` 并与实现分离，便于演进。

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 interface 与 type 的取舍（通用实践）
- 规则：对象结构优先 `interface`，联合/交叉/映射类型使用 `type`。

### B-2 利用类型推断，避免重复注解（PJ）
- 正例：`const count = ref(0)` 无需额外 `: number` 注解。

### B-3 有限集建模（通用实践）
- 规则：使用字面量联合/枚举表示有限取值；跨模块常量至 `src/utils/constants.ts`。

### B-4 Vue 相关类型完善（PJ）
- 规则：为 `props`/`emit`/`slots` 提供完整类型。
- 正例：
  ```ts
  const props = defineProps<{ id: number }>()
  const emit = defineEmits<{ (e: 'submitted', ok: boolean): void }>()
  ```

---

## 附录 A：统一检查清单（合并版）
- [ ] 是否存在 `any`/`@ts-ignore` 可替换为更安全写法？
- [ ] 对外导出是否均有入参/返回类型？
- [ ] 可复用模型是否沉淀至 `src/types/**` 且命名规范？
- [ ] Vue 组件的 `props/emit/slots` 是否类型完善？

## 附录 B：工具与规则映射
- ESLint：`@typescript-eslint/no-explicit-any`、`consistent-type-imports`、`no-floating-promises`。
- TSConfig：`strict: true`、`noImplicitAny: true`。
- .cursorrules：固化“强类型、禁止 any、模型归档”的条目。

## 附录 C：项目内示例
- `src/api/system/user/profile.ts` 中的 `ProfileVO`、`UserProfileUpdateReqVO`。
- `src/views/Profile/components/BasicInfo.vue` 中表单 `FormRules` 类型化。
