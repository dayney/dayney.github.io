---
outline: deep
editLink: false


---

# .prettierrc

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

