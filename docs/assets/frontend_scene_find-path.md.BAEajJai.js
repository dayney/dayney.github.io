import{_ as n,c as s,o as a,V as p}from"./chunks/framework.CsbsVE7l.js";const u=JSON.parse('{"title":"深度查找","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/scene/find-path.md","filePath":"frontend/scene/find-path.md","lastUpdated":1757991393000}'),e={name:"frontend/scene/find-path.md"},l=p(`<h1 id="深度查找" tabindex="-1">深度查找 <a class="header-anchor" href="#深度查找" aria-label="Permalink to &quot;深度查找&quot;">​</a></h1><h2 id="给定一个树形数据结构-需要实现一个findpath-treedata-targetkey-函数来查找指定节点的完整路径。" tabindex="-1">// 给定一个树形数据结构，需要实现一个findPath(treeData, targetKey)函数来查找指定节点的完整路径。 <a class="header-anchor" href="#给定一个树形数据结构-需要实现一个findpath-treedata-targetkey-函数来查找指定节点的完整路径。" aria-label="Permalink to &quot;// 给定一个树形数据结构，需要实现一个findPath(treeData, targetKey)函数来查找指定节点的完整路径。&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const treeData = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    title: &#39;部门A&#39;,</span></span>
<span class="line"><span>    key: &#39;dept-a&#39;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        title: &#39;小组A1&#39;,</span></span>
<span class="line"><span>        key: &#39;group-a1&#39;,</span></span>
<span class="line"><span>        children: [</span></span>
<span class="line"><span>          { title: &#39;员工1&#39;, key: &#39;emp-1&#39; },</span></span>
<span class="line"><span>          { title: &#39;员工2&#39;, key: &#39;emp-2&#39; },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        title: &#39;小组A2&#39;,</span></span>
<span class="line"><span>        key: &#39;group-a2&#39;,</span></span>
<span class="line"><span>        children: [</span></span>
<span class="line"><span>          { title: &#39;员工3&#39;, key: &#39;emp-3&#39; },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    title: &#39;部门B&#39;,</span></span>
<span class="line"><span>    key: &#39;dept-b&#39;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      { title: &#39;员工4&#39;, key: &#39;emp-4&#39; },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>function findPath(treeData, targetKey) {</span></span>
<span class="line"><span>  const path = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const traverse = (nodes) =&gt; {</span></span>
<span class="line"><span>    if (!Array.isArray(nodes)) return false;</span></span>
<span class="line"><span>    for (const node of nodes) {</span></span>
<span class="line"><span>      path.push(node.key);</span></span>
<span class="line"><span>      if (node.key === targetKey) return true;</span></span>
<span class="line"><span>      if (node.children &amp;&amp; traverse(node.children)) return true;</span></span>
<span class="line"><span>      path.pop();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return traverse(treeData) ? path : [];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(findPath(treeData, &#39;emp-3&#39;));</span></span>
<span class="line"><span>// 期望输出：[&#39;dept-a&#39;, &#39;group-a2&#39;, &#39;emp-3&#39;]：3</span></span></code></pre></div>`,3),t=[l];function i(c,r,o,d,h,f){return a(),s("div",null,t)}const m=n(e,[["render",i]]);export{u as __pageData,m as default};
