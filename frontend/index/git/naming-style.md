---
outline: deep
editLink: false
---

# Git 命名规范

## 1. 基本原则
- 遵循 Git 官方规范
- 保持命名语义化
- 保持提交信息清晰

## 2. 分支命名规范

### 2.1 主分支
- `main`: 主分支，用于生产环境
- `develop`: 开发分支，用于开发环境

### 2.2 功能分支
- `feature/功能名称`: 功能分支，用于开发新功能
- `bugfix/问题描述`: 修复分支，用于修复问题
- `hotfix/问题描述`: 紧急修复分支，用于修复生产环境问题
- `release/版本号`: 发布分支，用于发布新版本

### 2.3 分支命名示例
```
feature/user-login
bugfix/login-error
hotfix/payment-failure
release/v1.0.0
```

## 3. 提交信息规范

### 3.1 提交信息格式
```
<类型>: <描述>

[可选的正文]

[可选的脚注]
```

### 3.2 提交类型
- `feat`: 新功能
- `fix`: 修复问题
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行的变动）
- `refactor`: 重构（既不是新增功能，也不是修改 bug 的代码变动）
- `perf`: 性能优化
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动
- `revert`: 回滚到上一个版本

### 3.3 提交信息示例
```
feature: 添加用户登录功能

- 实现用户名密码登录
- 添加记住密码功能
- 添加验证码功能

Closes #123
```

## 4. 标签命名规范

### 4.1 标签格式
- `v主版本号.次版本号.修订号`
- 例如：`v1.0.0`

### 4.2 版本号规则
- 主版本号：不兼容的 API 修改
- 次版本号：向下兼容的功能性新增
- 修订号：向下兼容的问题修正

## 5. 最佳实践

### 5.1 分支管理
- 保持分支结构清晰
- 及时删除已合并的分支
- 定期同步主分支代码

### 5.2 提交管理
- 每个提交只做一件事
- 提交信息要清晰明了
- 提交前进行代码审查

### 5.3 标签管理
- 每个发布版本都要打标签
- 标签信息要包含版本说明
- 定期清理过期标签

## 6. 命名规范检查清单

- [ ] 分支命名符合规范
- [ ] 提交信息符合规范
- [ ] 标签命名符合规范
- [ ] 提交类型正确
- [ ] 提交描述清晰
- [ ] 版本号格式正确
- [ ] 分支结构清晰
- [ ] 提交粒度合适
- [ ] 标签信息完整
- [ ] 定期同步主分支
- [ ] 及时删除已合并分支
- [ ] 定期清理过期标签 