import{_ as s,c as n,o as a,V as p}from"./chunks/framework.C-fAE6Ku.js";const g=JSON.parse('{"title":"编程小技巧","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/others/litterTips.md","filePath":"frontend/others/litterTips.md","lastUpdated":1714114452000}'),e={name:"frontend/others/litterTips.md"},l=p(`<h1 id="编程小技巧" tabindex="-1">编程小技巧 <a class="header-anchor" href="#编程小技巧" aria-label="Permalink to &quot;编程小技巧&quot;">​</a></h1><ol><li><p>超过3个if...else if的使用技巧</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>if（condition）{</span></span>
<span class="line"><span>} else if (condition) {</span></span>
<span class="line"><span>} else if (condition) {</span></span>
<span class="line"><span>} else {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 优化方案一， 使用switch </span></span>
<span class="line"><span>switch(expression) {</span></span>
<span class="line"><span>  case x:</span></span>
<span class="line"><span>    // code block</span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>  case y:</span></span>
<span class="line"><span>    // code block</span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>  case z:</span></span>
<span class="line"><span>    // code block</span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>    // code block</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 优化方案一， 使用 oop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const dictsObj = {</span></span>
<span class="line"><span>	x: () ={</span></span>
<span class="line"><span>    	return &#39;11&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>	y: () ={</span></span>
<span class="line"><span>    	return &#39;22&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>	z: () ={</span></span>
<span class="line"><span>    	return &#39;33&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>	default: () =&gt; {</span></span>
<span class="line"><span>		return &#39;default&#39;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dictsObj[xx] ? dictsObj[xx]() : dictsObj.default();</span></span></code></pre></div></li><li><p>?. 的使用，</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>const result= res.data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (result &amp;&amp; result.aa &amp;&amp; result.aa.bb &amp;&amp; result.aa.bb.cc) {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (result?.aa?.bb?.cc)</span></span></code></pre></div><ol start="3"><li><p>多条件判断</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>//longhand</span></span>
<span class="line"><span>if (x === &#39;abc&#39; || x === &#39;def&#39; || x === &#39;ghi&#39; || x ===&#39;jkl&#39;) {</span></span>
<span class="line"><span>    //logic</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//shorthand</span></span>
<span class="line"><span>if ([&#39;abc&#39;, &#39;def&#39;, &#39;ghi&#39;, &#39;jkl&#39;].includes(x)) {</span></span>
<span class="line"><span>   //logic</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>使用操作符 ||</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Longhand</span></span>
<span class="line"><span>if (test1 !== null || test1 !== undefined || test1 !== &#39;&#39;) {</span></span>
<span class="line"><span>    let test2 = test1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// Shorthand</span></span>
<span class="line"><span>let test2 = test1 || &#39;&#39;;</span></span></code></pre></div></li><li><p>使用操作符 ??</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const test= null ?? &#39;default&#39;;</span></span>
<span class="line"><span>console.log(test);</span></span>
<span class="line"><span>// expected output: &quot;default&quot;</span></span>
<span class="line"><span>const test1 = 0 ?? 2;</span></span>
<span class="line"><span>console.log(test1);</span></span>
<span class="line"><span>// expected output: 0</span></span></code></pre></div></li></ol>`,4),i=[l];function t(c,o,d,r,h,u){return a(),n("div",null,i)}const f=s(e,[["render",t]]);export{g as __pageData,f as default};
