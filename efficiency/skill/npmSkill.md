---
outline: deep
editLink: false
---

# Npm 使用小技巧

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
npm --registry http://www.xxxx.com install logger-sdk
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

#### 7. 使用 `npm`（Node 包管理器）来执行某个文件夹下的 `package.json` 中定义的脚本。

使用 `npm` 的 `--prefix` 参数指定要运行的脚本所在的文件夹：

```
npm --prefix [目录地址路径] run start

npm --prefix ./folder1 run start
```

#### 8. 在 `package.json` 文件中，`main` 和 `module` 的区别及使用方式；

在 `package.json` 文件中，`main` 和 `module` 字段指定了项目的入口点文件路径，用于指示不同环境如何加载模块。这些字段在模块打包和分发时非常重要，因为它们告诉模块解析器（如 Node.js 或打包工具）应该使用哪个文件作为入口点。

### `main` 字段

- **`main` 字段** 指定了当模块被 `require` 时使用的入口文件。通常用于 CommonJS 环境（例如 Node.js）。
- 例如，当你在 Node.js 中执行 `require('your-module')` 时，`main` 字段指定的文件将被加载。
- 当你使用 `require('my-library')` 时，Node.js 或 CommonJS 模块解析器将会加载 `dist/tool.umd.js` 文件。
- 这个文件通常是 UMD（Universal Module Definition）格式，可以在多种环境下运行（如 CommonJS、AMD 和浏览器全局变量）。

### `module` 字段

- **`module` 字段** 提供了 ES Module 规范的入口文件路径。这通常用于现代 JavaScript 打包工具（如 Webpack、Rollup 和 Parcel）以优化和处理 ES6 模块。

- 当使用 ES Module 导入语法（`import`）时，打包工具会优先选择 `module` 字段指定的文件。

- 当你使用 `import { something } from 'my-library'` 时，打包工具（如 Webpack 或 Rollup）将会优先加载 `dist/tool.es.js` 文件。

- 这个文件通常是 ES Module 格式，具有静态分析的优点，有助于 Tree Shaking 和更好的优化。


#### 示例
假设你的 `package.json` 文件中有以下内容：

```
{
  "name": "my-library",
  "version": "1.0.0",
  "main": "dist/tool.umd.js",
  "module": "dist/tool.es.js"
}
```



#### npm 安装 git 仓库的协议：

```
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
```



