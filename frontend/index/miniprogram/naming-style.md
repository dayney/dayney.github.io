---
outline: deep
editLink: false
---

# 小程序命名规范

## 1. 基本原则
- 遵循微信小程序官方规范
- 保持命名语义化
- 保持项目结构清晰

## 2. 项目结构规范

### 2.1 目录结构
```
.
├── api.js    // 当前模块所有的api
├── const.js  // 当前模块所有的常量
├── utils.js  // 当前模块所有通用的方法
├── component
│   ├── activeCouponFromSky
│   │   ├── activeCouponFromSky.js
│   │   ├── activeCouponFromSky.json
│   │   ├── activeCouponFromSky.wxml
│   │   └── activeCouponFromSky.wxss
│   └── ……
├── archivesDetails
│   ├── api.js     // 当前页面使用的api
│   ├── const.js   // 当前页面使用的常量
│   ├── utils.js   // 当前页面使用通用的方法
│   ├── component  // 当前页面抽离出来的组件
│   │   ├── componentDemo
│   │   │   ├── componentDemo.js
│   │   │   ├── componentDemo.json
│   │   │   ├── componentDemo.wxml
│   │   │   └── componentDemo.wxss
│   │   └── ……
│   ├── archivesDetails.js
│   ├── archivesDetails.json
│   ├── archivesDetails.wxml
│   └── archivesDetails.wxss
└── ……
```

### 2.2 文件命名规范
- 页面文件：使用小写字母，多个单词用连字符（-）连接
- 组件文件：使用小写字母，多个单词用连字符（-）连接
- 工具类文件：使用小写字母，多个单词用连字符（-）连接

## 3. 代码命名规范

### 3.1 常量管理
```javascript
// const.js
export const PROVINCE_MAX_LENGTH = 16; // 默认打开省区最大数量
export const QQ_MAP_GLJS_KEY = 'XXXX'; // 腾讯地图KEY

// 定义后端api中返回的 code
export const ERRNO = {
  SUCCESS: 0,
}

// 使用场景
if (code === ERRNO.SUCCESS) {}
```

### 3.2 变量命名
- 使用驼峰命名法
- 变量名要有意义
- 布尔类型变量使用 is、has、can 等前缀

### 3.3 函数命名
- 使用驼峰命名法
- 函数名要能表达其功能
- 事件处理函数使用 handle 前缀

### 3.4 组件命名
- 使用驼峰命名法
- 组件名要能表达其功能
- 组件名要有意义

### 3.5 样式命名
- 使用小写字母
- 多个单词用连字符（-）连接
- 使用 BEM 命名规范

## 4. 最佳实践

### 4.1 页面配置
```javascript
// 页面配置
Page({
  data: {
    // 数据
  },
  onLoad() {
    // 生命周期函数
  },
  // 方法
})
```

### 4.2 组件配置
```javascript
// 组件配置
Component({
  properties: {
    // 属性
  },
  data: {
    // 数据
  },
  methods: {
    // 方法
  }
})
```

### 4.3 工具函数
```javascript
// 工具函数
export const formatDate = (date) => {
  // 格式化日期
}
```

## 5. 命名规范检查清单

- [ ] 目录结构符合规范
- [ ] 文件命名符合规范
- [ ] 常量使用大写字母
- [ ] 变量使用驼峰命名法
- [ ] 函数使用驼峰命名法
- [ ] 组件使用驼峰命名法
- [ ] 样式使用小写字母和连字符
- [ ] 使用 BEM 命名规范
- [ ] 布尔类型变量使用 is、has、can 等前缀
- [ ] 事件处理函数使用 handle 前缀
- [ ] 组件名有意义
- [ ] 函数名能表达其功能
- [ ] 变量名有意义 

[o2team/guide](https://github.com/o2team/guide) 