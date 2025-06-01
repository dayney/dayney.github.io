# Vue3 性能优化

## 1. Composition API 优化
- 利用 `ref`、`reactive` 精细化响应式粒度，减少不必要的依赖收集。
- 使用 `shallowRef`、`markRaw` 优化大型对象响应式。

## 2. v-if/v-show 与列表优化
- 合理选择 `v-if`/`v-show`，同 Vue2。
- 列表渲染时使用唯一 `key`，大数据量用虚拟滚动。

## 3. 异步组件与 Suspense
- 使用 `defineAsyncComponent` 实现异步加载：
  ```js
  import { defineAsyncComponent } from 'vue'
  const AsyncComp = defineAsyncComponent(() => import('./AsyncComp.vue'))
  ```
- 利用 `<Suspense>` 处理异步组件加载状态。

## 4. Teleport/KeepAlive/Fragment
- 使用 `<Teleport>` 优化弹窗等场景的 DOM 层级。
- `<KeepAlive>` 缓存组件，提升切换性能。
- `<Fragment>` 避免多余 DOM 包裹。

## 5. 静态提升与编译优化
- Vue3 编译器自动静态提升，减少运行时开销。
- 使用 `v-once` 渲染静态内容。

## 6. 事件与内存管理
- 及时解绑事件、清理副作用，使用 `onUnmounted`。

## 7. 代码分割与懒加载
- 路由和组件均支持动态 import。

## 8. 经典案例与参考
- [Vue3 官方性能优化指南](https://cn.vuejs.org/guide/best-practices/performance.html){:target="_blank"}
- [Vue3 性能优化实战](https://juejin.cn/post/6983905960328069128){:target="_blank"} 