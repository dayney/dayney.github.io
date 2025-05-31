import{_ as s,c as a,o as n,V as i}from"./chunks/framework.CsbsVE7l.js";const m=JSON.parse('{"title":"小程序命名规范","description":"","frontmatter":{},"headers":[],"relativePath":"efficiency/namingStyle/miniprogram.md","filePath":"efficiency/namingStyle/miniprogram.md","lastUpdated":1748703397000}'),p={name:"efficiency/namingStyle/miniprogram.md"},e=i(`<h1 id="小程序命名规范" tabindex="-1">小程序命名规范 <a class="header-anchor" href="#小程序命名规范" aria-label="Permalink to &quot;小程序命名规范&quot;">​</a></h1><h2 id="项目结构规范" tabindex="-1">项目结构规范 <a class="header-anchor" href="#项目结构规范" aria-label="Permalink to &quot;项目结构规范&quot;">​</a></h2><h3 id="_1-常量管理" tabindex="-1">1. 常量管理 <a class="header-anchor" href="#_1-常量管理" aria-label="Permalink to &quot;1. 常量管理&quot;">​</a></h3><p>建议抽取成单独的 <code>const.js</code> 或 <code>XX.config.js</code> 文件</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// const.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PROVINCE_MAX_LENGTH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认打开省区最大数量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> QQ_MAP_GLJS_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;XXXX&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 腾讯地图KEY</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义后端api中返回的 code</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ERRNO</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SUCCESS: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用场景</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ERRNO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SUCCESS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span></code></pre></div><h3 id="_2-目录结构规范" tabindex="-1">2. 目录结构规范 <a class="header-anchor" href="#_2-目录结构规范" aria-label="Permalink to &quot;2. 目录结构规范&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── api.js    // 当前模块所有的api</span></span>
<span class="line"><span>├── const.js  // 当前模块所有的常量</span></span>
<span class="line"><span>├── utils.js  // 当前模块所有通用的方法</span></span>
<span class="line"><span>├── component</span></span>
<span class="line"><span>│   ├── activeCouponFromSky</span></span>
<span class="line"><span>│   │   ├── activeCouponFromSky.js</span></span>
<span class="line"><span>│   │   ├── activeCouponFromSky.json</span></span>
<span class="line"><span>│   │   ├── activeCouponFromSky.wxml</span></span>
<span class="line"><span>│   │   └── activeCouponFromSky.wxss</span></span>
<span class="line"><span>│   └── ……</span></span>
<span class="line"><span>├── archivesDetails</span></span>
<span class="line"><span>│   ├── api.js     // 当前页面使用的api</span></span>
<span class="line"><span>│   ├── const.js   // 当前页面使用的常量</span></span>
<span class="line"><span>│   ├── utils.js   // 当前页面使用通用的方法</span></span>
<span class="line"><span>│   ├── component  // 当前页面抽离出来的组件</span></span>
<span class="line"><span>│   │   ├── componentDemo</span></span>
<span class="line"><span>│   │   │   ├── componentDemo.js</span></span>
<span class="line"><span>│   │   │   ├── componentDemo.json</span></span>
<span class="line"><span>│   │   │   ├── componentDemo.wxml</span></span>
<span class="line"><span>│   │   │   └── componentDemo.wxss</span></span>
<span class="line"><span>│   │   └── ……</span></span>
<span class="line"><span>│   ├── archivesDetails.js</span></span>
<span class="line"><span>│   ├── archivesDetails.json</span></span>
<span class="line"><span>│   ├── archivesDetails.wxml</span></span>
<span class="line"><span>│   └── archivesDetails.wxss</span></span>
<span class="line"><span>└── ……</span></span></code></pre></div>`,7),l=[e];function t(h,c,k,o,r,d){return n(),a("div",null,l)}const y=s(p,[["render",t]]);export{m as __pageData,y as default};
