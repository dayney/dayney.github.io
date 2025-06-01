---
title: Git Flow 规范
description: Git Flow 工作流程规范
---

# Git Flow 规范

## 分支管理

### 主要分支
- `main`: 主分支，用于生产环境
- `develop`: 开发分支，用于开发环境

### 辅助分支
- `feature/*`: 功能分支
- `release/*`: 发布分支
- `hotfix/*`: 紧急修复分支
- `bugfix/*`: 问题修复分支

## 工作流程

### 功能开发
1. 从 `develop` 创建 `feature` 分支
2. 在 `feature` 分支开发
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
- 格式：`feature/功能名称`
- 示例：`feature/user-login`

### 发布分支
- 格式：`release/版本号`
- 示例：`release/v1.0.0`

### 修复分支
- 格式：`hotfix/问题描述`
- 示例：`hotfix/login-error`

## 合并规范
1. 使用 Pull Request 进行代码审查
2. 确保代码通过所有测试
3. 保持提交信息清晰
4. 删除已合并的分支 