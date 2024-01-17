/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-01-17 11:49:36
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-01-17 17:30:13
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
      { text: 'Home', link: '/index' },
      { text: 'Examples', link: '/examples/markdown-examples' },
      { text: 'Demo', link: '/demo/markdown-examples' },
      {
        text: '有二级菜单',
        items: [
          { text: '菜单一', link: '/examples/markdown-examples' },
          { text: '菜单二', link: '/examples/api-examples' }
        ]
      },
      { text: '关于作者', link: '/about' }
    ],

    sidebar: {
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown-examples' },
            { text: 'Runtime API Examples', link: '/examples/api-examples' }
          ]
        }
      ],
      '/demo/': [
        {
          text: 'Demo',
          items: [
            { text: 'demo1', link: '/demo/markdown-examples' },
            { text: 'demo2', link: '/demo/api-examples' }
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
