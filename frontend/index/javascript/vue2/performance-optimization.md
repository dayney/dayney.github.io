# Vue2 性能优化

## 1. v-if 与 v-show 的合理使用
- `v-if` 适合切换频率低的场景，动态销毁和创建 DOM，节省内存。
- `v-show` 适合频繁切换的场景，仅切换 display，切换更快但占用内存。

## 2. 列表渲染优化
- 使用唯一且稳定的 `key`，避免不必要的 DOM diff。
- 大数据量列表建议使用虚拟滚动（如 vue-virtual-scroll-list）。

## 3. 响应式数据优化
- 避免为响应式对象频繁添加/删除属性。
- 使用 `Vue.set`/`this.$set` 保证响应式。

## 4. 异步组件与懒加载
- 使用异步组件按需加载，减少首屏体积：
  ```js
  Vue.component('async-example', function (resolve) {
    require(['./my-async-component'], resolve)
  })
  ```
- 路由懒加载：
  ```js
  const Foo = () => import('./Foo.vue')
  ```

## 5. 事件与内存管理
- 及时解绑全局事件、定时器，防止内存泄漏。
- 使用 `beforeDestroy` 生命周期清理副作用。

## 6. 组件缓存
- 使用 `<keep-alive>` 缓存组件，提升切换性能。

## 7. 其他优化
- 合理拆分大组件，提升复用性和可维护性。
- 使用 `v-once` 渲染静态内容。
- 使用 `computed` 替代复杂的 `methods` 计算。

## 8. 经典案例与参考
- [Vue 官方性能优化指南](https://cn.vuejs.org/v2/guide/optimizations.html){:target="_blank"}
- [Vue2 大型表格优化实践](https://juejin.cn/post/6844904101386983438){:target="_blank"} 