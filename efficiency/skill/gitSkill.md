---
outline: deep
editLink: false
---

## Git 使用小技巧

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
```



