---
outline: deep
editLink: false
---

# 高性能JavaScript读书笔记--DOM编程

# 需要加强的

\[ \] 1. document.createTextNode()

\[ \] 2. element.clone()

\[ \] 3. HTML集合:常用的document.querySelector();
document.querySelectorAll();

3.1 document.getElementsByName()

3.2 document.getsByClassName()

3.3 document.getElementsByTagName()

3.4 document.images

3.5 document.links

3.6 document.forms

3.5 document.forms\[0\].elements

\[ \] 4. node 相关

4.1 nodeName

4.2 nodeType

4.3 tagName（非node，但）

\[ \] 5. tagName

\[ \] 6. 获取DOM元素，用`jquery`比较多，有相似的地方

6.1 childNodes

6.2 nextSibling

6.3 firstNodes

6.4 lastNodes

6.5 previousSibling

6.6 children只有在IE6/7/8中使用

6.7 className

6.8 appendChild

6.9 replaceChild

\[ \] 7. 获取元素的计算属性：

7.1 getComputedStyle()/currentStyle

7.2 cssText

\[ \] 8. 文档片段：

7.1 document.createDocumentFragment()

**爬虫相关**

1.  document.images
2.  document.links

\[ \]
可以参考使用`css3 animation`来制作动画，原则：能用css解决的尽量使用css解决；

**制作动画需要谨慎的事**

1.  使用绝对位置定位页面上的动画元素，将其脱离文档流；
2.  让元素动起来。当它扩大时，会临时覆盖部分页面。但这只是页面一个小区域的重绘过程，不会产生重排并重绘页面的大部分内容；
3.  当动画结束时恢复定位，从而只会下移一次文档的其他元素。

### 小结

> 1.  最小化DOM访问次数，尽可能在JavaScript端处理；
>
> 2.  如果需要多次访问某个DOM节点，请使用局部变量存储它的引用；
>
> 3.  小心处理HTML集合，因为它实时连接着底层文档。把集合的长度缓存到一个变量中，并在迭代中使用它。如果需要经常操作集合，建议把它拷贝到一个数组中。
>
> 4.  如果可能的话，使用速度更快的API，比如querySelectorAll和firstElementChild
>
> 5.  要留意重绘和重排；批量修改样式时，"离线"操作DOM树，使用缓存，并减少访问布局信息的次数；
>
> 6.  动画中使用绝对定位，使用拖放代理；
>
> 7.  使用事件委托来减少事件处理器的数量；
