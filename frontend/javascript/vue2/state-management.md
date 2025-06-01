---
outline: deep
editLink: false
---

# 状态管理规范

## 1 Vuex 使用规范

### 1.1 Store 结构

- 按模块拆分 store
- 每个模块包含 state、mutations、actions、getters
- 使用命名空间避免命名冲突
- 保持模块的独立性

### 1.2 State 管理

- 使用 mapState 辅助函数
- 避免直接修改 state
- 使用 getters 派生状态
- 保持 state 的扁平化

### 1.3 Mutations

- 必须是同步函数
- 使用常量作为 mutation 类型
-  mutation 应该只做状态修改
- 避免在 mutation 中进行异步操作

### 1.4 Actions

- 可以包含异步操作
- 通过 commit 提交 mutation
- 使用 mapActions 辅助函数
- 处理异步操作的错误情况

### 1.5 Getters

- 用于派生状态
- 可以接收其他 getter 作为第二个参数
- 使用 mapGetters 辅助函数
- 避免在 getter 中修改状态

## 2 组件状态管理

### 2.1 数据流向

- 单向数据流
- 父组件通过 props 向下传递数据
- 子组件通过事件向上传递数据
- 避免组件间的直接数据修改

### 2.2 Props 和 Events

- Props 应该是只读的
- 使用事件通知父组件
- 使用 v-model 进行双向绑定
- 合理使用 .sync 修饰符

### 2.3 计算属性

- 使用计算属性缓存结果
- 避免在计算属性中修改数据
- 合理使用 getter 和 setter
- 避免计算属性中的复杂逻辑

### 2.4 侦听器

- 使用 watch 监听数据变化
- 合理使用 deep 和 immediate 选项
- 避免在 watch 中修改被监听的数据
- 使用 watch 处理异步操作

## 3 最佳实践

### 3.1 状态设计

- 保持状态的最小化
- 避免冗余的状态
- 使用计算属性派生状态
- 合理使用本地状态和全局状态

### 3.2 性能优化

- 使用 Vuex 的严格模式
- 合理使用 mapState、mapGetters 等辅助函数
- 避免不必要的状态更新
- 使用 Vuex 的插件机制

### 3.3 错误处理

- 统一处理异步操作的错误
- 使用 try-catch 捕获异常
- 提供友好的错误提示
- 记录错误日志

### 3.4 调试

- 使用 Vue Devtools
- 合理使用 Vuex 的日志插件
- 在开发环境中启用严格模式
- 使用 Vuex 的调试工具 