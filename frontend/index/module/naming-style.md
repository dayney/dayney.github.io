---
outline: deep
editLink: false
---

# 模块命名规范

## 1. 基本原则
- 遵循模块化开发规范
- 保持命名语义化
- 保持模块结构清晰

## 2. 模块命名规范

### 2.1 模块命名
- 使用小写字母
- 使用连字符（-）分隔单词
- 模块名要有意义

### 2.2 模块命名示例
```
user-profile
order-management
payment-processor
```

## 3. 最佳实践

### 3.1 模块结构
- 每个模块要有清晰的职责
- 模块之间要保持低耦合
- 模块内部要保持高内聚

### 3.2 模块组织
- 相关功能放在同一模块
- 模块之间通过接口通信
- 避免模块之间的循环依赖

### 3.3 模块示例
```
user-profile/
  ├── components/
  │   ├── UserInfo.js
  │   └── UserSettings.js
  ├── services/
  │   └── userService.js
  ├── utils/
  │   └── formatter.js
  └── index.js
```

## 4. 模块命名检查清单

- [ ] 模块名使用小写字母
- [ ] 模块名使用连字符分隔单词
- [ ] 模块名有意义
- [ ] 模块职责清晰
- [ ] 模块之间低耦合
- [ ] 模块内部高内聚
- [ ] 相关功能放在同一模块
- [ ] 模块之间通过接口通信
- [ ] 避免模块之间的循环依赖
- [ ] 模块结构清晰 

[o2team/guide](https://github.com/o2team/guide) 