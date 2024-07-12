---
outline: deep
editLink: false
---

# SASS 使用小技巧

----

### 1. 使用变量名来生成对应的id名称、className名称方便后续做皮肤切换

```html
$demo: 'demo-test';
.#{$demo} {
  background-color: red;
}


编译之后生成的代码是
.demo-test {
  background-color: red;
}
```

