---
outline: deep
editLink: false

---

# 在async await中使用finally 

## 1 背景

使用**async await**模式，主要是将异步模式改为同步模式，但是同时有些场景也需要无论是**resolve**还是**reject**都需要去进行一些必要的操作，如在掉用接口前，需要打开**loading**效果，在调用有结果之后，页面给响应式数据赋值之后，关闭**loading**效果，此时使用**await async**的方式，就会显得比较**麻烦**，需要在**resolve**和**reject**两种模式下关闭**loading**效果（例如在vue中），现在就是想在页面渲染完成或者**reject**之后关闭**loading**效果。

## 2 前言

在调用后端接口之后，页面重新渲染之后或者确定不渲染之后，关闭**loading**效果。

## 3 实现

关键点

- 链式操作可以直接在**finally**中操作，使用**async await**模式的时候，可以使用如下方案。

```
async () => {
  try {
    const result1 = await firstAsynchronousFunction();
    const result2 = await secondAsynchronousFunction(result1);
    console.log(result2);
  } catch(err) {
    throw new Error(`Something failed`);
  } finally {
    console.log(`All Tasks are Done`);
  }
}
```

###### 参考资源

[https://stackoverflow.com/questions/50373337/how-to-use-promise-prototype-finally-in-async-await-syntax](https://stackoverflow.com/questions/50373337/how-to-use-promise-prototype-finally-in-async-await-syntax)

