---
outline: deep
editLink: false
---

# SASS编码规范

### 用更合理的方式写 `CSS / Sass`

- 规范的代码可以促进团队合作，

- 规范的代码可以减少 `bug` 处理，

- 规范的代码可以降低维护成本，

- 规范的代码有助于代码审查，

- 养成代码规范的习惯，有助于程序员自身的成长。

  

### SASS注释规范

SASS支持 CSS 标准的多行注释 `/* */`，同时也支持单行注释 `//`。

- 多行注释在使用非 Compressed 模式进行编译后的输出文件中会保留下来，单行注释 `//` 侧会被移除
- 多行注释和单行注释在 SASS 编译后输出的压缩 CSS 文件都会被移除
- 当多行注释内容第一个字符是感叹号 "!" 的时候，即 `/*! */`，SASS 无论用哪一种编译方式编译注释都会保留
- 注释内容可以加入 SASS 变量

### 团队约定

SCSS 文件内

- 全部遵循 CSS 注释规范
- 不使用 `/*! */` 注释方式
- 注释内不放 SASS 变量

标准的注释规范如下：

```
@charset "UTF-8";

/**
* @desc File Info
* @author liqinuo
* @date 2015-10-10
*/

/* Module A
----------------------------------------------------------------*/
.mod-a {}

/* module A logo */
.mod-a-logo {}

/* module A nav */
.mod-a-nav {}


/* Module B
----------------------------------------------------------------*/
.mod-b {}

/* module B logo */
.mod-b-logo {}

/* module B nav */
.mod-b-nav {}
```

### 语法

- 使用 `.scss` 的语法，不使用 `.sass` 原本的语法。
- CSS 和 `@include` 声明按照以下逻辑排序（参见下文）

### 属性声明的排序

1. 属性声明 首先列出除去 `@include` 和嵌套选择器之外的所有属性声明。

```css
.btn-green {
  background: green;
  font-weight: bold;
  // ...
}
复制代码
```

1. `@include` 声明 紧随后面的是 `@include`，这样可以使得整个选择器的可读性更高。

```css
.btn-green {
  background: green;
  font-weight: bold;
  @include transition(background 0.5s ease);
  // ...
}
复制代码
```

1. 嵌套选择器 *如果有必要*用到嵌套选择器，把它们放到最后，在规则声明和嵌套选择器之间要加上空白，相邻嵌套选择器之间也要加上空白。嵌套选择器中的内容也要遵循上述指引。

```css
.btn {
  background: green;
  font-weight: bold;
  @include transition(background 0.5s ease);
  .icon {
    margin-right: 10px;
  }
}
复制代码
```

### 变量

可复用属性尽量抽离为页面变量，易于统一维护

```sass
// CSS
.jdc {
    color: red;
    border-color: red;
}

// SCSS
$color: red;
.jdc {
    color: $color;
    border-color: $color;
}
```

Mixins

根据功能定义模块，然后在需要使用的地方通过 `@include` 调用，避免编码时重复输入代码段

```
// CSS
.jdc-1 {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.jdc-2 {
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

// SCSS
@mixin radius($radius:5px) {
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
.jdc-1 {
    @include radius; //参数使用默认值
}
.jdc-2 {
    @include radius(10px);
}


// CSS
.jdc-1 {
    background: url(/img/icon.png) no-repeat -10px 0;
}
.jdc-2 {
    background: url(/img/icon.png) no-repeat -20px 0;
}

// SCSS
@mixin icon($x:0, $y:0) {
    background: url(/img/icon.png) no-repeat $x, $y;
}
.jdc-1 {
    @include icon(-10px, 0);
}
.jdc-2 {
    @include icon(-20px, 0);
}
```

## 占位选择器 %

如果不调用则不会有任何多余的 css 文件，占位选择器以 `%` 标识定义，通过 `@extend` 调用

```
//scss
%borderbox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.jdc {
    @extend %borderbox;
}
```

## extend 继承

```
// CSS
.jdc-1 {
    font-size: 12px;
    color: red;
}
.jdc-2 {
    font-size: 12px;
    color: red;
    font-weight: bold;
}

// SCSS
.jdc-1 {
    font-size: 12px;
    color: red;
}
.jdc-2 {
    @extend .jdc_1;
    font-weight: bold;
}

// 或者
%font-red {
    font-size: 12px;
    color: red;
}
.jdc-1 {
    @extend %font_red;
}
.jdc-2 {
    @extend %font_red;
    font-weight: bold;
}
```

## for 循环

```
// CSS
.jdc-1 {background-position: 0 -20px;}
.jdc-2 {background-position: 0 -40px;}
.jdc-3 {background-position: 0 -60px;}

// SCSS
@for $i from 1 through 3 {
    .jdc-#{$i} {
        background-position: 0 (-20px) * $i;
    }
}
```

注意：`#{}` 是连接符，变量连接使用时需要依赖

## each 循环

```
// CSS
.jdc-list {
    background-image: url(/img/jdc_list.png);
}
.jdc-detail {
    background-image: url(/img/jdc_detail.png);
}

// SCSS
@each $name in list, detail {
    .jdc-#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
    }
}


// CSS
.jdc-list {
    background-image: url(/img/jdc_list.png);
    background-color: red;
}
.jdc-detail {
    background-image: url(/img/jdc_detail.png);
    background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
    .jdc-#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
        background-color: $color;
    }
}
```

## function 函数

```
@function pxToRem($px) {
    @return $px / 10px * 1rem;
}
.jdc {
    font-size: pxToRem(12px);
}
```

## 运算规范

运算符之间空出一个空格

```
.jdc {
    width: 100px - 50px;
    height: 30px / 5;
}
```

注意运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意

```
// 正确的运算格式
.jdc {
    width: 100px - 50px;
    width: 100px + 50px;
    width: 100px * 2;
    width: 100px / 2;
}
```

### 选择器嵌套

```
/* CSS */
.jdc {}
body .jdc {}

/* SCSS */
.jdc {
    body & {}
}
/* CSS */
.jdc {}
.jdc-cover {}
.jdc-info {}
.jdc-info-name {}

/* SCSS */
.jdc {
    &-cover {}
    &-info {
        &_name {}
    }
}
```

### 属性嵌套

### <font color=#f00>【强调】: **永远不要嵌套 ID 选择器！**？</font>

### 属性嵌套

```sass
/* CSS */
.jdc {
    background-color: red;
    background-repeat: no-repeat;
    background-image: url(/img/icon.png);
    background-position: 0 0;
}

/* SCSS */
.jdc {
    background: {
        color: red;
        repeat: no-repeat;
        image: url(/img/icon.png);
        position: 0 0;
    }
}
```

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
