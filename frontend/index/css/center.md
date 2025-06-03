---
outline: deep
editLink: false
---

### 几个简单的CSS子元素居中方案

公用的html代码
``` html
  <div class="container">
    <div class="box"></div>
  </div>
```

### 1. 方案一
```css
    .container {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: #dedede;
    }
```

### 2. 方案二
```css
    .container {
      width: 100vw;
      height: 100vh;
      display: grid;
      place-items: center;
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: #dedede;
    } 
```

### 3. 方案三
```css
    .container {
      width: 100vw;
      height: 100vh;
      position: relative;
    }

    .box {
      position: absolute;
      inset: 0;
      margin: auto;
      width: 100px;
      height: 100px;
      background-color: #dedede;
    }
```

### 4. 方案四
```css
    .container {
      width: 100vw;
      height: 100vh;
      display: grid;
    }

    .box {
      margin: auto;
      width: 100px;
      height: 100px;
      background-color: #dedede;
    }
```

演示效果
![子元素居中对齐效果截图](/frontend/index/css/center.jpg)
