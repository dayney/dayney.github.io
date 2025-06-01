---
outline: deep
editLink: false
---

# JavaScript 命名规范

## 1. 基本原则
- 使用有意义的变量名
- 遵循驼峰命名法
- 常量使用大写字母

## 2. 命名规则
1. 变量：使用驼峰命名法
2. 常量：使用大写字母和下划线
3. 函数：使用驼峰命名法
4. 类：使用大驼峰命名法

## 3. 详细规范

### 3.1 变量命名
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

### 3.2 常量命名
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

### 3.3 函数命名
- 使用动词开头
- 使用驼峰命名法
- 使用描述性的名称

```javascript
function getUserData() {}
function calculateTotal() {}
function handleSubmit() {}
function isUserActive() {}
```

### 3.4 类命名
- 使用大驼峰命名法
- 使用名词

```javascript
class UserProfile {}
class PaymentProcessor {}
class DataValidator {}
```

### 3.5 私有成员
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

### 3.6 模块导出
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

### 3.7 事件处理函数
- 使用 `handle` 或 `on` 前缀

```javascript
function handleClick() {}
function onScroll() {}
function handleSubmit() {}
```

### 3.8 布尔值变量
- 使用 `is`、`has`、`can` 等前缀

```javascript
let isActive = true;
let hasPermission = false;
let canEdit = true;
```

### 3.9 数组命名
- 使用复数形式

```javascript
let users = [];
let items = [];
let options = [];
```

### 3.10 对象命名
- 使用单数形式

```javascript
let user = {};
let config = {};
let settings = {};
```

## 4. 命名规范检查清单

- [ ] 变量使用 camelCase
- [ ] 常量使用 UPPER_SNAKE_CASE
- [ ] 函数使用 camelCase
- [ ] 类使用 PascalCase
- [ ] 私有成员使用下划线前缀
- [ ] 使用有意义的名称
- [ ] 避免使用缩写
- [ ] 布尔值使用 is、has、can 等前缀
- [ ] 函数使用动词开头
- [ ] 类使用名词
- [ ] 数组使用复数形式
- [ ] 对象使用单数形式 