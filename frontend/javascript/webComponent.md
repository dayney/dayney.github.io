---
outline: deep
editLink: false
---

# webComponent

## 1 前言

Web Component 是一套不同的技术，允许你创建可重用的定制元素（它们的功能封装在你的代码之外）并且在你的 web 应用中使用它们。

Web Components 旨在解决这些问题 — 它由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突。

## 2 主要的特点

- **Custom element（自定义元素）**：一组 JavaScript API，允许你定义 custom elements 及其行为，然后可以在你的用户界面中按照需要使用它们。
- **Shadow DOM（影子 DOM）**：一组 JavaScript API，用于将封装的“影子”DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联的功能。通过这种方式，你可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
- **HTML template（HTML 模板）：** [` 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot) 元素使你可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。


## 3 相关知识点的依赖

### 3.1[shadow DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)

 自定义元素的一个重要方面是封装，因为自定义元素从定义上来说是一种可重用功能：它可以被放置在任何网页中，并且期望它能够正常工作。因此，很重要的一点是，运行在页面中的代码不应该能够通过修改自定义元素的内部实现而意外地破坏它。影子 DOM（Shadow DOM）允许你将一个 DOM 树附加到一个元素上，并且使该树的内部对于在页面中运行的 JavaScript 和 CSS 是隐藏的。

### 3.2 [CSS 封装](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM#css_封装)

 主要是方便 **shadow DOM**中使用样式，主要有以下两种方式

- [编程式](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM#%E5%8F%AF%E6%9E%84%E9%80%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8): 通过构建一个 [CSSStyleSheet](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleSheet) 对象并将其附加到影子根。
- [函数式](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM#%E5%9C%A8_template_%E5%A3%B0%E6%98%8E%E4%B8%AD%E6%B7%BB%E5%8A%A0_style_%E5%85%83%E7%B4%A0) :通过在一个[template](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)元素的声明中添加一个[style](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/style)元素。

### 3.3 [有的时候会使用到自定义事件](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)

 **`CustomEvent`** 接口表示由应用程序为任何目的初始化的事件。。

##### [建议] `JavaScript` 文件使用无 `BOM` 的 `UTF-8` 编码。

解释：

UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。

##### [建议] 在文件结尾处，保留一个空行。

## 4. 个人理解及应用场景

- 主要是封装自定义标签，跨前端组件使用，相当于各个项目中的非业务的公共组件，适配多个前端框架，需要使用的组件对原生的** web component **完美支持。
- 尝试新技术，团队的人大部分都想用，或者在其他新的项目，访问量低的页面中使用。
- 加深对框架的理解，可以与vue中的slot做比较，可以与微信小程序中的slot做比较，加深对插件的理解。

## 5. 其他

- 目前 **vue** 完全适配原生的**web component**方案, [Vue 与 Web Components](https://cn.vuejs.org/guide/extras/web-components)


### 参考文档
[Web_components](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components)
[web-components-examples](https://github.com/mdn/web-components-examples)
