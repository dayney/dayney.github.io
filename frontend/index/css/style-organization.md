# 样式组织

## 模块化组织

### 目录结构
```
styles/
├── base/          # 基础样式（变量、重置样式等）
├── components/    # 组件样式
├── layouts/       # 布局样式
├── pages/         # 页面特定样式
├── theme/         # 主题相关样式
└── utils/         # 工具类样式
```

### 基础样式
- 变量系统
  ```scss
  // _variables.scss
  $colors: (
    'primary': #007bff,
    'secondary': #6c757d,
    'success': #28a745,
    'danger': #dc3545
  );
  
  $spacing: (
    'xs': 4px,
    'sm': 8px,
    'md': 16px,
    'lg': 24px,
    'xl': 32px
  );
  
  $typography: (
    'font-family': -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'font-size': 16px,
    'line-height': 1.5
  );
  ```

### 组件样式
- [BEM 命名规范](/frontend/index/css/bem){:target="_blank"}
- 组件样式与组件代码放在同一目录
- 避免样式污染

### 工具类
- 创建通用工具类
- 使用 mixin 封装常用样式组合
- 提供常用的辅助类

## 样式复用策略

### 变量系统
- 颜色系统
- 间距系统
- 字体系统
- 动画系统

### Mixin 系统
```scss
// _mixins.scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin responsive($breakpoint) {
  @if $breakpoint == 'sm' {
    @media (min-width: 576px) { @content; }
  }
  @if $breakpoint == 'md' {
    @media (min-width: 768px) { @content; }
  }
  // ... 其他断点
}
```

### 工具类系统
```scss
// _utilities.scss
.flex-center {
  @include flex-center;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 组件样式隔离

### CSS Modules
- 使用 CSS Modules 实现样式隔离
- 避免全局样式污染
- 组件样式与组件代码放在同一目录

### Styled Components
- 使用 styled-components 实现样式隔离
- 动态样式处理
- 主题支持

## 最佳实践

1. **避免过度嵌套**
   - 选择器嵌套不超过3层
   - 使用 BEM 命名减少嵌套

2. **样式复用**
   - 使用变量和 mixin
   - 创建通用工具类
   - 避免重复代码

3. **性能优化**
   - 减少选择器复杂度
   - 避免使用通配符
   - 使用 transform 和 opacity 实现动画

4. **维护性**
   - 保持一致的命名规范
   - 添加必要的注释
   - 定期重构和优化 