---
outline: deep
editLink: false
---

# Vue3 生命周期使用规范

## 1 生命周期钩子

### 1.1 创建阶段

- setup：在组件创建之前执行，是组合式 API 的入口点
- onBeforeMount：在组件挂载到 DOM 之前调用
- onMounted：在组件挂载到 DOM 后调用

### 1.2 更新阶段

- onBeforeUpdate：在组件更新之前调用
- onUpdated：在组件更新之后调用

### 1.3 卸载阶段

- onBeforeUnmount：在组件卸载之前调用
- onUnmounted：在组件卸载之后调用

### 1.4 其他钩子

- onActivated：在 keep-alive 缓存的组件被激活时调用
- onDeactivated：在 keep-alive 缓存的组件被停用时调用
- onErrorCaptured：在捕获到后代组件的错误时调用

## 2 最佳实践

### 2.1 数据初始化

- 在 setup 中进行数据的初始化
- 使用 ref 和 reactive 创建响应式数据
- 在 setup 中发起异步请求
- 使用 async setup 处理异步初始化

### 2.2 DOM 操作

- 在 onMounted 钩子中进行 DOM 操作
- 使用 nextTick 确保 DOM 更新完成
- 使用 template refs 访问 DOM 元素
- 避免在 setup 中直接操作 DOM

### 2.3 资源清理

- 在 onBeforeUnmount 中清理定时器
- 在 onBeforeUnmount 中解绑事件监听
- 在 onBeforeUnmount 中取消未完成的请求
- 使用 onUnmounted 进行最终的清理工作

### 2.4 性能优化

- 合理使用 onActivated 和 onDeactivated 钩子
- 使用 keep-alive 缓存组件状态
- 避免在 onUpdated 钩子中修改数据
- 使用 shallowRef 和 shallowReactive 优化性能

## 3 常见问题

### 3.1 异步操作

- 在 setup 中发起异步请求
- 使用 async/await 处理异步操作
- 处理异步操作的错误情况
- 使用 Suspense 处理异步组件

### 3.2 父子组件生命周期

- 父组件 setup
- 父组件 onBeforeMount
- 子组件 setup
- 子组件 onBeforeMount
- 子组件 onMounted
- 父组件 onMounted

### 3.3 组件更新

- 父组件 onBeforeUpdate
- 子组件 onBeforeUpdate
- 子组件 onUpdated
- 父组件 onUpdated 