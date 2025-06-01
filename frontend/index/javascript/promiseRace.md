---
outline: deep
editLink: false
---

# Promise.race

## 1 前言

主要是在想使用免费的cdn的情况下，不知道那个cdn节点返回的数据最快，想到有**Promise.race**,同时，使用的cdn的文件也比较多，可能有vue、还有各种库，配合**Promise.all**一起使用，效果会好一些，在此之前使用过onerror来监听script中的src的访问是否顺畅，本次优化是挑选的**CDN**节点来优化项目。

## 2 代码主要部分

```javascript
function raceAllGroups(groups) {
  return Promise.all(groups.map(group => Promise.race(group)));
}

// 示例：每组有多个 Promise，最先完成的那个会被 `Promise.race` 选中
const group1 = [
  new Promise(resolve => setTimeout(() => resolve('group1-task1'), 3000)),
  new Promise(resolve => setTimeout(() => resolve('group1-task2'), 1000))
];

const group2 = [
  new Promise(resolve => setTimeout(() => resolve('group2-task1'), 2000)),
  new Promise(resolve => setTimeout(() => resolve('group2-task2'), 500))
];

raceAllGroups([group1, group2]).then(results => {
  console.log('所有组的 `Promise.race` 都已完成:', results);
  // 结果示例：['group1-task2', 'group2-task2']
});
```

## 3 应用场景

1. 主要是在入口文件**index.html**中使用第3方的 **CDN**来提速，方便自动的选中加载速度最快的**CDN**，应用场景主要有活动页面，老项目中的混编（前后端写在同一个页面中）。
