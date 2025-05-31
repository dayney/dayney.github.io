---
outline: deep
editLink: false

---

# BEM命名方式

## 1 背景

主要是为了规范CSS的命名方式，常规的使用BEM格式，本方法是是使用**JavaScript**的方式来生成对应的**class**名称，保证了**class**的命名风格统一，但是也会相应的增加对源码**css**的编写速度有一定的影响，不喜勿碰，有需要的可以借鉴下。

:::tip
BEM（Block-Element-Modifier）命名风格：）是一种 CSS 命名方法论，用于创建可维护且具有可读性的类名。BEM 可以让你更清晰地理解和管理代码，尤其是在大型项目中。
:::


## 2 BEM 将类名分为三部分：
	1.Block（块）：独立的组件或模块。
	2.Element（元素）：块中的组成部分。
	3.Modifier（修饰符）：用于修饰块或元素，表示它们的不同状态或外观。

## 3 示例：
BEM 命名规则
- Block：.block
- Element：.block__element
- Modifier：.block__element--modifier 或 .block--modifier  

## 4 源码
```javascript
    const PREFIX = 'Dy_'

    /**
     * 生成符合特定命名约定的类名字符串
     * 该函数接受一个基础类名和一个修饰符数组，然后根据命名约定PREFIX和双下划线('--')连接这些类名和修饰符
     * 
     * @param {string} name - 基础类名
     * @param {Array} mods - 修饰符数组，用于和基础类名组合生成新的类名
     * @returns {string} - 返回连接后的类名字符串，用于应用到HTML元素上
     */
    function join(name, mods) {
      name = PREFIX + name;
      mods = mods.map(function (mod) {
        return name + '--' + mod;
      });
      mods.unshift(name);
      return mods.join(' ');
    }
    /**
     * 遍历配置对象或数组，将配置项添加到模块列表中
     * 
     * 该函数的目的是为了处理各种类型的配置数据（单个配置项、配置数组或配置对象），
     * 并将这些配置项以特定的方式添加到一个模块列表中，以便于统一管理和后续处理
     * 
     * @param {Array} mods - 用于收集配置项的模块列表
     * @param {string | number | Array | Object} conf - 配置项或配置集合，可以是字符串、数字、数组或对象
     */
    function traversing(mods, conf) {
      if (!conf) {
        return;
      }

      if (typeof conf === 'string' || typeof conf === 'number') {
        mods.push(conf);
      } else if (Array.isArray(conf)) {
        conf.forEach(function (item) {
          traversing(mods, item);
        });
      } else if (typeof conf === 'object') {
        Object.keys(conf).forEach(function (key) {
          conf[key] && mods.push(key);
        });
      }
    }

    function bem(name, conf) {
      var mods = [];
      traversing(mods, conf);
      return join(name, mods);
    }
    let dot = true;
    console.log(bem('info1')); // Dy_info1
    console.log(bem('info2', { dot, qq: 'qq-qqq' })); // Dy_info2 Dy_info2--dot Dy_info2--qq
```

## 5 总结

1. 可以生成统一风格的**class**名
2. 可以任意为一套系统定义前缀**PREFIX**，方便管理
3. 增加了**class**的使用记忆成本 
4. 这个主要是参考vant中的源码