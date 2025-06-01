# CSS 性能优化

## 选择器优化

### 避免过度嵌套
```scss
// 不推荐
.parent {
  .child {
    .grandchild {
      .great-grandchild {
        color: red;
      }
    }
  }
}

// 推荐
.parent__great-grandchild {
  color: red;
}
```

### 选择器性能
```scss
// 不推荐
div > span > a { }
* { }
div span { }

// 推荐
.nav-link { }
.btn { }
.card { }
```

## 渲染性能

### will-change 属性
```scss
// 使用 will-change 提前告知浏览器元素将要发生的变化
.element {
  will-change: transform;  // 告知浏览器元素将要进行 transform 变换
  will-change: opacity;    // 告知浏览器元素将要改变透明度
  will-change: transform, opacity;  // 可以同时指定多个属性
}
```

#### will-change 的作用
1. **性能优化原理**
   - 提前告知浏览器元素将要发生的变化
   - 浏览器可以提前做好优化准备
   - 创建新的图层，避免重排和重绘

2. **使用场景**
   - 元素即将进行动画或过渡
   - 元素即将改变位置或大小
   - 元素即将改变透明度

3. **注意事项**
   - 不要过度使用，每个 will-change 都会创建新的图层
   - 只在元素确实需要变化时使用
   - 动画结束后记得移除 will-change
   - 建议配合 transform 和 opacity 使用

4. **最佳实践**
   ```scss
   // 推荐：在动画开始前添加，结束后移除
   .animated-element {
     &.is-animating {
       will-change: transform;
     }
   }

   // 不推荐：一直保持 will-change
   .animated-element {
     will-change: transform;  // 不要这样做
   }
   ```

### 使用 transform 和 opacity
```scss
// 不推荐：会触发重排（reflow）
.element {
  left: 100px;
  top: 100px;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
}

// 推荐：只触发重绘（repaint）
.element {
  transform: translate(100px, 100px);
  opacity: 0.8;
}
```

#### 为什么使用 transform 和 opacity？
1. **性能优势**
   - transform 和 opacity 不会触发重排（reflow）
   - 只触发重绘（repaint），性能开销更小
   - 可以利用 GPU 加速，提升动画性能

2. **GPU 加速原理**
   - transform 和 opacity 会创建新的图层
   - 新图层会被 GPU 处理，不占用主线程
   - 适合用于动画和过渡效果

3. **使用场景**
   - 元素位移：使用 `transform: translate()`
   - 元素缩放：使用 `transform: scale()`
   - 元素旋转：使用 `transform: rotate()`
   - 元素透明度：使用 `opacity`

4. **注意事项**
   - 不要过度使用，每个图层都会占用内存
   - 建议配合 `will-change` 属性使用
   - 动画结束后记得移除 `will-change`

### 避免重排
```scss
// 不推荐：每次修改都会触发重排
.element {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
}

// 推荐：使用 transform 和 opacity
.element {
  transform: translateZ(0);
  will-change: transform;
}
```

## 加载优化

### 关键 CSS
```html
<!-- 内联关键 CSS -->
<style>
  .critical { }
</style>

<!-- 异步加载非关键 CSS -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### 代码分割
```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}

// vite.config.js
export default defineConfig({
  build: {
    cssCodeSplit: true, // 启用 CSS 代码分割
    rollupOptions: {
      output: {
        // 自定义分割策略
        manualChunks: {
          // 将 node_modules 中的代码单独打包
          'vendor': ['vue', 'vue-router', 'pinia'],
          // 将样式文件单独打包
          'styles': [/\.css$/, /\.scss$/],
        }
      }
    }
  }
})
```

#### 代码分割策略
1. **Webpack 分割策略**
   - 使用 `splitChunks` 配置
   - 可以按模块、入口、异步加载等方式分割
   - 支持更细粒度的控制

2. **Vite 分割策略**
   - 默认启用 CSS 代码分割
   - 使用 `manualChunks` 自定义分割
   - 支持动态导入自动分割

3. **最佳实践**
   - 将第三方库代码单独打包
   - 将公共样式提取到单独文件
   - 按路由或功能模块分割
   - 控制单个文件大小

4. **注意事项**
   - 避免过度分割导致请求数过多
   - 合理设置缓存策略
   - 考虑浏览器并发请求限制
   - 监控分割后的加载性能

## 构建优化

### 压缩和合并
```javascript
// webpack.config.js
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CssMinimizerPlugin()
  ]
}

// vite.config.js
export default defineConfig({
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'styles': [/\.css$/, /\.scss$/]
        }
      }
    }
  }
})
```

### 删除未使用的 CSS
```javascript
// webpack.config.js
module.exports = {
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true })
    })
  ]
}

// vite.config.js
import { defineConfig } from 'vite'
import purgecss from '@fullhuman/postcss-purgecss'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx']
        })
      ]
    }
  }
})
```

## 缓存策略

### 文件命名
```javascript
// webpack.config.js
module.exports = {
  output: {
    filename: '[name].[contenthash].css'
  }
}

// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  }
})
```

### 缓存控制
```nginx
# nginx.conf
location /static/ {
  expires 1y;
  add_header Cache-Control "public, no-transform";
}
```

## 监控与度量

### 性能指标
- [首次内容绘制 (FCP)](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance_API/Performance_metrics#first_contentful_paint_fcp){:target="_blank"} - 测量页面从开始加载到页面内容的任何部分在屏幕上完成渲染的时间
- [最大内容绘制 (LCP)](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance_API/Performance_metrics#largest_contentful_paint_lcp){:target="_blank"} - 测量页面主要内容的加载时间
- [累积布局偏移 (CLS)](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance_API/Performance_metrics#cumulative_layout_shift_cls){:target="_blank"} - 测量页面加载期间发生的所有意外布局偏移的总和
- [可交互时间 (TTI)](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance_API/Performance_metrics#time_to_interactive_tti){:target="_blank"} - 测量页面从开始加载到主要子资源完成加载，并能够快速、可靠地响应用户输入所需的时间

### 经典案例
- [Web Vitals 性能优化实战](https://web.dev/vitals/){:target="_blank"} - Google 官方性能优化指南
- [CSS 性能优化最佳实践](https://web.dev/fast/){:target="_blank"} - Google 性能优化最佳实践
- [CSS 性能优化案例](https://web.dev/optimize-webfont-loading/){:target="_blank"} - 字体加载优化案例

### 性能预算
```javascript
// performance-budget.json
{
  "resourceSizes": [
    {
      "resourceType": "stylesheet",
      "budget": 50
    }
  ],
  "resourceCounts": [
    {
      "resourceType": "stylesheet",
      "budget": 2
    }
  ]
}
```

## 最佳实践

### 1. 选择器优化
- 避免过度嵌套
- 使用类选择器
- 避免使用通配符

### 2. 渲染优化
- 使用 transform 和 opacity
- 避免重排
- 使用 will-change

### 3. 加载优化
- 内联关键 CSS
- 异步加载非关键 CSS
- 使用 preload

### 4. 构建优化
- 压缩和合并
- 删除未使用的 CSS
- 代码分割

### 5. 缓存策略
- 使用 contenthash
- 设置适当的缓存头
- 实现版本控制

### 6. 监控与度量
- 建立性能指标
- 设置性能预算
- 定期性能审计