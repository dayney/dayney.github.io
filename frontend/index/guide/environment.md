# 开发环境搭建指南

## 开发工具
- VS Code
- Chrome（开发app的时候，需要使用跨域模式， [chrome设置成跨域](/frontend/index/others/chromeSetsCrossDomain)）
- Git
- Node.js(20及以上，推荐使用22.x)
- pnpm 10.x


## 环境配置
1. Node.js 环境配置
2. Git 配置（需要全局安装 `npm i -D commitlint @commitlint/config-conventional commitizen cz-git`,方便使用`git cz`）
   - mac配置添加多个SSH配置（详见：后续补充）
1. VS Code 插件推荐

   - **ESLint**  
     用于 JavaScript/TypeScript 代码的语法检查和风格统一，帮助开发者及时发现潜在错误和不规范写法，提升代码质量。

   - **Prettier - Code formatter**  
     自动格式化代码，统一项目代码风格，减少因格式问题导致的代码 review 分歧，让团队协作更高效。

   - **Stylelint**  
     针对 CSS/SCSS/LESS 等样式文件的语法检查和风格统一，帮助发现样式中的错误和不规范写法，提升样式代码的可维护性。

   - **Volar (Vue 3)**  
     Vue 3 项目的官方语法支持插件，提供语法高亮、类型推断、智能提示等功能，极大提升 Vue 3 开发体验。

   - **Vue Language Features (Volar)**  
     配合 Volar 使用，进一步增强 Vue 文件的语法支持、类型检查和智能补全，适用于 Vue 3 项目。

   - **GitLens — Git supercharged**  
     用来对比代码、追踪代码历史、辅助 code review，帮助开发者更好地理解每一行代码的变更来源和责任人。

   - **EditorConfig for VS Code**  
     统一和维护不同开发者之间的代码缩进、换行符、编码等编辑器基础设置，保证团队代码风格一致。
     [详细说明](/frontend/engineering/example/editorconfig)

2. 浏览器插件推荐

   - **Vue.js devtools (Vue 3)**  
     用于调试和分析 Vue 3 应用的官方开发者工具，支持组件树、状态、事件等可视化调试。
     [Chrome 应用商店地址（Vue.js devtools）](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

## 项目初始化
1. 克隆项目
   - `git clone <项目地址>`
2. 进入项目目录，安装依赖
   - `pnpm install`
3. 启动项目
   - `pnpm run dev`

## 常见问题
1. 环境配置问题
2. 依赖安装问题
3. 项目启动问题 