# CSS 命名规范

## BEM 命名方法
关于 BEM 命名方法的详细说明，请参考 [BEM 命名方式](./bem.md)

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