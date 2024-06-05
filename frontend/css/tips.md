---
outline: deep
editLink: false
---

# CSS使用小技巧

<br/>

### 1. 选中文字变色,css选择器`::selection`

```html
<style>
  ::selection {
    background-color: red;
    color: blue;
  }
</style>

<body>
  123123123123
</body>
```

### 2. 根据比列适配长/宽 `aspect-ratio`

```html
<style>
  .box {
    width: 200px;
    aspect-ratio: 4/3;
    border: 1px solid red;
  }
</style>

<body>
  <div class="box"></div>
</body>
```

