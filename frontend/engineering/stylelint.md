---
outline: deep
editLink: false


---

# Stylelint


## 解释

是一个用于 **CSS**、**SCSS**、**Less** 和其他样式语言的开源代码**静态分析工具**，它可以帮助开发者检查样式表中的代码质量和一致性。通过 Stylelint，你可以设置规则来自动化地检查代码是否遵循某些最佳实践和格式要求，从而避免错误、保持代码一致性，并提高可维护性。
此文件与`.gitignore`的功能是一样的，忽略项目中某一类型/某一个文件

## 主要功能和特点：

​	1.	**代码质量检测**：

​	•	Stylelint 可以检测样式代码中的常见问题，如无效的属性值、重复的规则等。

​	2.	**代码格式检查**：

​	•	它可以检测代码的格式问题，比如不正确的缩进、不一致的空格使用等，类似于 ESLint 在 JavaScript 中的功能。

​	3.	**自定义规则**：

​	•	你可以配置规则，强制执行团队内部的编码规范，或者使用 Stylelint 提供的已有规则。

​	4.	**支持多种语言**：

​	•	Stylelint 支持纯 CSS、Sass、SCSS、Less 和其他类似的样式语言，能够处理各种 CSS 方言。

​	5.	**集成**：

​	•	可以与多种编辑器和工具集成，比如 VSCode、Atom 等，支持自动修复部分可修复的问题。

​	6.	**插件扩展**：

​	•	通过插件系统，你可以扩展 Stylelint 的功能，增加额外的规则或语言支持。

## 安装

使用 VSCode 插件生成

​	1.	**安装 VSCode 的 Stylelint 插件**

在 VSCode 中安装 [Stylelint 插件](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)，这个插件可以帮助你在编写样式时实时检测样式代码中的错误。

​	2.	**创建配置文件**

通过命令面板（Ctrl + Shift + P）并输入 Stylelint: Create Configuration File，按回车后会在项目根目录生成 .stylelintrc 文件。

```
# ..stylelintrc

{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2,                 // 缩进2个空格
    "string-quotes": "single",        // 使用单引号
    "color-hex-case": "lower",        // 十六进制颜色使用小写
    "max-empty-lines": 1,             // 最大空行数为1
    "no-eol-whitespace": true,        // 禁止行尾空格
    "block-no-empty": true,           // 禁止空的代码块
    "selector-max-id": 0,             // 禁止使用ID选择器
    "selector-class-pattern": "^[a-z0-9\\-_]+$", // 强制类名为小写字母、数字、短划线和下划线
    "max-nesting-depth": 3            // 限制选择器嵌套深度为3
  }
}
```

**Stylelint 官方规则文档**: https://stylelint.io/user-guide/rules/list
