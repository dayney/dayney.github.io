import{_ as n,c as a,o as s,V as e}from"./chunks/framework.CthfA3PS.js";const u=JSON.parse('{"title":"项目中设置git忽略的文件或者文件夹","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/engineering/gitignore.md","filePath":"frontend/engineering/gitignore.md","lastUpdated":1709029448000}'),p={name:"frontend/engineering/gitignore.md"},i=e(`<h1 id="项目中设置git忽略的文件或者文件夹" tabindex="-1">项目中设置git忽略的文件或者文件夹 <a class="header-anchor" href="#项目中设置git忽略的文件或者文件夹" aria-label="Permalink to &quot;项目中设置git忽略的文件或者文件夹&quot;">​</a></h1><h2 id="_1-需要本级安装好-在git识辨变动文件的时候会自动使用到" tabindex="-1">1. 需要本级安装好，在git识辨变动文件的时候会自动使用到 <a class="header-anchor" href="#_1-需要本级安装好-在git识辨变动文件的时候会自动使用到" aria-label="Permalink to &quot;1. 需要本级安装好，在git识辨变动文件的时候会自动使用到&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#.gitignore</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>/dist</span></span>
<span class="line"><span>.eslintrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># local env files</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.*.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Log files</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span>pnpm-debug.log*</span></span></code></pre></div>`,3),l=[i];function t(o,c,r,d,g,_){return s(),a("div",null,l)}const f=n(p,[["render",t]]);export{u as __pageData,f as default};
