import{_ as e,c as a,o as r,V as t}from"./chunks/framework.C-fAE6Ku.js";const b=JSON.parse('{"title":"前端安全规范","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/others/secure.md","filePath":"frontend/others/secure.md","lastUpdated":1709090218000}'),o={name:"frontend/others/secure.md"},l=t('<h1 id="前端安全规范" tabindex="-1">前端安全规范 <a class="header-anchor" href="#前端安全规范" aria-label="Permalink to &quot;前端安全规范&quot;">​</a></h1><p>本文档描述前端开发人员在应用开发中，需要关注的安全问题和相应的编码规范，旨在杜绝一些常见的安全隐患。</p><p>**说明：**文档中使用的关键字「MUST」,「MUST NOT」,「REQUIRED」,「SHALL」,「SHALL NOT」,「SHOULD」,「SHOULD NOT」,「RECOMMENDED」,「MAY」和「OPTIONAL」在 RFC2119 中有说明。</p><h2 id="背景知识" tabindex="-1">背景知识 <a class="header-anchor" href="#背景知识" aria-label="Permalink to &quot;背景知识&quot;">​</a></h2><p>本文不会详细介绍 Web 安全的攻击和防御技术，所以请先参考如下资料了解相关知识：</p><p><a href="https://xie.infoq.cn/article/f66e5094d1d0ee538cf8814dd" target="_blank" rel="noreferrer">XSS</a></p><h2 id="xss防御" tabindex="-1">XSS防御 <a class="header-anchor" href="#xss防御" aria-label="Permalink to &quot;XSS防御&quot;">​</a></h2><p>请务必阅读：<a href="http://www.fooying.com/chinese-translationthe-ultimate-xss-protection-cheatsheet-for-developers/" target="_blank" rel="noreferrer">终极XSS防护备忘录</a> 根据其中的描述做好数据转义操作。</p><p>使用fis进行smarty模板XSS转义：</p><p>fis-plus默认开启xss转义功能，需要编译时加<code>-o</code>参数</p><blockquote><p>fisp release -o</p></blockquote><h2 id="富文本数据" tabindex="-1">富文本数据 <a class="header-anchor" href="#富文本数据" aria-label="Permalink to &quot;富文本数据&quot;">​</a></h2><p>富文本数据「MUST」必须由 RD 依赖最小化原则进行处理，杜绝不安全的内容。</p><h2 id="csrf" tabindex="-1">CSRF <a class="header-anchor" href="#csrf" aria-label="Permalink to &quot;CSRF&quot;">​</a></h2><p>背景知识：</p><ul><li><a href="http://drops.wooyun.org/papers/155" target="_blank" rel="noreferrer">CSRF简单介绍及利用方法</a></li><li><a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29" target="_blank" rel="noreferrer">Cross-Site Request Forgery (CSRF)</a></li></ul><h2 id="cookie使用" tabindex="-1">Cookie使用 <a class="header-anchor" href="#cookie使用" aria-label="Permalink to &quot;Cookie使用&quot;">​</a></h2><p>禁止「MUST NOT」给 baidu.com 域下设置 cookie，设置 cookie 请指定为当前域名。</p><p>禁止「MUST NOT」给页面设置 document.domain = &quot;baidu.com&quot;。</p><h2 id="防钓鱼" tabindex="-1">防钓鱼 <a class="header-anchor" href="#防钓鱼" aria-label="Permalink to &quot;防钓鱼&quot;">​</a></h2><p>似乎没啥好方法。</p><h2 id="隐私数据" tabindex="-1">隐私数据 <a class="header-anchor" href="#隐私数据" aria-label="Permalink to &quot;隐私数据&quot;">​</a></h2><p>禁止「MUST NOT」在页面中出现 ip 相关信息 ，如有提交 ip 给 server 端的需求，请修改为其它形式，比如：由 rd 在 server 端间接获取 ip 信息。</p><p>用户的个人隐私信息：姓名、邮箱、电话、QQ 等，必须「MUST」遵守最小化原则，使用不到信息 禁止「MUST NOT」 出现在页面代码中，获取这些数据的 json 接口也必 「MUST」须经过权限控制。</p><h2 id="页面跳转" tabindex="-1">页面跳转 <a class="header-anchor" href="#页面跳转" aria-label="Permalink to &quot;页面跳转&quot;">​</a></h2><p>获取 url 中的参数，跳转至另一个站点时， 禁止「MUST NOT」跳转至任意站点，「MUST」设置白名单，只允许跳转至规定的站点。</p><p>点击页面中的链接跳转至第三方站点的时候，建议「RECOMMENDED」 以类似百度、 Google 搜索结果中 Server 端跳转的形式进行，后端可以对 URL 进行安全性扫描，检测到是一个恶意网站、或者目标资源是可执行文件时，应给予用户强烈的警告，告知其风险。</p><h2 id="第三方功能和资源" tabindex="-1">第三方功能和资源 <a class="header-anchor" href="#第三方功能和资源" aria-label="Permalink to &quot;第三方功能和资源&quot;">​</a></h2><p>页面中嵌入的第三方功能，禁止「MUST NOT」直接内嵌第三方 JS 代码，建议以「RECOMMENDED」iframe 形式引入 。</p><p>页面中如果需要使用第三方的数据，建议 「RECOMMENDED」 由 RD 获取，尽量避免以 jsonp 方式获取，如必须使用 jsonp，请限制好第三方返回的 callback 函数名，对于不允许使用的函数名称，一律禁止。</p><p>原则上禁止「MUST NOT」使用第三方提供的资源：图片、文档等，如有必须，建议「RECOMMENDED」由 RD 抓取相关内容转存至自有 Server。因为，外链会产生站外请求，可以被利用实施 CSRF 攻击，而且往往存在性能问题。</p><h2 id="点击劫持" tabindex="-1">点击劫持 <a class="header-anchor" href="#点击劫持" aria-label="Permalink to &quot;点击劫持&quot;">​</a></h2><p>对一些重要的操作，例如删除数据、支付等，建议「RECOMMENDED」先验证是否被嵌套。如果处于第三方页面的框架里，应弹出确认框提醒用户。确认框的坐标位置最好有一定的随机偏移，从而使攻击者构造的点击区域失效。验证方式为：</p><h2 id="flash-使用-基本上没有见过" tabindex="-1">Flash 使用（基本上没有见过） <a class="header-anchor" href="#flash-使用-基本上没有见过" aria-label="Permalink to &quot;Flash 使用（基本上没有见过）&quot;">​</a></h2><p>SWF与js交互的控制属性AllowScriptAccess，「RECOMMENDED」强烈建议为never，如果选择sameDomain或者always，自己应该清楚自己在做什么</p><p>SWF的网络属性AllowNetworking，「RECOMMENDED」强烈建议为none，否则可能会引起CSRF，如果选择all或internel，自己应该清楚自己在做什么</p><p>SWF与js参数传递，「SHOULD」需要进行字符过滤，防止XSS攻击</p><p>可执行文件(.swf)授信，不应该「SHOULD NOT」使用Security.allowDomain(&quot;*&quot;)，加载者或被加载者会获得和当前SWF相同的权限</p><p>非可执行文件（.txt,.xml,.json，.jpg等）授信，不应该「SHOULD NOT」在crossdomain.xml文件中使用allow-access-from domain=&quot;*&quot;</p><p>在加载跨域SWF时，「SHOULD NOT」慎用合并安全域（crossdomain.xml授权或loadBytes()），被加载的SWF会拥有和父SWF同样的权限，能做任何事情</p><p>在使用sharedEvents时，所发送的事件「SHOULD」应该限制为只包含简单数据的事件，否则可能会把SWF中的数据和舞台上所有对象暴露出去</p><h2 id="上传文件" tabindex="-1">上传文件 <a class="header-anchor" href="#上传文件" aria-label="Permalink to &quot;上传文件&quot;">​</a></h2><p>建议「RECOMMENDED」上传接口所在的域名和主域名隔离，并且采用最小化原则限制允许上传的文件大小。</p><h2 id="json-jsonp协议" tabindex="-1">JSON/JSONP协议 <a class="header-anchor" href="#json-jsonp协议" aria-label="Permalink to &quot;JSON/JSONP协议&quot;">​</a></h2><p>JSON 数据，必须「MUST」设置 http header Content-Type : application/json</p><p>以 JSONP 形式向第三方提供数据，必须「MUST」设置 http header Content-Type : application/javascript，并且callback function 名称只允许出现：数组、字母、下划线。</p><p>JSON/JSONP 方式提供数据，建议「RECOMMENDED」遵循最小化原则，只暴露需要暴露的信息，并且用白名单限制 referer 防止恶意抓取。</p><h2 id="cross-domain-设置" tabindex="-1">Cross Domain 设置 <a class="header-anchor" href="#cross-domain-设置" aria-label="Permalink to &quot;Cross Domain 设置&quot;">​</a></h2><p>在时 XML Httprequest 2（xhr2） 以及 font-face 如果需要支持跨域访问的需求，禁止「MUST」设置　header 为： Access-Control-Allow-Origin: * ，需要设置为允许访问的地址，比如： Access-Control-Allow-Origin: www.baidu.com</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="http://blog.knownsec.com/2015/03/jsonp_security_technic" target="_blank" rel="noreferrer">JSONP 安全攻防技术</a><br><a href="http://fex.baidu.com/blog/2014/03/web-sec-2014/" target="_blank" rel="noreferrer">Web 前端攻防 2014</a><br><a href="http://www.html5rocks.com/en/tutorials/file/xhr2/" target="_blank" rel="noreferrer">New Tricks in XMLHttpRequest2</a><br><a href="http://www.wooyun.org/" target="_blank" rel="noreferrer">WooYun</a><br><a href="http://www.80sec.com/" target="_blank" rel="noreferrer">80sec</a><br><a href="https://www.owasp.org/" target="_blank" rel="noreferrer">Open Web Application Security Project</a><br><a href="http://blog.knownsec.com/" target="_blank" rel="noreferrer">知道创宇</a><br><a href="http://www.owasp.org.cn/OWASP_Training/Upload_Attack_Framework.pdf" target="_blank" rel="noreferrer">上传攻击框架</a><br><a href="http://www.freebuf.com/articles/web/43285.html" target="_blank" rel="noreferrer">SS编码剖析</a><br><a href="http://www.freebuf.com/articles/web/40520.html" target="_blank" rel="noreferrer">XSS原理-1</a><br><a href="http://www.freebuf.com/articles/web/42727.html" target="_blank" rel="noreferrer">XSS的原理-2</a></p>',51),n=[l];function s(i,h,p,c,d,f){return r(),a("div",null,n)}const u=e(o,[["render",s]]);export{b as __pageData,u as default};
