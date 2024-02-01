---
outline: deep
editLink: false
---

# Vue3中`compositon`自动引入

## 减轻开发的负担，主要是在当前的`.vue`(以及符合模式的文件中)中减少引入

### 1. 安装

```
npm i -D unplugin-auto-import
```

### 2. 在`vite.config.js`中配置

```javascript
import AutoImport from 'unplugin-auto-import/vite';

AutoImport({
  // targets to transform
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
    /\.md$/ // .md
  ],
  imports: [
    'vue', // 自动引入vue内容
    'vue-router' // 自动引入vue-router内容
  ]
}),
```

### 3. 此插件不仅可以自动引入`vue`、`vue-rouer`还能引入三方的公共库， 如：`element-plus`、`axios`等

### 4. 参考地址[AutoImport](https://www.npmjs.com/package/unplugin-auto-import)
