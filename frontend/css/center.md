---
outline: deep
editLink: false
---

### 懒加载工具
- [另一个无阻塞加载工具1-雅虎大神的作品lazyload](https://github.com/rgrove/lazyload){target="_blank"}

- [另一个无阻塞加载工具2-lab.js](https://github.com/getify/LABjs){target="_blank"}

### 小结： {#小结：}

> 1.  `</body>`闭合标签之前，将所有`<script>`标签放到页面的底部，这样确保在脚本执行前页面已经完成了渲染
>
> 2.  合并脚本。页面中的`<script>`标签越少，加载速度就越快，响应也更迅捷。无论外链文件还是内嵌脚本都是如此。
>
> 3.  有多种无阻塞下载JavaScript的方法。
>
>     > 3.1
>     > 使用`<script>`标签的`defer`属性；在`HTML5`中有`async`属性，提供异步下载的功能；
>     > 3.2 使用动态创建的`<script>`元素来下载并执行代码； 3.3
>     > 使用`XHR`对象下载`JavaScript`代码并注入页面中；
