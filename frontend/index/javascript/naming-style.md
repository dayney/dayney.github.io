---
outline: deep
editLink: false
---

# JavaScript 命名规范

## 基本原则
- 使用有意义的变量名
- 遵循驼峰命名法
- 常量使用大写字母

## 命名规则
1. 变量：使用驼峰命名法
2. 常量：使用大写字母和下划线
3. 函数：使用驼峰命名法
4. 类：使用大驼峰命名法

## 示例
```javascript
const MAX_COUNT = 100;
let currentUser = {};
function getUserData() {}
class UserProfile {}
```

## 详细规范

### 1. 变量命名
- 使用有意义的名称
- 使用驼峰命名法
- 避免使用单字母（除非是循环中的 i, j, k）
```javascript
// 好的示例
let userName = 'John';
let isActive = true;
let userList = [];

// 不好的示例
let a = 'John';
let flag = true;
let arr = [];
```

### 2. 常量命名
- 使用全大写字母
- 使用下划线分隔单词
```javascript
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_CONFIG = {
  timeout: 5000,
  retries: 3
};
```

### 3. 函数命名
- 使用动词开头
- 使用驼峰命名法
- 使用描述性的名称
```javascript
function getUserData() {}
function calculateTotal() {}
function handleSubmit() {}
function isUserActive() {}
```

### 4. 类命名
- 使用大驼峰命名法
- 使用名词
```javascript
class UserProfile {}
class PaymentProcessor {}
class DataValidator {}
```

### 5. 私有成员
- 使用下划线前缀
```javascript
class User {
  constructor() {
    this._privateMethod();
  }
  
  _privateMethod() {
    // 私有方法
  }
}
```

### 6. 模块导出
- 使用有意义的名称
- 保持一致性
```javascript
// 好的示例
export const userService = {};
export class UserController {}
export function validateUser() {}

// 不好的示例
export const s = {};
export class c {}
export function f() {}
```

### 7. 事件处理函数
- 使用 `handle` 或 `on` 前缀
```javascript
function handleClick() {}
function onScroll() {}
function handleSubmit() {}
```

### 8. 布尔值变量
- 使用 `is`、`has`、`can` 等前缀
```javascript
let isActive = true;
let hasPermission = false;
let canEdit = true;
```

### 9. 数组命名
- 使用复数形式
```javascript
let users = [];
let items = [];
let options = [];
```

### 10. 对象命名
- 使用单数形式
```javascript
let user = {};
let config = {};
let settings = {};
```

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

[o2team/guide](https://github.com/o2team/guide) 