import{_ as a,c as s,o as e,V as n}from"./chunks/framework.CthfA3PS.js";const g=JSON.parse('{"title":".prettierrc","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/engineering/prettierrc.md","filePath":"frontend/engineering/prettierrc.md","lastUpdated":1709029448000}'),t={name:"frontend/engineering/prettierrc.md"},p=n(`<h1 id="prettierrc" tabindex="-1">.prettierrc <a class="header-anchor" href="#prettierrc" aria-label="Permalink to &quot;.prettierrc&quot;">​</a></h1><h2 id="_1-代码格式化工具。" tabindex="-1">1. 代码格式化工具。 <a class="header-anchor" href="#_1-代码格式化工具。" aria-label="Permalink to &quot;1. 代码格式化工具。&quot;">​</a></h2><ul><li><p>有两种模式，在项目代码中用来检测代码的规范，如使用命令<code>npm run format</code>, 如果需要使用<code>git hook</code>可以配合<code>husky</code>一起使用,会有更好的体验</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;format&quot;: &quot;prettier --config ./.prettierrc --write ./*.* ./src/**/*.js ./src/**/*.ts ./src/**/*.css ./src/**/*.vue&quot;,</span></span></code></pre></div></li><li><p>配合<strong>VS Code</strong>中的插件prettier,在编写代码的时候时时提示代码的风格</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># .prettierrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;printWidth&quot;: 120,</span></span>
<span class="line"><span>  &quot;singleQuote&quot;: true,</span></span>
<span class="line"><span>  &quot;semi&quot;: true,</span></span>
<span class="line"><span>  &quot;tabWidth&quot;: 2,</span></span>
<span class="line"><span>  &quot;arrowParens&quot;: &quot;avoid&quot;,</span></span>
<span class="line"><span>  &quot;bracketSpacing&quot;: true,</span></span>
<span class="line"><span>  &quot;trailingComma&quot;: &quot;none&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4),r=[p];function i(o,c,l,d,u,h){return e(),s("div",null,r)}const q=a(t,[["render",i]]);export{g as __pageData,q as default};
