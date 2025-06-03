import{_ as n,c as s,o as a,V as p}from"./chunks/framework.CsbsVE7l.js";const f=JSON.parse('{"title":"下拉刷新，上拉加载更多","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/index/vue/loadMore.md","filePath":"frontend/index/vue/loadMore.md","lastUpdated":1748791719000}'),l={name:"frontend/index/vue/loadMore.md"},t=p(`<h1 id="下拉刷新-上拉加载更多" tabindex="-1">下拉刷新，上拉加载更多 <a class="header-anchor" href="#下拉刷新-上拉加载更多" aria-label="Permalink to &quot;下拉刷新，上拉加载更多&quot;">​</a></h1><h2 id="_1-背景" tabindex="-1">1 背景 <a class="header-anchor" href="#_1-背景" aria-label="Permalink to &quot;1 背景&quot;">​</a></h2><p>主要是在做企业微信聊天记录查询的时候，关于聊天记录中，业务部门需要上下滑动以加载更多的信息。</p><h2 id="_2-前沿" tabindex="-1">2 前沿 <a class="header-anchor" href="#_2-前沿" aria-label="Permalink to &quot;2 前沿&quot;">​</a></h2><p>本方法适用于移动端（touch相关事件touchstart、touchmove、touchend）也适用于WEB端（mouse相关事件mousedown、mousemove、mouseup）。</p><p>对于其绝大部分，我们也总体上避免就 JavaScript 或 HTML 的本身提出建议。我们不介意你是否使用分号或结尾的逗号。我们不介意你在 HTML 特性中使用单引号还是双引号。不过当我们发现在 Vue 的情景下有帮助的特定模式时，也会存在例外。</p><h2 id="_3-解读及实现" tabindex="-1">3 解读及实现 <a class="header-anchor" href="#_3-解读及实现" aria-label="Permalink to &quot;3 解读及实现&quot;">​</a></h2><ul><li>3.1 加载上一页（下拉刷新）是通过修改主要区域的上一页提示的box的来进行隐藏和展示的<strong>transform: translateY(-60px);</strong>，通过判断用户向下拉的距离（touchstart开始至touchend结束，mousedown开始至mouseup结束来判断滑动的距离，来加载下一页）。</li><li>3.2 加载下一页，是需要通过判断是否有已经触底（一般会设置阀值）来判断是否快到低了，来判断是否需要加载下一页。</li><li>3.3 所有的调用接口，都需要使用节流的方式来加载，防止用户操作过快，加载太频繁导致卡顿的现象。</li></ul><p>vue2的插件<strong>better-scroll</strong>版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>	&lt;div class=&quot;wrapper&quot; ref=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>		&lt;ul class=&quot;content&quot;&gt;</span></span>
<span class="line"><span>			&lt;div class=&quot;newxin&quot; v-if=&quot;down&quot;&gt;</span></span>
<span class="line"><span>        {{ pulldownTip.text }}</span></span>
<span class="line"><span>			&lt;/div&gt;</span></span>
<span class="line"><span>			&lt;li v-for=&quot;item in 20&quot;&gt;喵喵喵{{item}}&lt;/li&gt;</span></span>
<span class="line"><span>			&lt;div class=&quot;newxin&quot; v-if=&quot;up&quot;&gt;</span></span>
<span class="line"><span>        {{ pulldownTip.textup }}</span></span>
<span class="line"><span>			&lt;/div&gt;</span></span>
<span class="line"><span>		&lt;/ul&gt;</span></span>
<span class="line"><span>	&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>	import BScroll from &#39;better-scroll&#39;;</span></span>
<span class="line"><span>	export default {</span></span>
<span class="line"><span>		data() {</span></span>
<span class="line"><span>			return {</span></span>
<span class="line"><span>        BScrollConfig: {</span></span>
<span class="line"><span>          /**</span></span>
<span class="line"><span>           * 1 滚动的时候会派发scroll事件，会截流。</span></span>
<span class="line"><span>           * 2 滚动的时候实时派发scroll事件，不会截流。</span></span>
<span class="line"><span>           * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件</span></span>
<span class="line"><span>           */</span></span>
<span class="line"><span>          probeType: 3,</span></span>
<span class="line"><span>          /**</span></span>
<span class="line"><span>           * 点击列表是否派发click事件</span></span>
<span class="line"><span>           */</span></span>
<span class="line"><span>          click: true,</span></span>
<span class="line"><span>          /**</span></span>
<span class="line"><span>           * 是否开启横向滚动</span></span>
<span class="line"><span>           */</span></span>
<span class="line"><span>          scrollX: false,</span></span>
<span class="line"><span>          /**</span></span>
<span class="line"><span>           * 是否派发滚动事件</span></span>
<span class="line"><span>           */</span></span>
<span class="line"><span>          listenScroll: false,</span></span>
<span class="line"><span>          /**</span></span>
<span class="line"><span>           * 是否派发滚动到底部的事件，用于上拉加载</span></span>
<span class="line"><span>           */</span></span>
<span class="line"><span>          pullup: true,</span></span>
<span class="line"><span>          /**</span></span>
<span class="line"><span>           * 是否派发顶部下拉的事件，用于下拉刷新</span></span>
<span class="line"><span>           */</span></span>
<span class="line"><span>          pulldown: true,</span></span>
<span class="line"><span>          /**</span></span>
<span class="line"><span>           * 是否派发列表滚动开始的事件</span></span>
<span class="line"><span>           */</span></span>
<span class="line"><span>          beforeScroll: false,</span></span>
<span class="line"><span>          /**</span></span>
<span class="line"><span>           * 当数据更新后，刷新scroll的延时。</span></span>
<span class="line"><span>           */</span></span>
<span class="line"><span>          refreshDelay: 20,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>				loadingConnecting: false,</span></span>
<span class="line"><span>				down: false,</span></span>
<span class="line"><span>				up: true,</span></span>
<span class="line"><span>				pulldownTip: {</span></span>
<span class="line"><span>					text: &#39;下拉刷新&#39;, // 松开立即刷新</span></span>
<span class="line"><span>					textup: &#39;上拉加载更多&#39;, // 松开立即刷新</span></span>
<span class="line"><span>					rotate: &#39;&#39; // icon-rotate</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			};</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		mounted() {</span></span>
<span class="line"><span>			setTimeout(() =&gt; {</span></span>
<span class="line"><span>				this.BS();</span></span>
<span class="line"><span>			}, 20);</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		methods: {</span></span>
<span class="line"><span>			BS() {</span></span>
<span class="line"><span>				if(!this.$refs.wrapper) {</span></span>
<span class="line"><span>					return;</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        this.scroll = new BScroll(this.$refs.wrapper, {</span></span>
<span class="line"><span>					probeType: this.BScrollConfig.probeType,</span></span>
<span class="line"><span>					click: this.BScrollConfig.click,</span></span>
<span class="line"><span>					scrollX: this.BScrollConfig.scrollX,</span></span>
<span class="line"><span>				});</span></span>
<span class="line"><span>				this.scroll.on(&#39;scroll&#39;, pos =&gt; {</span></span>
<span class="line"><span>					console.log(pos.y);</span></span>
<span class="line"><span>					//如果下拉超过50px 就显示下拉刷新的文字</span></span>
<span class="line"><span>					if(pos.y &gt; 50) {</span></span>
<span class="line"><span>						// this.pulldownTip.text = &quot;放手刷新&quot;</span></span>
<span class="line"><span>						this.down = true</span></span>
<span class="line"><span>					} else {</span></span>
<span class="line"><span>						this.down = false</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				});</span></span>
<span class="line"><span>				//touchEnd 通过这个方法来监听下拉刷新</span></span>
<span class="line"><span>				this.scroll.on(&#39;touchEnd&#39;, pos =&gt; {</span></span>
<span class="line"><span>					// 下拉动作</span></span>
<span class="line"><span>					if(pos.y &gt; 50) {</span></span>
<span class="line"><span>						console.log(&#39;下拉刷新成功&#39;);</span></span>
<span class="line"><span>						console.log(&#39;这里执行你方法&#39;);</span></span>
<span class="line"><span>						this.down = false;</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					if(this.scroll.maxScrollY &gt; pos.y + 10) {</span></span>
<span class="line"><span>						console.log(&#39;加载更多&#39;);</span></span>
<span class="line"><span>						//使用refresh 方法 来更新scroll  解决无法滚动的问题</span></span>
<span class="line"><span>						this.scroll.refresh();</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					console.log(this.scroll.maxScrollY + &#39;总距离----下拉的距离&#39; + pos.y);</span></span>
<span class="line"><span>				});</span></span>
<span class="line"><span>				console.log(this.scroll.maxScrollY);</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>	* {</span></span>
<span class="line"><span>		margin: 0px;</span></span>
<span class="line"><span>		padding: 0px;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	.wrapper {</span></span>
<span class="line"><span>		width: 100%;</span></span>
<span class="line"><span>		height: 100%;</span></span>
<span class="line"><span>		position: absolute;</span></span>
<span class="line"><span>		overflow: hidden;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	.wrapper .content {</span></span>
<span class="line"><span>		width: 100%;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	.wrapper .content li {</span></span>
<span class="line"><span>		background-color: #ffffff;</span></span>
<span class="line"><span>		width: 100%;</span></span>
<span class="line"><span>		height: 66px;</span></span>
<span class="line"><span>		text-align: center;</span></span>
<span class="line"><span>		line-height: 66px;</span></span>
<span class="line"><span>		border-bottom: solid 1px #f0f0f0;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	/* 刷新 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	.newxin {</span></span>
<span class="line"><span>		width: 100%;</span></span>
<span class="line"><span>		height: 50px;</span></span>
<span class="line"><span>		text-align: center;</span></span>
<span class="line"><span>		line-height: 50px;</span></span>
<span class="line"><span>		background: red;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>原生js版本,WEB版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;鼠标事件下拉刷新&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    body, html {</span></span>
<span class="line"><span>      margin: 0;</span></span>
<span class="line"><span>      padding: 0;</span></span>
<span class="line"><span>      overflow: hidden;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #container {</span></span>
<span class="line"><span>      height: 100vh;</span></span>
<span class="line"><span>      overflow-y: auto;</span></span>
<span class="line"><span>      background-color: #f5f5f5;</span></span>
<span class="line"><span>      position: relative;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #pull-to-refresh {</span></span>
<span class="line"><span>      position: absolute;</span></span>
<span class="line"><span>      top: -60px;</span></span>
<span class="line"><span>      left: 0;</span></span>
<span class="line"><span>      width: 100%;</span></span>
<span class="line"><span>      height: 60px;</span></span>
<span class="line"><span>      background-color: lightblue;</span></span>
<span class="line"><span>      color: #333;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>      line-height: 60px;</span></span>
<span class="line"><span>      font-size: 16px;</span></span>
<span class="line"><span>      transition: transform 0.3s ease;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #content {</span></span>
<span class="line"><span>      padding: 20px;</span></span>
<span class="line"><span>      background-color: white;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #content p {</span></span>
<span class="line"><span>      margin: 0 0 10px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;container&quot;&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;pull-to-refresh&quot;&gt;下拉刷新中...&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;content&quot;&gt;</span></span>
<span class="line"><span>      &lt;p&gt;这是页面内容 1&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p&gt;这是页面内容 2&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p&gt;这是页面内容 3&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p&gt;这是页面内容 4&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p&gt;这是页面内容 5&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    const container = document.getElementById(&#39;container&#39;);</span></span>
<span class="line"><span>    const pullToRefresh = document.getElementById(&#39;pull-to-refresh&#39;);</span></span>
<span class="line"><span>    const content = document.getElementById(&#39;content&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let isDragging = false;  // 是否正在拖拽</span></span>
<span class="line"><span>    let startY = 0;          // 鼠标起始位置</span></span>
<span class="line"><span>    let currentY = 0;        // 当前鼠标位置</span></span>
<span class="line"><span>    let isRefreshing = false; // 是否正在刷新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container.addEventListener(&#39;mousedown&#39;, (event) =&gt; {</span></span>
<span class="line"><span>      console.log(&#39;鼠标按下&#39;)</span></span>
<span class="line"><span>      if (container.scrollTop === 0) { // 只有滚动到顶部时才触发下拉刷新</span></span>
<span class="line"><span>        isDragging = true;</span></span>
<span class="line"><span>        startY = event.clientY;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container.addEventListener(&#39;mousemove&#39;, (event) =&gt; {</span></span>
<span class="line"><span>      console.log(&#39;鼠标移动&#39;)</span></span>
<span class="line"><span>      if (isDragging &amp;&amp; !isRefreshing) {</span></span>
<span class="line"><span>        currentY = event.clientY;</span></span>
<span class="line"><span>        const distance = currentY - startY;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (distance &gt; 0) { // 向下拖动</span></span>
<span class="line"><span>          pullToRefresh.style.transform = \`translateY(\${Math.min(distance, 100)}px)\`;</span></span>
<span class="line"><span>          content.style.transform = \`translateY(\${Math.min(distance, 100)}px)\`;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container.addEventListener(&#39;mouseup&#39;, () =&gt; {</span></span>
<span class="line"><span>      console.log(&#39;鼠标谈起&#39;)</span></span>
<span class="line"><span>      if (isDragging) {</span></span>
<span class="line"><span>        isDragging = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const distance = currentY - startY;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (distance &gt; 50) { // 达到触发刷新阈值</span></span>
<span class="line"><span>          isRefreshing = true;</span></span>
<span class="line"><span>          pullToRefresh.style.transform = \`translateY(60px)\`;</span></span>
<span class="line"><span>          content.style.transform = \`translateY(60px)\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 模拟刷新操作</span></span>
<span class="line"><span>          setTimeout(() =&gt; {</span></span>
<span class="line"><span>            // 刷新完成，回弹到初始位置</span></span>
<span class="line"><span>            pullToRefresh.style.transform = \`translateY(-60px)\`;</span></span>
<span class="line"><span>            content.style.transform = \`translateY(0)\`;</span></span>
<span class="line"><span>            isRefreshing = false;</span></span>
<span class="line"><span>          }, 2000);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          // 未达到刷新阈值，回弹到初始位置</span></span>
<span class="line"><span>          pullToRefresh.style.transform = \`translateY(-60px)\`;</span></span>
<span class="line"><span>          content.style.transform = \`translateY(0)\`;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 防止鼠标移出容器导致无法触发 mouseup</span></span>
<span class="line"><span>    window.addEventListener(&#39;mouseup&#39;, () =&gt; {</span></span>
<span class="line"><span>      isDragging = false;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h3><p><a href="https://cloud.tencent.com/developer/article/1405442" target="_blank" rel="noreferrer">vue 的上拉加载，下拉刷新（基于better-scrol）</a></p>`,14),e=[t];function i(c,o,r,d,g,u){return a(),s("div",null,e)}const m=n(l,[["render",i]]);export{f as __pageData,m as default};
