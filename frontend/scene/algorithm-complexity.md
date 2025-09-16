# 算法复杂度详解：时间复杂度 vs 空间复杂度

## 目录
- [0. 复杂度符号详解](#0-复杂度符号详解)
- [1. 时间复杂度详解](#1-时间复杂度详解)
- [2. 空间复杂度详解](#2-空间复杂度详解)
- [3. 实际性能测试对比](#3-实际性能测试对比)
- [4. 应用场景分析](#4-应用场景分析)
- [5. 实际代码示例](#5-实际代码示例)
- [6. 总结](#6-总结)

---

## 0. 复杂度符号详解

### 大O符号 (Big O Notation) 的英文含义

**O** = **Order** (阶、数量级)
- **英文单词**: Order
- **含义**: 表示算法的数量级或阶数，描述算法性能随输入规模增长的趋势

**n** = **Number** (数量)
- **英文单词**: Number  
- **含义**: 表示输入数据的规模大小，通常指数组长度、元素个数等

**k** = **Key** (关键数量)
- **英文单词**: Key
- **含义**: 表示某个特定的数量，如匹配次数、结果集大小等

### 完整英文单词对照表

| 符号 | 英文名称 | 中文含义 | 说明 |
|------|----------|----------|------|
| **O(1)** | **Constant Time** | 常数时间 | 无论输入多大，执行时间固定 |
| **O(n)** | **Linear Time** | 线性时间 | 时间与输入规模成正比 |
| **O(log n)** | **Logarithmic Time** | 对数时间 | 时间与输入规模的对数成正比 |
| **O(n²)** | **Quadratic Time** | 平方时间 | 时间与输入规模的平方成正比 |
| **O(k)** | **Key-dependent Space** | 与关键数量相关 | 内存与特定数量成正比 |


---

## 1. 时间复杂度详解

**定义：** 算法执行时间随输入规模增长的趋势

### O(1) - 常数时间 (Constant Time)
**英文**: Constant Time  
**含义**: 无论输入多大，执行时间固定

```javascript
// 示例：获取数组第一个元素
function getFirstElement(arr) {
  return arr[0]; // 只执行一次，不依赖数组长度
}

// 特点：
// - 输入 [1,2,3,4,5] 和 [1,2,3,4,5,6,7,8,9,10] 执行时间相同
// - 哈希表查找、数组索引访问、栈顶元素获取
```

### O(n) - 线性时间 (Linear Time)
**英文**: Linear Time  
**含义**: 时间与输入规模成正比

```javascript
// 示例：线性搜索
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) { // 循环 n 次
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// 特点：
// - 数组长度 1000 → 最多循环 1000 次
// - 数组长度 2000 → 最多循环 2000 次
// - 线性搜索、遍历数组、单链表操作
```

### O(n²) - 平方时间 (Quadratic Time)
**英文**: Quadratic Time  
**含义**: 时间与输入规模的平方成正比

```javascript
// 示例：冒泡排序
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {           // 外层循环 n 次
    for (let j = 0; j < n - 1; j++) {     // 内层循环 n 次
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 交换
      }
    }
  }
  return arr;
}

// 特点：
// - 数组长度 100 → 最多 10,000 次操作
// - 数组长度 200 → 最多 40,000 次操作
// - 冒泡排序、选择排序、简单图算法
```

### O(log n) - 对数时间 (Logarithmic Time)
**英文**: Logarithmic Time  
**含义**: 时间与输入规模的对数成正比

```javascript
// 示例：二分搜索
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// 特点：
// - 数组长度 1000 → 最多 10 次比较
// - 数组长度 10000 → 最多 14 次比较
// - 二分搜索、平衡二叉搜索树、堆操作
```


---

## 2. 空间复杂度详解

**定义：** 算法执行过程中使用的额外内存空间随输入规模增长的趋势

### O(1) - 常数空间 (Constant Space)
**英文**: Constant Space  
**含义**: 无论输入多大，内存使用固定

```javascript
// 示例：两数相加
function sum(a, b) {
  const result = a + b; // 只使用几个变量
  return result;
}

// 特点：
// - 无论 a 和 b 多大，都只使用固定内存
// - 原地排序、数学计算、简单变量操作
```

### O(n) - 线性空间 (Linear Space)
**英文**: Linear Space  
**含义**: 内存与输入规模成正比

```javascript
// 示例：复制数组
function copyArray(arr) {
  const newArr = []; // 创建新数组
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]); // 复制每个元素
  }
  return newArr;
}

// 特点：
// - 原数组长度 1000 → 新数组长度 1000
// - 原数组长度 2000 → 新数组长度 2000
// - 数组复制、缓存存储、队列实现
```

### O(k) - 与特定数量成正比 (Key-dependent Space)
**英文**: Key-dependent Space  
**含义**: 内存与特定数量成正比

```javascript
// 示例：查找偶数
function findEvenNumbers(arr) {
  const evenNumbers = []; // 数组大小取决于偶数个数
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

// 特点：
// - 如果数组中有 50 个偶数 → 结果数组长度 50
// - 如果数组中有 100 个偶数 → 结果数组长度 100
// - 动态数组、结果集存储
```

### O(n²) - 平方空间 (Quadratic Space)
**英文**: Quadratic Space  
**含义**: 内存与输入规模的平方成正比

```javascript
// 示例：创建 n×n 矩阵
function createMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i * j; // 创建 n×n 矩阵
    }
  }
  return matrix;
}

// 特点：
// - n=10 → 100 个元素
// - n=20 → 400 个元素
// - 邻接矩阵、二维DP表
```
 此处有一个经典的用例，多重for循环的时间开销，比如：

 ```
 function testLoops(outer, inner, label) {
  console.time(label);
  let sum = 0;
  for (let i = 0; i < outer; i++) {
    for (let j = 0; j < inner; j++) {
      sum += i * j;
    }
  }
  console.timeEnd(label);
  return sum; // 防止引擎优化掉循环
}

const big = 1_000_000;  // ES2021 标准语法（数字分隔符语法）  大次数
const small = 100;      // 小次数

// 情况A：大的次数在外层
testLoops(big, small, "大在外");

// 情况B：大的次数在内层
testLoops(small, big, "大在内");
 ```
::: warning 注意
打开下方链接，打开浏览器的开发者模式，运行，可以看到运行结果
https://jsfiddle.net/krui027/gfx23mpk/

大在外: 100.35400390625 ms

大在内: 90.625 ms

数字分隔符语法：https://caniuse.com/numeric-separator
:::


---

## 4. 应用场景分析

### 时间复杂度应用场景

| 复杂度 | 英文名称 | 应用场景 | 示例 |
|--------|----------|----------|------|
| O(1) | Constant Time | 哈希表查找、数组索引访问 | `hashMap.get(key)` |
| O(log n) | Logarithmic Time | 二分搜索、平衡二叉搜索树 | `binarySearch(sortedArray, target)` |
| O(n) | Linear Time | 线性搜索、遍历数组 | `array.forEach()` |
| O(n log n) | Linearithmic Time | 归并排序、快速排序 | `mergeSort(array)` |
| O(n²) | Quadratic Time | 冒泡排序、选择排序 | `bubbleSort(array)` |
| O(2^n) | Exponential Time | 递归斐波那契、子集生成 | `fibonacci(n)` |

### 空间复杂度应用场景

| 复杂度 | 英文名称 | 应用场景 | 示例 |
|--------|----------|----------|------|
| O(1) | Constant Space | 原地排序、数学计算 | `swap(a, b)` |
| O(log n) | Logarithmic Space | 递归调用栈 | `quickSort(arr, left, right)` |
| O(n) | Linear Space | 数组复制、缓存存储 | `[...originalArray]` |
| O(n log n) | Linearithmic Space | 归并排序的临时数组 | `mergeSort` 的辅助数组 |
| O(n²) | Quadratic Space | 邻接矩阵、二维DP表 | `dp[i][j]` 表格 |

---

## 6. 总结

### 核心概念
- **时间复杂度**：关注执行效率，用户体验的关键
- **空间复杂度**：关注内存使用，硬件资源的限制

### 选择原则
1. **优先考虑时间复杂度**（用户体验）
2. **在时间复杂度和空间复杂度之间权衡**
3. **根据数据规模选择合适的算法**
4. **考虑硬件资源限制**（内存、CPU）
5. **分析实际使用场景的频率和重要性**

### 优化策略
- **时间换空间**：使用更多内存来减少计算时间
- **空间换时间**：使用更多计算来减少内存使用
- **预处理**：提前计算常用结果
- **缓存**：存储中间结果避免重复计算
- **分治**：将大问题分解为小问题

### 实际开发建议
1. **小数据量**：优先考虑代码简洁性
2. **大数据量**：优先考虑算法效率
3. **高频调用**：重点优化时间复杂度
4. **内存受限**：重点优化空间复杂度
5. **实时系统**：严格限制时间复杂度

---

*记住：没有完美的算法，只有适合场景的算法！*
