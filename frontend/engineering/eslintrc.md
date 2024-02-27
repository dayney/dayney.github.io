---
outline: deep
editLink: false


---

# .eslintrc

## 1. ESLint 是一种用于识别和报告 ECMAScript/JavaScript 代码中发现的模式的工具，其目标是使代码更加一致并避免错误。

- 有两种模式，在项目代码中用来检测代码的规范，如使用命令`npm run eslint`, 如果需要使用`git hook`可以配合`husky`一起使用,会有更好的体验
  ```
  "eslint": "eslint --ext .js,.ts,.vue --ignore-path .eslintignore  src",
  ```

- 配合**VS Code**中的插件`eslint`,在编写代码的时候时时提示代码的风格

```
# eslint.config.js

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ['prettier'],
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/comment-directive': 'off',
    'vue/no-dupe-keys': 'off',
    
		// js相关
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-useless-escape': 'off',
    'no-var': 'off',
    'no-async-promise-executor': 'off',
    'no-case-declarations': 'off',
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'no-fallthrough': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-extra-boolean-cast': 'off',
    'no-irregular-whitespace': 'off',
    'prefer-const': 'off',
     
		// ts相关
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    
		// vue相关
    'vue/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'off',
    'vue/valid-v-for': 'off',
    'vue/require-v-for-key': 'off',
    'vue/no-expose-after-await': 'off',
    'vue/no-mutating-props': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/no-deprecated-v-bind-sync': 'off',
    'vue/no-deprecated-filter': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-deprecated-html-element-is': 'off',
    'vue/no-useless-template-attributes': 'off',
    'vue/no-deprecated-dollar-listeners-api': 'off',
    'vue/no-deprecated-destroyed-lifecycle': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/no-deprecated-slot-scope-attribute': 'off',
    // prettier相关
    'prettier/prettier': 'off'
  }
};
```

