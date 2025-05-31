# SASS 命名规范

## 基本原则
- 使用 BEM 命名方法
- 变量名使用连字符
- 保持嵌套层级清晰

## 命名规则
1. 变量：使用连字符
2. Mixin：使用连字符
3. 函数：使用连字符
4. 占位符：使用连字符

## 示例
```scss
$primary-color: #333;
$font-size-base: 16px;

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

%button-base {
  padding: 10px;
  border-radius: 4px;
}
```

## 详细规范

### 1. 变量命名
- 使用连字符
- 使用有意义的名称
- 使用类型前缀
```scss
// 颜色
$color-primary: #007bff;
$color-secondary: #6c757d;
$color-success: #28a745;

// 字体
$font-size-base: 16px;
$font-size-large: 20px;
$font-size-small: 14px;

// 间距
$spacing-unit: 8px;
$spacing-large: 16px;
$spacing-small: 4px;

// 断点
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
```

### 2. Mixin 命名
- 使用连字符
- 使用动词开头
- 使用有意义的名称
```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin responsive-font($min-size, $max-size) {
  font-size: $min-size;
  @media (min-width: $breakpoint-md) {
    font-size: $max-size;
  }
}

@mixin hover-effect {
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
  }
}
```

### 3. 函数命名
- 使用连字符
- 使用动词开头
- 使用有意义的名称
```scss
@function calculate-rem($size) {
  @return $size / $font-size-base * 1rem;
}

@function get-color($key) {
  @return map-get($colors, $key);
}
```

### 4. 占位符命名
- 使用连字符
- 使用有意义的名称
```scss
%button-base {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

%card-base {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### 5. 嵌套规则
- 最多嵌套三层
- 使用 BEM 命名方法
```scss
.card {
  &__header {
    &--large {
      // 样式
    }
  }
  
  &__content {
    &--featured {
      // 样式
    }
  }
}
```

### 6. 模块化组织
- 使用 `_` 前缀表示部分文件
- 使用有意义的文件名
```
_variables.scss
_mixins.scss
_functions.scss
_buttons.scss
_forms.scss
```

### 7. 导入顺序
```scss
// 1. 变量
@import 'variables';

// 2. 函数
@import 'functions';

// 3. Mixins
@import 'mixins';

// 4. 基础样式
@import 'base';

// 5. 组件
@import 'components';

// 6. 布局
@import 'layout';

// 7. 工具类
@import 'utilities';
```

### 8. 注释规范
```scss
// 单行注释
/* 多行注释 */

// 文件头部注释
/**
 * 文件名：_buttons.scss
 * 描述：按钮样式
 * 作者：xxx
 * 日期：2024-03-21
 */
```

### 9. 最佳实践
1. 避免过深的嵌套
2. 使用变量存储重复值
3. 使用 Mixin 处理重复的样式
4. 使用函数处理计算
5. 使用占位符处理共享样式
6. 保持代码组织清晰
7. 使用有意义的命名
8. 遵循 BEM 命名方法 