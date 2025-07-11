---
title: Git Flow 规范
description: Git Flow 工作流程规范
---

# Git Flow 规范

## 分支管理

### 分支类型说明：
1. **主分支**：长期存在的核心分支
2. **功能分支**：用于新功能开发
3. **修复分支**：用于问题修复
4. **重构分支**：用于代码重构
5. **优化分支**：用于性能优化
6. **紧急修复分支**：用于生产环境紧急修复
7. **发布分支**：用于版本发布准备
8. **其他分支**：包括格式、文档、构建、CI、测试、工具配置等

## 分支生命周期

### 主分支生命周期
- `main`：永久存在，只接受 `release` 和 `hotfix` 分支的合并
- `develop`：永久存在，作为开发的主干分支
- `test`：永久存在，用于测试环境部署
- `uat`：永久存在，用于用户验收测试

### 功能分支生命周期
- 创建：从 `develop` 分支创建
- 存活期：功能开发完成并合并后删除
- 最长存活期：建议不超过 2 周
- 合并后：必须删除

### 修复分支生命周期
- `hotfix`：创建后 24 小时内必须完成修复并合并
- `bugfix`：创建后 3 天内必须完成修复并合并
- 合并后：必须删除

### 发布分支生命周期
- 创建：从 `develop` 分支创建
- 存活期：版本发布完成后删除
- 最长存活期：建议不超过 1 周
- 合并后：必须删除

## 工作流程规范

### 分支创建流程
1. 创建前：确保本地代码与目标分支同步
2. 创建时：遵循命名规范
3. 创建后：及时推送到远程仓库

### 开发工作流程
1. 每日工作开始：拉取最新代码
2. 开发过程中：定期提交代码（建议每天至少一次）
3. 提交信息：遵循约定式提交规范
4. 代码审查：必须通过 Pull Request

### 合并流程
1. 合并前：
   - 确保代码通过所有测试
   - 确保代码通过代码审查
   - 解决所有冲突
2. 合并时：
   - 使用 Pull Request
   - 填写完整的合并说明
   - 指定至少一名审查者
3. 合并后：
   - 删除已合并的分支
   - 更新相关文档

### 发布流程
1. 版本发布前：
   - 创建 `release` 分支
   - 进行完整测试
   - 更新版本号
2. 发布时：
   - 合并到 `main` 和 `develop`
   - 打版本标签
3. 发布后：
   - 删除 `release` 分支
   - 更新发布文档

### 紧急修复流程
1. 发现问题：立即创建 `hotfix` 分支
2. 修复过程：
   - 优先修复问题
   - 编写测试用例
   - 进行代码审查
3. 修复完成后：
   - 合并到 `main` 和 `develop`
   - 打补丁版本标签
   - 删除 `hotfix` 分支

### 主要分支
- `main`: 主分支，用于生产环境
- `develop`: 开发分支，用于开发环境

### 辅助分支，是以关键词开口
- `feature-*`: 功能分支
- `release-*`: 发布分支
- `hotfix-*`: 紧急修复分支
- `bugfix-*`: 问题修复分支

## 工作流程

### 功能开发
1. 从 `develop` 创建 `feature` 分支
2. 在 `feat` 分支开发, 有的团队使用`feature`,此处只是个人习惯
3. 完成后合并回 `develop`

### 版本发布
1. 从 `develop` 创建 `release` 分支
2. 在 `release` 分支进行测试和修复
3. 完成后合并到 `main` 和 `develop`

### 紧急修复
1. 从 `main` 创建 `hotfix` 分支
2. 修复完成后合并到 `main` 和 `develop`

## 分支命名规范

### 功能分支
- 格式：`feature-功能名称（小驼峰命名法）`
- 示例：`feature-useLogin`

#### 分支功能命名规范个人推荐，便于团队协作
- 格式：`feature-功能名称（小驼峰命名法）`-开发者名称-分支创建的日期
- 示例：`feature-useLogin-zhangsan-20250613`

### 发布分支
- 格式：`release/版本号`， 版本号取自当前项目的`package.json`文件中version
- 示例：`release/v1.0.0`

### 修复分支
- 格式：`hotfix-问题描述`
- 示例：`hotfix/login-error`

## 合并规范
1. 使用 Pull Request 进行代码审查
2. 确保代码通过所有测试
3. 保持提交信息清晰
4. 删除已合并的分支 

## 版本号的更新（有必要的话）
1. `npm version patch`  升级小号
2. `npm version minor`  升级中号
3. `npm version major`  升级大号

参考 [Npm 使用小技巧](/efficiency/skill/npmVersion.md)

## 分支管理总表

| 分支名称 | 分支类型 | 环境 | 用途说明 | 创建来源 | 合并目标 | 命名规范示例 |
|---------|---------|------|---------|---------|---------|------------|
| `main` | 主分支 | 生产环境 | 生产环境部署，保持稳定 | - | - | - |
| `develop` | 主分支 | 开发环境 | 开发主分支，日常开发 | - | - | - |
| `test` | 主分支 | 测试环境 | 功能测试和集成测试 | - | - | - |
| `uat` | 主分支 | 用户验收环境 | 用户验收测试 | - | - | - |
| `feature-xxx` | 功能分支 | 开发环境 | 新功能开发 | `develop` | `develop` | `feature-userLogin-zhangsan-20240315` |
| `fix-xxx` | 修复分支 | 开发环境 | Bug修复 | `develop` | `develop` | `fix-loginError-zhangsan-20240315` |
| `refactor-xxx` | 重构分支 | 开发环境 | 代码重构 | `develop` | `develop` | `refactor-authModule-zhangsan-20240315` |
| `perf-xxx` | 优化分支 | 开发环境 | 性能优化 | `develop` | `develop` | `perf-apiCache-zhangsan-20240315` |
| `hotfix-xxx` | 紧急修复分支 | 生产环境 | 生产环境紧急修复 | `main` | `main` 和 `develop` | `hotfix-paymentError-zhangsan-20240315` |
| `bugfix-xxx` | 问题修复分支 | 开发环境 | 问题修复 | `develop` | `develop` | `bugfix-uiDisplay-zhangsan-20240315` |
| `release-xxx` | 发布分支 | 预发布环境 | 版本发布准备 | `develop` | `main` 和 `develop` | `release/v1.0.0` |
| `style-xxx` | 格式分支 | 开发环境 | 代码格式修改 | `develop` | `develop` | `style-codeFormat-zhangsan-20240315` |
| `docs-xxx` | 文档分支 | 开发环境 | 文档更新 | `develop` | `develop` | `docs-apiUpdate-zhangsan-20240315` |
| `build-xxx` | 构建分支 | 开发环境 | 构建流程修改 | `develop` | `develop` | `build-webpackConfig-zhangsan-20240315` |
| `ci-xxx` | CI分支 | 开发环境 | CI配置修改 | `develop` | `develop` | `ci-githubActions-zhangsan-20240315` |
| `test-xxx` | 测试分支 | 开发环境 | 测试用例修改 | `develop` | `develop` | `test-loginFlow-zhangsan-20240315` |
| `chore-xxx` | 工具分支 | 开发环境 | 工具配置修改 | `develop` | `develop` | `chore-depsUpdate-zhangsan-20240315` |
| `revert-xxx` | 回滚分支 | 相关环境 | 代码回滚 | 相关分支 | 原分支 | `revert-feat123-zhangsan-20240315` |