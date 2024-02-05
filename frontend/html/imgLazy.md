---
outline: deep
editLink: false
---



### Image中loading属性，实现懒加载

#### HTML loading属性支持的值除了'lazy'还有下面这几个：

- lazy
  图片或框架懒加载，也就是元素资源快要被看到的时候加载。
- eager
  图片或框架无视一切进行加载。
- auto
  默认值。图片或框架基于浏览器自己的策略进行加载。

如果HTMLImageElement或者HTMLIFrameElement元素没有显式地设置loading属性或者loading属性的值不合法，则都被当作'auto'处理。

```html
  <img
    src="https://img0.baidu.com/it/u=1029243074,2374132283&fm=253&fmt=auto&app=138&f=JPEG?w=190&h=190"
    loading="lazy"
    alt="图片的懒加载"
  />
```
[demo地址](https://www.zhangxinxu.com/study/201909/img-lazy-loading-demo.html)


### 参考文档
[native-img-loading-lazy](https://www.zhangxinxu.com/wordpress/2019/09/native-img-loading-lazy/)