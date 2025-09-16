/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-01-19 18:13:09
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2025-09-16 10:27:16
 * @FilePath: /.github/Users/krui/git/study/demo/.vitepress/config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小宇的学习笔记",
  description: "小宇的学习笔记",
  
  outDir: './docs',
  // cacheDir: './.vitepress/.vite', // 缓存文件的路径
  ignoreDeadLinks: true, // 忽略死链接

  // base: '/blog/',
  // srcDir: './',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: '小宇的学习笔记' }],
    ['meta', { name: 'og:image', content: 'https://dayney.github.io/' }],
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=431292320' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '431292320');`
    ]
  ],

  themeConfig: {
    logo: '/logo.jpeg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index' },
      { text: '前端', 
        items: [
          { text: '前端知识', link: '/frontend/index/index' },
          { text: '前端工程化', link: '/frontend/engineering/index' },
          { text: '爱好收集', link: '/frontend/scene/index' },
        ]
      },
      { text: '提效', link: '/efficiency/index' },
      { text: '阅读', link: '/books/index' },
      { text: '前端导航', link: '/nav/index' },
      { text: '关于作者', link: '/about' }
    ],

    sidebar: {
      '/frontend/index': [
        {
          text: '前端知识',
          items: [
            { text: '新人指南', link: '/frontend/index/guide/environment' },
            { text: '编码规范与最佳实践', link: '/frontend/index/guide/coding-standards' },
            { text: '工作流程指导', link: '/frontend/index/guide/workflow' },
            { text: '项目介绍', link: '/frontend/index/guide/project-intro' },
            { text: '项目熟悉指南', link: '/frontend/index/guide/project-familiar' },
            { text: '技术分享与指导', link: '/frontend/index/guide/tech-sharing' },
          ]
        },
        {
          text: 'JavaScript',
          items: [
            { text: '注释规范', link: '/frontend/index/guide/coding-standards/javascript-comment' },
            { text: '代码格式规范', link: '/frontend/index/guide/coding-standards/javascript-format' },
            { text: '最佳实践', link: '/frontend/index/guide/coding-standards/javascript-best-practices' },
            { text: '精度问题', link: '/frontend/index/javascript/precision' },
            { text: 'replaceAll匹配标记', link: '/frontend/index/javascript/replaceAll' },
            { text: '数据字典', link: '/frontend/index/javascript/dictionaries-map' },
            { text: 'async await中使用finally', link: '/frontend/index/javascript/async' },
            { text: 'requestAnimationFrame的应用', link: '/frontend/index/javascript/requestAnimationFrame' },
            { text: '动态添加脚本（script脚本）', link: '/frontend/index/javascript/dynamicAddScript' },
            { text: '浏览器处理响应头', link: '/frontend/index/javascript/responseHeader' },
            { text: '立即执行函数', link: '/frontend/index/javascript/iife' },
            { text: 'Web Component', link: '/frontend/index/javascript/webComponent' },
            { text: 'promise.race应用', link: '/frontend/index/javascript/promiseRace' },
            { text: 'IntersectionObserver应用', link: '/frontend/index/javascript/IntersectionObserver' },
            { text: 'Javascirpt脚本加载策略', link: '/frontend/index/javascript/scriptLoading' },
          ]
        },
        {
          text: 'HTML',
          items: [
            { text: 'HTML编码规范', link: '/frontend/index/html/style' },
            { text: 'Img懒加载', link: '/frontend/index/html/imgLazy' },
          ]
        },
        {
          text: 'CSS相关',
          items: [
            { 
              text: 'CSS命名规范',
              items: [
                {
                  text: 'CSS命名规范',
                  link: '/frontend/index/css/naming-style'
                },
                {
                  text: 'BEM命名规则',
                  link: '/frontend/index/css/bem'
                },
                {
                  text: 'SASS命名规范',
                  link: '/frontend/index/css/sass'
                }
              ]
            },
            { text: '样式组织', link: '/frontend/index/css/style-organization' },
            { text: '响应式设计', link: '/frontend/index/css/responsive-design' },
            { text: '性能优化', link: '/frontend/index/css/performance-optimization' },
            { text: 'SASS小技巧', link: '/frontend/index/css/sassTips' },
            { text: 'margin-line', link: '/frontend/index/css/margin-inline' },
            { text: 'CSS蒙层', link: '/frontend/index/css/mask' },
            { text: '超行省略号代替', link: '/frontend/index/css/clamp' },
            { text: 'CSS中子元素居中', link: '/frontend/index/css/center' },
            { text: 'CSS中常用单位', link: '/frontend/index/css/units' },
            { text: 'CSS小技巧', link: '/frontend/index/css/tips' },
          ]
        },
        {
          text: 'Vue',
          items: [
            {
              text: 'Vue2',
              items: [
                { text: '组件结构规范', link: '/frontend/index/vue/vue2/component-structure' },
                { text: '生命周期使用规范', link: '/frontend/index/vue/vue2/lifecycle' },
                { text: '状态管理规范', link: '/frontend/index/vue/vue2/state-management' },
                { text: '性能优化', link: '/frontend/index/vue/vue2/performance-optimization' },
              ]
            },
            {
              text: 'Vue3',
              items: [
                { text: '组件结构规范', link: '/frontend/index/vue/vue3/component-structure' },
                { text: '生命周期使用规范', link: '/frontend/index/vue/vue3/lifecycle' },
                { text: '状态管理规范', link: '/frontend/index/vue/vue3/state-management' },
                { text: '性能优化', link: '/frontend/index/vue/vue3/performance-optimization' },
              ]
            },
            { text: 'Vue3.x - composition自动引入', link: '/frontend/index/vue/composition' },
            { text: '下拉刷新，上拉加载更多', link: '/frontend/index/vue/loadMore' }
          ]
        },
        {
          text: '微信小程序',
          items: [
            { text: '微信小程序生命周期', link: '/frontend/index/weixin/miniProgramLife' },
            { text: '小程序优化checkList v0.0.2', link: '/frontend/index/weixin/miniProgramLife-v2' },
          ]
        },
        {
          text: '其他',
          items: [
            { text: '函数执行计时', link: '/frontend/index/others/consoleTime' },
            { text: '函数的柯里化', link: '/frontend/index/others/curry' },
            { text: '前端交接', link: '/frontend/index/others/projectHandover' },
            { text: '安全规范', link: '/frontend/index/others/secure' },
            { text: 'task', link: '/frontend/index/others/target' },
            { text: '编程小技巧', link: '/frontend/index/others/litterTips' },
            { text: 'chrome设置跨域', link: '/frontend/index/others/chromeSetsCrossDomain' },
            { text: 'websocket心跳', link: '/frontend/index/others/websocketHeartbear' },
          ]
        },
      ],
      '/frontend/engineering/': [
        {
          text: '前端工程化',
          items: [
            {
              text: '规范化',
              items: [
                { text: '命名规范', link: '/frontend/engineering/guide/naming' },
                { text: '编码规范', link: '/frontend/engineering/guide/coding-standards' },
                { text: '分支管理', link: '/frontend/engineering/guide/branch-management' },
                { text: 'git提交规范', link: '/frontend/engineering/example/git' },
                { text: 'commmit规范', link: '/frontend/engineering/guide/commit' },
                { text: 'workflow规范', link: '/frontend/engineering/guide/workflow' },
                { text: '技术方案规范', link: '/frontend/engineering/guide/tech' },
                { text: '开发及部署流程规范', link: '/frontend/engineering/guide/deploy' }
              ]
            },
            {
              text: '模块化',
              items: [
                { text: '项目目录结构', link: '/frontend/engineering/guide/project-structure' },
                { text: '公共方法（含私服）', link: '/frontend/engineering/guide/public-method' },
                { text: '公共组件（含私服）', link: '/frontend/engineering/guide/public-component' }
              ]
            },
            {
              text: '可维护性',
              items: [
                { text: '文档和注释', link: '/frontend/engineering/guide/doc-comment' },
                { text: '文档记录', link: '/frontend/engineering/guide/doc-record' },
                { text: 'code review', link: '/frontend/engineering/guide/code-review' },
                { text: '测试脚本', link: '/frontend/engineering/guide/test-script' }
              ]
            },
            {
              text: '自动化',
              items: [
                { text: 'scripts中脚本的功能', link: '/frontend/engineering/guide/scripts' }
              ]
            },
            {
              text: '持续集成与持续交付（CI/CD）',
              items: [
                { text: 'Jenkins使用文档', link: '/frontend/engineering/guide/jenkins' },
                { text: 'gitlab actions', link: '/frontend/engineering/guide/gitlab-actions' }
              ]
            },
            {
              text: '相关配置',
              items: [
                { text: '编码格式editorconfig', link: '/frontend/engineering/example/editorconfig' },
                { text: 'gitignore常规配置', link: '/frontend/engineering/example/gitignore' },
                { text: 'prettierrc常规配置', link: '/frontend/engineering/example/prettierrc' },
                { text: 'prettierignore常规配置', link: '/frontend/engineering/example/prettierignore' },
                { text: 'stylelint常规配置', link: '/frontend/engineering/example/stylelint' },
                { text: 'browserslistrc', link: '/frontend/engineering/example/browserslistrc' },
                { text: 'eslintignore', link: '/frontend/engineering/example/eslintignore' },
                { text: 'eslintrc', link: '/frontend/engineering/example/eslintrc' },
                { text: 'npmrc', link: '/frontend/engineering/example/npmrc' },
                { text: 'commitlint', link: '/frontend/engineering/example/commitlint' }
              ]
            },
            {
              text: '使用小技巧',
              items: [
                { text: 'git commit规范', link: '/frontend/engineering/guide/commit' },
                { text: 'git合并commit', link: '/frontend/engineering/example/git-merge-commit' }
              ]
            }
          ]
        }
      ],
      '/frontend/scene/': [
        {
          text: '场景及平时收集',
          items: [
            { text: '目录结构', link: '/frontend/scene/index' },
            { text: '算法复杂度详解', link: '/frontend/scene/algorithm-complexity' },
          ]
        }
      ],
      '/efficiency/': [
        {
          text: 'Code review',
          items: [
            { 
              text: 'Code review常用缩写',
              link: '/efficiency/codeReview/code-review-acronyms'
            },
          ],
        },
        {
          text: 'VS code相关',
          items: [
            { 
              text: 'Github Copilot快捷键',
              link: '/efficiency/vscode/copilot'
            },
            { 
              text: 'cursor的使用教程',
              items: [
                {
                  text: '【不推荐】cursor无限续杯',
                  link: '/efficiency/vscode/cursor-infinite'
                }
              ],
            },
          ],
        },
        {
          text: '检索资料',
          items: [
            { 
              text: 'google检索技巧',
              link: '/efficiency/google/google'
            },
          ],
        },
        {
          text: '开发小技巧',
          items: [
            { 
              text: 'YAPI中使用mockjs',
              link: '/efficiency/skill/mockjs'
            },
            { 
              text: 'git常用命令',
              link: '/efficiency/skill/gitSkill'
            },
            { 
              text: 'npm的使用技巧',
              link: '/efficiency/skill/npmVersion'
            },
            { 
              text: '淘宝浸镜像报错',
              link: '/efficiency/skill/npmTaobao'
            },
            { 
              text: '全局包迁移',
              link: '/efficiency/skill/npmTransfer'
            },
            { 
              text: '安装私有包',
              link: '/efficiency/skill/npmSkill'
            }, 
          ],
        },
      ],
      '/books/': [
        {
          text: '前端相关',
          items: [
            { text: '高性能JavaScript',
              items: [
                { text: '简介', link: '/books/High_Performance/chapter1' },
                { text: '加载和执行', link: '/books/High_Performance/chapter2' },
                { text: '数据存储', link: '/books/High_Performance/chapter3' },
                { text: 'DOM编程', link: '/books/High_Performance/chapter4' },
                { text: '算法和流程控制', link: '/books/High_Performance/chapter5' },
                { text: '字符串和正则表达式', link: '/books/High_Performance/chapter6' },
                { text: '快速响应的用户界面', link: '/books/High_Performance/chapter7' },
                { text: 'Ajax', link: '/books/High_Performance/chapter8' },
                { text: '编程实践', link: '/books/High_Performance/chapter9' },
                { text: '构建并部署高性能JavaScript应用', link: '/books/High_Performance/chapter10' },
                { text: '工具', link: '/books/High_Performance/chapter11' },
              ]
            },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dayney/dayney.github.io' }
    ],
    footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2019-present dayney'
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // algolia: {} // 目前不支持
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    search: {
      provider: 'local'
    }
  },
  vite: {
    plugins: [MarkdownPreview()],
  },
})
