import{_ as s,c as n,o as a,V as p}from"./chunks/framework.CthfA3PS.js";const m=JSON.parse('{"title":"动态添加脚本（script脚本）","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/javascript/dynamicAddScript.md","filePath":"frontend/javascript/dynamicAddScript.md","lastUpdated":1732259645000}'),e={name:"frontend/javascript/dynamicAddScript.md"},l=p(`<h1 id="动态添加脚本-script脚本" tabindex="-1">动态添加脚本（script脚本） <a class="header-anchor" href="#动态添加脚本-script脚本" aria-label="Permalink to &quot;动态添加脚本（script脚本）&quot;">​</a></h1><h2 id="_1-背景" tabindex="-1">1 背景 <a class="header-anchor" href="#_1-背景" aria-label="Permalink to &quot;1 背景&quot;">​</a></h2><p>在开发中，遇到临时需要动态第三方的<strong>script脚本</strong>的时候，如腾讯地图的<strong>JSONP</strong>，还有一些数据分析脚本，如百度、极光、神策等，需要动态的添加。</p><h2 id="_2-前言" tabindex="-1">2 前言 <a class="header-anchor" href="#_2-前言" aria-label="Permalink to &quot;2 前言&quot;">​</a></h2><p>添加好了之后，还需要判断是否正确的加载<strong>onload</strong>或<strong>onerror</strong>，之后再使用脚本中的方法。</p><h2 id="_3-代码实现" tabindex="-1">3 代码实现 <a class="header-anchor" href="#_3-代码实现" aria-label="Permalink to &quot;3 代码实现&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function loadScript(url) {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    const script = document.createElement(&#39;script&#39;);</span></span>
<span class="line"><span>    script.src = url;</span></span>
<span class="line"><span>    script.async = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 监听加载成功事件</span></span>
<span class="line"><span>    script.onload = () =&gt; {</span></span>
<span class="line"><span>      console.log(\`Script loaded successfully: \${url}\`);</span></span>
<span class="line"><span>      resolve(url);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 监听加载失败事件</span></span>
<span class="line"><span>    script.onerror = (error) =&gt; {</span></span>
<span class="line"><span>      console.error(\`Error loading script: \${url}\`);</span></span>
<span class="line"><span>      reject(new Error(\`Failed to load script: \${url}\`));</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    document.head.appendChild(script);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用示例</span></span>
<span class="line"><span>loadScript(&#39;https://example.com/some-script.js&#39;)</span></span>
<span class="line"><span>  .then((url) =&gt; {</span></span>
<span class="line"><span>    console.log(\`Script loaded: \${url}\`);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch((error) =&gt; {</span></span>
<span class="line"><span>    console.error(error.message);</span></span>
<span class="line"><span>  });</span></span></code></pre></div>`,7),r=[l];function t(c,i,o,d,h,u){return a(),n("div",null,r)}const g=s(e,[["render",t]]);export{m as __pageData,g as default};
