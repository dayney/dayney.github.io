---
outline: deep
editLink: false


---

# .prettierrc
  方便团队的**code style**统一。


## 安装
安装的方式有很多，我采用**vs code**的插件方式来安装了使用

1.	打开 VSCode。
2.	确保已安装 Prettier 插件（“Prettier - Code formatter”）。
3.	在 VSCode 中，打开项目的根目录。
4.	打开命令面板（Ctrl + Shift + P），输入 Prettier: Create Configuration File。
5.	按下回车键，这将自动在项目根目录中生成 .prettierrc 文件。  


## 1. 代码格式化工具。

- 有两种模式，在项目代码中用来检测代码的规范，如使用命令`npm run format`, 如果需要使用`git hook`可以配合`husky`一起使用,会有更好的体验
  ```
  "format": "prettier --config ./.prettierrc --write ./*.* ./src/**/*.js ./src/**/*.ts ./src/**/*.css ./src/**/*.vue",
  ```

- 配合**VS Code**中的插件prettier,在编写代码的时候时时提示代码的风格

```
# .prettierrc


{
  "printWidth": 120,
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "trailingComma": "none"
}
```

