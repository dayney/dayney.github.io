---
outline: deep
editLink: false
---

# 高性能JavaScript读书笔记--构建并部署高性能JavaScript应用

# 实际环境

1.  目前使用webpack/gulp完全可以做到打包。
2.  部署需要使用到shell来进行文件的移动。

### 小结（Apache Ant） {#小结（apache-ant）}

> 1.  合并JavaScript文件以减少HTTP请求；
>
> 2.  使用YUI Compressor压缩JavaScript；
>
> 3.  在服务器端压缩JavaScript文件(Gzip编码);
>
> 4.  通过正确设置HTTP响应头来缓存JavaScript文件，通过向文件名增加时间戳来避免缓存问题；
>
> 5.  使用CDN提供JavaScript文件，CDN不仅可以提升性能，它也为你管理文件压缩与缓存；
