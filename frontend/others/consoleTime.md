---
outline: deep
editLink: false
---

# JavaScript中，console已经向我们提供了方便的计时方法。 - Timer

## 1 背景

平时大家在谈及性能的时候，总是说有多快，然后页面体验那个函数执行的速度拖慢了实效，具体是怎么拖慢的，实效降低了多少，没有一个具体是数据，导致全凭感官去判断，这样不利于后续具体的性能提升。在以往的项目中经常使用函数前后，添加时间戳来标记，待完成了再相减去得出最终的一个性能开销的情况。

## 2 前言

这里只是想记录一下函数的执行的时间开销，有更简单的方案是更好的，方便平时使用和使用之后好删除。

## 3 实现

关键点
- console.time.
  - 启动一个计时器来跟踪某一个操作的占用时长。每一个计时器必须拥有唯一的名字，页面中最多能同时运行 10,000 个计时器。
- console.timeLog
  - 在控制台输出计时器的值
- console.timeEnd
  - 停止一个通过 `console.time()` 启动的计时器

```javascript
function sum(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        let u = {name: 'sam', age: i}
        sum += i;
    }
    return sum
}

// 计算一个函数的耗时
console.time('sum') // 开始计时
const total = sum(100000);
console.timeLog('sum');  // 计时：sum: 4.43994140625 ms, 基本上就是sum(100000)方法运行时长
const total2 = sum(1000); // 基本上就是sum(100000)与sum(1000)方法运行时长之和
console.timeEnd('sum');  // 计时：sum: 5.0419921875 ms
```

##### Tips

特别需要注意的是，time,timeEnd,timeLog 都需要同一个字符串作为参数，来构造同一个计时器。 而页面上最多可以同时运行10,000个计时器。
我们用到的最多的console.time()和console.timeEnd()方法，打在执行代码段的两头


