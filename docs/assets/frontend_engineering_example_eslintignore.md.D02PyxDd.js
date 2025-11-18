import{_ as s,c as n,o as e,V as i}from"./chunks/framework.CsbsVE7l.js";const _=JSON.parse('{"title":".eslintignore 示例与说明（占位）","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/engineering/example/eslintignore.md","filePath":"frontend/engineering/example/eslintignore.md","lastUpdated":null}'),a={name:"frontend/engineering/example/eslintignore.md"},t=i(`<h1 id="eslintignore-示例与说明-占位" tabindex="-1">.eslintignore 示例与说明（占位） <a class="header-anchor" href="#eslintignore-示例与说明-占位" aria-label="Permalink to &quot;.eslintignore 示例与说明（占位）&quot;">​</a></h1><p>本页用于提供 eslint 忽略文件的典型配置示例，后续可补充团队基线。</p><p>示例：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略构建与依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dist/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.docs/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.vitepress/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 产物与缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">coverage/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 静态站构建产物</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/docs/</span></span></code></pre></div><p>相关文档：</p><ul><li>ESLint 官方忽略文件说明：<a href="https://eslint.org/docs/latest/use/configure/ignore" target="_blank" rel="noreferrer">https://eslint.org/docs/latest/use/configure/ignore</a></li><li>配置样例可参考同目录下 eslintrc、prettierignore 等文档。</li></ul>`,6),l=[t];function p(r,o,h,c,d,g){return e(),n("div",null,l)}const u=s(a,[["render",p]]);export{_ as __pageData,u as default};
