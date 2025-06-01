# Vue2 生命周期使用规范

## 生命周期钩子概览
```javascript
beforeCreate  // 实例初始化之后，数据观测和事件配置之前
created       // 实例创建完成后被调用
beforeMount   // 挂载开始之前被调用
mounted       // 挂载到实例上后调用
beforeUpdate  // 数据更新时调用，发生在虚拟 DOM 打补丁之前
updated       // 数据更改导致虚拟 DOM 重新渲染和打补丁后调用
beforeDestroy // 实例销毁之前调用
destroyed     // 实例销毁后调用
```

## 使用规范

### beforeCreate
- 适合进行一些初始化配置
- 不要在这里访问 data 和 methods
- 可以用于设置全局事件监听器

```javascript
beforeCreate() {
  // 初始化配置
  this.$options.computed = {
    ...this.$options.computed,
    // 添加计算属性
  }
}
```

### created
- 可以访问 data 和 methods
- 适合进行数据初始化
- 可以进行 API 调用
- 不要在这里操作 DOM

```javascript
async created() {
  try {
    // 初始化数据
    this.loading = true
    const data = await this.fetchData()
    this.items = data
  } catch (error) {
    this.handleError(error)
  } finally {
    this.loading = false
  }
}
```

### beforeMount
- 在挂载开始之前被调用
- 适合进行一些准备工作
- 不要在这里操作 DOM

```javascript
beforeMount() {
  // 准备工作
  this.prepareData()
}
```

### mounted
- 可以访问 DOM
- 适合进行 DOM 操作
- 适合进行第三方库初始化
- 适合进行事件监听

```javascript
mounted() {
  // 初始化第三方库
  this.initThirdPartyLib()
  
  // 添加事件监听
  window.addEventListener('resize', this.handleResize)
}
```

### beforeUpdate
- 数据更新时调用
- 适合在更新之前访问现有的 DOM
- 不要在这里修改数据，可能导致无限循环

```javascript
beforeUpdate() {
  // 保存更新前的状态
  this.previousValue = this.$el.textContent
}
```

### updated
- 数据更新后调用
- 适合在数据更新后操作 DOM
- 避免在这里修改数据，可能导致无限循环

```javascript
updated() {
  // 更新后的 DOM 操作
  this.$nextTick(() => {
    // 确保 DOM 已更新
    this.updateDOM()
  })
}
```

### beforeDestroy
- 实例销毁之前调用
- 适合进行清理工作
- 移除事件监听器
- 清除定时器

```javascript
beforeDestroy() {
  // 清理工作
  window.removeEventListener('resize', this.handleResize)
  clearInterval(this.timer)
}
```

### destroyed
- 实例销毁后调用
- 适合进行最后的清理工作
- 不要在这里访问实例的属性和方法

```javascript
destroyed() {
  // 最后的清理工作
  this.cleanup()
}
```

## 最佳实践

1. 合理使用生命周期钩子
   - 不要过度使用生命周期钩子
   - 每个钩子应该有明确的职责

2. 异步操作
   - 在 created 中进行数据初始化
   - 使用 async/await 处理异步操作
   - 正确处理错误情况

3. 资源清理
   - 在 beforeDestroy 中清理资源
   - 移除事件监听器
   - 清除定时器
   - 取消未完成的请求

4. 性能优化
   - 避免在 updated 中修改数据
   - 使用 $nextTick 确保 DOM 更新
   - 合理使用计算属性和侦听器

5. 代码组织
   - 保持生命周期钩子的顺序一致
   - 相关的逻辑放在一起
   - 使用注释说明复杂逻辑 