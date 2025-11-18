---
outline: deep
editLink: false
---

# 新工程师使用 Cursor 融入项目的终极指南 (架构师优化版)

## **阶段一：自动化项目考古 (Automated Project Archeology)**

**目的**：利用 AI 的强大分析能力，在 1 小时内完成过去需要数天才能完成的项目熟悉工作。

**1. 了解技术栈 (Understand the Tech Stack)**
*   **架构师建议**：不要手动去看，而是命令 AI 去分析并生成一份结构化的报告。
*   **Cursor 实战指令**：
    > `“@file package.json，请分析这个文件，为我生成一份项目的核心技术栈快照报告，包含核心框架、UI 库、状态管理、构建工具及其版本。”`

**2. 掌握目录结构 (Master the Directory Structure)**
*   **架构师建议**：让 AI 为你绘制“项目地图”，并教会你如何使用这张地图来导航。
*   **Cursor 实战指令**：
    > `“请扫描整个 src 目录，并为我生成一份核心目录的职责说明文档，就像一份项目地图一样。”`

**3. 学习开发规范 (Learn the Development Norms)**
*   **架构师建议**：让 AI 成为你的“代码风格导师”，通过分析现有代码，总结出那些不成文的规则。
*   **Cursor 实战指令**：
    > `“请分析 @file [一个典型的业务组件]，并为我总结出这个项目的编码风格和最佳实践。”`

> 形成“项目最终 Style Guide”（强烈建议新增此步骤）
- 目标：将官方风格指南与团队裁剪规范合并，沉淀为本项目的最终 Style Guide，作为所有开发与 Code Review 的唯一依据。
- 建议做法：
  1) 阅读官方 style-guide 与本仓库风格指南；
  2) 结合项目技术栈与现有代码，补充“项目强化（PJ）”条目与可复制模板；
  3) 将合并结果提交到 docs_1118/style-guides 目录，并在 PR 中评审通过后作为基线执行。
- 文档索引（可直接跳转）：
  - [Vue3](/efficiency/ai/style-guides/vue3-style-guide)
  - [Vue Router](/efficiency/ai/style-guides/vuerouter-style-guide)
  - [Vue I18n](/efficiency/ai/style-guides/vuei18n-style-guide)
  - [Axios](/efficiency/ai/style-guides/axios-style-guide)
  - [Element Plus](/efficiency/ai/style-guides/elementplus-style-guide)
  - [Pinia](/efficiency/ai/style-guides/pinia-style-guide)
  - [Sass/SCSS](/efficiency/ai/style-guides/sass-scss-style-guide)
  - [TypeScript](/efficiency/ai/style-guides/typescript-style-guide)
  - [UnoCSS](/efficiency/ai/style-guides/UnoCSS-style-guide)
  - [Vite](/efficiency/ai/style-guides/Vite-style-guide)
  - [ESLint/Prettier/Stylelint](/efficiency/ai/style-guides/eslint-prettier-stylelint-style-guide)

---

## **阶段二：个性化 AI 配置 (Personalizing Your AI Assistant)**

**目的**：在创建任何配置前，先诊断现状，并将评估结果文档化，然后根据这份文档精准地补充缺失的配置，确保每一步操作都有据可依。

**4.1 诊断 AI 配置现状**
*   **架构师建议**：在创建 `.cursorrules` 文件前，先让 AI 检查项目是否已存在相关配置，避免重复工作。
*   **Cursor 实战指令**：
    > `“请检查项目根目录下是否存在 .cursorrules 文件。如果存在，请分析其内容并总结其核心规则。如果不存在，请告诉我。”`

**4.2 生成《AI 配置评估报告》 (文档先行)**
*   **架构师建议**：将诊断结果和行动计划明确地记录下来，形成一份可供评审的文档。
*   **Cursor 实战指令**：
    > `“基于刚才的诊断，请为我生成一份《AI 配置评估报告》。报告应包含：1. 项目当前 AI 配置的现状。2. 基于我们之前分析出的项目规范，提出一份创建或优化 .cursorrules 文件的行动计划。”`

**4.3 按需行动：创建或优化配置**
*   **架构师建议**：严格根据评估报告中的行动计划，执行配置的创建或优化工作。
*   **Cursor 实战指令**：
    > `“现在，请根据《AI 配置评估报告》中的行动计划，为我生成一份完整的、最优的 .cursorrules 文件。”`

---

## **阶段三：聚焦与实践 (Focus and Practice)**

**目的**：从宏观转向微观，通过一个真实的、低风险的模块，将理论知识付诸实践。

**5. 理解一个核心模块**
*   **架构师建议**：使用“代码溯源”的方式，让 AI 带领你走通一个功能的完整链路。
*   **Cursor 实战指令**：
    > `“让我们以‘用户个人资料’功能为例。请从 @file src/router/index.ts 开始，带我一步步找到对应的视图组件、核心业务组件，直到最终的 API 请求函数，并解释每一步的作用。”`

**6. 开始你的第一个开发任务**
*   **架构师建议**：**永远不要直接开始！** 在动手前，必须遵循我们团队的**“三层对话”**协作模式，确保安全和高效。
*   **Cursor 实战指令**：
    *   **第一步 (理解)**：`“我接到了一个任务：[任务描述]。请先帮我分析相关的代码，定位问题所在。”`
    *   **第二步 (方案)**：`“基于分析，请提供两种修复方案，并说明优劣。”`
    *   **第三步 (执行)**：`“采纳方案 A。请为我生成具体的修改代码。”`

---

## **阶段四：掌握高级工具 (Mastering Advanced Tools)**

**目的**：在学习高级工具前，先诊断出真实的代码库中适合使用这些工具的场景，并将分析结果文档化，然后带着明确的目标去实践。

**7.1 诊断高级工具的适用场景**
*   **架构师建议**：不要为了学工具而学工具，而是让 AI 帮你从真实的项目需求中找到学习的动力和案例。
*   **Cursor 实战指令**：
    > `“请扫描整个项目，找出一些适合使用 Cursor Composer 模式解决的复杂重构场景。例如：是否存在一个函数或变量在多个文件中被使用，适合进行跨文件重命名？”`

**7.2 生成《高级工具适用性分析》 (文档先行)**
*   **架构师建议**：将 AI 找到的适用场景记录下来，形成一份“练习题库”。
*   **Cursor 实战指令**：
    > `“基于刚才的分析，请为我生成一份《高级工具适用性分析》。报告应列出 2-3 个具体的、可以用 Composer 模式来练习的真实重构任务。”`

**7.3 按需行动：实践高级工具**
*   **架构师建议**：从“练习题库”中挑选一个任务，在真实的场景中学习工具的使用。
*   **Cursor 实战指令**：
    > `“好的，让我们选择《高级工具适用性分析》中的第一个任务。请指导我如何在 Composer 中分步完成这个重构。”`

---

### 附录：风格指南执行路径 + IDE/CI 快速校验脚本 + 文档索引

本项目所有“风格指南”均采用统一结构：官方 A/B 规则 + 项目强化（PJ）+ 正例/反例 + 检查清单 + 工具/规则映射。新人请按以下路径执行：

1) 必读文档索引（docs_1118/style-guides）
- [Vue3](/efficiency/ai/style-guides/vue3-style-guide)
- [Vue Router](/efficiency/ai/style-guides/vuerouter-style-guide)
- [Vue I18n](/efficiency/ai/style-guides/vuei18n-style-guide)
- [Axios](/efficiency/ai/style-guides/axios-style-guide)
- [Element Plus](/efficiency/ai/style-guides/elementplus-style-guide)
- [Pinia](/efficiency/ai/style-guides/pinia-style-guide)
- [Sass/SCSS](/efficiency/ai/style-guides/sass-scss-style-guide)
- [TypeScript](/efficiency/ai/style-guides/typescript-style-guide)
- [UnoCSS](/efficiency/ai/style-guides/UnoCSS-style-guide)
- [Vite](/efficiency/ai/style-guides/Vite-style-guide)
- [ESLint/Prettier/Stylelint](/efficiency/ai/style-guides/eslint-prettier-stylelint-style-guide)

2) IDE 必备插件与设置
- VS Code 扩展：ESLint、Prettier、Stylelint、Volar（Take Over Mode）、i18n Ally（可选）。
- 设置建议：保存时自动修复（ESLint/Stylelint/Prettier）、Volar 启用 Take Over、禁用 Vetur；确保工作区使用项目的本地依赖版本。

3) 一键校验脚本（建议在根目录执行）
- Lint 合集：
  ```bash
  pnpm lint:eslint && pnpm lint:style && pnpm lint:format
  ```
- 单独命令（视项目脚本命名为准）：
  ```bash
  # ESLint（Vue/TS）
  npx eslint . --ext .ts,.tsx,.vue --max-warnings=0 | cat

  # Stylelint（样式）
  npx stylelint "**/*.{css,scss,vue}" | cat

  # Prettier 检查与修复
  npx prettier . --check | cat
  npx prettier . --write
  ```
- 专用排查（i18n 硬编码中文示例，可选）：
  ```bash
  rg -n --pcre2 "[\u4e00-\u9fa5]" src | cat
  ```

4) 常见落地校验对应关系（摘录）
- Vue3 关键规则：
  - 多词组件名：`vue/multi-word-component-names`
  - v-for 必须 key：`vue/require-v-for-key`
  - 禁止同元素 v-if + v-for：`vue/no-use-v-if-with-v-for`
  - 模板组件名大小写：`vue/component-name-in-template-casing`
- TS 强类型：`@typescript-eslint/no-explicit-any`、`consistent-type-imports`，tsconfig 严格模式
- i18n 禁止硬编码：`vue-i18n/no-raw-text`
- 样式层：`max-nesting-depth`、`stylelint-order`

5) 在 Cursor 中快速调用规范
- 让 Cursor 读取相应风格指南并生成“本文件/本改动”的对照检查清单：
  > “请读取 @file docs_1118/style-guides/Vue3-style-guide.md，为我生成一份针对 @file src/views/xxx.vue 的检查清单，并指出不符合项与修改建议。”
- 让 Cursor 输出示例模板片段用于粘贴：
  > “请从 @file docs_1118/style-guides/Axios-style-guide.md 中选择 A-1/A-3 的示例，结合我的场景 @file src/api/xxx.ts，生成最终可用的代码片段。”

6) CI 快速集成建议
- 在 CI 中新增步骤：ESLint/Stylelint/Prettier 检查，阻断不合规提交。
- 可选：集成 `rollup-plugin-visualizer`/`esbuild-analyzer` 做构建体积巡检，配合 Vite 指南。

---

### PR 描述模板（合并规范的评审流程 Checklist）

用于“将官方风格指南与团队规范合并为项目最终 Style Guide”的 PR。复制以下模板到 PR 描述中勾选执行：

- 变更范围
  - [ ] 本 PR 仅修改 docs_1118/style-guides 下的文档与索引，不包含业务代码
  - [ ] 涵盖文档（列出文件）：
    - [ ] Vue3-style-guide.md
    - [ ] VueRouter-style-guide.md
    - [ ] VueI18n-style-guide.md
    - [ ] Axios-style-guide.md
    - [ ] ElementPlus-style-guide.md
    - [ ] Pinia-style-guide.md
    - [ ] Sass-Scss-style-guide.md
    - [ ] TypeScript-style-guide.md
    - [ ] UnoCSS-style-guide.md
    - [ ] Vite-style-guide.md
    - [ ] ESLint-Prettier-Stylelint-style-guide.md

- 结构一致性（A/B + PJ）
  - [ ] 每份文档均采用“优先级 A（必要）/B（强烈推荐）+ 项目强化（PJ）”结构
  - [ ] 为关键规则与 PJ 条目补充了可复制的代码模板/片段
  - [ ] 为规则标注了对应的 Lint/IDE 对齐（ESLint/Stylelint/Volar/TS）

- 内容质量
  - [ ] 正例/反例齐全且与项目实践一致
  - [ ] 检查清单覆盖常见错误场景
  - [ ] 工具与规则映射准确，引用的规则名与配置片段可用

- 交叉引用与索引
  - [ ] “新工程师终极指南”已更新索引并指向所有风格指南
  - [ ] 各风格指南之间无冲突或重复口径

- 自动化校验
  - [ ] 本地执行 `pnpm lint:eslint && pnpm lint:style && pnpm lint:format` 通过
  - [ ] CI 已新增（或已存在）ESLint/Stylelint/Prettier 校验步骤

- 评审指派
  - [ ] 指定前端负责人/架构师评审
  - [ ] 如涉及后端接口契约/国际化策略变动，抄送对应负责人

- 变更影响
  - [ ] 无破坏性变更；如有，请在下方详细说明并附迁移指南

- 其它说明
  - 相关 Issue/讨论链接：
  - 迁移/推广计划：

以上 Checklist 需在合并前全部通过勾选；如有未完成项，请明确原因与补充计划。
