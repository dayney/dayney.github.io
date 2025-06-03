---
outline: deep
editLink: false
---

# Git提交规范--适配 node V14.x的版本

## 1. 效果演示
![git-commit-001](/frontend/engineering/example/git-commit-001.png)

![git-commit-002](/frontend/engineering/example/git-commit-002.png)

![git-commit-003](/frontend/engineering/example/git-commit-003.png)

## 2. 主要插件

- commitizen: 代码提交辅助工具
- commitlint: 代码校验工具
- husky: githook 插件（有版本要求，是使用v8.x）
- git-cz： 自定义提交配置

## 3. 添加 git-cz 

#### 3.1 安装插件

全局安装的 commitizen 不需要每个项目项目都执行，本机执行一次即可

```bash
npm i -g commitizen

npm i -D  @commitlint/cli@^17 @commitlint/config-conventional@^17 husky@^8 cz-git
```

#### 3.2 配置插件

```javascript
在项目的根目录下配置添加文件 commitlint.config.js 并写入如下代码

/** @type {import('cz-git').UserConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    // 'header-max-length': [0, 'always', 72],
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能开发
        'fix', // Bug修复
        'refactor', // 重构（refactoring production code）
        'style', // 代码排版格式修改，比如行尾添加分号等
        'docs', // 文档修改
        'build', // 构建流程或依赖管理等修复
        'ci', // ci相关的修改
        'test', // 测试用例补充、修改或重构
        'perf', // 性能优化
        'revert', // 回滚
        'chore', // 杂务，对外部用户不可见的工具、配置等的修改，如修改.gitignore
      ]
    ]
  },
  prompt: {
    messages: {
      type: '请选择提交类型:',
      scope: '请按Enter键之后填写影响范围:',
      customScope: '本次提交的影响范围:',
      subject: '请简要描述提交(必填):',
      body: '请输入详细变更 (可选). 使用 "|" 换行:\n',
      confirmCommit: '确认使用以上信息提交?(y/n)'
    },
    types: [
      { value: 'feat', name: 'feat:新功能开发', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:Bug修复', emoji: ':bug:' },
      {
        value: 'refactor',
        name: 'refactor:重构（refactoring production code）',
        emoji: ':recycle:'
      },
      { value: 'style', name: 'style:代码排版格式修改，比如行尾添加分号等', emoji: ':lipstick:' },
      { value: 'docs', name: 'docs:文档修改', emoji: ':memo:' },
      {
        value: 'build',
        name: 'build:构建流程或依赖管理等修复',
        emoji: ':package:'
      },
      { value: 'ci', name: 'ci:ci相关的修改', emoji: ':ferris_wheel:' },
      {
        value: 'test',
        name: 'test:测试用例补充、修改或重构',
        emoji: ':white_check_mark:'
      },
      { value: 'perf', name: 'perf:性能优化', emoji: ':zap:' },
      { value: 'revert', name: 'revert:回滚', emoji: ':rewind:' },
      { value: 'chore', name: 'chore:杂务，对外部用户不可见的工具、配置等的修改，如修改.gitignore', emoji: ':hammer:' },
    ],
    skipQuestions: ['body', 'breaking', 'footer', 'footerPrefix', 'customFooterPrefixs'],
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    useEmoji: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    themeColorCode: '',
    allowEmptyScopes: false,
    customScopesAlias: '请按Enter键之后填写影响范围'
  }
};
```

```json
在package.json添加配置

"config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }
```

```json
  在scripts中添加
  
  "prepare": "husky install"
```

#### 3.3 初始化 husky

```bash
npm run prepare
```

#### 3.4 在 husky中添加 commit-msg hook

- ####  mac 上使用以下代码

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

- window中，需要在 根路径 .husky 下 新建文件 commit-msg， 并且清空这个文件中的所有内容，添加如下内容，特别要注意koroFileHeader，在文件前面添加的 author信息，一定要删除，否则shell命令不生效

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
 
npx --no-install commitlint --edit "$1"
```

## 4. 如何使用

#### 4.1  在修改文件之后，正常使用 git add

#### 4.2  使用 git cz 代替 git commit

![git-commit-004](/frontend/engineering/example/git-commit-004.png)

#### 4.3  正常使用 git push 提交代码

#### 4.4 错误演示

![git-commit-005](/frontend/engineering/example/git-commit-005.png)

#### 4.5 gitlab上查看效果

![git-commit-006](/frontend/engineering/example/git-commit-006.png)



## 参考文件

[git-cz](https://cz-git.qbb.sh/zh/guide/)

[husky v8](https://github.com/typicode/husky/releases/tag/v9.0.1)

[commitlint](https://commitlint.js.org/)

