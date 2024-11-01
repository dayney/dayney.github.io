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

# 将提交复制到不同的分支
git cherry-pick commitId

# commitId 可以通过 git log 获取，

# 放弃（撤销）未 git add 的文件修改
git restore .：恢复所有未暂存的修改，恢复后文件会回到上一次提交的状态。
git restore <file_name>：只恢复指定文件的更改。
```



