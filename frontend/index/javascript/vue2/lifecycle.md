---
outline: deep
editLink: false
---

# 生命周期使用规范

## 1 生命周期钩子

### 1.1 创建阶段

- beforeCreate：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
- created：在实例创建完成后被立即调用，此时已完成数据观测，但尚未挂载 DOM

### 1.2 挂载阶段

- beforeMount：在挂载开始之前被调用，相关的 render 函数首次被调用
- mounted：实例被挂载后调用，此时 DOM 已经渲染完成

### 1.3 更新阶段

- beforeUpdate：数据更新时调用，发生在虚拟 DOM 打补丁之前
- updated：由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用

### 1.4 销毁阶段

- beforeDestroy：实例销毁之前调用，此时实例仍然完全可用
- destroyed：实例销毁后调用，此时所有的事件监听器已被移除，所有的子实例也已被销毁

## 2 最佳实践

### 2.1 数据初始化

- 在 created 钩子中进行数据的初始化
- 避免在 beforeCreate 中访问 data 和 methods
- 在 created 中发起异步请求

### 2.2 DOM 操作

- 在 mounted 钩子中进行 DOM 操作
- 避免在 beforeMount 中操作 DOM
- 使用 nextTick 确保 DOM 更新完成

### 2.3 资源清理

- 在 beforeDestroy 中清理定时器
- 在 beforeDestroy 中解绑事件监听
- 在 beforeDestroy 中取消未完成的请求

### 2.4 性能优化

- 合理使用 activated 和 deactivated 钩子
- 使用 keep-alive 缓存组件状态
- 避免在 updated 钩子中修改数据

## 3 常见问题

### 3.1 异步操作

- 在 created 中发起异步请求
- 使用 async/await 处理异步操作
- 处理异步操作的错误情况

### 3.2 父子组件生命周期

- 父组件 beforeCreate
- 父组件 created
- 父组件 beforeMount
- 子组件 beforeCreate
- 子组件 created
- 子组件 beforeMount
- 子组件 mounted
- 父组件 mounted

### 3.3 组件更新

- 父组件 beforeUpdate
- 子组件 beforeUpdate
- 子组件 updated
- 父组件 updated 