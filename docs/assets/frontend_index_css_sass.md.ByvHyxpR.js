import{_ as p,E as l,c as h,o as e,V as i,m as a,J as t,a as s,w as k}from"./chunks/framework.CsbsVE7l.js";const x=JSON.parse('{"title":"SASS编码规范","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/index/css/sass.md","filePath":"frontend/index/css/sass.md","lastUpdated":1748791719000}'),d={name:"frontend/index/css/sass.md"},r=i(`<h1 id="sass编码规范" tabindex="-1">SASS编码规范 <a class="header-anchor" href="#sass编码规范" aria-label="Permalink to &quot;SASS编码规范&quot;">​</a></h1><h3 id="用更合理的方式写-css-sass" tabindex="-1">用更合理的方式写 <code>CSS / Sass</code> <a class="header-anchor" href="#用更合理的方式写-css-sass" aria-label="Permalink to &quot;用更合理的方式写 \`CSS / Sass\`&quot;">​</a></h3><ul><li><p>规范的代码可以促进团队合作，</p></li><li><p>规范的代码可以减少 <code>bug</code> 处理，</p></li><li><p>规范的代码可以降低维护成本，</p></li><li><p>规范的代码有助于代码审查，</p></li><li><p>养成代码规范的习惯，有助于程序员自身的成长。</p></li></ul><h3 id="sass注释规范" tabindex="-1">SASS注释规范 <a class="header-anchor" href="#sass注释规范" aria-label="Permalink to &quot;SASS注释规范&quot;">​</a></h3><p>SASS支持 CSS 标准的多行注释 <code>/* */</code>，同时也支持单行注释 <code>//</code>。</p><ul><li>多行注释在使用非 Compressed 模式进行编译后的输出文件中会保留下来，单行注释 <code>//</code> 侧会被移除</li><li>多行注释和单行注释在 SASS 编译后输出的压缩 CSS 文件都会被移除</li><li>当多行注释内容第一个字符是感叹号 &quot;!&quot; 的时候，即 <code>/*! */</code>，SASS 无论用哪一种编译方式编译注释都会保留</li><li>注释内容可以加入 SASS 变量</li></ul><h3 id="团队约定" tabindex="-1">团队约定 <a class="header-anchor" href="#团队约定" aria-label="Permalink to &quot;团队约定&quot;">​</a></h3><p>SCSS 文件内</p><ul><li>全部遵循 CSS 注释规范</li><li>不使用 <code>/*! */</code> 注释方式</li><li>注释内不放 SASS 变量</li></ul><p>标准的注释规范如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@charset &quot;UTF-8&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* @desc File Info</span></span>
<span class="line"><span>* @author liqinuo</span></span>
<span class="line"><span>* @date 2015-10-10</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Module A</span></span>
<span class="line"><span>----------------------------------------------------------------*/</span></span>
<span class="line"><span>.mod-a {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* module A logo */</span></span>
<span class="line"><span>.mod-a-logo {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* module A nav */</span></span>
<span class="line"><span>.mod-a-nav {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Module B</span></span>
<span class="line"><span>----------------------------------------------------------------*/</span></span>
<span class="line"><span>.mod-b {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* module B logo */</span></span>
<span class="line"><span>.mod-b-logo {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* module B nav */</span></span>
<span class="line"><span>.mod-b-nav {}</span></span></code></pre></div><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><ul><li>使用 <code>.scss</code> 的语法，不使用 <code>.sass</code> 原本的语法。</li><li>CSS 和 <code>@include</code> 声明按照以下逻辑排序（参见下文）</li></ul><h3 id="属性声明的排序" tabindex="-1">属性声明的排序 <a class="header-anchor" href="#属性声明的排序" aria-label="Permalink to &quot;属性声明的排序&quot;">​</a></h3><ol><li>属性声明 首先列出除去 <code>@include</code> 和嵌套选择器之外的所有属性声明。</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.btn-green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">复制代码</span></span></code></pre></div><ol><li><code>@include</code> 声明 紧随后面的是 <code>@include</code>，这样可以使得整个选择器的可读性更高。</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.btn-green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0.5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ease</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">复制代码</span></span></code></pre></div><ol><li>嵌套选择器 <em>如果有必要</em>用到嵌套选择器，把它们放到最后，在规则声明和嵌套选择器之间要加上空白，相邻嵌套选择器之间也要加上空白。嵌套选择器中的内容也要遵循上述指引。</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.btn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0.5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ease</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    margin-right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">复制代码</span></span></code></pre></div><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h3><p>可复用属性尽量抽离为页面变量，易于统一维护</p><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// CSS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.jdc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// SCSS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$color: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.jdc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $color;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Mixins</p><p>根据功能定义模块，然后在需要使用的地方通过 <code>@include</code> 调用，避免编码时重复输入代码段</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// CSS</span></span>
<span class="line"><span>.jdc-1 {</span></span>
<span class="line"><span>    -webkit-border-radius: 5px;</span></span>
<span class="line"><span>    border-radius: 5px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-2 {</span></span>
<span class="line"><span>    -webkit-border-radius: 10px;</span></span>
<span class="line"><span>    border-radius: 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// SCSS</span></span>
<span class="line"><span>@mixin radius($radius:5px) {</span></span>
<span class="line"><span>    -webkit-border-radius: $radius;</span></span>
<span class="line"><span>    border-radius: $radius;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-1 {</span></span>
<span class="line"><span>    @include radius; //参数使用默认值</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-2 {</span></span>
<span class="line"><span>    @include radius(10px);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CSS</span></span>
<span class="line"><span>.jdc-1 {</span></span>
<span class="line"><span>    background: url(/img/icon.png) no-repeat -10px 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-2 {</span></span>
<span class="line"><span>    background: url(/img/icon.png) no-repeat -20px 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// SCSS</span></span>
<span class="line"><span>@mixin icon($x:0, $y:0) {</span></span>
<span class="line"><span>    background: url(/img/icon.png) no-repeat $x, $y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-1 {</span></span>
<span class="line"><span>    @include icon(-10px, 0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-2 {</span></span>
<span class="line"><span>    @include icon(-20px, 0);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="占位选择器" tabindex="-1">占位选择器 % <a class="header-anchor" href="#占位选择器" aria-label="Permalink to &quot;占位选择器 %&quot;">​</a></h2><p>如果不调用则不会有任何多余的 css 文件，占位选择器以 <code>%</code> 标识定义，通过 <code>@extend</code> 调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//scss</span></span>
<span class="line"><span>%borderbox {</span></span>
<span class="line"><span>    -webkit-box-sizing: border-box;</span></span>
<span class="line"><span>    box-sizing: border-box;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc {</span></span>
<span class="line"><span>    @extend %borderbox;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="extend-继承" tabindex="-1">extend 继承 <a class="header-anchor" href="#extend-继承" aria-label="Permalink to &quot;extend 继承&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// CSS</span></span>
<span class="line"><span>.jdc-1 {</span></span>
<span class="line"><span>    font-size: 12px;</span></span>
<span class="line"><span>    color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-2 {</span></span>
<span class="line"><span>    font-size: 12px;</span></span>
<span class="line"><span>    color: red;</span></span>
<span class="line"><span>    font-weight: bold;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// SCSS</span></span>
<span class="line"><span>.jdc-1 {</span></span>
<span class="line"><span>    font-size: 12px;</span></span>
<span class="line"><span>    color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-2 {</span></span>
<span class="line"><span>    @extend .jdc_1;</span></span>
<span class="line"><span>    font-weight: bold;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 或者</span></span>
<span class="line"><span>%font-red {</span></span>
<span class="line"><span>    font-size: 12px;</span></span>
<span class="line"><span>    color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-1 {</span></span>
<span class="line"><span>    @extend %font_red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-2 {</span></span>
<span class="line"><span>    @extend %font_red;</span></span>
<span class="line"><span>    font-weight: bold;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="for-循环" tabindex="-1">for 循环 <a class="header-anchor" href="#for-循环" aria-label="Permalink to &quot;for 循环&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// CSS</span></span>
<span class="line"><span>.jdc-1 {background-position: 0 -20px;}</span></span>
<span class="line"><span>.jdc-2 {background-position: 0 -40px;}</span></span>
<span class="line"><span>.jdc-3 {background-position: 0 -60px;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// SCSS</span></span>
<span class="line"><span>@for $i from 1 through 3 {</span></span>
<span class="line"><span>    .jdc-#{$i} {</span></span>
<span class="line"><span>        background-position: 0 (-20px) * $i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意：<code>#{}</code> 是连接符，变量连接使用时需要依赖</p><h2 id="each-循环" tabindex="-1">each 循环 <a class="header-anchor" href="#each-循环" aria-label="Permalink to &quot;each 循环&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// CSS</span></span>
<span class="line"><span>.jdc-list {</span></span>
<span class="line"><span>    background-image: url(/img/jdc_list.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-detail {</span></span>
<span class="line"><span>    background-image: url(/img/jdc_detail.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// SCSS</span></span>
<span class="line"><span>@each $name in list, detail {</span></span>
<span class="line"><span>    .jdc-#{$name} {</span></span>
<span class="line"><span>        background-image: url(/img/jdc_#{$name}.png);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CSS</span></span>
<span class="line"><span>.jdc-list {</span></span>
<span class="line"><span>    background-image: url(/img/jdc_list.png);</span></span>
<span class="line"><span>    background-color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc-detail {</span></span>
<span class="line"><span>    background-image: url(/img/jdc_detail.png);</span></span>
<span class="line"><span>    background-color: blue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// SCSS</span></span>
<span class="line"><span>@each $name, $color in (list, red), (detail, blue) {</span></span>
<span class="line"><span>    .jdc-#{$name} {</span></span>
<span class="line"><span>        background-image: url(/img/jdc_#{$name}.png);</span></span>
<span class="line"><span>        background-color: $color;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="function-函数" tabindex="-1">function 函数 <a class="header-anchor" href="#function-函数" aria-label="Permalink to &quot;function 函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@function pxToRem($px) {</span></span>
<span class="line"><span>    @return $px / 10px * 1rem;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.jdc {</span></span>
<span class="line"><span>    font-size: pxToRem(12px);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="运算规范" tabindex="-1">运算规范 <a class="header-anchor" href="#运算规范" aria-label="Permalink to &quot;运算规范&quot;">​</a></h2><p>运算符之间空出一个空格</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.jdc {</span></span>
<span class="line"><span>    width: 100px - 50px;</span></span>
<span class="line"><span>    height: 30px / 5;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 正确的运算格式</span></span>
<span class="line"><span>.jdc {</span></span>
<span class="line"><span>    width: 100px - 50px;</span></span>
<span class="line"><span>    width: 100px + 50px;</span></span>
<span class="line"><span>    width: 100px * 2;</span></span>
<span class="line"><span>    width: 100px / 2;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="选择器嵌套" tabindex="-1">选择器嵌套 <a class="header-anchor" href="#选择器嵌套" aria-label="Permalink to &quot;选择器嵌套&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* CSS */</span></span>
<span class="line"><span>.jdc {}</span></span>
<span class="line"><span>body .jdc {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* SCSS */</span></span>
<span class="line"><span>.jdc {</span></span>
<span class="line"><span>    body &amp; {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/* CSS */</span></span>
<span class="line"><span>.jdc {}</span></span>
<span class="line"><span>.jdc-cover {}</span></span>
<span class="line"><span>.jdc-info {}</span></span>
<span class="line"><span>.jdc-info-name {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* SCSS */</span></span>
<span class="line"><span>.jdc {</span></span>
<span class="line"><span>    &amp;-cover {}</span></span>
<span class="line"><span>    &amp;-info {</span></span>
<span class="line"><span>        &amp;_name {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="属性嵌套" tabindex="-1">属性嵌套 <a class="header-anchor" href="#属性嵌套" aria-label="Permalink to &quot;属性嵌套&quot;">​</a></h3>`,46),c={id:"【强调】-永远不要嵌套-id-选择器",tabindex:"-1"},E=a("strong",null,"永远不要嵌套 ID 选择器！",-1),g=a("a",{class:"header-anchor",href:"#【强调】-永远不要嵌套-id-选择器","aria-label":'Permalink to "<font color=#f00>【强调】: **永远不要嵌套 ID 选择器！**？</font>"'},"​",-1),o=i(`<h3 id="属性嵌套-1" tabindex="-1">属性嵌套 <a class="header-anchor" href="#属性嵌套-1" aria-label="Permalink to &quot;属性嵌套&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* CSS */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.jdc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">no-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">url(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/img/icon.png</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background-position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* SCSS */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.jdc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">no-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">url(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/img/icon.png</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h1 id="sass-命名规范" tabindex="-1">SASS 命名规范 <a class="header-anchor" href="#sass-命名规范" aria-label="Permalink to &quot;SASS 命名规范&quot;">​</a></h1><h2 id="基本原则" tabindex="-1">基本原则 <a class="header-anchor" href="#基本原则" aria-label="Permalink to &quot;基本原则&quot;">​</a></h2><ul><li>使用 BEM 命名方法</li><li>变量名使用连字符</li><li>保持嵌套层级清晰</li></ul><h2 id="命名规则" tabindex="-1">命名规则 <a class="header-anchor" href="#命名规则" aria-label="Permalink to &quot;命名规则&quot;">​</a></h2><ol><li>变量：使用连字符</li><li>Mixin：使用连字符</li><li>函数：使用连字符</li><li>占位符：使用连字符</li></ol><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$primary-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#333</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$font-size-base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@mixin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> flex-center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%button-base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="详细规范" tabindex="-1">详细规范 <a class="header-anchor" href="#详细规范" aria-label="Permalink to &quot;详细规范&quot;">​</a></h2><h3 id="_1-变量命名" tabindex="-1">1. 变量命名 <a class="header-anchor" href="#_1-变量命名" aria-label="Permalink to &quot;1. 变量命名&quot;">​</a></h3><ul><li>使用连字符</li><li>使用有意义的名称</li><li>使用类型前缀</li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 颜色</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$color-primary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#007bff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$color-secondary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#6c757d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$color-success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#28a745</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字体</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$font-size-base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$font-size-large</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$font-size-small</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 间距</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$spacing-unit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$spacing-large</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$spacing-small</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 断点</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$breakpoint-sm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">576</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$breakpoint-md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">768</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$breakpoint-lg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">992</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-mixin-命名" tabindex="-1">2. Mixin 命名 <a class="header-anchor" href="#_2-mixin-命名" aria-label="Permalink to &quot;2. Mixin 命名&quot;">​</a></h3><ul><li>使用连字符</li><li>使用动词开头</li><li>使用有意义的名称</li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@mixin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> flex-center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@mixin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> responsive-font</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$min-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$max-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$min-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$breakpoint-md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$max-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@mixin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hover-effect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">all</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ease</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">translateY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-函数命名" tabindex="-1">3. 函数命名 <a class="header-anchor" href="#_3-函数命名" aria-label="Permalink to &quot;3. 函数命名&quot;">​</a></h3><ul><li>使用连字符</li><li>使用动词开头</li><li>使用有意义的名称</li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@function</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> calculate-rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @return</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $font-size-base</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@function</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> get-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map-get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_4-占位符命名" tabindex="-1">4. 占位符命名 <a class="header-anchor" href="#_4-占位符命名" aria-label="Permalink to &quot;4. 占位符命名&quot;">​</a></h3><ul><li>使用连字符</li><li>使用有意义的名称</li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%button-base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cursor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pointer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%card-base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  box-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rgba</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_5-嵌套规则" tabindex="-1">5. 嵌套规则 <a class="header-anchor" href="#_5-嵌套规则" aria-label="Permalink to &quot;5. 嵌套规则&quot;">​</a></h3><ul><li>最多嵌套三层</li><li>使用 BEM 命名方法</li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.card</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--large</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--featured</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_6-模块化组织" tabindex="-1">6. 模块化组织 <a class="header-anchor" href="#_6-模块化组织" aria-label="Permalink to &quot;6. 模块化组织&quot;">​</a></h3><ul><li>使用 <code>_</code> 前缀表示部分文件</li><li>使用有意义的文件名</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>_variables.scss</span></span>
<span class="line"><span>_mixins.scss</span></span>
<span class="line"><span>_functions.scss</span></span>
<span class="line"><span>_buttons.scss</span></span>
<span class="line"><span>_forms.scss</span></span></code></pre></div><h3 id="_7-导入顺序" tabindex="-1">7. 导入顺序 <a class="header-anchor" href="#_7-导入顺序" aria-label="Permalink to &quot;7. 导入顺序&quot;">​</a></h3><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;variables&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;functions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. Mixins</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mixins&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4. 基础样式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5. 组件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;components&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 6. 布局</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;layout&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 7. 工具类</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;utilities&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_8-注释规范" tabindex="-1">8. 注释规范 <a class="header-anchor" href="#_8-注释规范" aria-label="Permalink to &quot;8. 注释规范&quot;">​</a></h3><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 单行注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 多行注释 */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 文件头部注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 文件名：_buttons.scss</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 描述：按钮样式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 作者：xxx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 日期：2024-03-21</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><h3 id="_9-最佳实践" tabindex="-1">9. 最佳实践 <a class="header-anchor" href="#_9-最佳实践" aria-label="Permalink to &quot;9. 最佳实践&quot;">​</a></h3><ol><li>避免过深的嵌套</li><li>使用变量存储重复值</li><li>使用 Mixin 处理重复的样式</li><li>使用函数处理计算</li><li>使用占位符处理共享样式</li><li>保持代码组织清晰</li><li>使用有意义的命名</li><li>遵循 BEM 命名方法</li></ol>`,34);function y(F,C,u,b,m,B){const n=l("font");return e(),h("div",null,[r,a("h3",c,[t(n,{color:"#f00"},{default:k(()=>[s("【强调】: "),E,s("？")]),_:1}),s(),g]),o])}const v=p(d,[["render",y]]);export{x as __pageData,v as default};
