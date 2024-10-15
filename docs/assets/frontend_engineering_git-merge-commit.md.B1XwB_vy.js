import{_ as a,c as i,o as e,V as o}from"./chunks/framework.CthfA3PS.js";const s="/assets/git-merge-commmit-001.C-kEidvk.jpg",m="/assets/git-merge-commmit-002.o6MLUhj5.jpg",t="/assets/git-merge-commmit-003.B2czZu1B.jpg",r="/assets/git-merge-commmit-004.D84lU9JU.jpg",c="/assets/git-merge-commmit-005.w4XeDPnV.jpg",f=JSON.parse('{"title":"Git将多个commit合并成一个commit","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/engineering/git-merge-commit.md","filePath":"frontend/engineering/git-merge-commit.md","lastUpdated":1728983299000}'),n={name:"frontend/engineering/git-merge-commit.md"},d=o('<h1 id="git将多个commit合并成一个commit" tabindex="-1">Git将多个commit合并成一个commit <a class="header-anchor" href="#git将多个commit合并成一个commit" aria-label="Permalink to &quot;Git将多个commit合并成一个commit&quot;">​</a></h1><h2 id="_1-前言" tabindex="-1">1 前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1 前言&quot;">​</a></h2><p>对同一类问题有多处的修改和多个commit，为了更加清晰直观了解当前commit的功能，可以使用commit合并成一个，便于阅读和维护。</p><h2 id="_2-效果展示" tabindex="-1">2. 效果展示 <a class="header-anchor" href="#_2-效果展示" aria-label="Permalink to &quot;2. 效果展示&quot;">​</a></h2><p><img src="'+s+'" alt="git提交规范"></p><h2 id="_3-实操" tabindex="-1">3. 实操 <a class="header-anchor" href="#_3-实操" aria-label="Permalink to &quot;3. 实操&quot;">​</a></h2><h4 id="_3-1-查找出所有提交的commig-id-并且找出要合并的最源头的commit-id" tabindex="-1">3.1 查找出所有提交的commig id，并且找出要合并的最源头的<strong>commit id</strong> <a class="header-anchor" href="#_3-1-查找出所有提交的commig-id-并且找出要合并的最源头的commit-id" aria-label="Permalink to &quot;3.1 查找出所有提交的commig id，并且找出要合并的最源头的**commit id**&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git log</span></span></code></pre></div><p><img src="'+m+'" alt="git提交规范"></p><h4 id="_3-2-合并到指定的commit-id" tabindex="-1">3.2 合并到指定的<strong>commit id</strong> <a class="header-anchor" href="#_3-2-合并到指定的commit-id" aria-label="Permalink to &quot;3.2 合并到指定的**commit id**&quot;">​</a></h4><h5 id="_3-2-1-可以使用" tabindex="-1">3.2.1 可以使用 <a class="header-anchor" href="#_3-2-1-可以使用" aria-label="Permalink to &quot;3.2.1 可以使用&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git rebase -i commitId</span></span></code></pre></div><h5 id="_3-2-2-可以使用" tabindex="-1">3.2.2 可以使用 <a class="header-anchor" href="#_3-2-2-可以使用" aria-label="Permalink to &quot;3.2.2 可以使用&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git rebase -i HEAD~num(与reset 后面的HEAD的用法一样)</span></span></code></pre></div><h4 id="_3-3-合并到指定的commit-id" tabindex="-1">3.3 合并到指定的<strong>commit id</strong> <a class="header-anchor" href="#_3-3-合并到指定的commit-id" aria-label="Permalink to &quot;3.3 合并到指定的**commit id**&quot;">​</a></h4><p><img src="'+t+'" alt="git提交规范"></p><h4 id="_3-4-修改合并之后的commit信息" tabindex="-1">3.4 修改合并之后的<strong>commit</strong>信息 <a class="header-anchor" href="#_3-4-修改合并之后的commit信息" aria-label="Permalink to &quot;3.4 修改合并之后的**commit**信息&quot;">​</a></h4><p><img src="'+r+'" alt="git提交规范"></p><h4 id="_3-5-此时需要强制git-push-强制推送要主要不要覆盖到协作同事的提交记录-也可以正常的提交。" tabindex="-1">3.5 此时需要强制<strong>git push</strong>, 强制推送要主要不要覆盖到协作同事的提交记录，也可以正常的提交。 <a class="header-anchor" href="#_3-5-此时需要强制git-push-强制推送要主要不要覆盖到协作同事的提交记录-也可以正常的提交。" aria-label="Permalink to &quot;3.5 此时需要强制**git push**, 强制推送要主要不要覆盖到协作同事的提交记录，也可以正常的提交。&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push --force</span></span></code></pre></div><p><img src="'+c+'" alt="git提交规范"></p><h4 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h4><h5 id="_1-修改commit信息" tabindex="-1">1. 修改<strong>commit</strong>信息 <a class="header-anchor" href="#_1-修改commit信息" aria-label="Permalink to &quot;1. 修改**commit**信息&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git commit --amend</span></span></code></pre></div><ul><li>git commit --amend 主要用于 最后一次提交，即它只会修改最近的提交。</li><li>如果你已经将提交推送到远程仓库，使用 --amend 后，你需要强制推送（git push --force）以更新远程分支的提交历史。不过，强制推送时要小心，可能会影响其他协作人员的工作。</li><li>amend 的意思是 <strong>修正</strong> 或 <strong>修改</strong>，git commit --amend 用来修改最近一次提交的内容或提交信息，帮助你修正错误，而不生成新的提交。</li></ul><h5 id="_2-交互式-rebase-的常见用途" tabindex="-1">2. 交互式 rebase 的常见用途 <a class="header-anchor" href="#_2-交互式-rebase-的常见用途" aria-label="Permalink to &quot;2.  交互式 rebase 的常见用途&quot;">​</a></h5><p>​ 1. <strong>合并多个提交（squash）</strong>：你可以将多个提交压缩为一个，以保持提交历史的简洁。</p><p>​ 2. <strong>修改提交信息（reword）</strong>：允许你更改之前提交的提交信息。</p><p>​ 3. <strong>调整提交顺序</strong>：可以重新排列提交的顺序。</p><p>​ 4. <strong>删除提交（drop）</strong>：可以从历史中删除不需要的提交。</p><p>​ 5. <strong>拆分提交</strong>：你可以将一个大的提交拆分成多个小提交。</p><hr><h5 id="补充-合并不连续的commit-id" tabindex="-1">补充（合并不连续的commit id）： <a class="header-anchor" href="#补充-合并不连续的commit-id" aria-label="Permalink to &quot;补充（合并不连续的commit id）：&quot;">​</a></h5><p>以上是将连续的commit id合并，假如是不连续的话，那么你也是拿最早的commit id来执行git rebase -i commit id，然后进入弹出框，你会看到pick中没有最早你要合并的那个commitid，这里你需要按照列表的格式把最早的commit id复制到顶部，格式就是 pick commit id XXX，这个XXX就表示注释（可有可无），然后再把你要合并的几个commit一定复制到当前这个新加的pick下面，然后修改成 （s commit id XXXX），有几个写几个，把重复的去掉，然后保存即可。 主要是修改 3.3 中的</p><p><img src="'+t+'" alt="git提交规范"></p><h2 id="参考文件" tabindex="-1">参考文件 <a class="header-anchor" href="#参考文件" aria-label="Permalink to &quot;参考文件&quot;">​</a></h2><p>主要是借助 chat-gpt 的协助。</p>',37),l=[d];function h(p,g,u,_,b,k){return e(),i("div",null,l)}const v=a(n,[["render",h]]);export{f as __pageData,v as default};
