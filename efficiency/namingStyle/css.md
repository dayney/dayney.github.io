# CSS 命名规范

## BEM 命名方法
BEM 是一种命名约定，代表 Block（块）、Element（元素）和 Modifier（修饰符）。

### 命名规则
1. Block（块）
   - 独立的组件
   - 使用单个单词或连字符
   - 例如：`.header`、`.card`、`.menu`

2. Element（元素）
   - 使用双下划线 `__` 连接
   - 表示块的一部分
   - 例如：`.header__logo`、`.card__title`、`.menu__item`

3. Modifier（修饰符）
   - 使用双连字符 `--` 连接
   - 表示块或元素的状态或变体
   - 例如：`.header--fixed`、`.card--active`、`.menu__item--selected`

### 示例
```css
/* Block */
.card {}

/* Element */
.card__title {}
.card__content {}
.card__footer {}

/* Modifier */
.card--featured {}
.card--active {}
.card__title--large {}
```

### 最佳实践
1. 避免过深的嵌套
   - 错误：`.card__content__title__text`
   - 正确：`.card__title`

2. 保持命名简洁
   - 错误：`.card__content__wrapper__container`
   - 正确：`.card__container`

3. 使用语义化命名
   - 错误：`.card__div1`、`.card__div2`
   - 正确：`.card__header`、`.card__body`

4. 修饰符的使用
   - 错误：`.card__title--red--large--bold`
   - 正确：`.card__title--featured`

### 实际应用示例
```html
<!-- HTML结构 -->
<article class="card card--featured">
  <header class="card__header">
    <h2 class="card__title card__title--large">标题</h2>
  </header>
  <div class="card__content">
    <p class="card__text">内容</p>
  </div>
  <footer class="card__footer">
    <button class="card__button card__button--primary">按钮</button>
  </footer>
</article>
```

```css
/* 对应的CSS */
.card {
  border: 1px solid #eee;
  border-radius: 4px;
}

.card--featured {
  border-color: #gold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card__header {
  padding: 16px;
}

.card__title {
  font-size: 16px;
}

.card__title--large {
  font-size: 24px;
}

.card__content {
  padding: 16px;
}

.card__text {
  color: #666;
}

.card__footer {
  padding: 16px;
  border-top: 1px solid #eee;
}

.card__button {
  padding: 8px 16px;
  border-radius: 4px;
}

.card__button--primary {
  background-color: #007bff;
  color: white;
}
```

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