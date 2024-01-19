---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc

editLink: true
---


~~*2021-06-15*~~ ~~*2021-08-27*~~ *2021-09-03*

## 背景

有时候需要网站能换肤, 嗯, 就酱 *// 换肤迁移到这里(webpack no)太难了*

## 换肤方案

换肤有两种应用场景, 一种是构建时生成单个指定皮肤, 常见于“换皮项目”; 一种是运行时切换皮肤, 满足用户个性化需求

这里仅作简单介绍, 欢迎讨论、补充

### 构建时

即构建时生成指定皮肤, 主要面临的问题其实是项目管理方面的问题: 如何快速迭代满足甲方需求; 如何复用、同步各定制版本的功能; 如何避免版本/功能混乱、高耦合, 一个bug影响各个定制版本 等等

就换肤本身来说, 除了上述的问题外, 还存在因难以开发维护、难以自动化测试, 导致UI不稳定、风格不一致等问题

这里不展开讨论

### 运行时


# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shikiji](https://github.com/antfu/shikiji), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
