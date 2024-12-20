---
outline: deep
editLink: false

---

# 在async await中使用finally 

## 1 背景

常规的**IIFE**的结构是 **(function(xx){})(xx)**。这样的格式，这次是在看**vant**的源码的时候发现，前面先传了一个 **0**。平时用的少，这次就记录下来。

## 2 源码
```javascript
(0, function(obj){
	// xxx
})(obj)
```

## 3 特殊性

​	1.	**逗号运算符**：(0, function(obj){ ... }) 中的 0, function(obj){ ... } 是使用逗号运算符来创建一个表达式。逗号运算符会返回最后一个表达式的值，所以这里实际的结果是 function(obj){ ... }。

​	2.	**上下文绑定问题**：在一些特定场景中，直接写 function(obj){ ... }({...}) 会将函数的调用绑定到它的定义上下文（可能是全局对象或调用环境）。通过加 (0, ...)，可以显式将函数调用绑定到默认上下文（通常是 undefined，在严格模式下）。

## 4 为什么这样写

这种写法的核心目的是 **避免意外的上下文绑定**。如果不这样处理，在某些环境中，直接调用匿名函数可能会绑定到不需要的上下文，例如 window 对象或其他意外对象。这种模式保证了调用时不会与外部上下文产生意外的绑定。

## 5 好处

1.	**避免上下文绑定错误：** 确保匿名函数在调用时不会受到定义上下文的影响。
2.	**与严格模式兼容：** 在严格模式下，this 为 undefined，可以避免潜在的错误。
3.	**更清晰的调用方式：** 通过逗号操作符分隔，明确意图，表示“这里的 0 是无关紧要的，只是确保函数调用的上下文正确”。

## 6 应用场景

1.	**模块化代码加载**
	```javascript
	(0, function(module){
    module.init();
	})({
    init: function() {
        console.log('模块初始化');
    }
	});
	```

2.	**浏览器兼容性代码：** 在一些低版本浏览器（如早期 IE）中，直接调用匿名函数可能出现意外的上下文绑定。

3.	**防止污染全局环境：** 当匿名函数内部逻辑复杂且上下文敏感时，用这种写法确保安全性。

## 7 总结

通过 (0, function(){...})({...}) 这种模式，我们可以：

•	确保函数调用不受上下文绑定的干扰。
	
•	避免潜在的 this 绑定问题。
	
•	适用于模块初始化、浏览器兼容等场景。
