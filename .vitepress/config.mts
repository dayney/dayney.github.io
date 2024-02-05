/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-01-19 18:13:09
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-02-05 15:08:34
 * @FilePath: /.github/Users/krui/git/study/demo/.vitepress/config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小宇的学习笔记",
  description: "A VitePress Site",
  
  outDir: './docs',
  // cacheDir: './.vitepress/.vite', // 缓存文件的路径

  // base: '/blog/',
  // srcDir: './',

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
      { text: '前端', link: '/frontend/demo' },
      { text: '提效', link: '/efficiency/demo' },
      { text: '书籍', link: '/books/index' },
      { text: '关于作者', link: '/about' }
    ],

    sidebar: {
      '/frontend/': [
        {
          text: '前端工程化',
          items: [
            { text: 'git commit 规范', link: '/frontend/engineering/git' },
            { text: 'Markdown Examples', link: '/frontend/demo' },
          ]
        },
        {
          text: 'VUE',
          items: [
            { text: 'VUE编码规范', link: '/frontend/vue/style' },
            { text: 'composition自动引入', link: '/frontend/vue/composition' },
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
            { text: 'margin-line', link: '/frontend/css/margin-inline' },
            { text: 'CSS蒙层', link: '/frontend/css/mask' },
            { text: '超行省略号代替', link: '/frontend/css/clamp' },
          ]
        },
        {
          text: 'JavaSript',
          items: [
            { text: 'JavaSript编码规范', link: '/frontend/javascript/style' },
            { text: 'Markdown Examples', link: '/frontend/demo' },
            { text: 'Markdown Examples', link: '/frontend/demo' },
          ]
        }
      ],
      '/efficiency/': [
        {
          text: 'VS code相关',
          items: [
            { text: 'Github Copilot', link: '/efficiency/github/copilot' },
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
      { icon: 'github', link: 'https://dayney.github.io' }
    ],
    footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2019-present Evan You'
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
