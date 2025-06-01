---
outline: deep
editLink: false

---

# 动态添加脚本（script脚本）

## 1 背景

在开发中，遇到临时需要动态第三方的**script脚本**的时候，如腾讯地图的**JSONP**，还有一些数据分析脚本，如百度、极光、神策等，需要动态的添加。

## 2 前言

添加好了之后，还需要判断是否正确的加载**onload**或**onerror**，之后再使用脚本中的方法。

## 3 代码实现
```
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    // 监听加载成功事件
    script.onload = () => {
      console.log(`Script loaded successfully: ${url}`);
      resolve(url);
    };

    // 监听加载失败事件
    script.onerror = (error) => {
      console.error(`Error loading script: ${url}`);
      reject(new Error(`Failed to load script: ${url}`));
    };

    document.head.appendChild(script);
  });
}

// 使用示例
loadScript('https://example.com/some-script.js')
  .then((url) => {
    console.log(`Script loaded: ${url}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
```





