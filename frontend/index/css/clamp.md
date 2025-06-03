---
outline: deep
editLink: false
---

### 超行使用省略号代替

``` css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.demo {
  margin-inline: auto;
  width: 300px;
  height: 90px; /* 多行一定要固定高度 */
  line-height: 30px;;
  background-color: #dedede;
  display: -webkit-box!important;
  -webkit-line-clamp: 3; /* 限制的行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```html
  <div class="demo">
    来一个不太长的文字，看看效果来一个不太长的文字，看看效果来一个不太长的文字，看看效果来一个不太长的文字，看看效果
  </div>
```
演示效果
![超行使用省略号效果截图](/frontend/index/css/clamp.jpg)
