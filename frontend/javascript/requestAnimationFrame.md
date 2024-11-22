---
outline: deep
editLink: false

---

# requestAnimationFrame

## 1 背景

主要是在做上拉加载更多和下拉刷新（下拉加载上一页）中，使用到了定时器，主要是节流函数，突然之间想到能不能使用**RAF**来最这个节流的效果。

## 2 前言

在做连续的动画效果的时候使用到**RAF**，本文主要是总结一下**RAF**的使用场景和对**setInterval**和**setTimeout**的对比。

##### 工作原理：

• setTimeout：这个函数会将要执行的代码或函数放入事件循环队列中，等待当前代码执行完毕后，再等待指定的时间后执行一次。如果设置了定时器，那么每隔一定时间就会执行一次代码，直到 clearTimeout 被调用或窗口被关闭。
• setInterval：与 setTimeout 类似，setInterval 也会将要执行的代码或函数放入事件循环队列中，但它在指定的时间间隔后会一直重复执行，直到 clearInterval 被调用或窗口被关闭。也就是说，setInterval 会不断地调用函数，直到被取消。
• requestAnimationFrame：这个函数的工作原理与 setInterval 和 setTimeout 略有不同。它会将回调函数加入到浏览器下一次重绘之前要执行的队列中。这样做的目的是为了确保动画的流畅度，因为浏览器会自动优化这个API，只在浏览器处于激活状态并且页面处于可见状态时才会执行回调函数。此外，requestAnimationFrame 会根据系统的刷新率来自动匹配时间间隔，从而确保每帧动画的间隔时间尽可能地准确。

##### 区别：

• 执行时机：requestAnimationFrame是由浏览器提供的API，它会在浏览器下一次重绘之前执行回调函数。这意味着它能够确保动画的流畅度，并且能够自动匹配系统的刷新率。相比之下，setInterval和setTimeout会在指定的时间间隔后执行回调函数，无论浏览器是否处于激活状态或正在进行其他操作。
• 性能优化：requestAnimationFrame由浏览器自动优化，只在浏览器处于激活状态并且页面处于可见状态时才会执行回调函数。这可以节省CPU、GPU和内存的使用，特别是在移动设备上。相比之下，setInterval和setTimeout不会自动优化，如果页面处于隐藏或不可见状态，它们会继续执行回调函数，这可能会导致资源的浪费。
• 回调函数执行时间：requestAnimationFrame的回调函数会在浏览器下一次重绘之前执行，因此它能够确保回调函数的执行时间相对准确。相比之下，setInterval和setTimeout的回调函数执行时间取决于浏览器事件循环中的队列和执行时间，因此可能会有一定的延迟。
• 停止操作：requestAnimationFrame的回调函数只会在浏览器下一次重绘之前执行一次，因此可以通过清除队列中的回调函数来停止操作。相比之下，setInterval和setTimeout会不断地执行回调函数，直到clearInterval或clearTimeout被调用或关闭页面为止。
• 函数节流：在高频率事件(resize,scroll等)中，为了防止在一个刷新间隔内发生多次函数执行，使用requestAnimationFrame可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销。
应用场景
• setTimeout：可用于在网页加载后延迟执行某些操作，例如加载页面内容、初始化组件等。也可用于定时触发某些操作，例如定时发送数据、定时检查任务等。
• setInterval：常用于需要周期性执行的操作，例如定时更新数据、定时触发事件等。在web端，如果列表需要定时更新，可以使用setInterval来定时获取列表的请求。另外，如果需要在某一特定情况下清除定时任务，可以使用clearInterval来停止定时器。
• requestAnimationFrame：主要用于实现流畅的动画效果。它会在浏览器下一次重绘之前执行指定的函数，避免了频繁的重绘导致的性能问题。requestAnimationFrame会自动匹配系统的刷新率，从而确保每帧动画的间隔时间尽可能地准确。在需要反复触发的情况下，使用requestAnimationFrame可以避免连续调用导致的相互干扰。

## 3 实现

主要还是以动画效果作为demo来演示

突然间想到商品加入购物车，添加商品到购物车中的小球，从商品处飞往购物车的效果可以使用**RAF**来完成。

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <div style="background-color: lightblue;width: 0;height: 20px;line-height: 20px;" id="div">0%</div>

  <button id="btn">run</button>


  <div style="background-color: lightblue;width: 0;height: 20px;line-height: 20px;" id="div1">0%</div>

  <button id="btn1">run</button>

  <div style="background-color: lightblue;width: 0;height: 20px;line-height: 20px;" id="div2">0%</div>

  <button id="btn2">run</button>
<script>
    var timer;
    var btn = document.getElementById('btn')
    var myDiv = document.getElementById('div')
    
    // 1.requestAnimationFrame
    btn.onclick = function () {
        myDiv.style.width = '0';
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
            if (parseInt(myDiv.style.width) < 500) {
                myDiv.style.width = parseInt(myDiv.style.width) + 5 + 'px';
                myDiv.innerHTML = parseInt(myDiv.style.width) / 5 + '%';
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        });
    }

    var timer1;
    var btn1 = document.getElementById('btn1')
    var myDiv1 = document.getElementById('div1')
    // 2.setInterval
    btn1.onclick = function () {
        clearInterval(timer1);
        myDiv1.style.width = '0';
        timer1 = setInterval(function () {
            if (parseInt(myDiv1.style.width) < 500) {
                myDiv1.style.width = parseInt(myDiv1.style.width) + 5 + 'px';
                myDiv1.innerHTML = parseInt(myDiv1.style.width) / 5 + '%';
            } else {
                clearInterval(timer1);
            }
        }, 16);
    }

    var timer2;
    var btn2 = document.getElementById('btn2')
    var myDiv2 = document.getElementById('div2')
    // 3.setTimeout
    btn2.onclick = function () {
        clearTimeout(timer2);
        myDiv2.style.width = '0';
        timer2 = setTimeout(function fn() {
            if (parseInt(myDiv2.style.width) < 500) {
                myDiv2.style.width = parseInt(myDiv2.style.width) + 5 + 'px';
                myDiv2.innerHTML = parseInt(myDiv2.style.width) / 5 + '%';
                timer2 = setTimeout(fn, 16);
            } else {
                clearTimeout(timer2);
            }
        }, 16);
    }
</script>

</body>
</html>
```

###### 参考资源

[前端开发必备：requestAnimationFrame、setInterval、setTimeout——功能解析与优劣对比](https://developer.aliyun.com/article/1628401)
