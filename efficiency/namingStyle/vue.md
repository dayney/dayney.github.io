# Vue 命名规范

## 基本原则
- 组件名使用大驼峰命名法
- 保持命名语义化
- 遵循 Vue 官方风格指南

## 命名规则
1. 组件名：使用大驼峰命名法
2. 文件名：使用大驼峰命名法
3. 事件名：使用 kebab-case
4. props：使用驼峰命名法

## 示例
```vue
<!-- 组件名 -->
<template>
  <UserProfile />
</template>

<!-- 事件名 -->
<button @click="handle-submit">提交</button>

<!-- props -->
<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true
    }
  }
}
</script>
```

## 详细规范

### 1. 组件命名
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

### 2. 文件名命名
- 使用大驼峰命名法
- 与组件名保持一致
```
UserProfile.vue
NavigationMenu.vue
DataTable.vue
```

### 3. Props 命名
- 使用驼峰命名法
- 使用有意义的名称
```javascript
props: {
  userData: {
    type: Object,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  }
}
```

### 4. 事件命名
- 使用 kebab-case
- 使用动词开头
```vue
<button @click="handle-submit">提交</button>
<input @input="handle-input" />
<form @submit.prevent="handle-form-submit">
```

### 5. 方法命名
- 使用驼峰命名法
- 使用动词开头
```javascript
methods: {
  handleSubmit() {},
  fetchData() {},
  updateUser() {}
}
```

### 6. 计算属性命名
- 使用驼峰命名法
- 使用形容词或名词
```javascript
computed: {
  isActive() {},
  userFullName() {},
  formattedDate() {}
}
```

### 7. 数据属性命名
- 使用驼峰命名法
- 使用名词
```javascript
data() {
  return {
    userList: [],
    currentUser: null,
    isLoading: false
  }
}
```

### 8. 生命周期钩子
- 使用 Vue 标准命名
```javascript
created() {},
mounted() {},
updated() {},
destroyed() {}
```

### 9. 自定义指令命名
- 使用 kebab-case
```javascript
Vue.directive('focus', {})
Vue.directive('scroll-load', {})
```

### 10. 过滤器命名
- 使用驼峰命名法
```javascript
Vue.filter('formatDate', value => {})
Vue.filter('capitalize', value => {})
```

### 11. 混入命名
- 使用驼峰命名法
- 使用 `Mixin` 后缀
```javascript
const UserMixin = {
  methods: {
    getUserData() {}
  }
}
```

### 12. 插件命名
- 使用驼峰命名法
- 使用 `Plugin` 后缀
```javascript
const VueRouterPlugin = {
  install(Vue) {}
}
``` 