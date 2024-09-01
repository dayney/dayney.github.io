import type { NavLink } from "../.vitepress/theme/types";

type NavData = {
  title: string;
  items: NavLink[];
};

export const NAV_DATA: NavData[] = [
  {
    title: "AI 导航",
    items: [
      {
        badge: "对话",
        icon: "/icons/icon-chatgpt.png",
        title: "ChatGPT",
        link: "https://chat.openai.com/chat",
      },
      {
        badge: "Poe",
        icon: "/icons/icon-poe.png",
        title: "Poe",
        link: "https://poe.com/",
      },
      {
        badge: "笔记",
        icon: "/icons/icon-notion.png",
        title: "Notion AI",
        link: "https://www.notion.so",
      },
      {
        badge: "绘画",
        icon: "/icons/icon-midjourney.png",
        title: "Midjourney",
        link: "https://www.midjourney.com",
      },
      {
        badge: "超长文本对话",
        icon: "/icons/icon-kimi.ico",
        title: "Kimi.ai",
        link: "https://kimi.moonshot.cn",
      },
      {
        badge: "超长文本对话",
        icon: "/icons/icon-chatglm.png",
        title: "智谱清言",
        link: "https://chatglm.cn",
      },
      {
        icon: "/icons/icon-yiyan.ico",
        title: "文心一言",
        link: "https://yiyan.baidu.com",
      },
      
      {
        badge: "VS code插件好用",
        icon: "/icons/icon-tongyi.png",
        title: "通义千问",
        link: "https://tongyi.aliyun.com/qianwen/",
      },
    ],
  },
  {
    title: "常用工具",
    items: [
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "Can I use",
        desc: "前端 API 兼容性查询",
        link: "https://caniuse.com",
      },
      {
        icon: "/icons/icon-squoosh.png",
        title: "Squoosh",
        desc: "基于浏览器的本地图片压缩工具（支持自定义参数和格式转换）",
        link: "https://squoosh.app",
      },
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com",
      },
      {
        icon: "/icons/icon-carbon.ico",
        title: "Carbon",
        desc: "代码图片生成",
        link: "https://carbon.now.sh",
      },
      {
        icon: "/icons/icon-npmTrends.ico",
        title: "npm trends",
        desc: "比较 npm package 的大小、下载数据、github 数据等",
        link: "https://npmtrends.com",
      },
      {
        icon: "https://npm.devtool.tech/logo.svg",
        title: "npm 库在线执行",
        desc: "在浏览器控制台中在线运行调试与测试 npm 中的库",
        link: "https://npm.devtool.tech",
      },
      {
        icon: "https://devtool.tech/logo.svg",
        title: "开发者武器库",
        desc: "开发者武器库，做开发者最专业最好用的专业工具箱",
        link: "https://devtool.tech",
      },
      {
        icon: "/icons/icon-bejson.png",
        title: "在线JSON校验格式化工具（Be JSON）",
        desc: "在线JSON校验格式化工具（Be JSON）",
        link: "https://www.bejson.com/",
      },
      {
        icon: "/icons/icon-jsonCn.ico",
        title: "Json 中文网",
        desc: "JSON 在线解析及格式化验证",
        link: "https://www.json.cn",
      },
      {
        icon: "https://transform.tools/static/favicon.png",
        title: "transform",
        desc: "一个支持多语言的在线转换器",
        link: "https://transform.tools/json-schema-to-typescript",
      },
      {
        icon: "/icons/icon-excalidraw.png",
        title: "Excalidraw",
        desc: "手绘风格流程图",
        link: "https://excalidraw.com",
      },
      {
        icon: "/icons/icon-processon.ico",
        title: "ProcessOn",
        desc: "免费在线流程图思维导图",
        link: "https://www.processon.com",
      },
      {
        icon: "/icons/icon-shields.ico",
        title: "Shields.io",
        desc: "制作简洁、一致、易读的徽章",
        link: "https://shields.io",
      },
    ],
  },
  {
    title: "高质量周刊与博客",
    items: [
      {
        badge: "周一更新",
        icon: "/icons/icon-medium.png",
        title: "Frontend Weekly",
        desc: "前端周刊",
        link: "https://frontender-ua.medium.com",
      },
      {
        badge: "周五更新",
        icon: "/icons/icon-ruanyifeng.ico",
        title: "科技爱好者周刊",
        desc: "阮一峰的科技爱好者周刊",
        link: "https://www.ruanyifeng.com/blog/archives.html",
      },
      // 502 bad gateway
      // {
      //   badge: "周五更新",
      //   icon: "https://s0.ssl.qhres2.com/static/3444fd94a3c31e92.ico",
      //   title: "奇舞周刊",
      //   desc: "领略前端技术 阅读奇舞周刊（360 前端团队）",
      //   link: "https://weekly.75.team",
      // },
      // {
      //   badge: "周一更新",
      //   icon: "https://img.alicdn.com/imgextra/i3/O1CN01uKTVpD1UK8BCxFBwo_!!6000000002498-2-tps-500-500.png",
      //   title: "MDH Weekly",
      //   desc: "云谦的前端周刊",
      //   link: "https://mdhweekly.com/weekly",
      // },
      {
        badge: "每周更新",
        icon: "/icons/icon-hungryturbo.png",
        title: "前端食堂技术周刊",
        desc: "周周尝鲜，人工筛选前端圈每周最新资讯",
        link: "https://hungryturbo.zhubai.love",
      },
      {
        icon: "https://cdn.xiaolincoding.com/icon.webp",
        title: "小林coding",
        desc: "小林 x 图解计算机基础（计算机网络、操作系统、计算机组成、数据库）",
        link: "https://xiaolincoding.com",
      },
      {
        icon: "/icons/icon-antfu.svg",
        title: "Blog - Anthony Fu",
        desc: "Vue, Vite, Nuxt 核心团队成员 | VueUse, Slidev, Vitest, UnoCSS 作者",
        link: "https://antfu.me/posts",
      },
      {
        icon: "https://cdn.zhangxinxu.com/zxx_ico.png",
        title: "鑫空间-鑫生活",
        desc: "张鑫旭的个人博客",
        link: "https://www.zhangxinxu.com/wordpress",
      },
      {
        icon: "/icons/ascoders.png",
        title: "前端精读周刊",
        desc: "帮你理解最前沿、实用的技术",
        link: "https://github.com/ascoders/weekly",
      },
      {
        icon: "/icons/mqyqingfeng.jpeg",
        title: "冴羽博客",
        desc: "四个系列：JavaScript深入系列、JavaScript专题系列、ES6系列、React系列",
        link: "https://github.com/mqyqingfeng/Blog",
      },
    ],
  },
  {
    title: "前端学习资料",
    items: [
      {
        icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
        title: "MDN | Web 开发者指南",
        desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资",
        link: "https://developer.mozilla.org/zh-CN",
      },
      {
        icon: "/icons/icon-runoob.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com",
      },
      {
        icon: "/icons/icon-es6.ico",
        title: "ES6 入门教程",
        desc: "开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性",
        link: "http://es6.ruanyifeng.com",
      },
      {
        badge: "官网",
        icon: "/icons/icon-typescript.png",
        title: "TypeScript",
        desc: "TypeScript 是具有类型语法的 JavaScript",
        link: "https://www.typescriptlang.org/zh/",
      },
      {
        badge: "阮一峰",
        icon: "https://wangdoc.com/typescript/assets/icons/android-icon-192x192.png",
        title: "TypeScript 教程",
        desc: "TypeScript 开源教程，介绍基本概念和用法，面向初学者",
        link: "https://wangdoc.com/typescript/",
      },
    ],
  },
  {
    title: "Vue 生态",
    items: [
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 3",
        desc: "渐进式 JavaScript 框架",
        link: "https://cn.vuejs.org",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 2",
        desc: "渐进式 JavaScript 框架",
        link: "https://v2.cn.vuejs.org",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue Router",
        desc: `Vue.js 的官方路由
    为 Vue.js 提供富有表现力、可配置的、方便的路由`,
        link: "https://router.vuejs.org/zh",
      },
      {
        icon: "https://pinia.vuejs.org/logo.svg",
        title: "Pinia",
        desc: "符合直觉的 Vue.js 状态管理库",
        link: "https://pinia.vuejs.org/zh",
      },
      {
        icon: "https://nuxt.com/icon.png",
        title: "Nuxt.js",
        desc: "一个基于 Vue.js 的通用应用框架",
        link: "https://nuxt.com",
      },
      {
        icon: "https://vueuse.org/favicon.svg",
        title: "VueUse",
        desc: "Vue Composition API 的常用工具集",
        link: "https://vueuse.org",
      },
      {
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        title: "Element Plus",
        desc: "基于 Vue 3，面向设计师和开发者的组件库",
        link: "https://element-plus.org",
      },
      {
        icon: "https://www.antdv.com/assets/logo.1ef800a8.svg",
        title: "Ant Design Vue",
        desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
        link: "https://antdv.com",
      },
      {
        icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        title: "Vant",
        desc: "轻量、可定制的移动端 Vue 组件库",
        link: "https://vant-ui.github.io/vant",
      },
      {
        icon: "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
        title: "NutUI",
        desc: "京东风格的轻量级移动端组件库",
        link: "https://nutui.jd.com",
      },
    ],
  },
  {
    title: "JavaScript 框架类库",
    items: [
      {
        icon: "/icons/icon-svelte.png",
        title: "Svelte",
        desc: "将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码",
        link: "https://svelte.dev",
      },
      {
        icon: "/icons/icon-jquery.ico",
        title: "jQuery API 中文文档",
        desc: "一个兼容多浏览器的 JavaScript 框架",
        link: "https://jquery.com",
      },
    ],
  },
  {
    title: "CSS 相关",
    items: [
      {
        icon: "/icons/icon-postcss.svg",
        title: "PostCSS",
        desc: "一个用 JavaScript 转换 CSS 的工具",
        link: "https://postcss.org",
      },
      {
        icon: "/icons/icon-sass.png",
        title: "Sass",
        desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
        link: "https://sass-lang.com",
      },
      {
        icon: "/icons/icon-tailwindcss.png",
        title: "TailwindCSS 中文网",
        desc: "一个功能类优先的 CSS 框架",
        link: "https://www.tailwindcss.cn",
      },
      {
        icon: "https://unocss.dev/logo.svg",
        title: "UnoCSS",
        desc: "一个即时的原子化 CSS 引擎",
        link: "https://unocss.dev",
      },
      {
        icon: "/icons/you-need-to-know-css.ico",
        title: "You-need-to-know-css",
        desc: "Web开发者应该掌握的CSS tricks",
        link: "https://lhammer.cn/You-need-to-know-css/#/zh-cn/",
      },
      {
        icon: "/icons/icon-tricks.png",
        title: "CSS 常用样式",
        desc: "CSS 常用样式和奇技淫巧总结",
        link: "https://qishaoxuan.github.io/css_tricks/",
      },
      {
        title: "CSS 常见布局",
        desc: "CSS 各种常见的布局实现",
        link: "https://sweet-kk.github.io/css-layout/",
      },
      {
        title: "Houdini.how",
        desc: "CSS Houdini worklets 的社区驱动资源库",
        link: "https://houdini.how",
      },
    ],
  },
  {
    title: "小程序相关",
    items: [
      {
        icon: "https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png",
        title: "微信小程序文档",
        desc: "微信小程序官方开发者文档",
        link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
      },
    ],
  },
  {
    title: "跨平台",
    items: [
      {
        icon: "/icons/icon-electron.svg",
        title: "Electron",
        desc: "使用 Web 技术构建跨平台桌面应用程序",
        link: "https://www.electronjs.org/zh/",
      },
      {
        icon: "/icons/icon-tauri.png",
        title: "Tauri",
        desc: "使用 Web 技术构建更小、更快、更安全的桌面应用程序",
        link: "https://taro.zone",
      },
      {
        icon: "/icons/icon-jd.ico",
        title: "Taro",
        desc: "多端统一开发解决方案",
        link: "https://taro.jd.com",
      },
      {
        icon: "https://web-assets.dcloud.net.cn/unidoc/zh/icon.png",
        title: "uni-app",
        desc: "一个使用 Vue.js 开发所有前端应用的框架",
        link: "https://uniapp.dcloud.net.cn",
      },
      {
        icon: "https://tmui.design/images/logoGreat.png",
        title: "tmui",
        desc: "Uni App通用组件库跨端组件库",
        link: "https://tmui.design",
      },
      {
        icon: "https://mpxjs.cn/favicon.ico",
        title: "Mpx",
        desc: "增强型跨端小程序框架",
        link: "https://mpxjs.cn",
      },
    ],
  },
  {
    title: "Node 相关",
    items: [
      {
        icon: "/icons/icon-nodejs.png",
        title: "Node.js",
        desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
        link: "https://nodejs.org/zh-cn",
      },
      {
        icon: "/icons/icon-npm.png",
        title: "npm",
        desc: "JavaScript 的包管理和分发工具",
        link: "https://docs.npmjs.com/cli",
      },
      {
        icon: "/icons/icon-pnpm.png",
        title: "pnpm",
        desc: "快速的、节省磁盘空间的包管理工具",
        link: "https://pnpm.io/zh",
      },
      {
        icon: "https://expressjs.com/images/favicon.png",
        title: "Express",
        desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        link: "https://expressjs.com",
      },
      {
        icon: "/icons/koa.svg",
        title: "Koa",
        desc: "基于 Node.js 平台的下一代 web 开发框架",
        link: "https://koajs.com",
      },
      {
        icon: "/icons/icon-nestjs.png",
        title: "Nest.js 中文文档",
        desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
        link: "https://docs.nestjs.cn",
      },
    ],
  },
  {
    title: "可视化",
    items: [
      {
        icon: "/icons/icon-echarts.png",
        title: "ECharts",
        desc: "一个基于 JavaScript 的开源可视化图表库",
        link: "https://echarts.apache.org/zh/index.html",
      },
      {
        icon: "/icons/icon-antv.png",
        title: "AntV",
        desc: "蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
        link: "https://antv.vision/zh/",
      },
      {
        icon: "/icons/icon-d3js.png",
        title: "D3.js",
        desc: "一个遵循 Web 标准用于可视化数据的 JavaScript 库",
        link: "https://d3js.org",
      },
      {
        icon: "/icons/icon-chartjs.ico",
        title: "Chart.js",
        desc: "一个简单而灵活的 JavaScript 图表库",
        link: "https://www.chartjs.org",
      },
      {
        icon: "/icons/icon-threejs.ico",
        title: "Three.js",
        desc: "JavaScript 3d 库",
        link: "https://threejs.org",
      },
    ],
  },
  {
    title: "编译&构建&打包",
    items: [
      {
        icon: "https://www.webpackjs.com/icon_180x180.png",
        title: "Webpack 中文网",
        desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
        link: "https://www.webpackjs.com",
      },
      {
        icon: "https://cn.vitejs.dev/logo.svg",
        title: "Vite 中文文档",
        desc: "下一代前端工具链",
        link: "https://cn.vitejs.dev",
      },
      {
        icon: "https://www.rollupjs.com/img/favicon.png",
        title: "Rollup",
        desc: "Rollup 是一个 JavaScript 模块打包器",
        link: "https://www.rollupjs.com",
      },
      {
        icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
        title: "Turbo",
        desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
        link: "https://turbo.build",
      },
      {
        icon: "https://www.babeljs.cn/img/favicon.png",
        title: "Babel",
        desc: "Babel 是一个 JavaScript 编译器",
        link: "https://www.babeljs.cn",
      },
      {
        icon: "https://esbuild.github.io/favicon.svg",
        title: "esbuild",
        desc: "An extremely fast bundler for the web",
        link: "https://esbuild.github.io",
      },
      {
        icon: "https://swc.rs/favicon/apple-touch-icon.png",
        title: "SWC",
        desc: "Rust-based platform for the Web",
        link: "https://swc.rs",
      },
    ],
  },
  {
    title: "图标库",
    items: [
      {
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
        title: "iconfont",
        desc: "国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
        link: "https://www.iconfont.cn",
      },
      {
        icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
        title: "IconPark 图标库",
        desc: "IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标",
        link: "https://iconpark.oceanengine.com/official",
      },
      {
        icon: "/icons/icon-iconify.ico",
        title: "Iconify",
        desc: "一个开源的图标集合和图标工具",
        link: "https://iconify.design",
      },
      {
        icon: "https://icones.js.org/favicon.svg",
        title: "Icônes",
        desc: "基于 Iconify 的图标浏览器",
        link: "https://icones.js.org",
      },
      {
        icon: "/icons/icon-simple.png",
        title: "Simple Icons",
        desc: "包含 2457 种流行品牌的免费 SVG 图标库",
        link: "https://simpleicons.org",
      },
      {
        icon: "/icons/icon-unicornicons.png",
        title: "Animated icons",
        desc: "自带动画的 Icon 图标库",
        link: "https://unicornicons.com/icons",
      },
      {
        icon: "https://emoji.muan.co/appicon.png",
        title: "Emoji searcher",
        desc: "emoji 表情大全",
        link: "https://emoji.muan.co",
      },
      {
        icon: "https://www.webfx.com/wp-content/uploads/2021/10/favicon.png",
        title: "Emoji Cheat Sheet",
        desc: "可以在 GitHub 中使用的 emoji 表情",
        link: "https://www.webfx.com/tools/emoji-cheat-sheet",
      },
      {
        icon: "https://gitmoji.dev/static/apple-icon-144x144.png",
        title: "gitmoji",
        desc: "可以在 git 中使用的 emoji 表情",
        link: "https://gitmoji.dev",
      },
    ],
  },
  
  {
    title: "社区",
    items: [
      {
        title: "Github",
        icon: '/icons/icon-electron.svg',
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com",
      },
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com",
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn",
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com",
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com",
      },
    ],
  },
  {
    title: "摸鱼专用",
    items: [
      {
        icon: "/icons/icon-momoyu.png",
        title: "摸摸鱼热榜",
        link: "https://momoyu.cc",
      },
      {
        icon: "/icons/icon-bilibili.ico",
        title: "哔哩哔哩",
        link: "https://www.bilibili.com",
      },
      {
        icon: "/icons/icon-youtube.png",
        title: "YouTube",
        link: "https://www.youtube.com",
      },
      {
        icon: "/icons/icon-x.ico",
        title: "Twitter",
        link: "https://twitter.com",
      },
    ],
  },
];
