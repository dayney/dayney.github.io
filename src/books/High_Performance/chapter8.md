---
outline: deep
editLink: false
---

# 高性能JavaScript读书笔记--编程实践

# 小结

> 1.  通过避免使用eval()和Function()构造器来避免双重求值带来的性能消耗。同样的，给setTimeout()和setInterval()传递函数而不是字符串作为参数；
>
> 2.  尽量使用直接量创建对象和数组。直接量的创建和初始化都比非直接量形式要快；
>
> 3.  避免做重复的工作。当需要检测浏览器时，可使用延迟加载或条件预加载；
>
> 4.  在进行数学计算时，考虑使用直接操作数字的二进制形式的位运算；【有难度，一般都直接操作，没有转化为二进制】
>
> 5.  JavaScript的原生方法总比你写的任何代码都要快。尽量使用原生的方法。[don't
>     use
>     jquery](https://github.com/nefe/You-Dont-Need-jQuery){target="_blank"};
      
