import{_ as n,c as s,o as e,V as a}from"./chunks/framework.CsbsVE7l.js";const m=JSON.parse('{"title":"eslintignore 常规配置","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/engineering/example/eslintignore.md","filePath":"frontend/engineering/example/eslintignore.md","lastUpdated":1763461768000}'),i={name:"frontend/engineering/example/eslintignore.md"},p=a(`<h1 id="eslintignore-常规配置" tabindex="-1">eslintignore 常规配置 <a class="header-anchor" href="#eslintignore-常规配置" aria-label="Permalink to &quot;eslintignore 常规配置&quot;">​</a></h1><p>用于指定 ESLint 忽略检查的文件或目录。建议根据项目实际情况精简，避免误忽略源码目录。</p><p>示例（.eslintignore）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 依赖与构建产物</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>.docs/</span></span>
<span class="line"><span>coverage/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># VitePress 构建产物</span></span>
<span class="line"><span>.vitepress/cache/</span></span>
<span class="line"><span>.vitepress/dist/</span></span>
<span class="line"><span>docs/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 其它无需 ESLint 的文件</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>*.min.js</span></span>
<span class="line"><span>**/*.d.ts</span></span></code></pre></div><p>注意：</p><ul><li>ESLint v9 平铺配置（flat config）场景下，.eslintignore 已不再推荐，忽略可在 eslint.config.* 中通过 ignores 实现（参见本仓库 frontend/engineering/example/eslintrc.md）。</li><li>如需在命令行指定忽略文件，可使用 --ignore-path 指定自定义忽略文件。</li></ul>`,6),l=[p];function t(o,r,c,d,g,_){return e(),s("div",null,l)}const f=n(i,[["render",t]]);export{m as __pageData,f as default};
