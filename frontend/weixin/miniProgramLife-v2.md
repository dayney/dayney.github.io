---
outline: deep
editLink: false
---

# 小程序优化方案




## 1. 命名规范

### 1.1命名规则说明

- 1. 小驼峰命名法: 首单词首字母小写，后面的单词首字母大写

     ```
     carerUpload
     ```

- 2. 大驼峰命名法: 首单词首字母大写，后面的单词首字母大写

     ```
     CarerUpload
     ```

- 3. 短横线命名法：所有字母小写，单词之间使用短横线分隔

     ```
     pull-refresh-view
     ```

- 4. 下划线命名法：所有字母小写，单词之间用下划线分隔

     ```
     my_variable, calculate_interest, first_name。
     ```

### 1.2 各种使用场景( 三方要求的除外，如小程序miniprogram_npm等，仅限于我们自己创建的文件按如下要求 )

- 1. 文件夹(小驼峰命名)

     ```
     # better
     newHomeIndex
     
     # bad
     mp_ecard_sdk
     ```

- 2. 文件(小驼峰命名): 小程序组件、html、js文件：

     ```
     # better
     drugListStepper
     
     # bad
     mp_ecard_sdk
     ```

- 3. 图片文件：全部采用小写方式，优先选择单个单词命名，多个单词命名以下划线分隔

     ```
     # better
     arow_bottom.png
     
     # bad
     add-icon.png
     ```

- 4. 变量名: 小驼峰命名法

     ```
     # better
     titleBarHeight
     
     # bad
     titlebarHeight
     ```

- 5. 常量：使用大写字母和下划线来组合命名

     ```
     # better
     const PRESCRIPTION_GROUP_VERIFY_CODE = [3001, 3003, 3004, 3005] //处方分组校验拦截code
     
     # bad 
     const perscription_code = [3001, 3003, 3004, 3005]
     ```

- 6. 方法名：小驼峰命名

     ```
     # better
     addTaskReward()
     
     # bad -- 首字母大写默认是 class
     AddTaskReward()
     ```

- 7. 自定义事件：小驼峰命名

     ```
     # better
     this.$emit('toggleClick')
     
     # bad
     this.$emit('ToggleClick')
     ```

  8. css类名：小写方式用下划线连接

	   ```
     # better
     .box-cell {}
     
     # bad
     .boxCell {}
     .box_cell {}
     ```
     
## 2. 项目中常量、字典的使用
建议抽取成单独的 const.js文件活着XX.config.js
```
# better
const.js
export const PROVINCE_MAX_LENGTH = 16; // 默认打开省区最大数量
export const QQ_MAP_GLJS_KEY = 'RA4BZ-GUBC3-34E3D-YF37D-XSAZH-PRFPS'; // 腾讯地图KEY

# 此处是定义后端api中返回的 code
export const ERRNO = {
  SUCCESS: 0,
}

# 使用场景是 if (code === ERRNO.SUCCESS) {}

# bad
step: 0, // 引导步骤,  此处后续肯定有 1，2，应该不止这一步

```

## 3. 组件模块化，API文件、非全局组件、非全局方法、放在当前模块中

 主要是为了减轻主包的体积和方便管理，模块的迁移

1. 封装的 request 文件，在存放在公共的工具函数中 `/utils/util`

2. 目前所有的api文件都在根目录文件 api 文件下，后续可以将其放在各个的功能模块下

3. 非全局组件（组件重复利用率低，暂定是3次，非全局方法）放在当前模块下，目录最终的一个结构如下

```
   .
   ├── api.js    // 此文件是当前模块所有的api
   ├── const.js  // 此文件是当前模块所有的常量
   ├── utls.js   // 此文件是当前模块所有通用的方法
   ├── component
   │   ├── activeCouponFromSky
   │   │   ├── activeCouponFromSky.js
   │   │   ├── activeCouponFromSky.json
   │   │   ├── activeCouponFromSky.wxml
   │   │   └── activeCouponFromSky.wxss
   │   └── ……
   ├── archivesDetails
   │   ├── api.js     // 此文件是当前页面使用的api
   │   ├── const.js  // 此文件是当前页面使用的常量
   │   ├── utls.js   // 此文件是当前页面使用通用的方法
   │   ├── component   // 当前页面抽离出来的组件，仅供当前页面使用，主要是当前业务复杂，场景多的情况
   │   ├── componentDeom
   │   │   ├── componentDeom.js
   │   │   ├── componentDeom.json
   │   │   ├── componentDeom.wxml
   │   │   └── componentDeom.wxss
   │   └── ……
   │   ├── archivesDetails.js
   │   ├── archivesDetails.json
   │   ├── archivesDetails.wxml
   │   └── archivesDetails.wxss
   ├── ……
```

   ## 	4. 尝试使用 skyline 模式，渲染模式

[Skyline 渲染引擎](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/comparation.html)

   ##  5. 代码优化，以阶段性的总结文档为主（页面多次调用的方法使用 变量 缓存）

[前端编程小技巧](/frontend/others/litterTips) 



