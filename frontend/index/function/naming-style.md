---
outline: deep
editLink: false
---

# 函数命名规范

## 1. 基本原则
- 遵循编程语言规范
- 保持命名语义化
- 保持函数职责单一

## 2. 函数命名规范

### 2.1 函数命名
- 使用驼峰命名法
- 函数名要有意义
- 函数名要能表达其功能

### 2.2 函数命名示例
```javascript
// 好的示例
function getUserInfo() {}
function calculateTotal() {}
function formatDate() {}

// 不好的示例
function get() {}
function calc() {}
function format() {}
```

## 3. 最佳实践

### 3.1 函数结构
- 函数职责单一
- 函数参数不超过 3 个
- 函数返回值类型明确

### 3.2 函数组织
- 相关函数放在同一模块
- 函数之间保持低耦合
- 避免函数之间的循环依赖

### 3.3 函数示例
```javascript
// 函数结构示例
function calculateTotal(items, taxRate, discount) {
  // 参数验证
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }

  // 计算逻辑
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax - discount;

  // 返回结果
  return {
    subtotal,
    tax,
    total
  };
}
```

## 4. 函数命名检查清单

- [ ] 函数名使用驼峰命名法
- [ ] 函数名有意义
- [ ] 函数名能表达其功能
- [ ] 函数职责单一
- [ ] 函数参数不超过 3 个
- [ ] 函数返回值类型明确
- [ ] 相关函数放在同一模块
- [ ] 函数之间保持低耦合
- [ ] 避免函数之间的循环依赖
- [ ] 函数结构清晰 