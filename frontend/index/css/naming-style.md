---
outline: deep
editLink: false
---

# CSS 命名规范

## BEM 命名方法
关于 BEM 命名方法的详细说明，请参考 [BEM 命名方式](/frontend/index/css/bem)

## 其他CSS命名规范

### 1. 通用类命名
- 使用小写字母
- 使用连字符（-）分隔单词
- 避免使用下划线（_）

### 2. 布局类命名
- 使用语义化前缀
  - `l-` 表示布局（layout）
  - `g-` 表示网格（grid）
  - `c-` 表示容器（container）

### 3. 工具类命名
- 使用 `u-` 前缀
- 例如：`u-hidden`、`u-clearfix`

### 4. 状态类命名
- 使用 `is-` 或 `has-` 前缀
- 例如：`is-active`、`has-error`

### 5. JavaScript钩子
- 使用 `js-` 前缀
- 例如：`js-toggle`、`js-submit`

## 2. BEM 命名规范

### 2.1 命名规则

- Block（块）：独立的组件
  ```css
  .block {}
  ```

- Element（元素）：块的一部分
  ```css
  .block__element {}
  ```

- Modifier（修饰符）：块或元素的特定状态
  ```css
  .block--modifier {}
  .block__element--modifier {}
  ```

### 2.2 命名示例

```css
/* 块 */
.card {}

/* 元素 */
.card__header {}
.card__body {}
.card__footer {}

/* 修饰符 */
.card--featured {}
.card__header--large {}
```

### 2.3 最佳实践

1. 使用有意义的名称
2. 保持命名简洁
3. 避免过深的嵌套
4. 使用小写字母和连字符
5. 避免使用下划线

## 3. SASS 命名规范

关于 SASS 命名方法的详细说明，请参考 [SASS 命名方式](/frontend/index/css/sass)

### 3.1 变量命名

- 使用 `$` 前缀
- 使用小写字母和连字符
- 使用有意义的名称

```scss
$primary-color: #007bff;
$font-size-base: 16px;
$spacing-unit: 8px;
```

### 3.2 Mixin 命名

- 使用 `@mixin` 前缀
- 使用小写字母和连字符
- 使用动词开头

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin responsive($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}
```

### 3.3 函数命名

- 使用 `@function` 前缀
- 使用小写字母和连字符
- 使用动词开头

```scss
@function calculate-rem($size) {
  @return $size / $font-size-base * 1rem;
}

@function get-color($key) {
  @return map-get($colors, $key);
}
```

### 3.4 占位符命名

- 使用 `%` 前缀
- 使用小写字母和连字符
- 使用有意义的名称

```scss
%clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

%visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

## 4. 命名规范检查清单

- [ ] 使用小写字母
- [ ] 使用连字符分隔单词
- [ ] 避免使用下划线
- [ ] 使用语义化前缀
- [ ] 使用 BEM 命名规范
- [ ] 使用 SASS 命名规范
- [ ] 使用有意义的名称
- [ ] 保持命名简洁
- [ ] 避免过深的嵌套
- [ ] 使用工具类命名规范
- [ ] 使用布局类命名规范
- [ ] 使用状态类命名规范
- [ ] 使用 JavaScript 钩子命名规范 

[o2team/guide](https://github.com/o2team/guide) 