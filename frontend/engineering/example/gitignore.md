---
outline: deep
editLink: false

---

# 项目中**.gitignore**的常规配置



###  一、使用命令行工具生成
```bash
npx gitignore node
```

### 二、手动创建 .gitignore 文件

​     1. 手动在项目的根目录下创建 .gitignore 文件，并且填写以下文件。

```plaintext
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment Variables
.env

# Build output
dist/
build/

# IDE specific files
.vscode/
.idea/

# OS generated files
.DS_Store
Thumbs.db

# Dependencies
/node_modules

# Temporary files
*.tmp
*.swp
*.swo
```

2. 使用 ** touch ** 命令创建

   ```
   touch .gitignore
   ```

### 三、使用模板生成

GitHub 提供了一些常用项目的 .gitignore 模板，你可以访问 [gitignore.io](https://www.toptal.com/developers/gitignore/) 根据你的项目类型生成适用的 .gitignore 文件。

### 四、常用的配置如下

```
#.gitignore


.DS_Store
node_modules
/dist
.eslintrc


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*


```