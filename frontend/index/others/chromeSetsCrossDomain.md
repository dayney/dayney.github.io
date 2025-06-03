---
outline: deep
editLink: false

---

# Mac创建跨域Chrome快捷启动方式

## 1 背景

在开发**hybrid**模式的app的时候，使用浏览器file协议调试的时候，会出现跨域的警告，不能正常调用后端API，因此需要开启一个不需要跨域防护的模式。

### 开启的方案--mac版本

在终端用命令行打开跨域模式，命令如下（***需替换路径中的yourname***）：

```javascript
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/[yourname]/MyChromeDevUserData/
```



### 创建一个开启跨域的chrome

1. command+ 空格打开，输入automator回车打开automator

2. 选择应用程序，点击选取

3. 选择实用工具中的shell脚本，双击之后输入
   ```
   open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/[yourname]/MyChromeDevUserData/
   ```
   ![操作步骤图1](/frontend/index/others/cors001.jpg)


4. 关闭并重命名，选择好位置，保存到应用程序，点击存储
   
   ![操作步骤图2](/frontend/index/others/cors002.jpg)

5. 查看 Launchpad 中，就有这个跨域的图标了
