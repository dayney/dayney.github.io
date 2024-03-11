/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-01-19 18:13:09
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-03-11 17:09:11
 * @FilePath: /.github/Users/krui/git/study/demo/.vitepress/config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

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
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: '/logo.jpeg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index' },
      { text: '前端', link: '/frontend/index' },
      { text: '提效', link: '/efficiency/index' },
      { text: '阅读', link: '/books/index' },
      { text: '关于作者', link: '/about' }
    ],

    sidebar: {
      '/frontend/': [
        {
          text: '前端工程化',
          items: [
            { 
              text: 'VS Code中一些配置文件',
              items: [
                { 
                  text: 'gitignore',
                  link: '/frontend/engineering/gitignore'
                },
                { 
                  text: 'browserslistrc',
                  link: '/frontend/engineering/browserslistrc'
                },
                { 
                  text: 'editorconfig',
                  link: '/frontend/engineering/editorconfig'
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
                { 
                  text: 'prettierignore',
                  link: '/frontend/engineering/prettierignore'
                },
                { 
                  text: 'prettierrc',
                  link: '/frontend/engineering/prettierrc'
                },
              ],
            },
            { 
              text: 'git相关',
              items: [
                { 
                  text: 'git commit 规范',
                  link: '/frontend/engineering/git'
                },
              ],
            },
            {
              text: 'npm相关',
              items: [
                { 
                  text: '淘宝浸镜像报错',
                  link: '/frontend/npm/taobao'
                },
                { 
                  text: '全局包迁移',
                  link: '/frontend/npm/transfer'
                },
              ], 
            }, 
            { text: '终端尺寸', link: '/frontend/engineering/terminalSize' },
          ]
        },
        {
          text: '微信小程序',
          items: [
            { text: '微信小程序生命周期', link: '/frontend/weixin/miniProgramLife' },
          ]
        },
        {
          text: '其他',
          items: [
            { text: '前端交接', link: '/frontend/others/projectHandover' },
            { text: '安全规范', link: '/frontend/others/secure' },
          ]
        },
        {
          text: 'VUE',
          items: [
            { text: 'VUE2.x编码规范', link: '/frontend/vue/style' },
            { text: 'VUE3.x - composition自动引入', link: '/frontend/vue/composition' },
            { text: 'Markdown Examples', link: '/frontend/demo' },
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
            { text: 'margin-line', link: '/frontend/css/margin-inline' },
            { text: 'CSS蒙层', link: '/frontend/css/mask' },
            { text: '超行省略号代替', link: '/frontend/css/clamp' },
            { text: 'CSS中子元素居中', link: '/frontend/css/center' },
          ]
        },
        {
          text: 'JavaSript',
          items: [
            { text: 'JavaSript编码规范', link: '/frontend/javascript/style' },
            { text: 'Markdown Examples', link: '/frontend/demo' },
          ]
        }
      ],
      '/efficiency/': [
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
        }
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
      text: 'Updated at',
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
  }
})
