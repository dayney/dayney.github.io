---
outline: deep
editLink: false
---

## Npm 使用小技巧

---

#### 1. 从指定的路径安装

```
# 那么安装方法是：
npm install https://github.com/webpack-contrib/mini-css-extract-plugin.git --save
```

#### 2. 使用 ** ssh ** 安装本地包
```
# npm install git+【仓库ssh地址】
npm install git+https://isaacs@github.com/npm/npm.git
```

#### 3. 从指定的镜像源安装
```
# npm --registry 【临时镜像地址】install 【包名称】 
npm --registry http://npm-vue.test.ybm100.com install hyjk-logger-sdk
```

#### 4. 换回国外官方源
```
npm config set registry https://registry.npmjs.org
```

#### 5. 查看使用的源地址
```
npm config get registry
```

#### 6. 给指定的包设置镜像源，可以解决node-sass兼容的问题
```
# 在项目的 .npmrc 文件中给特定的包设置指定的镜像源
# 【包名】:registry=【指定的镜像地址】
hyjk-logger-sdk:registry=http://npm-vue.test.ybm100.com/

# 常规的镜像源地址
# registry=https://registry.npmmirror.com
disturl=https://npmmirror.com/dist/
sass_binary_site=https://npmmirror.com/mirrors/node-sass/
phantomjs_cdnurl=https://npmmirror.com/mirrors/phantomjs/
electron_mirror=https://npmmirror.com/mirrors/electron/
electron_mirror=https://npmmirror.com/mirrors/electron/
sass_binary_site=https://npmmirror.com/mirrors/node-sass/
phantomjs_cdnurl=https://npmmirror.com/mirrors/phantomjs/
chromedriver_cdnurl=https://npmmirror.com/mirrors/chromedriver/
operadriver_cdnurl=https://npmmirror.com/mirrors/operadriver/
python_mirror=https://npmmirror.com/mirrors/python/
electron_builder_binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/
node_sqlite3_binary_host_mirror=https://npmmirror.com/mirrors
sharp_dist_base_url=https://npmmirror.com/mirrors/sharp-libvips/
puppeteer_download_host=https://npmmirror.com/mirrors/
sentrycli_cdnurl=https://npmmirror.com/mirrors/sentry-cli/
sqlite3_binary_site=https://npmmirror.com/mirrors/sqlite3/
```



#### npm 安装 git 仓库的协议：

```
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
```



