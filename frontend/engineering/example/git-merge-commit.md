---
outline: deep
editLink: false
---

# Git将多个commit合并成一个commit

## 1 前言

对同一类问题有多处的修改和多个commit，为了更加清晰直观了解当前commit的功能，可以使用commit合并成一个，便于阅读和维护。

## 2. 效果展示 

![git提交规范](/frontend/engineering/example/git-merge-commmit-001.jpg)

## 3. 实操

#### 3.1 查找出所有提交的commig id，并且找出要合并的最源头的**commit id**

```javascript
git log
```
![git提交规范](/frontend/engineering/example/git-merge-commmit-002.jpg)

#### 3.2 合并到指定的**commit id**

##### 3.2.1 可以使用

```
git rebase -i commitId
```

##### 3.2.2 可以使用

```
git rebase -i HEAD~num(与reset 后面的HEAD的用法一样)
```

#### 3.3 合并到指定的**commit id**

![git提交规范](/frontend/engineering/example/git-merge-commmit-003.jpg)

#### 3.4 修改合并之后的**commit**信息

![git提交规范](/frontend/engineering/example/git-merge-commmit-004.jpg)

#### 3.5 此时需要强制**git push**, 强制推送要主要不要覆盖到协作同事的提交记录，也可以正常的提交。

```
git push --force
```
![git提交规范](/frontend/engineering/example/git-merge-commmit-005.jpg)

#### 其他
##### 1. 修改**commit**信息
```
git commit --amend 
```
- git commit --amend 主要用于 最后一次提交，即它只会修改最近的提交。
- 如果你已经将提交推送到远程仓库，使用 --amend 后，你需要强制推送（git push --force）以更新远程分支的提交历史。不过，强制推送时要小心，可能会影响其他协作人员的工作。
- amend 的意思是 **修正** 或 **修改**，git commit --amend 用来修改最近一次提交的内容或提交信息，帮助你修正错误，而不生成新的提交。

##### 2.  交互式 rebase 的常见用途

​	1.	**合并多个提交（squash）**：你可以将多个提交压缩为一个，以保持提交历史的简洁。

​	2.	**修改提交信息（reword）**：允许你更改之前提交的提交信息。

​	3.	**调整提交顺序**：可以重新排列提交的顺序。

​	4.	**删除提交（drop）**：可以从历史中删除不需要的提交。

​	5. **拆分提交**：你可以将一个大的提交拆分成多个小提交。

----
##### 补充（合并不连续的commit id）：


以上是将连续的commit id合并，假如是不连续的话，那么你也是拿最早的commit id来执行git  rebase -i  commit id，然后进入弹出框，你会看到pick中没有最早你要合并的那个commitid，这里你需要按照列表的格式把最早的commit id复制到顶部，格式就是 pick  commit id   XXX，这个XXX就表示注释（可有可无），然后再把你要合并的几个commit一定复制到当前这个新加的pick下面，然后修改成 （s  commit id   XXXX），有几个写几个，把重复的去掉，然后保存即可。
主要是修改 3.3 中的

![git提交规范](/frontend/engineering/example/git-merge-commmit-003.jpg)


## 参考文件

主要是借助 chat-gpt 的协助。 