---
outline: deep
editLink: false

---

# 常见响应头的作用及浏览器处理方式

##  1. Content-Type

- 作用: 指定响应内容的媒体类型，告诉浏览器如何解释响应体。
- 浏览器处理:
- `text/html`：渲染为 HTML 页面。
- `application/json`：将内容作为 JSON 解析（如果由 JavaScript 发起的 Fetch 或 XMLHttpRequest 请求）。
- `application/javascript`：将内容作为 JavaScript 执行（如 `<script>` 元素）。
- image/png 或其他图片类型：将内容作为图片渲染。

## 2. Access-Control-Allow-Origin

- 作用: 控制跨域资源共享 (CORS)。
- 浏览器处理:
- 如果响应头中包含 Access-Control-Allow-Origin 且值为请求源（或 *），则允许跨域访问。
- 如果没有此头或值不匹配，浏览器会阻止跨域请求的响应数据读取（适用于 Fetch、XHR 等请求）。

## 3. Cache-Control（在**nginx**上可以设置）

- 作用: 控制浏览器的缓存行为。
- 浏览器处理:
- Cache-Control: no-cache：强制浏览器每次都向服务器验证资源是否被更新。
- Cache-Control: max-age=3600：浏览器会在本地缓存资源，缓存有效期为 3600 秒。
- Cache-Control: no-store：浏览器不会缓存资源。

## 4. Content-Disposition

- 作用: 控制浏览器对内容的默认处理方式。
- 浏览器处理:
- Content-Disposition: inline：内容将在浏览器中直接显示（默认行为）。
- Content-Disposition: attachment; filename="example.txt"：提示用户下载文件，并将文件命名为 example.txt。

## 5. Set-Cookie

- 作用: 设置客户端的 Cookie。
- 浏览器处理:
- 浏览器会保存服务器返回的 Cookie，并在后续请求中自动携带该 Cookie（如果域名和路径匹配）。
- 可配合 HttpOnly 防止客户端 JavaScript 访问 Cookie。
- 可配合 SameSite 控制 Cookie 的跨站请求行为。

## 6. Location

- 作用: 指定重定向的目标地址。
- 浏览器处理:
- 如果状态码为 3xx（如 302 Found），浏览器会根据 Location 头的值自动重定向到指定地址。
