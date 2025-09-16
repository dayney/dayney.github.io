# apply与function一起使用，返回高阶函数

## 实现一个countSubstring(str, subStr)通用函数，统计subStr在str中出现的次数，不允许重复匹配

```
function countSubstring(str, subStr) {
  // 答题
  if (!str || !subStr) {
    return 0
  }
  let totleLength = str.length;
  // 用正则全部替换的方式（非重叠）：差值/匹配串长度
  const regex = new RegExp(subStr, 'g')
  const finshedStr = str.replace(regex, '')
  return (str.length - finshedStr.length) / subStr.length
  // return str.split(subStr).length - 1
}

console.log(countSubstring('aaaaaaa',  'aa'))
// 期望输出：3
```