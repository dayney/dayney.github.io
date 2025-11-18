---
outline: deep
editLink: false
---

# eslintignore 常规配置

用于指定 ESLint 忽略检查的文件或目录。建议根据项目实际情况精简，避免误忽略源码目录。

示例（.eslintignore）：
```
# 依赖与构建产物
node_modules/
dist/
.docs/
coverage/

# VitePress 构建产物
.vitepress/cache/
.vitepress/dist/
docs/

# 其它无需 ESLint 的文件
*.log
*.min.js
**/*.d.ts
```

注意：
- ESLint v9 平铺配置（flat config）场景下，.eslintignore 已不再推荐，忽略可在 eslint.config.* 中通过 ignores 实现（参见本仓库 frontend/engineering/example/eslintrc.md）。
- 如需在命令行指定忽略文件，可使用 --ignore-path 指定自定义忽略文件。
