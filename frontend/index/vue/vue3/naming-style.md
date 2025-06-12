---
outline: deep
editLink: false
---

# Vue3 命名规范

## 1. 基本原则
- 组件名使用大驼峰命名法
- 保持命名语义化
- 遵循 Vue 官方风格指南
- 使用 Composition API 的命名约定

## 2. 命名规则
1. 组件名：使用大驼峰命名法
2. 文件名：使用大驼峰命名法
3. 事件名：使用 kebab-case
4. props：使用驼峰命名法
5. ref 变量：使用 Ref 后缀

## 3. 详细规范

### 3.1 组件命名
- 使用大驼峰命名法
- 使用有意义的名称
- 避免使用 HTML 标签名
```vue
<!-- 好的示例 -->
<UserProfile />
<NavigationMenu />
<DataTable />

<!-- 不好的示例 -->
<user-profile />
<nav-menu />
<table />
```

### 3.2 文件名命名
- 使用大驼峰命名法
- 与组件名保持一致
```
UserProfile.vue
NavigationMenu.vue
DataTable.vue
```

### 3.3 Props 命名
- 使用驼峰命名法
- 使用有意义的名称
```javascript
const props = defineProps({
  userData: {
    type: Object,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
```

### 3.4 事件命名
- 使用 kebab-case
- 使用动词开头
```vue
<button @click="handle-submit">提交</button>
<input @input="handle-input" />
<form @submit.prevent="handle-form-submit">
```

### 3.5 响应式变量命名
- 基本类型使用 Ref 后缀
- 对象类型使用 State 后缀
```javascript
const countRef = ref(0)
const userState = reactive({
  name: '',
  age: 0
})
```

### 3.6 计算属性命名
- 使用驼峰命名法
- 使用形容词或名词
```javascript
const isActive = computed(() => {})
const userFullName = computed(() => {})
const formattedDate = computed(() => {})
```

### 3.7 方法命名
- 使用驼峰命名法
- 使用动词开头
```javascript
function handleSubmit() {}
function fetchData() {}
function updateUser() {}
```

### 3.8 生命周期钩子
- 使用 Vue3 标准命名
```javascript
onMounted(() => {})
onUpdated(() => {})
onUnmounted(() => {})
```

### 3.9 自定义指令命名
- 使用 kebab-case
```javascript
const vFocus = {
  mounted: (el) => {}
}
const vScrollLoad = {
  mounted: (el) => {}
}
```

### 3.10 组合式函数命名
- 使用驼峰命名法
- 使用 use 前缀
```javascript
function useUser() {}
function useAuth() {}
function useForm() {}
```

### 3.11 插件命名
- 使用驼峰命名法
- 使用 `Plugin` 后缀
```javascript
const VueRouterPlugin = {
  install(app) {}
}
```

## 4. 命名规范检查清单

- [ ] 组件名使用大驼峰命名法
- [ ] 文件名使用大驼峰命名法
- [ ] 事件名使用 kebab-case
- [ ] props 使用驼峰命名法
- [ ] ref 变量使用 Ref 后缀
- [ ] reactive 变量使用 State 后缀
- [ ] 计算属性使用驼峰命名法
- [ ] 方法使用驼峰命名法
- [ ] 自定义指令使用 kebab-case
- [ ] 组合式函数使用 use 前缀
- [ ] 插件使用驼峰命名法
- [ ] 使用有意义的名称
- [ ] 避免使用 HTML 标签名
- [ ] 遵循 Vue 官方风格指南 

## 基本类型变量命名

- 基本类型（如字符串、数字、布尔值等）的变量命名要以 Ref 结尾。

## 其他规范

- [命名规范](/frontend/index/javascript/naming-style.md){:target="_blank"} 