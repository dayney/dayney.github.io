---
outline: deep
editLink: false
---

# Vue3.x 编码规范

## 1 前言

本文档旨在规范 Vue3.x 项目的开发规范，提高代码质量和可维护性。

## 2 组合式 API 规范

### 2.1 命名规范

- 组合式函数名应该始终是多个单词的
- 组合式函数名应该以 use 开头
- 组合式函数名应该使用 camelCase
- 组合式函数名应该具有描述性

### 2.2 代码组织

- 相关的逻辑应该放在同一个组合式函数中
- 组合式函数应该返回一个对象
- 组合式函数应该使用 ref 或 reactive 来管理状态
- 组合式函数应该使用 computed 和 watch 来处理副作用

### 2.3 Props 定义

- Props 定义应该使用 defineProps
- Props 定义应该尽可能详细，至少需要指定其类型
- Props 定义应该使用 TypeScript 类型注解
- Props 定义应该加上注释，说明其用途

## 3 模板规范

### 3.1 模板语法

- 使用 v-for 时必须加上 key
- 避免 v-if 和 v-for 同时使用
- 使用 v-show 代替 v-if 进行频繁切换
- 使用 v-once 优化静态内容

### 3.2 样式规范

- 使用 scoped 属性
- 使用 BEM 命名规范
- 使用 CSS 预处理器（如 SCSS）
- 避免使用 !important

## 4 性能优化

### 4.1 代码分割

- 使用异步组件
- 使用路由懒加载
- 合理使用 keep-alive
- 使用 Suspense 处理异步组件

### 4.2 数据处理

- 合理使用计算属性
- 避免在模板中使用复杂表达式
- 使用 v-once 优化静态内容
- 使用 shallowRef 和 shallowReactive 优化性能

## 5 最佳实践

### 5.1 错误处理

- 使用 try-catch 处理异步操作
- 使用 onErrorCaptured 处理组件错误
- 合理使用 nextTick

### 5.2 代码复用

- 使用组合式函数复用逻辑
- 使用自定义指令复用 DOM 操作
- 使用 provide/inject 进行依赖注入

## 6 项目结构

### 6.1 目录结构

```
src/
  ├── assets/        # 静态资源
  ├── components/    # 公共组件
  ├── views/         # 页面组件
  ├── router/        # 路由配置
  ├── stores/        # Pinia 状态管理
  ├── composables/   # 组合式函数
  ├── utils/         # 工具函数
  ├── api/           # API 接口
  ├── styles/        # 全局样式
  └── App.vue        # 根组件
```

### 6.2 文件命名

- 组件文件使用 PascalCase
- 组合式函数文件使用 camelCase
- 工具类文件使用 kebab-case
- 样式文件使用 kebab-case

## 7 TypeScript 规范

### 7.1 类型定义

- 使用 interface 定义对象类型
- 使用 type 定义联合类型和交叉类型
- 使用 enum 定义枚举类型
- 使用泛型增加代码复用性

### 7.2 类型注解

- 为变量添加类型注解
- 为函数参数和返回值添加类型注解
- 为组件 props 添加类型注解
- 为事件处理函数添加类型注解 