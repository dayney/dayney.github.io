import{_ as r,c as e,o as t,V as a}from"./chunks/framework.CthfA3PS.js";const b=JSON.parse('{"title":"Npm 使用小技巧","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"efficiency/skill/npmVersion.md","filePath":"efficiency/skill/npmVersion.md","lastUpdated":1730453532000}'),n={name:"efficiency/skill/npmVersion.md"},o=a('<h1 id="npm-使用小技巧" tabindex="-1">Npm 使用小技巧 <a class="header-anchor" href="#npm-使用小技巧" aria-label="Permalink to &quot;Npm 使用小技巧&quot;">​</a></h1><h2 id="npm-version使用方法的管理" tabindex="-1">npm version使用方法的管理 <a class="header-anchor" href="#npm-version使用方法的管理" aria-label="Permalink to &quot;npm version使用方法的管理&quot;">​</a></h2><hr><h3 id="_1-version" tabindex="-1">1. version <a class="header-anchor" href="#_1-version" aria-label="Permalink to &quot;1. version&quot;">​</a></h3><p>每个npm包都有一个package.json，如果要发布包的话，package.json里面的version字段就是决定发包的版本号了。</p><p>version字段是这样一个结构： ‘0.0.1’，是有三位的版本号。分别是对应的version里面的：major, minor, patch。 也就是说当发布大版本的时候会升级为 1.0.0，小版本是0.1.0，一些小修复是0.0.2。</p><h3 id="_2-npm-version" tabindex="-1">2. npm version <a class="header-anchor" href="#_2-npm-version" aria-label="Permalink to &quot;2. npm version&quot;">​</a></h3><p>为了方便用户更改版本号，npm有npm version这个命令来自动更改版本号，同时帮忙commit. 比如说 当前版本是 1.1.1，当执行 npm version patch -m &#39;[patch]&#39;的时候，会自动把package.json里面的version改为1.1.2，同时git会多一个commit log [patch],这次改动便是更改package.json。</p><p>如果执行了prepatch，版本号会从1.1.1变成 1.1.2-0</p><p>我们称版本号的三位分别是 大号.中号.小号-预发布号</p><h4 id="_3-major-minor-patch-premajor-preminor-prepatch-prerelease" tabindex="-1">3. major | minor | patch | premajor | preminor | prepatch | prerelease <a class="header-anchor" href="#_3-major-minor-patch-premajor-preminor-prepatch-prerelease" aria-label="Permalink to &quot;3. major | minor | patch | premajor | preminor | prepatch | prerelease&quot;">​</a></h4><table><thead><tr><th>npm version</th><th>功能</th></tr></thead><tbody><tr><td>major</td><td>- 如果没有预发布号，则直接升级一位大号，其他位都置为0 <br>- 如果有预发布号：<br> - 中号和小号都为0，则不升级大号，而将预发布号删掉。即2.0.0-1变成2.0.0，这就是预发布的作用 <br> - 如果中号和小号有任意一个不是0，那边会升级一位大号，其他位都置为0，清空预发布号。即 2.0.1-0变成3.0.0</td></tr><tr><td>minor</td><td>- 如果没有预发布号，则升级一位中号，大号不动，小号置为空<br>- 如果有预发布号:<br>- 如果小号为0，则不升级中号，将预发布号去掉<br>- 如果小号不为0，同理没有预发布号</td></tr><tr><td>patch</td><td>- 如果没有预发布号：直接升级小号，去掉预发布号<br>- 如果有预发布号：去掉预发布号，其他不动</td></tr><tr><td>premajor</td><td>- 直接升级大号，中号和小号置为0，增加预发布号为0</td></tr><tr><td>preminor</td><td>- 直接升级中号，小号置为0，增加预发布号为0</td></tr><tr><td>prepatch</td><td>- 直接升级小号，增加预发布号为0</td></tr><tr><td>prerelease</td><td>- 如果没有预发布号：增加小号，增加预发布号为0<br>- 如果有预发布号，则升级预发布号</td></tr></tbody></table><p>参考文档</p><ul><li><a href="https://www.jianshu.com/p/5565536a1f82" target="_blank" rel="noreferrer">npm version使用方法</a></li></ul>',14),p=[o];function i(s,m,d,c,h,l){return t(),e("div",null,p)}const f=r(n,[["render",i]]);export{b as __pageData,f as default};
