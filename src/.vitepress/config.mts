/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-01-17 11:49:36
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-01-19 17:09:02
 * @FilePath: /dayney.github.io/docs/.vitepress/config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress';
import markdownItAnchor from 'markdown-it-anchor';
// import markdownItFoo from 'markdown-it-foo';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小宇的学习笔记",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // base: '/blog/',
  cleanUrls: true,
  // srcDir: './',
  outDir: '../docs',
  cacheDir: './.vitepress/.vite', // 缓存文件的路径
  lastUpdated: true, // 是否使用 Git 获取每个页面的最后更新时间戳
  titleTemplate: false, // 禁用标题后缀
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    // markdown-it-anchor 的选项
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: markdownItAnchor.permalink.headerLink()
    },
    // @mdit-vue/plugin-toc 的选项
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },
    // config: (md) => {
    //   // 使用更多的 Markdown-it 插件！
    //   md.use(markdownItFoo)
    // }
  },
  themeConfig: {
    logo: '/logo.jpeg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index' },
      { text: '前端', link: '/frontend/demo' },
      { text: '书籍', link: '/books/index' },
      // {
      //   text: '含二级菜单',
      //   items: [
      //     { text: '菜单一', link: '/examples/markdown-examples' },
      //     { text: '菜单二', link: '/examples/api-examples' }
      //   ]
      // },
      { text: '关于作者', link: '/about' }
    ],

    sidebar: {
      '/frontend/': [
        {
          text: 'HTML',
          items: [
            { text: 'Markdown Examples', link: '/frontend/demo' },
          ]
        },
        {
          text: 'CSS',
          items: [
            { text: 'Markdown Examples', link: '/frontend/demo' },
          ]
        },
        {
          text: 'JavaSript',
          items: [
            { text: 'Markdown Examples', link: '/frontend/demo' },
          ]
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
      { icon: 'github', link: 'https://github.com/dayney' }
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
