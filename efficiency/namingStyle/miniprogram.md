# 小程序命名规范

## 项目结构规范

### 1. 常量管理
建议抽取成单独的 `const.js` 或 `XX.config.js` 文件
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

### 2. 目录结构规范
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