import{_ as a,c as s,o as n,V as e}from"./chunks/framework.CsbsVE7l.js";const u=JSON.parse('{"title":"淘宝镜像报错","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"efficiency/skill/npmTaobao.md","filePath":"efficiency/skill/npmTaobao.md","lastUpdated":1748792352000}'),p={name:"efficiency/skill/npmTaobao.md"},t=e(`<h1 id="淘宝镜像报错" tabindex="-1">淘宝镜像报错 <a class="header-anchor" href="#淘宝镜像报错" aria-label="Permalink to &quot;淘宝镜像报错&quot;">​</a></h1><h2 id="_1-前言" tabindex="-1">1 前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1 前言&quot;">​</a></h2><p>主要是在使用 <code> npm install</code> 可能会报如下错误。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm ERR! code CERT_HAS_EXPIRED</span></span>
<span class="line"><span>npm ERR! errno CERT_HAS_EXPIRED</span></span>
<span class="line"><span>npm ERR! request to https://registry.npm.taobao.org/@commitlint%2fconfig-conventional failed, reason: certificate has expired</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm ERR! A complete log of this run can be found in:</span></span>
<span class="line"><span>npm ERR!     /Users/krui/.npm/_logs/2024-02-27T06_54_17_077Z-debug.log</span></span></code></pre></div><h2 id="_2-效果展示" tabindex="-1">2. 效果展示 <a class="header-anchor" href="#_2-效果展示" aria-label="Permalink to &quot;2. 效果展示&quot;">​</a></h2><p>主要是应为淘宝的镜像源过期了，需要更新到最新的镜像源</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># .npmrc 文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 老的地址</span></span>
<span class="line"><span># registry=https://registry.npm.taobao.org</span></span>
<span class="line"><span>// 新的地址</span></span>
<span class="line"><span>registry=https://registry.npmmirror.com</span></span>
<span class="line"><span>#disturl=https://npm.taobao.org/dist</span></span>
<span class="line"><span>SASS_BINARY_SITE=http://npm.taobao.org/mirrors/node-sass</span></span></code></pre></div>`,7),i=[t];function o(l,c,r,d,h,_){return n(),s("div",null,i)}const g=a(p,[["render",o]]);export{u as __pageData,g as default};
