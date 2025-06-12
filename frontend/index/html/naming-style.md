---
outline: deep
editLink: false
---

# HTML 命名规范

## 基本原则
- 使用语义化标签
- 保持结构清晰
- 遵循 HTML5 规范

## 命名规则
1. 类名使用小写字母
2. 使用连字符（-）分隔单词
3. 避免使用下划线（_）和驼峰命名

## 示例
```html
<!-- 好的示例 -->
<div class="header">
  <nav class="main-nav">
    <ul class="nav-list">
      <li class="nav-item">...</li>
    </ul>
  </nav>
</div>

<!-- 不好的示例 -->
<div class="Header">
  <nav class="mainNav">
    <ul class="nav_list">
      <li class="navItem">...</li>
    </ul>
  </nav>
</div>
```

## 语义化标签使用规范

### 1. 文档结构标签
- `<header>`: 页头
- `<nav>`: 导航
- `<main>`: 主要内容
- `<article>`: 文章
- `<section>`: 区块
- `<aside>`: 侧边栏
- `<footer>`: 页脚

### 2. 文本标签
- `<h1>` 到 `<h6>`: 标题
- `<p>`: 段落
- `<strong>`: 重要文本
- `<em>`: 强调文本
- `<mark>`: 标记文本
- `<time>`: 时间

### 3. 列表标签
- `<ul>`: 无序列表
- `<ol>`: 有序列表
- `<li>`: 列表项
- `<dl>`: 定义列表
- `<dt>`: 定义术语
- `<dd>`: 定义描述

### 4. 表单标签
- `<form>`: 表单
- `<fieldset>`: 表单分组
- `<legend>`: 表单分组标题
- `<label>`: 标签
- `<input>`: 输入框
- `<button>`: 按钮

## 最佳实践

### 1. 文档类型声明
```html
<!DOCTYPE html>
<html lang="zh-CN">
```

### 2. 字符编码
```html
<meta charset="UTF-8">
```

### 3. 视口设置
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 4. 可访问性
- 使用 `alt` 属性描述图片
- 使用 `aria-*` 属性增强可访问性
- 确保表单控件有对应的 `label`

### 5. 性能优化
- 使用 `async` 或 `defer` 加载脚本
- 使用 `loading="lazy"` 延迟加载图片

## 命名规范检查清单

- [ ] 使用语义化标签
- [ ] 类名使用小写字母
- [ ] 使用连字符分隔单词
- [ ] 避免使用下划线
- [ ] 避免使用驼峰命名
- [ ] 使用正确的文档类型声明
- [ ] 设置正确的字符编码
- [ ] 设置正确的视口
- [ ] 添加图片 alt 属性
- [ ] 使用 aria-* 属性
- [ ] 表单控件有对应的 label
- [ ] 使用 async 或 defer 加载脚本
- [ ] 使用 lazy 加载图片 

[o2team/guide](https://github.com/o2team/guide) 