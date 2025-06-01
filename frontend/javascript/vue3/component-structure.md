---
outline: deep
editLink: false
---

# Vue3 组件结构规范

## 1 组件命名

- 组件名应该始终是多个单词的，根组件 App 除外
- 组件名应该以高级别的单词开头，以描述性的修饰词结尾
- 组件名应该始终是 PascalCase 的
- 基础组件名应该以一个特定的前缀开头，比如 Base、App 或 V

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