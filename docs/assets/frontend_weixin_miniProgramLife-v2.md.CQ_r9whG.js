import{_ as s,c as a,o as n,V as p}from"./chunks/framework.CthfA3PS.js";const m=JSON.parse('{"title":"小程序优化方案","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/weixin/miniProgramLife-v2.md","filePath":"frontend/weixin/miniProgramLife-v2.md","lastUpdated":1714273955000}'),e={name:"frontend/weixin/miniProgramLife-v2.md"},l=p(`<h1 id="小程序优化方案" tabindex="-1">小程序优化方案 <a class="header-anchor" href="#小程序优化方案" aria-label="Permalink to &quot;小程序优化方案&quot;">​</a></h1><h2 id="_1-命名规范" tabindex="-1">1. 命名规范 <a class="header-anchor" href="#_1-命名规范" aria-label="Permalink to &quot;1. 命名规范&quot;">​</a></h2><h3 id="_1-1命名规则说明" tabindex="-1">1.1命名规则说明 <a class="header-anchor" href="#_1-1命名规则说明" aria-label="Permalink to &quot;1.1命名规则说明&quot;">​</a></h3><ul><li><ol><li><p>小驼峰命名法: 首单词首字母小写，后面的单词首字母大写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>carerUpload</span></span></code></pre></div></li></ol></li><li><ol start="2"><li><p>大驼峰命名法: 首单词首字母大写，后面的单词首字母大写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>CarerUpload</span></span></code></pre></div></li></ol></li><li><ol start="3"><li><p>短横线命名法：所有字母小写，单词之间使用短横线分隔</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pull-refresh-view</span></span></code></pre></div></li></ol></li><li><ol start="4"><li><p>下划线命名法：所有字母小写，单词之间用下划线分隔</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>my_variable, calculate_interest, first_name。</span></span></code></pre></div></li></ol></li></ul><h3 id="_1-2-各种使用场景-三方要求的除外-如小程序miniprogram-npm等-仅限于我们自己创建的文件按如下要求" tabindex="-1">1.2 各种使用场景( 三方要求的除外，如小程序miniprogram_npm等，仅限于我们自己创建的文件按如下要求 ) <a class="header-anchor" href="#_1-2-各种使用场景-三方要求的除外-如小程序miniprogram-npm等-仅限于我们自己创建的文件按如下要求" aria-label="Permalink to &quot;1.2 各种使用场景( 三方要求的除外，如小程序miniprogram_npm等，仅限于我们自己创建的文件按如下要求 )&quot;">​</a></h3><ul><li><ol><li><p>文件夹(小驼峰命名)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># better</span></span>
<span class="line"><span>newHomeIndex</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bad</span></span>
<span class="line"><span>mp_ecard_sdk</span></span></code></pre></div></li></ol></li><li><ol start="2"><li><p>文件(小驼峰命名): 小程序组件、html、js文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># better</span></span>
<span class="line"><span>drugListStepper</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bad</span></span>
<span class="line"><span>mp_ecard_sdk</span></span></code></pre></div></li></ol></li><li><ol start="3"><li><p>图片文件：全部采用小写方式，优先选择单个单词命名，多个单词命名以下划线分隔</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># better</span></span>
<span class="line"><span>arow_bottom.png</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bad</span></span>
<span class="line"><span>add-icon.png</span></span></code></pre></div></li></ol></li><li><ol start="4"><li><p>变量名: 小驼峰命名法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># better</span></span>
<span class="line"><span>titleBarHeight</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bad</span></span>
<span class="line"><span>titlebarHeight</span></span></code></pre></div></li></ol></li><li><ol start="5"><li><p>常量：使用大写字母和下划线来组合命名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># better</span></span>
<span class="line"><span>const PRESCRIPTION_GROUP_VERIFY_CODE = [3001, 3003, 3004, 3005] //处方分组校验拦截code</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bad </span></span>
<span class="line"><span>const perscription_code = [3001, 3003, 3004, 3005]</span></span></code></pre></div></li></ol></li><li><ol start="6"><li><p>方法名：小驼峰命名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># better</span></span>
<span class="line"><span>addTaskReward()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bad -- 首字母大写默认是 class</span></span>
<span class="line"><span>AddTaskReward()</span></span></code></pre></div></li></ol></li><li><ol start="7"><li><p>自定义事件：小驼峰命名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># better</span></span>
<span class="line"><span>this.$emit(&#39;toggleClick&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bad</span></span>
<span class="line"><span>this.$emit(&#39;ToggleClick&#39;)</span></span></code></pre></div></li><li><p>css类名：小写方式用下划线连接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># better</span></span>
<span class="line"><span>.box-cell {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bad</span></span>
<span class="line"><span>.boxCell {}</span></span>
<span class="line"><span>.box_cell {}</span></span></code></pre></div></li></ol></li></ul><h2 id="_2-项目中常量、字典的使用" tabindex="-1">2. 项目中常量、字典的使用 <a class="header-anchor" href="#_2-项目中常量、字典的使用" aria-label="Permalink to &quot;2. 项目中常量、字典的使用&quot;">​</a></h2><p>建议抽取成单独的 const.js文件活着XX.config.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># better</span></span>
<span class="line"><span>const.js</span></span>
<span class="line"><span>export const PROVINCE_MAX_LENGTH = 16; // 默认打开省区最大数量</span></span>
<span class="line"><span>export const QQ_MAP_GLJS_KEY = &#39;RA4BZ-GUBC3-34E3D-YF37D-XSAZH-PRFPS&#39;; // 腾讯地图KEY</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 此处是定义后端api中返回的 code</span></span>
<span class="line"><span>export const ERRNO = {</span></span>
<span class="line"><span>  SUCCESS: 0,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用场景是 if (code === ERRNO.SUCCESS) {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bad</span></span>
<span class="line"><span>step: 0, // 引导步骤,  此处后续肯定有 1，2，应该不止这一步</span></span></code></pre></div><h2 id="_3-组件模块化-api文件、非全局组件、非全局方法、放在当前模块中" tabindex="-1">3. 组件模块化，API文件、非全局组件、非全局方法、放在当前模块中 <a class="header-anchor" href="#_3-组件模块化-api文件、非全局组件、非全局方法、放在当前模块中" aria-label="Permalink to &quot;3. 组件模块化，API文件、非全局组件、非全局方法、放在当前模块中&quot;">​</a></h2><p>主要是为了减轻主包的体积和方便管理，模块的迁移</p><ol><li><p>封装的 request 文件，在存放在公共的工具函数中 <code>/utils/util</code></p></li><li><p>目前所有的api文件都在根目录文件 api 文件下，后续可以将其放在各个的功能模块下</p></li><li><p>非全局组件（组件重复利用率低，暂定是3次，非全局方法）放在当前模块下，目录最终的一个结构如下</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   .</span></span>
<span class="line"><span>   ├── api.js    // 此文件是当前模块所有的api</span></span>
<span class="line"><span>   ├── const.js  // 此文件是当前模块所有的常量</span></span>
<span class="line"><span>   ├── utls.js   // 此文件是当前模块所有通用的方法</span></span>
<span class="line"><span>   ├── component</span></span>
<span class="line"><span>   │   ├── activeCouponFromSky</span></span>
<span class="line"><span>   │   │   ├── activeCouponFromSky.js</span></span>
<span class="line"><span>   │   │   ├── activeCouponFromSky.json</span></span>
<span class="line"><span>   │   │   ├── activeCouponFromSky.wxml</span></span>
<span class="line"><span>   │   │   └── activeCouponFromSky.wxss</span></span>
<span class="line"><span>   │   └── ……</span></span>
<span class="line"><span>   ├── archivesDetails</span></span>
<span class="line"><span>   │   ├── api.js     // 此文件是当前页面使用的api</span></span>
<span class="line"><span>   │   ├── const.js  // 此文件是当前页面使用的常量</span></span>
<span class="line"><span>   │   ├── utls.js   // 此文件是当前页面使用通用的方法</span></span>
<span class="line"><span>   │   ├── component   // 当前页面抽离出来的组件，仅供当前页面使用，主要是当前业务复杂，场景多的情况</span></span>
<span class="line"><span>   │   │   ├── componentDeom</span></span>
<span class="line"><span>   │   │   │   ├── componentDeom.js</span></span>
<span class="line"><span>   │   │   │   ├── componentDeom.json</span></span>
<span class="line"><span>   │   │   │   ├── componentDeom.wxml</span></span>
<span class="line"><span>   │   │   │   └── componentDeom.wxss</span></span>
<span class="line"><span>   │   │   └── ……</span></span>
<span class="line"><span>   │   ├── archivesDetails.js</span></span>
<span class="line"><span>   │   ├── archivesDetails.json</span></span>
<span class="line"><span>   │   ├── archivesDetails.wxml</span></span>
<span class="line"><span>   │   └── archivesDetails.wxss</span></span>
<span class="line"><span>   ├── ……</span></span></code></pre></div><h2 id="_4-尝试使用-skyline-模式-渲染模式" tabindex="-1">4. 尝试使用 skyline 模式，渲染模式 <a class="header-anchor" href="#_4-尝试使用-skyline-模式-渲染模式" aria-label="Permalink to &quot;4. 尝试使用 skyline 模式，渲染模式&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/comparation.html" target="_blank" rel="noreferrer">Skyline 渲染引擎</a></p><h2 id="_5-代码优化-以阶段性的总结文档为主-页面多次调用的方法使用-变量-缓存" tabindex="-1">5. 代码优化，以阶段性的总结文档为主（页面多次调用的方法使用 变量 缓存） <a class="header-anchor" href="#_5-代码优化-以阶段性的总结文档为主-页面多次调用的方法使用-变量-缓存" aria-label="Permalink to &quot;5. 代码优化，以阶段性的总结文档为主（页面多次调用的方法使用 变量 缓存）&quot;">​</a></h2><p><a href="/frontend/others/litterTips.html">前端编程小技巧</a></p>`,17),i=[l];function t(c,o,d,r,h,u){return n(),a("div",null,i)}const b=s(e,[["render",t]]);export{m as __pageData,b as default};
