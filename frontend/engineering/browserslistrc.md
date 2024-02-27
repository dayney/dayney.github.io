---
outline: deep
editLink: false

---

# 浏览器支持情况


## 1. browserslist 是在不同的前端工具之间共用目标浏览器和 node 版本的配置工具。它主要被以下工具使用：
- [Autoprefixer](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fpostcss%2Fautoprefixer)
- [Babel](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Ftree%2Fmaster%2Fpackages%2Fbabel-preset-env)
- [post-preset-env](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjonathantneal%2Fpostcss-preset-env)
- [eslint-plugin-compat](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Familajack%2Feslint-plugin-compat)
- [stylelint-unsupported-browser-features](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fismay%2Fstylelint-no-unsupported-browser-features)
- [postcss-normalize](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjonathantneal%2Fpostcss-normalize)

```
# .browserslistrc


> 1%
last 2 versions
not dead
maintained node versions
not ie < 12
not ie_mob < 12
```


参考地址[Browserslist (基于官方文档翻译）](https://juejin.cn/post/6844903669524086797)
