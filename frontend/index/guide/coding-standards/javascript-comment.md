---
outline: deep
editLink: false
---

# JavaScript注释规范

> 提示：函数的注释可以使用阿里千义来对方法进行注释。

## 1. 注释规范

### 1.1 单行注释

##### [强制] 必须独占一行。`//` 后跟一个空格，缩进与下一行被注释说明的代码一致。

### 1.2 多行注释

##### [建议] 避免使用 `/*...*/` 这样的多行注释。有多行注释内容时，使用多个单行注释。

### 1.3 文档化注释

##### [强制] 为了便于代码阅读和自文档化，以下内容必须包含以 `/**...*/` 形式的块注释中。

解释：
1. 文件
2. namespace
3. 类
4. 函数或方法
5. 类属性
6. 事件
7. 全局变量
8. 常量
9. AMD 模块

##### [强制] 文档注释前必须空一行。

##### [建议] 自文档化的文档说明 what，而不是 how。

### 1.4 类型定义

##### [强制] 类型定义都是以`{`开始, 以`}`结束。

解释：

常用类型如：{string}, {number}, {boolean}, {Object}, {Function}, {RegExp}, {Array}, {Date}。

类型不仅局限于内置的类型，也可以是自定义的类型。比如定义了一个类 Developer，就可以使用它来定义一个参数和返回值的类型。

### 1.5 文件注释

##### [强制] 文件顶部必须包含文件注释，用 `@file` 标识文件说明。

示例：

```javascript
/**
 * @file Describe the file
 */
```

##### [建议] 文件注释中可以用 `@author` 标识开发者信息。

### 1.6 命名空间注释

##### [建议] 命名空间使用 `@namespace` 标识。

### 1.7 类注释

##### [建议] 使用 `@class` 标记类或构造函数。

##### [建议] 使用 `@extends` 标记类的继承信息。

##### [强制] 使用包装方式扩展类成员时， 必须通过 `@lends` 进行重新指向。

##### [强制] 类的属性或方法等成员信息使用 `@public` / `@protected` / `@private` 中的任意一个，指明可访问性。

### 1.8 函数/方法注释

##### [强制] 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识。

##### [强制] 参数和返回值注释必须包含类型信息和说明。

##### [建议] 当函数是内部函数，外部不可访问时，可以使用 `@inner` 标识。

### 1.9 事件注释

##### [强制] 必须使用 `@event` 标识事件，事件参数的标识与方法描述的参数标识相同。

##### [强制] 在会广播事件的函数前使用 `@fires` 标识广播的事件，在广播事件代码前使用 `@event` 标识事件。

### 1.10 常量注释

##### [强制] 常量必须使用 `@const` 标记，并包含说明和类型信息。

### 1.11 复杂类型注释

##### [建议] 对于类型未定义的复杂结构的注释，可以使用 `@typedef` 标识来定义。

### 1.12 AMD 模块注释

##### [强制] AMD 模块使用 `@module` 或 `@exports` 标识。

### 1.13 细节注释

##### [建议] 细节注释遵循单行注释的格式。说明必须换行时，每行是一个单行注释的起始。

##### [强制] 有时我们会使用一些特殊标记进行说明。特殊标记必须使用单行注释的形式。下面列举了一些常用标记：

解释：

1. TODO: 有功能待实现。此时需要对将要实现的功能进行简单说明。
2. FIXME: 该处代码运行没问题，但可能由于时间赶或者其他原因，需要修正。此时需要对如何修正进行简单说明。
3. HACK: 为修正某些问题而写的不太好或者使用了某些诡异手段的代码。此时需要对思路或诡异手段进行描述。
4. XXX: 该处存在陷阱。此时需要对陷阱进行描述。 