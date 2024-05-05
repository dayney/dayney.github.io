---
outline: deep
editLink: false
---

# 编程小技巧

1. 超过3个if...else if的使用技巧

   ```
   
   if（condition）{
   } else if (condition) {
   } else if (condition) {
   } else {}
   
   
   # 优化方案一， 使用switch 
   switch(expression) {
     case x:
       // code block
       break;
     case y:
       // code block
       break;
     case z:
       // code block
       break;
     default:
       // code block
   }
   
   
   # 优化方案一， 使用 oop
   
   const dictsObj = {
   	x: () ={
       	return '11'
       },
   	y: () ={
       	return '22'
       },
   	z: () ={
       	return '33'
       },
   	default: () => {
   		return 'default'
   	}
   }
   
   dictsObj[xx] ? dictsObj[xx]() : dictsObj.default();
   ```

2.  ?. 的使用，

   ```
   
   const result= res.data
   
   if (result && result.aa && result.aa.bb && result.aa.bb.cc) {}
   
   
   if (result?.aa?.bb?.cc)
   ```

3. 多条件判断

   ```
   
   //longhand
   if (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl') {
       //logic
   }
   //shorthand
   if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
      //logic
   }
   
   ```

4. 使用操作符 ||

   ```
   // Longhand
   if (test1 !== null || test1 !== undefined || test1 !== '') {
       let test2 = test1;
   }
   // Shorthand
   let test2 = test1 || '';
   ```

5. 使用操作符 空值合并操作符 ??, 如果某个属性不为 null 和 undefined，那么就获取该属性，如果该属性为 null 或 undefined，则取一个默认值：

   ```
   const test= null ?? 'default';
   console.log(test);
   // expected output: "default"
   const test1 = 0 ?? 2;
   console.log(test1);
   // expected output: 0
   
   const test1 = '' ?? 2;
   console.log(test1); // ''
   // expected output: 
   ```
   
   