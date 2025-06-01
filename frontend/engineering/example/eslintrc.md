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
/* eslint.config.js */

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // 基本规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',

    // 禁止导入Vue 3编译器宏，它们不需要导入
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'vue',
            importNames: ['defineProps', 'defineEmits', 'defineExpose', 'withDefaults'],
            message: 'Vue 3的编译器宏不需要导入。直接使用即可，例如: const props = defineProps(...)',
          },
        ],
      },
    ],

    // 字符串使用单引号
    quotes: ['error', 'single'],

    // 对象最后一个属性需要添加逗号
    'comma-dangle': ['error', 'always-multiline'],

    // 禁止使用require导入资源，应使用ES模块导入
    'no-restricted-syntax': [
      'error',
      {
        selector: "CallExpression[callee.name='require']",
        message: "使用ES模块导入代替require，如: import image from '@/assets/image.png'",
      },
    ],

    // 注释规则
    'valid-jsdoc': [
      'warn',
      {
        requireReturn: false,
        requireReturnType: false,
        requireParamType: false,
        requireParamDescription: true,
      },
    ],
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],

    // 复杂度规则 - 鼓励使用对象映射代替复杂条件
    complexity: ['warn', { max: 10 }],
    'max-depth': ['warn', { max: 3 }], // 限制嵌套层数，鼓励使用对象映射
    'max-statements': ['warn', { max: 15 }],

    // 命名规则
    camelcase: ['warn', { properties: 'always' }],

    // 自定义规则：检查大量if判断替换为对象映射
    // 使用eslint-plugin-custom-rules插件（需要单独安装）
    'custom-rules/prefer-object-mapping': 'warn',

    // 状态相关规则
    'custom-rules/status-in-english': 'warn', // 状态值使用英文
    'custom-rules/display-with-zh': 'warn', // 显示文本添加中文字段

    // Vue组件就近原则规则
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: ['name', 'components', 'props', 'data', 'computed', 'watch', 'methods', 'lifecycle'],
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['src/views/**/*.vue'],
      rules: {
        // 视图组件中的附加规则
        'vue/max-attributes-per-line': [
          'warn',
          {
            singleline: 3,
            multiline: 1,
          },
        ],
        'vue/attribute-hyphenation': ['warn', 'always'],
      },
    },
  ],
  // 全局变量
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};

```

