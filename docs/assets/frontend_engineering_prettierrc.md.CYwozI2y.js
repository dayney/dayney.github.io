import{_ as e,c as t,o as a,V as s}from"./chunks/framework.CthfA3PS.js";const _=JSON.parse('{"title":".prettierrc","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/engineering/prettierrc.md","filePath":"frontend/engineering/prettierrc.md","lastUpdated":1726641810000}'),n={name:"frontend/engineering/prettierrc.md"},r=s(`<h1 id="prettierrc" tabindex="-1">.prettierrc <a class="header-anchor" href="#prettierrc" aria-label="Permalink to &quot;.prettierrc&quot;">​</a></h1><p>方便团队的<strong>code style</strong>统一。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>安装的方式有很多，我采用<strong>vs code</strong>的插件方式来安装了使用</p><ol><li>打开 VSCode。</li><li>确保已安装 Prettier 插件（“Prettier - Code formatter”）。</li><li>在 VSCode 中，打开项目的根目录。</li><li>打开命令面板（Ctrl + Shift + P），输入 Prettier: Create Configuration File。</li><li>按下回车键，这将自动在项目根目录中生成 .prettierrc 文件。</li></ol><h2 id="_1-代码格式化工具。" tabindex="-1">1. 代码格式化工具。 <a class="header-anchor" href="#_1-代码格式化工具。" aria-label="Permalink to &quot;1. 代码格式化工具。&quot;">​</a></h2><ul><li><p>有两种模式，在项目代码中用来检测代码的规范，如使用命令<code>npm run format</code>, 如果需要使用<code>git hook</code>可以配合<code>husky</code>一起使用,会有更好的体验</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;format&quot;: &quot;prettier --config ./.prettierrc --write ./*.* ./src/**/*.js ./src/**/*.ts ./src/**/*.css ./src/**/*.vue&quot;,</span></span></code></pre></div></li><li><p>配合<strong>VS Code</strong>中的插件prettier,在编写代码的时候时时提示代码的风格</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># .prettierrc</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,8),i=[r];function o(p,l,c,d,u,h){return a(),t("div",null,i)}const q=e(n,[["render",o]]);export{_ as __pageData,q as default};
