import{_ as s,c as a,o as n,V as i}from"./chunks/framework.C-fAE6Ku.js";const g=JSON.parse('{"title":"编程小技巧","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/others/litterTips.md","filePath":"frontend/others/litterTips.md","lastUpdated":1717399818000}'),p={name:"frontend/others/litterTips.md"},l=i(`<h1 id="编程小技巧" tabindex="-1">编程小技巧 <a class="header-anchor" href="#编程小技巧" aria-label="Permalink to &quot;编程小技巧&quot;">​</a></h1><ol><li><p>超过3个if...else if的使用技巧</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（condition）{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (condition) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (condition) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 优化方案一， 使用switch </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(expression) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // code block</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 优化方案一， 使用 oop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dictsObj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	x: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    	return </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;11&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	y: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    	return </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;22&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	z: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    	return </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;33&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	default: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;default&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dictsObj[xx] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dictsObj[xx]() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dictsObj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div></li><li><p>?. 的使用，</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
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
<span class="line"><span>let test2 = test1 || &#39;&#39;;</span></span></code></pre></div></li><li><p>使用操作符 空值合并操作符 ??, 如果某个属性不为 null 和 undefined，那么就获取该属性，如果该属性为 null 或 undefined，则取一个默认值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const test= null ?? &#39;default&#39;;</span></span>
<span class="line"><span>console.log(test);</span></span>
<span class="line"><span>// expected output: &quot;default&quot;</span></span>
<span class="line"><span>const test1 = 0 ?? 2;</span></span>
<span class="line"><span>console.log(test1);</span></span>
<span class="line"><span>// expected output: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const test1 = &#39;&#39; ?? 2;</span></span>
<span class="line"><span>console.log(test1); // &#39;&#39;</span></span>
<span class="line"><span>// expected output:</span></span></code></pre></div></li></ol>`,4),t=[l];function e(h,k,c,d,E,r){return n(),a("div",null,t)}const y=s(p,[["render",e]]);export{g as __pageData,y as default};
