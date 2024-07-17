import{_ as a,c as s,o as n,V as e}from"./chunks/framework.C-fAE6Ku.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"efficiency/skill/gitSkill.md","filePath":"efficiency/skill/gitSkill.md","lastUpdated":1721222046000}'),t={name:"efficiency/skill/gitSkill.md"},i=e(`<h2 id="git-使用小技巧" tabindex="-1">Git 使用小技巧 <a class="header-anchor" href="#git-使用小技巧" aria-label="Permalink to &quot;Git 使用小技巧&quot;">​</a></h2><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>创建一个干净的分支（无历史记录的分支）</span></span>
<span class="line"><span>git checkout --orphan branchNane</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 基于标签 v1.0 创建并切换到新分支</span></span>
<span class="line"><span>git checkout -b branchNane tagName </span></span>
<span class="line"><span># 或者 git switch -c branchNane tagName</span></span>
<span class="line"><span></span></span>
<span class="line"><span># git会退到指定的commit并且保留之前修改的文件</span></span>
<span class="line"><span>git reset --soft &lt;commit-hash&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git reset --soft HEAD^  撤销上一次的commit</span></span>
<span class="line"><span>git git rm --cached 【文件路径】    // 将文件从缓存区中删除，并保留文件</span></span></code></pre></div>`,3),p=[i];function l(c,o,r,d,h,_){return n(),s("div",null,p)}const f=a(t,[["render",l]]);export{m as __pageData,f as default};
