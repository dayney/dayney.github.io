---
outline: deep
editLink: false
---

# Git 使用小技巧

---

```
创建一个干净的分支（无历史记录的分支）
git checkout --orphan branchNane

# 基于标签 v1.0 创建并切换到新分支
git checkout -b branchNane tagName 
# 或者 git switch -c branchNane tagName

# git会退到指定的commit并且保留之前修改的文件
git reset --soft <commit-hash>
git reset --soft HEAD^  撤销上一次的commit

# 移动 HEAD 指针，并清空暂存区，但保留工作区的内容。
git reset --mixed <commit>
# 等价于
git reset <commit>

# 移动 HEAD 指针，同时清空暂存区，并将工作区恢复到指定提交的状态。
git reset --hard <commit>

git git rm --cached 【文件路径】    // 将文件从缓存区中删除，并保留文件

# 给分支重新命名
git branch -m old-name new-name

# 终止变基
git rebase --abort

# 终止merge
git merge --abort

# 查看全局配置
git config --list

# 修改全局配置 -- 修改当前用户名
git config --global user.name "Your New Name"

# 修改全局配置 -- 修改当前邮箱
git config --global user.email "your.email@example.com"

# 将提交复制到不同的分支， commitId 可以通过 git log 获取
git cherry-pick commitId

# commitId 可以通过 git log 获取，

# 放弃（撤销）未 git add 的文件修改
git restore .：恢复所有未暂存的修改，恢复后文件会回到上一次提交的状态。
git restore <file_name>：只恢复指定文件的更改。

# 明明已经更新了.gitignore文件，但是还是可以看到文件的跟踪记录，此时可能是gitignore有缓存了，需要清理缓存之后再开始添加
git rm -r cached .
git add .
git commit -m "更新 .gitignore"

# 使用git 合并多个commitId
# 首先需要回到要回到的commit之前，比喻要合并3个，就要回到往前第 4 个commitId
###  一定要连续提交的 commit 才能这么做
git rebase -i commitId

#当你加上 -i，就是进入 交互式 rebase 模式。
#在这个模式下，Git 会打开一个编辑器，列出一段提交历史，你可以对这些 commit 做各种操作：

#常见命令：
#	•	pick：保留这个 commit
#	•	reword：修改 commit message
#	•	edit：进入这个 commit，允许你改代码再继续
#	•	squash：把当前 commit 合并到上一个 commit（常用来“合并多个 commit”）
#	•	fixup：类似 squash，但会丢弃当前 commit 的 message
#	•	drop：丢弃这个 commit

假设有3次提交
a1b2c3  修复 bug
d4e5f6  调整样式
g7h8i9  更新文档

git rebase -i HEAD~3 网上回到第 4 次

此时Git 会打开编辑器：
pick a1b2c3 修复 bug
pick d4e5f6 调整样式
pick g7h8i9 更新文档

修改成 
pick a1b2c3 修复 bug
squash d4e5f6 调整样式
squash g7h8i9 更新文档

保存后 → 这 3 个 commit 会合并成 1 个新的 commit，可以在此时修改 commit 内容。

git rebase -i = 交互式改写提交历史，让你可以 合并、修改、删除、重排 commit，常用于 整理提交记录。

接着我们可以使用 使用 git commit --amend 来修改 commit 内容，将上面3次的commit内容合并成1个，
也可以使用 git commit --amend --no-edit 来覆盖上一次提交：
之后就是正常的 git push操作了

```



