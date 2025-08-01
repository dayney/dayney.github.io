import{_ as s,c as n,o as a,V as p}from"./chunks/framework.CsbsVE7l.js";const _=JSON.parse('{"title":"Git 使用小技巧","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"efficiency/skill/gitSkill.md","filePath":"efficiency/skill/gitSkill.md","lastUpdated":1752563423000}'),e={name:"efficiency/skill/gitSkill.md"},l=p(`<h1 id="git-使用小技巧" tabindex="-1">Git 使用小技巧 <a class="header-anchor" href="#git-使用小技巧" aria-label="Permalink to &quot;Git 使用小技巧&quot;">​</a></h1><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>创建一个干净的分支（无历史记录的分支）</span></span>
<span class="line"><span>git checkout --orphan branchNane</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 基于标签 v1.0 创建并切换到新分支</span></span>
<span class="line"><span>git checkout -b branchNane tagName </span></span>
<span class="line"><span># 或者 git switch -c branchNane tagName</span></span>
<span class="line"><span></span></span>
<span class="line"><span># git会退到指定的commit并且保留之前修改的文件</span></span>
<span class="line"><span>git reset --soft &lt;commit-hash&gt;</span></span>
<span class="line"><span>git reset --soft HEAD^  撤销上一次的commit</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 移动 HEAD 指针，并清空暂存区，但保留工作区的内容。</span></span>
<span class="line"><span>git reset --mixed &lt;commit&gt;</span></span>
<span class="line"><span># 等价于</span></span>
<span class="line"><span>git reset &lt;commit&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 移动 HEAD 指针，同时清空暂存区，并将工作区恢复到指定提交的状态。</span></span>
<span class="line"><span>git reset --hard &lt;commit&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git git rm --cached 【文件路径】    // 将文件从缓存区中删除，并保留文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 给分支重新命名</span></span>
<span class="line"><span>git branch -m old-name new-name</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 终止变基</span></span>
<span class="line"><span>git rebase --abort</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 终止merge</span></span>
<span class="line"><span>git merge --abort</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看全局配置</span></span>
<span class="line"><span>git config --list</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 修改全局配置 -- 修改当前用户名</span></span>
<span class="line"><span>git config --global user.name &quot;Your New Name&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 修改全局配置 -- 修改当前邮箱</span></span>
<span class="line"><span>git config --global user.email &quot;your.email@example.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将提交复制到不同的分支， commitId 可以通过 git log 获取</span></span>
<span class="line"><span>git cherry-pick commitId</span></span>
<span class="line"><span></span></span>
<span class="line"><span># commitId 可以通过 git log 获取，</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 放弃（撤销）未 git add 的文件修改</span></span>
<span class="line"><span>git restore .：恢复所有未暂存的修改，恢复后文件会回到上一次提交的状态。</span></span>
<span class="line"><span>git restore &lt;file_name&gt;：只恢复指定文件的更改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 明明已经更新了.gitignore文件，但是还是可以看到文件的跟踪记录，此时可能是gitignore有缓存了，需要清理缓存之后再开始添加</span></span>
<span class="line"><span>git rm -r cached .</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;更新 .gitignore&quot;</span></span></code></pre></div>`,3),i=[l];function t(c,o,g,r,m,d){return a(),n("div",null,i)}const u=s(e,[["render",t]]);export{_ as __pageData,u as default};
