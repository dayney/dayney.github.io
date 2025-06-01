# Vue2 组件结构规范

## 文件结构
```
ComponentName/
├── index.vue          # 组件入口文件
├── components/        # 子组件
├── composables/       # 组合式函数
├── styles/           # 样式文件
└── types/            # TypeScript 类型定义
```

## 组件文件结构
```vue
<template>
  <!-- 模板内容 -->
</template>

<script>
// 导入语句
import { Component, Vue } from 'vue-property-decorator'
import { Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'ComponentName',
  components: {
    // 子组件注册
  }
})
export default class ComponentName extends Vue {
  // Props 定义
  @Prop({ type: String, required: true }) readonly title!: string

  // 数据属性
  private data = {
    // 数据定义
  }

  // 计算属性
  get computedValue() {
    return this.data.someValue
  }

  // 方法
  private handleClick() {
    // 方法实现
  }

  // 生命周期钩子
  mounted() {
    // 挂载后的逻辑
  }
}
</script>

<style lang="scss" scoped>
// 样式定义
</style>
```

## 命名规范
1. 组件名使用 PascalCase
2. 文件名与组件名保持一致
3. 基础组件名以 Base 开头
4. 单例组件名以 The 开头
5. 紧密耦合的子组件以父组件名作为前缀

## 组件设计原则
1. 单一职责原则
2. 组件应该是可复用的
3. 保持组件的独立性
4. 合理使用 props 和 events
5. 避免过度设计

## Props 规范
1. 始终使用详细的 props 定义
2. 指定 props 的类型
3. 使用 camelCase 命名 props
4. 为必需的 props 添加 required 标记
5. 为 props 提供默认值

## 事件规范
1. 使用 kebab-case 命名事件
2. 事件名应该是动词或动词短语
3. 提供详细的事件参数说明
4. 避免事件名冲突

## 样式规范
1. 使用 scoped 样式
2. 使用 BEM 命名规范
3. 避免使用 !important
4. 合理使用 CSS 变量
5. 保持样式的可维护性 