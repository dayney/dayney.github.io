---
outline: deep
editLink: false
---

# replaceAll 匹配标记

## 1 背景

记得以前有个需求是，一篇文章，要对后端给的关键词进行高亮标记，我记得以前是使用 **eval** 来做的，虽然知道不应该使用 **eval**，但是一直没有找到合适的方式，后面还是用的**eval**的方案。

## 2 前言

一篇文章或者产品描述的时候，对关键词进行高亮显示。

## 3 实现

关键点
- RegExp的第二个参数的运用
- replaceAll第二个参数的运用，可以是一个 ** function **，匹配后返回的是命中的res，然后进行替换。

```
function highlightKeywords(text, keywords) {
      // 将关键词转换为正则表达式
      const regex = new RegExp(keywords.join('|'), 'ig');

      // 使用 replace 方法替换匹配的关键词为带有红色标记的版本
      return text.replaceAll(regex, (match) => `<span style="color:red;">${match}</span>`);
    }

// 示例用法
const passage = "今天天气非常好,我打算去公园散散步。";
const keywords = ["天气", "公园"];
const highlightedText = highlightKeywords(passage, keywords);
console.log(highlightedText);
```

###### tips
现在有 gpt，关键时候使用gpt，很有帮助和用处。

