/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-01-19 18:13:09
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-11-21 14:41:56
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
          text: 'JavaSript',
          items: [
            { text: 'JavaSript编码规范', link: '/frontend/javascript/style' },
            { text: 'JavaSript精度问题', link: '/frontend/javascript/precision' },
            { text: 'repalceAll匹配标记', link: '/frontend/javascript/replaceAll' },
            { text: '数据字典', link: '/frontend/javascript/dictionaries-map' },
            { text: 'async await中使用finally', link: '/frontend/javascript/async' },
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
            { text: 'CSS编码规范', link: '/frontend/css/style' },
            { text: 'SASS编码规范', link: '/frontend/css/sass' },
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
          text: 'VUE',
          items: [
            { text: 'VUE2.x编码规范', link: '/frontend/vue/style' },
            { text: 'VUE3.x - composition自动引入', link: '/frontend/vue/composition' },
            { text: '下拉刷新，上拉加载更多', link: '/frontend/vue/loadMore' },
            
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
      '/frontend/engineering/': [
        {
          text: '前端工程化',
          items: [

            { 
              text: '规范化',
              items: [
                {
                  text: '命名规范',
                  link: ''
                },
                {
                  text: '编码规范',
                  items: [
                    {
                      text: 'VUE 2.x编码规范',
                      link: '/frontend/vue/style' 
                    },
                    {
                      text: 'js编码规范',
                      link: '/frontend/javascript/style' 
                    },
                    {
                      text: 'css编码规范',
                      link: '/frontend/css/style' 
                    },
                    {
                      text: 'HTML编码规范',
                      link: '/frontend/html/style' 
                    },
                  ]
                },
                {
                  text: 'gitflow规范',
                  link: ''
                },
                {
                  text: 'commmit规范',
                  link: ''
                },
                {
                  text: 'workflow规范',
                  link: ''
                },
                {
                  text: '技术方案规范',
                  link: ''
                },
                {
                  text: '开发及部署流程规范',
                  link: ''
                },
              ]
            },
            { 
              text: '模块化',
              items: [
                { 
                  text: '项目目录结构',
                  link: ''
                },
                { 
                  text: '公共方法（含私服）',
                  link: ''
                },
                { 
                  text: '公共组件（含私服）',
                  link: ''
                },
              ]
            },
            { 
              text: '可维护性',
              items: [
                { 
                  text: '文档和注释',
                  link: ''
                },
                { 
                  text: '文档记录',
                  link: ''
                },
              ]
            },
            { 
              text: '质量保障',
              items: [
                { 
                  text: 'code review',
                  link: ''
                },
                { 
                  text: '测试脚本',
                  link: ''
                },
              ]
            },
            { 
              text: '自动化',
              items: [
                { 
                  text: 'scripts中脚本的功能',
                  link: ''
                }
              ]
            },
            { 
              text: '持续集成与持续交付（CI/CD）',
              items: [
                { 
                  text: 'Jenkins使用文档',
                  link: ''
                },
                { 
                  text: 'gitlab actions',
                  link: ''
                }
              ]
            },
            { 
              text: '相关配置',
              items: [
                { 
                  text: '编码格式editorconfig',
                  link: '/frontend/engineering/editorconfig'
                },
                { 
                  text: 'gitignore常规配置',
                  link: '/frontend/engineering/gitignore'
                },
                { 
                  text: 'prettierrc常规配置',
                  link: '/frontend/engineering/prettierrc'
                },
                { 
                  text: 'prettierignore常规配置',
                  link: '/frontend/engineering/prettierignore'
                },
                { 
                  text: 'stylelint常规配置',
                  link: '/frontend/engineering/stylelint'
                },
                { 
                  text: 'browserslistrc',
                  link: '/frontend/engineering/browserslistrc'
                },
                { 
                  text: 'eslintignore',
                  link: '/frontend/engineering/eslintignore'
                },
                { 
                  text: 'eslintrc',
                  link: '/frontend/engineering/eslintrc'
                },
                { 
                  text: 'npmrc',
                  link: '/frontend/engineering/npmrc'
                },
              ],
            },
            { 
              text: '使用小技巧',
              items: [
                { 
                  text: 'git commit规范',
                  link: '/frontend/engineering/git'
                },
                { 
                  text: 'git合并commit',
                  link: '/frontend/engineering/git-merge-commit'
                }
              ],
            },
          ]
        }    
      ],
      '/efficiency/': [
        {
          text: 'Code review',
          items: [
            { text: 'Code review常用缩写', link: '/efficiency/codeReview/code-review-acronyms' },
          ],
        },
        {
          text: 'VS code相关',
          items: [
            { text: 'Github Copilot快捷键', link: '/efficiency/vscode/copilot' },
          ],
        },
        {
          text: '检索资料',
          items: [
            { text: 'google检索技巧', link: '/efficiency/google/google' },
          ],
        },
        {
          text: '开发小技巧',
          items: [
            { text: 'mockjs', link: '/efficiency/skill/mockjs' },
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
      ]
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
