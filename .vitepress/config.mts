/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-01-19 18:13:09
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2025-06-01 14:40:08
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

  // base: '/blog/',
  // srcDir: './',
  // ignoreDeadLinks: true, // 忽略死链接
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
      // { text: '前端', link: '/frontend/index' },
      { text: '前端', 
        items: [
          { text: '前端知识', link: '/frontend/index' },
          { text: '前端工程化', link: '/frontend/engineering/index' },
          // { text: 'typescript', link: '/frontend/typescript/index' },
        ]
      },
      { text: '提效', link: '/efficiency/index' },
      { text: '阅读', link: '/books/index' },
      { text: '前端导航', link: '/nav/index' },
      { text: '关于作者', link: '/about' }
    ],

    sidebar: {
      '/frontend/': [
        {
          text: '新人指南',
          items: [
            { text: '开发环境搭建指南', link: '/frontend/engineering/guide/environment' },
            { text: '编码规范与最佳实践', link: '/frontend/engineering/guide/coding-standards' },
            { text: '工作流程指导', link: '/frontend/engineering/guide/workflow' },
            { text: '项目介绍', link: '/frontend/engineering/guide/project-intro' },
            { text: '项目熟悉指南', link: '/frontend/engineering/guide/project-familiar' },
            { text: '技术分享与指导', link: '/frontend/engineering/guide/tech-sharing' },
          ]
        },
        {
          text: 'JavaSript',
          items: [
            { text: 'JavaScript注释规范', link: '/frontend/engineering/guide/coding-standards/javascript-comment' },
            { text: 'JavaScript代码格式规范', link: '/frontend/engineering/guide/coding-standards/javascript-format' },
            { text: 'JavaScript最佳实践', link: '/frontend/engineering/guide/coding-standards/javascript-best-practices' },
            { text: 'JavaSript精度问题', link: '/frontend/javascript/precision' },
            { text: 'repalceAll匹配标记', link: '/frontend/javascript/replaceAll' },
            { text: '数据字典', link: '/frontend/javascript/dictionaries-map' },
            { text: 'async await中使用finally', link: '/frontend/javascript/async' },
            { text: 'requestAnimationFrame的应用', link: '/frontend/javascript/requestAnimationFrame' },
            { text: '动态添加脚本（script脚本）', link: '/frontend/javascript/dynamicAddScript' },
            { text: '浏览器处理响应头', link: '/frontend/javascript/responseHeader' },
            { text: '立即执行函数', link: '/frontend/javascript/iife' },
            { text: 'Web Component', link: '/frontend/javascript/webComponent' },
            { text: 'promise.race应用', link: '/frontend/javascript/promiseRace' },
            { text: 'BEM命名方式', link: '/efficiency/namingStyle/bem' },
          ]
        },
        {
          text: 'HTML',
          items: [
            { text: 'HTML编码规范', link: '/frontend/html/style' },
            { text: 'Img懒加载', link: '/frontend/html/imgLazy' },
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
                  link: '/efficiency/namingStyle/css',
                  target: '_blank'
                },
                {
                  text: 'BEM命名规则',
                  link: '/efficiency/namingStyle/bem',
                  target: '_blank'
                },
                {
                  text: 'SASS命名规范',
                  link: '/efficiency/namingStyle/sass',
                  target: '_blank'
                }
              ]
            },
            { text: '样式组织', link: '/frontend/css/style-organization' },
            { text: '响应式设计', link: '/frontend/css/responsive-design' },
            { text: '性能优化', link: '/frontend/css/performance-optimization' },
            { text: 'SASS小技巧', link: '/frontend/css/sassTips' },
            { text: 'margin-line', link: '/frontend/css/margin-inline' },
            { text: 'CSS蒙层', link: '/frontend/css/mask' },
            { text: '超行省略号代替', link: '/frontend/css/clamp' },
            { text: 'CSS中子元素居中', link: '/frontend/css/center' },
            { text: 'CSS中常用单位', link: '/frontend/css/units' },
            { text: 'CSS小技巧', link: '/frontend/css/tips' },
          ]
        },
        {
          text: 'Vue',
          items: [
            {
              text: 'Vue2',
              items: [
                { text: '组件结构规范', link: '/frontend/javascript/vue2/component-structure' },
                { text: '生命周期使用规范', link: '/frontend/javascript/vue2/lifecycle' },
                { text: '状态管理规范', link: '/frontend/javascript/vue2/state-management' }
              ]
            },
            {
              text: 'Vue3',
              items: [
                { text: '组件结构规范', link: '/frontend/javascript/vue3/component-structure' },
                { text: '生命周期使用规范', link: '/frontend/javascript/vue3/lifecycle' },
                { text: '状态管理规范', link: '/frontend/javascript/vue3/state-management' }
              ]
            },
            { text: 'Vue3.x - composition自动引入', link: '/frontend/vue/composition' },
            { text: '下拉刷新，上拉加载更多', link: '/frontend/vue/loadMore' }
          ]
        },
        {
          text: '微信小程序',
          items: [
            { text: '微信小程序生命周期', link: '/frontend/weixin/miniProgramLife' },
            { text: '小程序优化checkList v0.0.2', link: '/frontend/weixin/miniProgramLife-v2' },
          ]
        },
        {
          text: '其他',
          items: [
            // { text: '前端优化', link: '/frontend/others/performance' },
            { text: '函数执行计时', link: '/frontend/others/consoleTime' },
            { text: '函数的柯里化', link: '/frontend/others/curry' },
            { text: '前端交接', link: '/frontend/others/projectHandover' },
            { text: '安全规范', link: '/frontend/others/secure' },
            { text: 'task', link: '/frontend/others/target' },
            { text: '编程小技巧', link: '/frontend/others/litterTips' },
            { text: 'chrome设置跨域', link: '/frontend/others/chromeSetsCrossDomain' },
          ]
        },
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
                  text: 'cursor无限续杯',
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
        {
          text: '命名规范',
          items: [
            { 
              text: '通用命名规范',
              link: '/efficiency/namingStyle/common',
            },
            { 
              text: 'html命名规范',
              link: '/efficiency/namingStyle/html',
            },
            { 
              text: 'CSS命名规范',
              items: [
                {
                  text: 'CSS命名规范',
                  link: '/frontend/css/style'
                },
                {
                  text: 'BEM命名规则',
                  link: '/efficiency/namingStyle/bem'
                },
                {
                  text: 'SASS命名规范',
                  link: '/efficiency/namingStyle/sass'
                }
              ]
            },
            {  
              text: 'js命名规范',
              link: '/efficiency/namingStyle/js',
            },
            { 
              text: 'vue命名规范',
              link: '/efficiency/namingStyle/vue',
            },
            { 
              text: '小程序命名规范',
              link: '/efficiency/namingStyle/miniprogram',
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
