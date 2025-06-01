---
title: Commit 规范
description: Git Commit 信息规范
---

# Commit 规范

## Commit 信息格式

### 基本格式
```
<type>(<scope>): <subject>

<body>

<footer>
```

### 类型（type）
- `feat`: ✨ 新功能
- `fix`: 🐛 修复问题
- `docs`: 📝 文档变更
- `style`: 💄 代码格式（不影响代码运行的变动）
- `refactor`: ♻️ 重构（既不是新增功能，也不是修复bug）
- `perf`: ⚡️ 性能优化
- `test`: ✅ 增加测试
- `chore`: 🔨 构建过程或辅助工具的变动
- `revert`: ⏪️ 回退、撤销
- `build`: 📦️ 构建打包
- `ci`: 🎡 配置文件修改
- `init`: 🎉 首次提交、初始化

### 范围（scope）
- 影响范围，如：`(core)`, `(api)`, `(ui)`
- 可选字段
- 可以为空

### 主题（subject）
- 简短描述，不超过 50 个字符
- 以动词开头，使用第一人称现在时
- 第一个字母小写
- 结尾不加句号

### 正文（body）
- 详细描述，可以分成多行
- 说明代码变更的动机和对比
- 使用 "|" 换行

### 页脚（footer）
- 关闭的 issue
- 破坏性变更说明
- 使用 "|" 换行

## 示例

### 新功能
```
feat(auth): add user login functionality

- Add login form component
- Implement authentication service
- Add error handling

Closes #123
```

### Bug 修复
```
fix(api): resolve user data loading issue

- Fix incorrect API endpoint
- Add error handling for failed requests
- Update error messages

Fixes #456
```

## 最佳实践
1. 保持提交信息简洁明了
2. 每个提交只做一件事
3. 使用正确的类型
4. 提供必要的上下文

## 相关配置
[查看 commitlint 配置](/frontend/engineering/example/commitlint) 