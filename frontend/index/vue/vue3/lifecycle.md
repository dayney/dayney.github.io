# Vue3 生命周期使用规范

## 1. 生命周期钩子概览

### 组合式 API 生命周期钩子
```typescript
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from 'vue'
```

## 2. 生命周期钩子使用规范

### onBeforeMount
- 在组件挂载到 DOM 之前调用
- 适合进行一些初始化配置
- 不要在这里访问 DOM

```typescript
onBeforeMount(() => {
  // 初始化配置
  console.log('组件即将挂载')
})
```

### onMounted
- 组件挂载到 DOM 后调用
- 可以访问 DOM
- 适合进行数据初始化
- 适合进行第三方库初始化

```typescript
onMounted(async () => {
  try {
    // 初始化数据
    const data = await fetchData()
    state.value = data
    
    // 初始化第三方库
    initThirdPartyLib()
    
    // 添加事件监听
    window.addEventListener('resize', handleResize)
  } catch (error) {
    console.error('初始化失败:', error)
  }
})
```

### onBeforeUpdate
- 组件更新之前调用
- 适合在更新之前访问现有的 DOM
- 不要在这里修改数据

```typescript
onBeforeUpdate(() => {
  // 保存更新前的状态
  previousValue.value = el.value?.textContent
})
```

### onUpdated
- 组件更新后调用
- 适合在数据更新后操作 DOM
- 避免在这里修改数据

```typescript
onUpdated(() => {
  // 更新后的 DOM 操作
  nextTick(() => {
    // 确保 DOM 已更新
    updateDOM()
  })
})
```

### onBeforeUnmount
- 组件卸载之前调用
- 适合进行清理工作
- 移除事件监听器
- 清除定时器

```typescript
onBeforeUnmount(() => {
  // 清理工作
  window.removeEventListener('resize', handleResize)
  clearInterval(timer.value)
})
```

### onUnmounted
- 组件卸载后调用
- 适合进行最后的清理工作
- 不要在这里访问组件实例

```typescript
onUnmounted(() => {
  // 最后的清理工作
  cleanup()
})
```

### onActivated
- 被 keep-alive 缓存的组件激活时调用
- 适合重新初始化数据
- 适合重新绑定事件

```typescript
onActivated(() => {
  // 重新初始化
  initData()
  bindEvents()
})
```

### onDeactivated
- 被 keep-alive 缓存的组件停用时调用
- 适合保存状态
- 适合解绑事件

```typescript
onDeactivated(() => {
  // 保存状态
  saveState()
  // 解绑事件
  unbindEvents()
})
```

### onErrorCaptured
- 捕获后代组件的错误
- 适合错误处理
- 可以返回 false 阻止错误继续传播

```typescript
onErrorCaptured((err, instance, info) => {
  // 错误处理
  console.error('捕获到错误:', err)
  // 可以返回 false 阻止错误继续传播
  return false
})
```

## 3. 最佳实践

### 1. 初始化逻辑
```typescript
// 好的例子
const init = async () => {
  try {
    loading.value = true
    const data = await fetchData()
    state.value = data
  } catch (error) {
    error.value = error
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  init()
})
```

### 2. 资源清理
```typescript
// 好的例子
const cleanup = () => {
  // 清理事件监听
  window.removeEventListener('resize', handleResize)
  // 清理定时器
  clearInterval(timer.value)
  // 清理其他资源
  thirdPartyLib.destroy()
}

onBeforeUnmount(() => {
  cleanup()
})
```

### 3. 状态管理
```typescript
// 好的例子
const saveState = () => {
  localStorage.setItem('appState', JSON.stringify(state.value))
}

const restoreState = () => {
  const savedState = localStorage.getItem('appState')
  if (savedState) {
    state.value = JSON.parse(savedState)
  }
}

onMounted(() => {
  restoreState()
})

onBeforeUnmount(() => {
  saveState()
})
```

### 4. 错误处理
```typescript
// 好的例子
const handleError = (error: Error) => {
  console.error('错误:', error)
  error.value = error
  // 可以添加错误上报逻辑
  reportError(error)
}

onErrorCaptured((err, instance, info) => {
  handleError(err)
  return false
})
```

### 5. 性能优化
```typescript
// 好的例子
const debouncedResize = debounce(handleResize, 200)

onMounted(() => {
  window.addEventListener('resize', debouncedResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', debouncedResize)
})
```

## 4. 注意事项

1. 生命周期顺序
   - 了解生命周期钩子的调用顺序
   - 避免在错误的生命周期中执行操作

2. 异步操作
   - 在 onMounted 中进行异步操作
   - 使用 try-catch 处理错误
   - 注意清理异步操作

3. 资源管理
   - 及时清理资源
   - 避免内存泄漏
   - 使用 onBeforeUnmount 进行清理

4. 状态管理
   - 合理使用响应式数据
   - 避免在生命周期中直接修改 props
   - 使用 nextTick 确保 DOM 更新

5. 错误处理
   - 使用 onErrorCaptured 捕获错误
   - 提供友好的错误提示
   - 记录错误日志

6. 性能考虑
   - 避免在生命周期中执行重操作
   - 使用防抖和节流
   - 合理使用缓存

7. 测试
   - 测试生命周期钩子
   - 测试异步操作
   - 测试错误处理

8. 文档
   - 记录生命周期使用
   - 说明注意事项
   - 提供示例代码 