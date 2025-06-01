---
outline: deep
editLink: false
---

# 下拉刷新，上拉加载更多

## 1 背景

主要是在做企业微信聊天记录查询的时候，关于聊天记录中，业务部门需要上下滑动以加载更多的信息。

## 2 前沿
本方法适用于移动端（touch相关事件touchstart、touchmove、touchend）也适用于WEB端（mouse相关事件mousedown、mousemove、mouseup）。

对于其绝大部分，我们也总体上避免就 JavaScript 或 HTML 的本身提出建议。我们不介意你是否使用分号或结尾的逗号。我们不介意你在 HTML 特性中使用单引号还是双引号。不过当我们发现在 Vue 的情景下有帮助的特定模式时，也会存在例外。

## 3 解读及实现

- 3.1 加载上一页（下拉刷新）是通过修改主要区域的上一页提示的box的来进行隐藏和展示的**transform: translateY(-60px);**，通过判断用户向下拉的距离（touchstart开始至touchend结束，mousedown开始至mouseup结束来判断滑动的距离，来加载下一页）。
- 3.2 加载下一页，是需要通过判断是否有已经触底（一般会设置阀值）来判断是否快到低了，来判断是否需要加载下一页。
- 3.3 所有的调用接口，都需要使用节流的方式来加载，防止用户操作过快，加载太频繁导致卡顿的现象。

vue2的插件**better-scroll**版本
```
<template>
	<div class="wrapper" ref="wrapper">
		<ul class="content">
			<div class="newxin" v-if="down">
        {{ pulldownTip.text }}
			</div>
			<li v-for="item in 20">喵喵喵{{item}}</li>
			<div class="newxin" v-if="up">
        {{ pulldownTip.textup }}
			</div>
		</ul>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default {
		data() {
			return {
        BScrollConfig: {
          /**
           * 1 滚动的时候会派发scroll事件，会截流。
           * 2 滚动的时候实时派发scroll事件，不会截流。
           * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
           */
          probeType: 3,
          /**
           * 点击列表是否派发click事件
           */
          click: true,
          /**
           * 是否开启横向滚动
           */
          scrollX: false,
          /**
           * 是否派发滚动事件
           */
          listenScroll: false,
          /**
           * 是否派发滚动到底部的事件，用于上拉加载
           */
          pullup: true,
          /**
           * 是否派发顶部下拉的事件，用于下拉刷新
           */
          pulldown: true,
          /**
           * 是否派发列表滚动开始的事件
           */
          beforeScroll: false,
          /**
           * 当数据更新后，刷新scroll的延时。
           */
          refreshDelay: 20,
        },
				loadingConnecting: false,
				down: false,
				up: true,
				pulldownTip: {
					text: '下拉刷新', // 松开立即刷新
					textup: '上拉加载更多', // 松开立即刷新
					rotate: '' // icon-rotate
				}
			};
		},
		mounted() {
			setTimeout(() => {
				this.BS();
			}, 20);
		},
		methods: {
			BS() {
				if(!this.$refs.wrapper) {
					return;
				}

        this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.BScrollConfig.probeType,
					click: this.BScrollConfig.click,
					scrollX: this.BScrollConfig.scrollX,
				});
				this.scroll.on('scroll', pos => {
					console.log(pos.y);
					//如果下拉超过50px 就显示下拉刷新的文字
					if(pos.y > 50) {
						// this.pulldownTip.text = "放手刷新"
						this.down = true
					} else {
						this.down = false
					}
				});
				//touchEnd 通过这个方法来监听下拉刷新
				this.scroll.on('touchEnd', pos => {
					// 下拉动作
					if(pos.y > 50) {
						console.log('下拉刷新成功');
						console.log('这里执行你方法');
						this.down = false;
					}
					if(this.scroll.maxScrollY > pos.y + 10) {
						console.log('加载更多');
						//使用refresh 方法 来更新scroll  解决无法滚动的问题
						this.scroll.refresh();
					}
					console.log(this.scroll.maxScrollY + '总距离----下拉的距离' + pos.y);
				});
				console.log(this.scroll.maxScrollY);
			}
		},

	}

	;
</script>
<style>
	* {
		margin: 0px;
		padding: 0px;
	}

	.wrapper {
		width: 100%;
		height: 100%;
		position: absolute;
		overflow: hidden;
	}

	.wrapper .content {
		width: 100%;
	}

	.wrapper .content li {
		background-color: #ffffff;
		width: 100%;
		height: 66px;
		text-align: center;
		line-height: 66px;
		border-bottom: solid 1px #f0f0f0;
	}
	/* 刷新 */

	.newxin {
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: red;
	}
</style>
```

原生js版本,WEB版本
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>鼠标事件下拉刷新</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    #container {
      height: 100vh;
      overflow-y: auto;
      background-color: #f5f5f5;
      position: relative;
    }

    #pull-to-refresh {
      position: absolute;
      top: -60px;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: lightblue;
      color: #333;
      text-align: center;
      line-height: 60px;
      font-size: 16px;
      transition: transform 0.3s ease;
    }

    #content {
      padding: 20px;
      background-color: white;
    }

    #content p {
      margin: 0 0 10px;
    }
  </style>
</head>
<body>
  <div id="container">
    <div id="pull-to-refresh">下拉刷新中...</div>
    <div id="content">
      <p>这是页面内容 1</p>
      <p>这是页面内容 2</p>
      <p>这是页面内容 3</p>
      <p>这是页面内容 4</p>
      <p>这是页面内容 5</p>
    </div>
  </div>

  <script>
    const container = document.getElementById('container');
    const pullToRefresh = document.getElementById('pull-to-refresh');
    const content = document.getElementById('content');

    let isDragging = false;  // 是否正在拖拽
    let startY = 0;          // 鼠标起始位置
    let currentY = 0;        // 当前鼠标位置
    let isRefreshing = false; // 是否正在刷新

    container.addEventListener('mousedown', (event) => {
      console.log('鼠标按下')
      if (container.scrollTop === 0) { // 只有滚动到顶部时才触发下拉刷新
        isDragging = true;
        startY = event.clientY;
      }
    });

    container.addEventListener('mousemove', (event) => {
      console.log('鼠标移动')
      if (isDragging && !isRefreshing) {
        currentY = event.clientY;
        const distance = currentY - startY;

        if (distance > 0) { // 向下拖动
          pullToRefresh.style.transform = `translateY(${Math.min(distance, 100)}px)`;
          content.style.transform = `translateY(${Math.min(distance, 100)}px)`;
        }
      }
    });

    container.addEventListener('mouseup', () => {
      console.log('鼠标谈起')
      if (isDragging) {
        isDragging = false;

        const distance = currentY - startY;

        if (distance > 50) { // 达到触发刷新阈值
          isRefreshing = true;
          pullToRefresh.style.transform = `translateY(60px)`;
          content.style.transform = `translateY(60px)`;

          // 模拟刷新操作
          setTimeout(() => {
            // 刷新完成，回弹到初始位置
            pullToRefresh.style.transform = `translateY(-60px)`;
            content.style.transform = `translateY(0)`;
            isRefreshing = false;
          }, 2000);
        } else {
          // 未达到刷新阈值，回弹到初始位置
          pullToRefresh.style.transform = `translateY(-60px)`;
          content.style.transform = `translateY(0)`;
        }
      }
    });

    // 防止鼠标移出容器导致无法触发 mouseup
    window.addEventListener('mouseup', () => {
      isDragging = false;
    });
  </script>
</body>
</html>
```

### 参考文档
[vue 的上拉加载，下拉刷新（基于better-scrol）](https://cloud.tencent.com/developer/article/1405442)
