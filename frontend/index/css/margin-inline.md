---
outline: deep
editLink: false
---

### **margin-inline** 定义了元素的逻辑行首和行末外边距，并根据元素的书写模式、行内方向和文本朝向对应至实体外边距。

---
##### 此属性为下列 CSS 属性的简写属性：
- margin-inline-start
- margin-inline-end

根据 [`writing-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode)、[`direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction) 和 [`text-orientation`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-orientation) 所定义的值，此属性对应于 [`margin-top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top) 和 [`margin-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom)，或者 [`margin-right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-right) 和 [`margin-left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-left) 属性。

`margin-inline` 属性可用一个或两个值指定。

- 用**一个**值指定时，**行首和行末**应用同样的外边距。
- 用**两个**值指定时，第一个外边距应用于**行首**，第二个应用于**行末**。


#### 水平居中方式（new way）

```css
/* 关键词值 */
margin-inline: auto;
```

#### 水平居中方式（old way）

```css
/* 关键词值 */
margin: 0 auto;
```

参考文档
[margin-inline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-inline)
