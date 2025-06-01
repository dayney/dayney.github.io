# Vue3 组件结构规范

## 1. 组件文件结构

### 基本结构
```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup lang="ts">
// 导入语句
import { ref, computed } from 'vue'
import type { PropType } from 'vue'

// 类型定义
interface Props {
  title: string
  count?: number
}

// Props 定义
const props = defineProps<Props>()

// Emits 定义
const emit = defineEmits<{
  (e: 'update', value: number): void
  (e: 'delete'): void
}>()

// 响应式数据
const count = ref(0)
const state = reactive({
  loading: false,
  error: null
})

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 方法
const increment = () => {
  count.value++
  emit('update', count.value)
}

// 生命周期钩子
onMounted(() => {
  // 初始化逻辑
})

onUnmounted(() => {
  // 清理逻辑
})
</script>

<style scoped lang="scss">
// 样式定义
</style>
```

## 2. 组件目录结构

### 功能组件目录
```
FeatureComponent/
├── index.vue              # 组件入口文件
├── components/            # 子组件
│   ├── SubComponent.vue
│   └── AnotherComponent.vue
├── composables/           # 组合式函数
│   ├── useFeature.ts
│   └── useAnotherFeature.ts
├── types.ts              # 类型定义
└── constants.ts          # 常量定义
```

## 3. 组件设计原则

### 单一职责
```vue
<!-- 好的例子 -->
<template>
  <div class="user-card">
    <UserAvatar :user="user" />
    <UserInfo :user="user" />
    <UserActions :user="user" @action="handleAction" />
  </div>
</template>
```

### 组件通信
```vue
<!-- 父组件 -->
<template>
  <UserProfile
    :user="user"
    @update="handleUpdate"
    @delete="handleDelete"
  />
</template>

<!-- 子组件 -->
<script setup lang="ts">
const props = defineProps<{
  user: User
}>()

const emit = defineEmits<{
  (e: 'update', user: User): void
  (e: 'delete'): void
}>()
</script>
```

## 4. 组合式函数

### 基本结构
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

### 使用示例
```vue
<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'

const { count, doubleCount, increment, decrement } = useCounter(0)
</script>
```

## 5. 类型定义

### 组件 Props 类型
```typescript
// types.ts
export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
}

export interface UserCardProps {
  user: User
  showActions?: boolean
  onAction?: (action: string) => void
}
```

### 事件类型
```typescript
// types.ts
export type UserEvents = {
  (e: 'update', user: User): void
  (e: 'delete', userId: number): void
  (e: 'select', user: User): void
}
```

## 6. 样式规范

### Scoped 样式
```vue
<style scoped lang="scss">
.user-card {
  &__header {
    // 样式定义
  }
  
  &__body {
    // 样式定义
  }
  
  &__footer {
    // 样式定义
  }
}
</style>
```

### CSS 变量
```vue
<style scoped lang="scss">
:root {
  --primary-color: #42b983;
  --secondary-color: #2c3e50;
  --spacing-unit: 8px;
}

.component {
  color: var(--primary-color);
  padding: var(--spacing-unit);
}
</style>
```

## 7. 最佳实践

### 1. 组件命名
- 使用 PascalCase
- 使用有意义的名称
- 避免使用缩写

### 2. Props 定义
- 使用 TypeScript 类型
- 提供默认值
- 使用 required 标记必需属性

### 3. 事件处理
- 使用 kebab-case 命名事件
- 提供事件参数类型
- 使用 emit 函数发送事件

### 4. 响应式数据
- 使用 ref 和 reactive
- 避免过度使用响应式
- 合理使用计算属性

### 5. 生命周期
- 使用 onMounted 和 onUnmounted
- 在 onUnmounted 中清理资源
- 避免在 setup 中直接使用生命周期

### 6. 样式组织
- 使用 scoped 样式
- 使用 BEM 命名规范
- 使用 CSS 变量
- 避免使用 !important

### 7. 代码组织
- 保持导入顺序一致
- 相关逻辑放在一起
- 使用注释说明复杂逻辑

### 8. 性能优化
- 使用 v-memo
- 合理使用 v-show 和 v-if
- 避免不必要的计算
- 使用 shallowRef 和 shallowReactive

### 9. 测试
- 编写单元测试
- 测试组件行为
- 测试事件处理
- 测试异步操作

### 10. 文档
- 提供组件说明
- 说明 Props 和事件
- 提供使用示例
- 说明注意事项 