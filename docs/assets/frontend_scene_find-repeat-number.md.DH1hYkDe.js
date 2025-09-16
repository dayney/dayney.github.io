import{_ as s,c as n,o as a,V as t}from"./chunks/framework.CsbsVE7l.js";const _=JSON.parse('{"title":"找出字符串的重复次数","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/scene/find-repeat-number.md","filePath":"frontend/scene/find-repeat-number.md","lastUpdated":1757991339000}'),e={name:"frontend/scene/find-repeat-number.md"},p=t(`<h1 id="找出字符串的重复次数" tabindex="-1">找出字符串的重复次数 <a class="header-anchor" href="#找出字符串的重复次数" aria-label="Permalink to &quot;找出字符串的重复次数&quot;">​</a></h1><h2 id="实现一个countsubstring-str-substr-通用函数-统计substr在str中出现的次数-不允许重复匹配" tabindex="-1">实现一个countSubstring(str, subStr)通用函数，统计subStr在str中出现的次数，不允许重复匹配 <a class="header-anchor" href="#实现一个countsubstring-str-substr-通用函数-统计substr在str中出现的次数-不允许重复匹配" aria-label="Permalink to &quot;实现一个countSubstring(str, subStr)通用函数，统计subStr在str中出现的次数，不允许重复匹配&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function countSubstring(str, subStr) {</span></span>
<span class="line"><span>  // 答题</span></span>
<span class="line"><span>  if (!str || !subStr) {</span></span>
<span class="line"><span>    return 0</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  let totleLength = str.length;</span></span>
<span class="line"><span>  // 用正则全部替换的方式（非重叠）：差值/匹配串长度</span></span>
<span class="line"><span>  const regex = new RegExp(subStr, &#39;g&#39;)</span></span>
<span class="line"><span>  const finshedStr = str.replace(regex, &#39;&#39;)</span></span>
<span class="line"><span>  return (str.length - finshedStr.length) / subStr.length</span></span>
<span class="line"><span>  // return str.split(subStr).length - 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(countSubstring(&#39;aaaaaaa&#39;,  &#39;aa&#39;))</span></span>
<span class="line"><span>// 期望输出：3</span></span></code></pre></div>`,3),r=[p];function l(i,c,o,u,d,b){return a(),n("div",null,r)}const g=s(e,[["render",l]]);export{_ as __pageData,g as default};
