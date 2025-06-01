# Vue3 状态管理规范

## 1. Pinia 使用规范

### Store 结构
```
stores/
├── index.ts           # store 入口文件
├── modules/           # 模块目录
│   ├── user.ts       # 用户模块
│   ├── app.ts        # 应用模块
│   └── ...
└── plugins/          # 插件目录
```

### 模块化规范
```typescript
// stores/modules/user.ts
import { defineStore } from 'pinia'
import type { User } from '@/types'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as User | null,
    token: null as string | null,
    loading: false,
    error: null as Error | null
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.token,
    fullName: (state) => {
      if (!state.userInfo) return ''
      return `${state.userInfo.firstName} ${state.userInfo.lastName}`
    }
  },
  
  actions: {
    async login(credentials: LoginCredentials) {
      try {
        this.loading = true
        const { data } = await api.login(credentials)
        this.userInfo = data.userInfo
        this.token = data.token
      } catch (error) {
        this.error = error as Error
        throw error
      } finally {
        this.loading = false
      }
    },
    
    logout() {
      this.userInfo = null
      this.token = null
    }
  }
})
```

## 2. 组合式 API 状态管理

### 使用 ref 和 reactive
```typescript
// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  return {
    count,
    doubleCount,
    increment,
    decrement
  }
}
```

### 使用 provide/inject
```typescript
// 父组件
const theme = ref('light')
provide('theme', theme)

// 子组件
const theme = inject('theme')
```

## 3. 状态管理最佳实践

### 1. 状态组织
```typescript
// 好的例子
interface UserState {
  userInfo: User | null
  token: string | null
  loading: boolean
  error: Error | null
}

const state = reactive<UserState>({
  userInfo: null,
  token: null,
  loading: false,
  error: null
})
```

### 2. 状态更新
```typescript
// 好的例子
const updateUser = (user: User) => {
  state.userInfo = user
  // 可以添加其他相关更新
  localStorage.setItem('user', JSON.stringify(user))
}
```

### 3. 状态持久化
```typescript
// 好的例子
const persistState = () => {
  watch(
    () => state.userInfo,
    (newValue) => {
      localStorage.setItem('user', JSON.stringify(newValue))
    },
    { deep: true }
  )
}
```

### 4. 状态验证
```typescript
// 好的例子
const validateState = (state: UserState) => {
  if (!state.userInfo) {
    throw new Error('User info is required')
  }
  if (!state.token) {
    throw new Error('Token is required')
  }
}
```

## 4. 性能优化

### 1. 使用 shallowRef
```typescript
// 好的例子
const largeObject = shallowRef({
  // 大量数据
})
```

### 2. 使用 shallowReactive
```typescript
// 好的例子
const state = shallowReactive({
  // 大量数据
})
```

### 3. 使用 computed 缓存
```typescript
// 好的例子
const filteredList = computed(() => {
  return list.value.filter(item => item.active)
})
```

## 5. 错误处理

### 1. 状态错误处理
```typescript
// 好的例子
const handleError = (error: Error) => {
  state.error = error
  // 可以添加错误上报逻辑
  reportError(error)
}
```

### 2. 异步操作错误处理
```typescript
// 好的例子
const fetchData = async () => {
  try {
    state.loading = true
    const data = await api.getData()
    state.data = data
  } catch (error) {
    handleError(error as Error)
  } finally {
    state.loading = false
  }
}
```

## 6. 测试

### 1. 单元测试
```typescript
// 好的例子
describe('useCounter', () => {
  it('should increment counter', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })
})
```

### 2. 集成测试
```typescript
// 好的例子
describe('UserStore', () => {
  it('should login user', async () => {
    const store = useUserStore()
    await store.login(credentials)
    expect(store.isLoggedIn).toBe(true)
  })
})
```

## 7. 最佳实践总结

### 1. 状态管理原则
- 集中管理应用状态
- 状态变更可追踪
- 状态变更可预测
- 状态变更可测试

### 2. 模块化
- 按功能划分模块
- 使用命名空间
- 避免模块间耦合
- 保持模块独立性

### 3. 性能优化
- 合理使用响应式
- 避免不必要的更新
- 使用计算属性缓存
- 使用 shallowRef 和 shallowReactive

### 4. 错误处理
- 统一的错误处理机制
- 错误状态管理
- 错误日志记录
- 错误恢复机制

### 5. 测试
- 单元测试
- 集成测试
- 状态快照测试
- 错误处理测试

### 6. 文档
- 状态结构文档
- 状态变更文档
- 使用示例文档
- 注意事项文档

### 7. 安全性
- 状态验证
- 权限控制
- 数据加密
- 敏感信息处理

### 8. 可维护性
- 清晰的代码结构
- 统一的命名规范
- 完整的类型定义
- 详细的注释说明 