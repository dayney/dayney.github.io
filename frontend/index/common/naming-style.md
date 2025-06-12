---
outline: deep
editLink: false
---

# 通用命名规范

## 命名规则说明

### 1. 小驼峰命名法
首单词首字母小写，后面的单词首字母大写
```javascript
carerUpload
```

### 2. 大驼峰命名法
首单词首字母大写，后面的单词首字母大写
```javascript
CarerUpload
```

### 3. 短横线命名法
所有字母小写，单词之间使用短横线分隔
```javascript
pull-refresh-view
```

### 4. 下划线命名法
所有字母小写，单词之间用下划线分隔
```javascript
my_variable, calculate_interest, first_name
```

## 使用场景规范

### 1. 文件夹命名
使用小驼峰命名法
```javascript
// 正确示例
newHomeIndex

// 错误示例
mp_ecard_sdk
```

### 2. 文件命名
使用小驼峰命名法（组件、html、js文件）
```javascript
// 正确示例
drugListStepper

// 错误示例
mp_ecard_sdk
```

### 3. 图片文件命名
全部采用小写方式，优先选择单个单词命名，多个单词命名以下划线分隔
```javascript
// 正确示例
arrow_bottom.png

// 错误示例
add-icon.png
```

### 4. 变量命名
使用小驼峰命名法
```javascript
// 正确示例
titleBarHeight

// 错误示例
titlebarHeight
```

### 5. 常量命名
使用大写字母和下划线来组合命名
```javascript
// 正确示例
const PRESCRIPTION_GROUP_VERIFY_CODE = [3001, 3003, 3004, 3005] //处方分组校验拦截code

// 错误示例
const perscription_code = [3001, 3003, 3004, 3005]
```

### 6. 方法命名
使用小驼峰命名法
```javascript
// 正确示例
addTaskReward()

// 错误示例
AddTaskReward() // 首字母大写默认是 class
```

### 7. 自定义事件命名
使用小驼峰命名法
```javascript
// 正确示例
this.$emit('toggleClick')

// 错误示例
this.$emit('ToggleClick')
```

[o2team/guide](https://github.com/o2team/guide) 