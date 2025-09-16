# apply与function一起使用，返回高阶函数

## 实现**before**函数
```
// 实现一个before(n, func)通用函数，使调用func次数不超过n次
function before(n, func) {
  // 答题
  let count = 0;
  return function(...args) {
    if (count < n) {
      count++;
      return func.apply(this, args);
    }
  }
}

const test = before(5, function(a, b) {
  console.log(a, b);
})

for (let i = 0; i < 10; i++) {
  test('我执行了', i);
}

// 正确输出
// 我执行了 0
// 我执行了 1
// 我执行了 2
// 我执行了 3
// 我执行了 4
```