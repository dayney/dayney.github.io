---
title: Git Flow 规范
description: Git Flow 工作流程规范
---

# Git Flow 规范

## 分支管理

### 主要分支
- `main`: 主分支，用于生产环境
- `develop`: 开发分支，用于开发环境

### 辅助分支，是以关键词开口
- `feat-*`: 功能分支
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
- 格式：`feat-功能名称（小驼峰命名法）`
- 示例：`feat-useLogin`

#### 分支功能命名规范个人推荐，便于团队协作
- 格式：`feat-功能名称（小驼峰命名法）`-开发者名称-分支创建的日期
- 示例：`feat-useLogin-zhangsan-20250613`

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

  参考 [Npm 使用小技巧](/efficiency/skill/npmVersion)