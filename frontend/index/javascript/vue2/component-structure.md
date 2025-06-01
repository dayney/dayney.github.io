---
outline: deep
editLink: false
---

# Vue2 组件结构规范

## 1 组件命名

- 组件名应该始终是多个单词的，根组件 App 除外
- 组件名应该以高级别的单词开头，以描述性的修饰词结尾
- 组件名应该始终是 PascalCase 的
- 基础组件名应该以一个特定的前缀开头，比如 Base、App 或 V

## 2 组件结构

- 组件选项的顺序应该保持一致
- 组件选项的顺序应该是：
  1. name
  2. components
  3. props
  4. data
  5. computed
  6. watch
  7. created
  8. mounted
  9. methods
  10. template

## 3 Props 定义

- Props 定义应该尽可能详细，至少需要指定其类型
- 必须使用 camelCase 命名
- 必须指定类型
- 必须加上注释，说明其用途
- 必须加上 validator 进行验证

## 4 组件通信

- 优先使用 props 和 events 进行父子组件通信
- 使用 Vuex 进行全局状态管理
- 使用 EventBus 进行跨组件通信（谨慎使用）

## 5 模板规范

### 5.1 模板语法

- 使用 v-for 时必须加上 key
- 避免 v-if 和 v-for 同时使用
- 使用 v-show 代替 v-if 进行频繁切换
- 使用 v-once 优化静态内容（只渲染一次，后续更新时跳过）

### 5.2 样式规范

- 使用 scoped 属性
- 使用 BEM 命名规范
- 使用 CSS 预处理器（如 SCSS）
- 避免使用 !important

## 6 性能优化

### 6.1 代码分割

- 使用异步组件
- 使用路由懒加载
- 合理使用 keep-alive
- 使用 v-once 优化静态内容

### 6.2 数据处理

- 合理使用计算属性
- 避免在模板中使用复杂表达式
- 使用 v-once 优化静态内容
- 使用 Object.freeze() 冻结不需要响应式的数据 