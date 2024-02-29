import{_ as e,c as t,o as a,V as o}from"./chunks/framework.C-fAE6Ku.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"books/High_Performance/chapter9.md","filePath":"books/High_Performance/chapter9.md","lastUpdated":1705669135000}'),r={name:"books/High_Performance/chapter9.md"},i=o('<h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><blockquote><ol><li><p>通过避免使用eval()和Function()构造器来避免双重求值带来的性能消耗。同样的，给setTimeout()和setInterval()传递函数而不是字符串作为参数；</p></li><li><p>尽量使用直接量创建对象和数组。直接量的创建和初始化都比非直接量形式要快；</p></li><li><p>避免做重复的工作。当需要检测浏览器时，可使用延迟加载或条件预加载；</p></li><li><p>在进行数学计算时，考虑使用直接操作数字的二进制形式的位运算；【有难度，一般都直接操作，没有转化为二进制】</p></li><li><p>JavaScript的原生方法总比你写的任何代码都要快。尽量使用原生的方法。<a href="https://github.com/nefe/You-Dont-Need-jQuery" target="_blank" rel="noreferrer">don&#39;t use jquery</a>;</p></li></ol></blockquote>',2),l=[i];function n(c,s,_,p,d,h){return a(),t("div",null,l)}const m=e(r,[["render",n]]);export{f as __pageData,m as default};
