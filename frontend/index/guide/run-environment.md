---
outline: deep
editLink: false
---

# 前端运行环境四大组成部分完整划分文档

本文件用于清晰区分前端运行环境中的 **JavaScript 引擎 / DOM / BOM / Web API** 四大类，让你在开发中迅速判断某个功能属于哪个层级。

## 1. JavaScript 引擎（ECMAScript）

**说明：**

- 由 JavaScript 语言标准（ECMAScript）定义
- 不依赖浏览器，Node.js 也有（如 V8、SpiderMonkey）
- 只包含「语言」本身的能力

**包含内容：**

- 数据类型：Number、String、Boolean、Object、Symbol、BigInt
- 内置对象：Math、Date、JSON
- 容器：Array、Map、Set、WeakMap、WeakSet
- 控制结构：if、for、while、try...catch
- 异步：Promise、async/await
- 其他：正则、错误类型等

**不包含：**

- 没有 DOM
- 没有 BOM
- 没有 fetch
- 没有 setTimeout

> 

它就是“语言本身”，不负责操作页面，也不提供浏览器能力。

## 2. DOM（Document Object Model）

**说明：**

- 浏览器提供的 **页面结构树** 模型
- 用于操作 HTML 页面内容

**包含内容：**

- `document`
- 节点对象：Node、Element
- 获取元素：`querySelector`、`getElementById`
- 修改内容：`innerHTML`、`textContent`
- 修改样式：`style`、`classList`
- 事件机制：`addEventListener`

**典型例子：**

- 操作按钮、div、图片、文本
- 监听 click、input 等事件

> 

DOM 专门用于操作页面内容。

## 3. BOM（Browser Object Model）

**说明：**

- 浏览器窗口相关的功能
- 与页面内容无关

**包含内容：**

- `window`
- `location`（跳转、获取 URL）
- `history`（前进、后退）
- `navigator`（浏览器信息、UA、权限等）
- `screen`（屏幕大小）
- 弹窗：`alert`、`confirm`、`prompt`

**典型例子：**

- 页面跳转：`location.href = 'xxx'`
- 浏览器前进：`history.forward()`
- 获取用户代理：`navigator.userAgent`

> 

BOM 是浏览器的“窗口系统”，不是页面内容。

## 4. Web API（浏览器提供的扩展能力）

**说明：**

- 浏览器额外提供的模块化能力
- 不属于 DOM，也不属于 BOM
- 不属于语言本身

**包含内容（常见）：**

- 网络：fetch、XMLHttpRequest
- 存储：localStorage、sessionStorage、IndexedDB
- 观察者：**IntersectionObserver**、MutationObserver、ResizeObserver
- 线程：Web Worker、Service Worker
- 通信：WebSocket
- 性能：Performance API
- 剪贴板：Clipboard API
- 通知：Notification API
- 定时器：setTimeout、setInterval（是 Web API）

**典型例子：**

- 图片懒加载（使用 IntersectionObserver）
- 本地缓存（localStorage）
- 后台推送（Service Worker）
- 网络请求（fetch）

> 

Web API 是浏览器额外加给 JavaScript 的“外挂能力”。

## 总结对比表

| 分类                              | 谁定义？  | 是否浏览器提供？ | 能否操作页面？       | 典型用途               |
| --------------------------------- | --------- | ---------------- | -------------------- | ---------------------- |
| **JavaScript 引擎（ECMAScript）** | ECMA 国际 | ❌                | ❌                    | 语言基础能力           |
| **DOM**                           | 浏览器    | ✔️                | ✔️                    | 操作页面、修改元素     |
| **BOM**                           | 浏览器    | ✔️                | ❌                    | 操作浏览器窗口         |
| **Web APIs**                      | 浏览器    | ✔️                | ❌（但可与 DOM 配合） | 网络、缓存、观察、通信 |