---
outline: deep
editLink: false
---

# 淘宝镜像报错

## 1 前言

主要是在使用 ` npm install` 可能会报如下错误。
```
npm ERR! code CERT_HAS_EXPIRED
npm ERR! errno CERT_HAS_EXPIRED
npm ERR! request to https://registry.npm.taobao.org/@commitlint%2fconfig-conventional failed, reason: certificate has expired

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/krui/.npm/_logs/2024-02-27T06_54_17_077Z-debug.log
```

## 2. 效果展示 

主要是应为淘宝的镜像源过期了，需要更新到最新的镜像源
```
# .npmrc 文件

# 老的地址
# registry=https://registry.npm.taobao.org
// 新的地址
registry=https://registry.npmmirror.com
#disturl=https://npm.taobao.org/dist
SASS_BINARY_SITE=http://npm.taobao.org/mirrors/node-sass
```

