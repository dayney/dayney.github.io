import{_ as a,c as e,o as t,V as o}from"./chunks/framework.yfXT0vyi.js";const m=JSON.parse('{"title":"高性能JavaScript读书笔记--字符串和正则表达式","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"books/High_Performance/chapter6.md","filePath":"books/High_Performance/chapter6.md","lastUpdated":1705663669000}'),r={name:"books/High_Performance/chapter6.md"},i=o('<h1 id="高性能javascript读书笔记-字符串和正则表达式" tabindex="-1">高性能JavaScript读书笔记--字符串和正则表达式 <a class="header-anchor" href="#高性能javascript读书笔记-字符串和正则表达式" aria-label="Permalink to &quot;高性能JavaScript读书笔记--字符串和正则表达式&quot;">​</a></h1><h1 id="需要加强的" tabindex="-1">需要加强的 <a class="header-anchor" href="#需要加强的" aria-label="Permalink to &quot;需要加强的&quot;">​</a></h1><p>[ ] 1. 整章需要加强</p><p><strong>正则表达式相对程序员来说同鬼符对对道士的重要性</strong></p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><blockquote><ol><li><p>当链接数量巨大或尺寸巨大的字符串时，数组项合并是唯一在IE7及更早版本中性能合理的方法；</p></li><li><p>如果不需要考虑IE7及更早版本的性能，数组项合并是最慢的字符串连接方法之一。推荐使用简单的+和+=操作符替代，避免不必要的中间字符串；</p></li><li><p>回溯既是正则表达式匹配功能的基本组成部分，也是正则表达式的低效之源；</p></li><li><p>回溯失控发生在正则表达式本应快速匹配的地方，但因为某些特殊的字符串匹配动作导致运行缓慢甚至浏览器崩溃。避免这个问题的方法是：是相邻的字元互斥，避免嵌套量词对同一字符串的相同部分多次匹配，通过重复利用预查的原子组去除不必要的回溯；</p></li><li><p>提高正则表达式效率的各种技术手段有助于正则表达式更快的匹配，并非匹配位置花更少的时间；</p></li><li><p>正则表达式并不总是完成工作的最佳工具，尤其当你只搜索字面字符串的时候；</p></li><li><p>尽管许多方法可以去除字符串的首尾空白，但使用两个简单的正则表达式（一个用来去除头部哦你空白，一个用来去除尾部空白）来处理大量字符串内容能提供一个简洁而跨浏览器的方法。从字符串末尾开始循环向前搜索第一个非空白字符，或者将此技术同正则表达式结合起来，会提供一个更好的替代方案，它很少收到字符串长度影响；</p></li></ol></blockquote>',6),l=[i];function p(c,s,n,_,h,d){return t(),e("div",null,l)}const u=a(r,[["render",p]]);export{m as __pageData,u as default};