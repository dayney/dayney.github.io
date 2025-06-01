---
outline: deep
editLink: false
---

# 数据字典-Map的使用

## 1 前言

前端在项目中有很多状态字典，如性别、数据状态（冻结、正常、运行）、订单状态等。

主要是改变以往使用字典的方式换成现在**Map**格式的数据，使用**Map**数据的方法来快速操作字典。

## 关于**map**的一些理解

- 键：同名健会覆盖，不会出现字典的中有同名的键
- 顺序：按照插入的顺序
- 判断是否有某一个键： [`Map.prototype.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/keys) 方法

## 使用案例
```javascript
let typeMap = new Map()
.set(1, '药店列表明细')
.set(2, '商品列表明细')
.set(3, '药店关联药品明细')
.set(4, '批量下载门店资质')
.set(5, '渠道药店经营状态')
.set(6, '组合商品列表明细')
.set(7, '模版药品导出明细');
```


### 参考文档
[Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
