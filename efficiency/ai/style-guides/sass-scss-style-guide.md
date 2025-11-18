---
outline: deep
editLink: false
---

# 官方风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

依据：
- Sass 官方文档：https://sass-lang.com/documentation/
- Sass Guidelines（社区）：https://sass-guidelin.es/

说明：本文档以 A/B 结构为主，将原有项目级约定融合为“项目强化（PJ）”条目，统一正例/反例与检查清单。并补充可复制代码模板/片段与 Stylelint 规则标注，便于自动化对齐。

---

## 优先级 A：必要（规避错误）

### A-1 作用域与结构（PJ）
- 规则：组件内样式默认 `<style scoped lang="scss">`；全局变量/混入放 `src/styles/**`。
- 模板：
  ```vue
  <style scoped lang="scss">
  .card { padding: var(--space-md); }
  </style>
  ```
  ```scss
  // src/styles/variables.scss
  $space-sm: 8px; $space-md: 16px; $space-lg: 24px;
  :root { --space-sm: 8px; --space-md: 16px; --space-lg: 24px; }
  ```

### A-2 嵌套深度限制（PJ）
- 规则：禁止超过 3 层选择器嵌套，避免选择器过重。
- 反例：`.a .b .c .d {}`
- Stylelint 映射：`max-nesting-depth`

### A-3 设计令牌化（PJ）
- 规则：颜色/间距/字号使用变量或 CSS 变量，禁止硬编码魔法数。
- 模板：
  ```scss
  @use 'variables' as *;
  .btn { color: var(--color-primary); margin: $space-sm; }
  ```
- 反例：`color: #409eff; margin: 13px;`
- Stylelint 映射：可自定义 `color-no-hex`（可选）

### A-4 单一来源（PJ）
- 规则：同一语义只保留一处来源，优先变量/混入，禁止复制粘贴多个近似实现。

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 命名规范（BEM 或项目约定）（PJ）
- 模板：
  ```scss
  .button { &__icon { width: 16px; } &--small { font-size: 12px; } }
  ```

### B-2 抽象复用（PJ）
- 模板：
  ```scss
  // src/styles/mixins.scss
  @mixin text-ellipsis($lines: 1) {
    overflow: hidden; display: -webkit-box; -webkit-line-clamp: $lines; -webkit-box-orient: vertical;
  }
  // 使用
  .title { @include text-ellipsis(2); }
  ```

### B-3 主题与品牌（通用实践）
- 模板：
  ```scss
  :root { --brand: #409eff; }
  [data-theme="dark"] { --brand: #66b1ff; }
  .link { color: var(--brand); }
  ```

### B-4 与组件库协同（通用实践）
- 模板：
  ```scss
  // 覆盖范围收敛并标注原因
  .el-button--primary { /* 与设计稿对齐：加粗 */ font-weight: 600; }
  ```

---

## 附录 A：统一检查清单（合并版）
- [ ] 组件样式是否使用 `<style scoped lang="scss">`？
- [ ] 嵌套是否 <= 3 层？
- [ ] 颜色/间距/字号是否来源于变量/CSS 变量？
- [ ] 是否将复用样式抽到 mixin/function？

## 附录 B：工具与规则映射
- Stylelint：`max-nesting-depth`、`no-duplicate-selectors`、`stylelint-order`
- Prettier：统一格式化
- .cursorrules：固化“作用域、嵌套深度、令牌化、抽象复用”

## 附录 C：项目示例
- `src/styles/index.scss`、`src/styles/variables.scss`、`src/styles/theme.scss`
