# JavaScript 命名规范

## 变量命名
- 使用 `camelCase` 命名变量
- 使用有意义的描述性名称
- 布尔值变量使用 `is`、`has`、`can` 等前缀
- 常量使用全大写 `UPPER_SNAKE_CASE`

```javascript
// 好的例子
const MAX_COUNT = 100;
let currentUser = null;
const isActive = true;
const hasPermission = false;
```

## 函数命名
- 使用 `camelCase` 命名函数
- 使用动词开头
- 使用描述性的名称

```javascript
// 好的例子
function getUserData() {}
function calculateTotal() {}
function handleSubmit() {}
```

## 类命名
- 使用 `PascalCase` 命名类
- 使用名词
- 避免使用缩写

```javascript
// 好的例子
class UserProfile {}
class PaymentProcessor {}
class DataValidator {}
```

## 私有成员
- 使用下划线前缀表示私有成员
- 私有方法也使用下划线前缀

```javascript
class User {
  constructor() {
    this._privateData = {};
  }
  
  _privateMethod() {}
}
```

## 模块命名
- 使用小写字母
- 使用连字符分隔单词
- 使用有意义的名称

```javascript
// 好的例子
import userService from './user-service';
import dataProcessor from './data-processor';
```

## 文件命名
- 使用小写字母
- 使用连字符分隔单词
- 使用有意义的名称
- 组件文件使用 PascalCase

```
// 好的例子
user-service.js
data-processor.js
UserProfile.jsx
```

## 命名约定总结
1. 变量和函数：camelCase
2. 类：PascalCase
3. 常量：UPPER_SNAKE_CASE
4. 私有成员：_camelCase
5. 模块和文件：kebab-case
6. 组件文件：PascalCase 