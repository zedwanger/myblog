---
title: JS引擎特性
date: 2020-05-08 22:26:00
categories:
  - JavaScript
tags: 
  - JavaScript
  - Js引擎
---
<!-- more -->
## 特性
JS引擎编译执行js代码是单线程的, 是基于事件循环模型的。

## 为什么JavaScript是单线程？
- JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

- 所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

- 为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。

## 同步任务和异步任务
- 单线程，就是指一次只能完成一件任务，如果在同个时间有多个任务的话，这些任务就需要进行排队，前一个任务执行完，才会执行下一个任务。但如果有一个任务的执行时间很长，比如文件的读取或者数据的请求等等，那么后面的任务就要一直等待，这就会影响用户的使用体验。

- 为了解决这种情况，Javascript语言将任务的执行模式分成两种：同步（Synchronous）和异步（Asynchronous）。

- 同步模式:  就是前一个任务执行完成后，再执行下一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的；

- 异步模式: 则完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行队列上的后一个任务，而是执行回调函数；后一个任务则是不等前一个任务的回调函数的执行而执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。

## 事件循环(Event Loop)
1. 同步任务和异步任务分别进入不同的执行"场所"; 同步任务进入主线程，异步任务进入Event Table并注册回调函数。

2. 当指定的事情完成时，Event Table会将这个函数移入任务队列(task quene)，等待主线程的任务执行完毕;

3. 当栈中的代码执行完毕，执行栈(call stack)中的任务为空时，就会读取任务队列(task quene)中的任务，去执行对应的回调;

4. 如此循环，就形成js的事件循环机制(Event Loop)。

## 执行过程
1. 所有同步任务都在主线程上执行，形成一个执行栈(execution context stack)。

2. 遇到异步任务, 进入Event Table并注册回调函数; 等到指定的事件完成(如ajax请求响应返回, setTimeout延迟到指定时间)时，Event Table会将这个回调函数移入Event Queue。

3. 当栈中的代码执行完毕，执行栈（call stack）中的任务为空时，主线程会先检查micro-task(微任务)队列中是否有任务，如果有，就将micro-task(微任务)队列中的所有任务依次执行，直到micro-task(微任务)队列为空; 之后再检查macro-task(宏任务)队列中是否有任务，如果有，则取出第一个macro-task(宏任务)加入到执行栈中，之后再清空执行栈，检查micro-task(微任务)，以此循环，直到全部的任务都执行完成。

![执行过程图解](https://img-blog.csdnimg.cn/20200821150103500.png#pic_center)
![执行过程图解](https://img-blog.csdnimg.cn/20200821150047814.png#pic_center)

## JS执行队列
JS执行队列分为**宏任务队列**和**微任务队列**。
**macro-task（宏任务）:**
- script(整体代码)
- setTimeout
- setInterval
- setImmediate
- I/O (比如Ajax操作从网络读取数据)
- UI render

进入一个js文件，js文件中所有的代码就可以看作为宏任务，宏任务是一个执行队列，它中间还可以再包括宏任务和微任务，但是在执行时候，会“挂起”一些后执行的宏任务和微任务。
**micro-task（微任务）:**
- process.nextTick
- Promise
- Async/Await(实际就是promise)
- MutationObserver(html5新特性)

在执行队列中，某队列的宏任务执行完成后，才会执行此队列被挂起的微任务，微任务中也可以包含宏任务和微任务。

**事件表格(Event Table)**:
​    Event Table 可以理解成一张**事件->回调函数** 对应表。
​    用来存储 JS 中的异步事件 (request, setTimeout, IO等) 及其对应的回调函数的列表。
​    当指定的事件完成(如ajax请求响应返回, setTimeout延迟到指定时间)时，Event Table会将这个回调函数移入Event Queue, 即macro-task(宏任务)队列 或 micro-task(微任务)队列。

## 代码例子
```javascript
console.log("游戏开始",1);
new Promise( (resolve) => {
   console.log("promise",2);
   resolve();
})
.then( () => {
   console.log("then",3);
});
console.log("promise结束",4);
setTimeout( () => {
   console.log("setTimeout",5);
   new Promise( (resolve) => {
       console.log("promise",6);
       resolve();
   })
   .then( () => {
       console.log("then",7);
   });
},0);
new Promise( (resolve) => {
   console.log(promise,8);
   resolve()
})
.then( () => {
   console.log(then,9)
   setTimeout( () => {
       console.log("setTimeout",10);
   },0);
})
console.log("游戏结束",11);

```
重点：牢记代码执行顺序：整体代码（宏任务） -> 整体代码中挂起的微任务 -> 整体代码中挂起的宏任务

## 开始运行代码
![执行过程图解](https://www.freesion.com/images/16/f81ce1a8eb06a686b6ad1246934af6d8.png)

### 第一个宏任务执行
1. 执行第一个宏任务（所有代码）
2. 执行第一个console打印：游戏开始,1
3. 遇见Promise，执行promise中内容，打印：promise,2 。遇见resolve(),那么则把then函数放在 微任务队列 中
4. 继续执行代码，打印：promise结束,4
5. 遇见setTimeout函数，将此函数放在 宏任务队列中
6. 遇见Promise函数，打印：promise,8。遇见resolve(),那么则把then函数放在 微任务队列 中
7. 继续执行代码，打印：游戏结束,11
8. 第一次宏任务队列执行完成
![执行过程图解](https://www.freesion.com/images/616/42e4bec17134bf28ea26c1ea4e6f6b30.png)

### 第一个微任务执行
1. 执行上图中微任务队列中的第一个，打印：then,3
2. 执行上图中微任务队列中的第二个，打印：then,9。然后将setTimeout放在另外一个宏任务队列中（在下次宏任务和微任务结束后执行次宏任务）
3. 第一次微任务队列执行完成
![执行过程图解](https://www.freesion.com/images/644/1705cc4c60690655e589a09bed837184.png)


### 第二个宏任务开始执行
1. 执行setTimeout，打印：setTimeout,5
2. 执行setTimeout中的 Promise， 打印：promise,6。遇见resolve，将then放入**微任务**中
**注意：此时的微任务是setTimeou宏任务中的微任务，故其执行顺序应该在此次完成宏任务之后**
3. 宏任务执行完成
![执行过程图解](https://www.freesion.com/images/663/777819169ca7d316d07c7442383ee00f.png)

### 第二个微任务开始执行
1. 执行then函数，打印：then,7
2. 第二个微任务执行完成
![执行过程图解](https://www.freesion.com/images/486/2015721f4227bb5e14c85903bbd485ee.png)

### 第三个宏任务开始执行
1. 执行setTimeout，打印：setTimeout,10
2. 第三个宏任务执行完成
![执行过程图解](https://www.freesion.com/images/834/57305515713423ee658cde2257b28a0a.png)

### 总结：从上而下的队列执行后的打印结果为
```txt
游戏开始,1
promise,2
promise结束,4
promise,8
游戏结束,11
then,3
then,9
setTimeout,5
promise,6
then,7
setTimeout,10
```
**易错点：在第二个宏任务执行中，容易先执行之后的宏任务而导致错误，所以，牢记，每个宏任务执行完成后，一定要限制性其队列中挂起的微任务后，再执行下一个宏任务。**




