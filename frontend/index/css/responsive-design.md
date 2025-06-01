# 响应式设计

## 断点系统

### 标准断点
```scss
$breakpoints: (
  'xs': 320px,   // 手机竖屏
  'sm': 576px,   // 手机横屏
  'md': 768px,   // 平板竖屏
  'lg': 992px,   // 平板横屏
  'xl': 1200px,  // 桌面显示器
  'xxl': 1400px  // 大屏显示器
);
```

### 断点使用
```scss
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}

// 使用示例
.element {
  width: 100%;
  
  @include respond-to('md') {
    width: 50%;
  }
  
  @include respond-to('lg') {
    width: 33.33%;
  }
}
```

## 移动优先原则

### 基础样式
- 先编写移动端样式
- 使用相对单位
- 考虑触摸设备

### 相对单位
```scss
.element {
  // 使用 rem 作为主要单位
  font-size: 1rem;
  padding: 1rem;
  
  // 使用 em 作为相对单位
  margin: 1em;
  
  // 使用 vw/vh 作为视口单位
  width: 100vw;
  height: 100vh;
  
  // 使用 calc 进行混合计算
  width: calc(100% - 2rem);
}
```

### 图片处理
```html
<img 
  src="small.jpg"
  srcset="small.jpg 300w, medium.jpg 600w, large.jpg 900w"
  sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
  alt="响应式图片示例"
>
```

## 响应式组件设计

### 弹性布局
```scss
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  .item {
    flex: 1 1 300px; // 基础宽度300px，可伸缩
  }
}
```

### 网格布局
```scss
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

### 响应式表格
```scss
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @include respond-to('md') {
    overflow-x: visible;
  }
}
```

## 触摸设备优化

### 触摸目标
```scss
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}
```

### 手势支持
```scss
.swipeable {
  touch-action: pan-y pinch-zoom;
}
```

## 性能优化

### 图片优化
- 使用 WebP 格式
- 实现懒加载
- 使用适当的图片尺寸

### 媒体查询优化
```scss
// 避免不必要的媒体查询
.element {
  // 基础样式
  width: 100%;
  
  // 只在需要时使用媒体查询
  @include respond-to('md') {
    width: 50%;
  }
}
```

## 测试与调试

### 设备测试
- 使用 Chrome DevTools 设备模拟
- 真机测试
- 跨浏览器测试

### 调试工具
- 使用浏览器开发工具
- 响应式设计检查器
- 性能分析工具 