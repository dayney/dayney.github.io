---
outline: deep
editLink: false

---

# 项目中设置git忽略的文件或者文件夹


## 1. 需要本级安装好，在git识辨变动文件的时候会自动使用到
```
#.gitignore


.DS_Store
node_modules
/dist
.eslintrc


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*


```