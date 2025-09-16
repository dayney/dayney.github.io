import{_ as n,c as s,o as a,V as p}from"./chunks/framework.CsbsVE7l.js";const h=JSON.parse('{"title":"apply与function一起使用，返回高阶函数","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/scene/apply-function.md","filePath":"frontend/scene/apply-function.md","lastUpdated":1757990493000}'),e={name:"frontend/scene/apply-function.md"},l=p(`<h1 id="apply与function一起使用-返回高阶函数" tabindex="-1">apply与function一起使用，返回高阶函数 <a class="header-anchor" href="#apply与function一起使用-返回高阶函数" aria-label="Permalink to &quot;apply与function一起使用，返回高阶函数&quot;">​</a></h1><h2 id="实现before函数" tabindex="-1">实现<strong>before</strong>函数 <a class="header-anchor" href="#实现before函数" aria-label="Permalink to &quot;实现**before**函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 实现一个before(n, func)通用函数，使调用func次数不超过n次</span></span>
<span class="line"><span>function before(n, func) {</span></span>
<span class="line"><span>  // 答题</span></span>
<span class="line"><span>  let count = 0;</span></span>
<span class="line"><span>  return function(...args) {</span></span>
<span class="line"><span>    if (count &lt; n) {</span></span>
<span class="line"><span>      count++;</span></span>
<span class="line"><span>      return func.apply(this, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const test = before(5, function(a, b) {</span></span>
<span class="line"><span>  console.log(a, b);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (let i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>  test(&#39;我执行了&#39;, i);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 正确输出</span></span>
<span class="line"><span>// 我执行了 0</span></span>
<span class="line"><span>// 我执行了 1</span></span>
<span class="line"><span>// 我执行了 2</span></span>
<span class="line"><span>// 我执行了 3</span></span>
<span class="line"><span>// 我执行了 4</span></span></code></pre></div>`,3),t=[l];function c(i,o,r,f,u,d){return a(),s("div",null,t)}const b=n(e,[["render",c]]);export{h as __pageData,b as default};
