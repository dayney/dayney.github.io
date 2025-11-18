---
outline: deep
editLink: false
---

# 官方风格指南摘录：优先级 A（必要，规避错误）与优先级 B（强烈推荐，增强可读性）

依据：
- ESLint 配置与规则：https://eslint.org/docs/latest/use/configure/
- Prettier 选项与配置：https://prettier.io/docs/en/options.html
- Stylelint 配置指南：https://stylelint.io/user-guide/configure

说明：本文档以 A/B 结构为主，将原有项目级约定融合为“项目强化（PJ）”条目，统一正例/反例与检查清单，避免重复口径。并为每条关键规则补充可直接复制的配置片段示例，便于自动化对齐。

---

## 优先级 A：必要（规避错误）

### A-1 三者职责分离与冲突消除（PJ）
- 规则：ESLint 负责代码质量，Prettier 负责格式化，Stylelint 负责样式规范；启用 `eslint-config-prettier` 以关闭冲突规则。
- 配置片段：
  ```js
  // .eslintrc.cjs
  module.exports = {
    root: true,
    env: { es2022: true, browser: true, node: true },
    extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier' // 关闭与 Prettier 冲突的 ESLint 规则
    ],
    parser: 'vue-eslint-parser',
    parserOptions: { parser: '@typescript-eslint/parser', ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['vue', '@typescript-eslint'],
    rules: {}
  }
  ```

### A-2 统一配置与提交校验（PJ）
- 规则：使用项目提供的 `.eslintrc.*`、`.prettierrc.*`、`stylelint.config.*`；提交前通过 lint-staged 与 CI 的 lint 检查。
- 配置片段：
  ```json
  // package.json (片段)
  {
    "lint-staged": {
      "*.{ts,tsx,vue,js}": ["eslint --fix"],
      "*.{css,scss,vue}": ["stylelint --fix"],
      "**/*": ["prettier --write"]
    }
  }
  ```

### A-3 IDE 一致性（PJ）
- 规则：团队成员 IDE 必须安装 ESLint/Prettier/Stylelint 插件，并开启“保存时自动修复”。
- VS Code 设置片段：
  ```json
  // .vscode/settings.json
  {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },
    "typescript.tsdk": "node_modules/typescript/lib",
    "vue.server.includeLanguages": { "typescript": true },
    "volar.takeOverMode.enabled": true
  }
  ```

### A-4 禁止擅自修改基线（PJ）
- 规则：禁止在 PR 中调整公共格式化基线（如 Prettier 行宽、分号），如需变更须评审并公告。
- Prettier 统一片段：
  ```json
  // .prettierrc
  {
    "semi": false,
    "singleQuote": true,
    "printWidth": 100,
    "trailingComma": "es5",
    "arrowParens": "always"
  }
  ```

### A-5 严格 TypeScript Lint（通用实践）
- 规则：开启 `@typescript-eslint` 相关规则，禁止 `any` 滥用、未处理 Promise、未使用变量等。
- ESLint 规则片段：
  ```js
  // .eslintrc.cjs rules 片段
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-unsafe-optional-chaining': 'error',
    'no-constant-binary-expression': 'error'
  }
  ```

---

## 优先级 B：强烈推荐（增强可读性）

### B-1 Vue 支持（官方/通用实践）
- 规则：单文件组件启用 `eslint-plugin-vue` 推荐规则集；结合 Volar 提升提示质量。
- 规则片段：
  ```js
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier']
  ```

### B-2 样式规范（通用实践）
- 规则：Stylelint 启用 `stylelint-config-standard`、`stylelint-order` 等，限制最大嵌套深度、重复选择器、属性排序。
- 配置片段：
  ```js
  // stylelint.config.cjs
  module.exports = {
    extends: ['stylelint-config-recommended', 'stylelint-config-standard', 'stylelint-config-recess-order'],
    overrides: [
      { files: ['**/*.{vue,scss,css}'], customSyntax: 'postcss-html' }
    ],
    rules: {
      'max-nesting-depth': 3,
      'no-duplicate-selectors': true
    }
  }
  ```

### B-3 类型导入与一致性（PJ）
- 规则：启用 `consistent-type-imports`，统一使用 `import type { X } from` 语法导入类型。
- 示例：
  ```ts
  import type { RouteRecordRaw } from 'vue-router'
  ```

### B-4 最小化禁用注释（通用实践）
- 规则：若确需 `eslint-disable`，定位到单行/最小范围，并注明原因与 TODO。
- 示例：
  ```ts
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 第三方库缺少类型定义
  const x: any = external()
  ```

---

## 附录 A：统一检查清单（合并版）
- [ ] 是否启用了保存自动修复？
- [ ] 提交前是否通过全部 lint 任务？
- [ ] 是否存在无必要的 `eslint-disable` 注释？
- [ ] 是否启用 `eslint-config-prettier` 以消除冲突？

## 附录 B：工具与规则映射
- ESLint：`eslint-config-prettier`、`eslint-plugin-vue`、`@typescript-eslint/*`、`no-unused-vars`、`no-floating-promises`、`consistent-type-imports`
- Prettier：依据 `.prettierrc` 固定风格
- Stylelint：`stylelint-config-recommended`、`stylelint-config-standard`、`stylelint-config-recess-order`、`max-nesting-depth`

## 附录 C：项目实践
- 提交前命令：`pnpm lint:eslint && pnpm lint:style && pnpm lint:format`。
- 格式化策略调整流程：提议 -> 评审 -> 同步 IDE 配置。
