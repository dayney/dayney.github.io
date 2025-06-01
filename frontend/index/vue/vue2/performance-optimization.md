# Vue2 性能优化指南

## 1. 代码分割

### 路由懒加载
```javascript
// 不好的写法
import UserProfile from '@/views/UserProfile.vue'

// 好的写法
const UserProfile = () => import('@/views/UserProfile.vue')
```

### 组件懒加载
```javascript
// 不好的写法
import HeavyComponent from '@/components/HeavyComponent.vue'

// 好的写法
const HeavyComponent = () => import('@/components/HeavyComponent.vue')
```

## 2. 虚拟列表

### 使用 vue-virtual-scroller
```vue
<template>
  <RecycleScroller
    class="scroller"
    :items="items"
    :item-size="32"
    key-field="id"
    v-slot="{ item }"
  >
    <div class="user">
      {{ item.name }}
    </div>
  </RecycleScroller>
</template>

<script>
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

export default {
  components: {
    RecycleScroller
  }
}
</script>
```

## 3. 计算属性优化

### 避免复杂计算
```javascript
// 不好的写法
computed: {
  filteredList() {
    return this.items
      .filter(item => item.active)
      .map(item => ({
        ...item,
        fullName: `${item.firstName} ${item.lastName}`
      }))
      .sort((a, b) => a.fullName.localeCompare(b.fullName))
  }
}

// 好的写法
computed: {
  activeItems() {
    return this.items.filter(item => item.active)
  },
  sortedItems() {
    return [...this.activeItems].sort((a, b) => 
      a.fullName.localeCompare(b.fullName)
    )
  }
}
```

## 4. 事件处理优化

### 防抖和节流
```javascript
import { debounce, throttle } from 'lodash-es'

export default {
  created() {
    this.debouncedSearch = debounce(this.search, 300)
    this.throttledScroll = throttle(this.handleScroll, 200)
  },
  
  methods: {
    search() {
      // 搜索逻辑
    },
    handleScroll() {
      // 滚动处理逻辑
    }
  }
}
```

## 5. 列表渲染优化

### 使用 key
```vue
<!-- 不好的写法 -->
<div v-for="item in items">
  {{ item.name }}
</div>

<!-- 好的写法 -->
<div v-for="item in items" :key="item.id">
  {{ item.name }}
</div>
```

### 避免 v-if 和 v-for 一起使用
```vue
<!-- 不好的写法 -->
<div v-for="item in items" v-if="item.active">
  {{ item.name }}
</div>

<!-- 好的写法 -->
<div v-for="item in activeItems">
  {{ item.name }}
</div>

<script>
export default {
  computed: {
    activeItems() {
      return this.items.filter(item => item.active)
    }
  }
}
</script>
```

## 6. 组件优化

### 使用函数式组件
```vue
<template functional>
  <div class="functional-component">
    {{ props.message }}
  </div>
</template>
```

### 合理使用 keep-alive
```vue
<template>
  <keep-alive :include="['UserProfile', 'Settings']">
    <router-view />
  </keep-alive>
</template>
```

## 7. 图片优化

### 懒加载
```vue
<template>
  <img v-lazy="imageUrl" />
</template>

<script>
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'error.png',
  loading: 'loading.gif',
  attempt: 1
})
</script>
```

### 使用 webp 格式
```javascript
// 检测浏览器是否支持 webp
const checkWebpSupport = () => {
  const canvas = document.createElement('canvas')
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }
  return false
}
```

## 8. 缓存优化

### 使用 localStorage
```javascript
export default {
  methods: {
    saveToCache(key, data) {
      try {
        localStorage.setItem(key, JSON.stringify(data))
      } catch (e) {
        console.error('Cache error:', e)
      }
    },
    
    getFromCache(key) {
      try {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : null
      } catch (e) {
        console.error('Cache error:', e)
        return null
      }
    }
  }
}
```

## 9. 网络优化

### 使用 HTTP 缓存
```javascript
// 配置 axios 实例
const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Cache-Control': 'max-age=3600'
  }
})
```

### 压缩资源
```javascript
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        threshold: 10240
      })
    ]
  }
}
```

## 10. 监控和性能分析

### 使用 Vue Performance Devtool
```javascript
// main.js
import Vue from 'vue'
import VuePerformanceDevtool from 'vue-performance-devtool'

Vue.use(VuePerformanceDevtool)
```

### 性能指标监控
```javascript
// 监控关键性能指标
export function monitorPerformance() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const timing = performance.timing
      const metrics = {
        dns: timing.domainLookupEnd - timing.domainLookupStart,
        tcp: timing.connectEnd - timing.connectStart,
        request: timing.responseEnd - timing.requestStart,
        dom: timing.domComplete - timing.domLoading,
        load: timing.loadEventEnd - timing.navigationStart
      }
      console.log('Performance metrics:', metrics)
    })
  }
}
``` 