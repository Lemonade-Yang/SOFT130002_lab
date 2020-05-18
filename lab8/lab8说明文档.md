# lab8说明文档

杨妍 17307130329
===================

### 任务一

为左右箭头按钮添加onclick事件处理器：
```js
let prev_a=document.getElementsByClassName('arrow_left')[0];
prev_a.onclick=prev_img;
```

每一次点击先通过全局变量获取当前图片index，当前按钮index。左箭头则-1，右箭头则每一次点击先通过全局变量获取当前图片index，当前按钮index。左箭头则-1，右箭头则+1，在更改当前图片、当前高亮按钮。
更改当前图片的方式是修改wrap元素的margin-left，左滑则+600px，右滑则-600px。
定义了两个函数，可供后面部分调用。

```js
function next_img() {
    span.removeAttribute('class');
    index=(index+1===6)?1:index+1;
    span=document.querySelector("span:nth-child("+index+")");
    span.className='on';
    margin=(margin-600===-3600)?-600:margin-600;
    wrap.style['left']=margin+'px';
}
```
```js
function prev_img() {
    span.removeAttribute('class');
    index=(index-1===0)?5:index-1;
    span=document.querySelector("span:nth-child("+index+")");
    span.className='on';
    margin=(margin+600===0)?-3000:margin+600;
    wrap.style['left']=margin+'px';
}
```

### 任务二

通过js原生定时器```setInterval()```实现每隔2000ms调用一次```next_img()```函数。
```js
function play() {
	auto_play = setInterval("next_img()", 2000);
}
```
当鼠标移入container时停止自动播放。
```js
container.onmouseenter=function(e){
	clearInterval(auto_play);
};
```
当鼠标移出container时重新设置定时器
```js
container.onmouseleave=function (e) {
	console.log('restart');
	play();
};
```


### 任务三

点击数值时，先获取数值大小，作为将要跳转的图片下标。
通过修改margin-left和按钮class来展示样式。


### 任务四

核心思想是在表格的```<td><\td>```上挂click事件处理器，当点击动作发生时，改变其innerHTML，使其成为```<td><input><\td>```，即可实现输入。
1. 为了使表格原有内容不被删去：
```js
input.val(cell.html());
cell.html(input);
```
2. 为了使点击其他地方时保存输入值：
```js
input.blur(function(){
	cell.html($(this).val());
});
```
3. 为了使光标移到第一个：
```js
input.each(function() {
	let elem = this;
	setTimeout(function () {
		elem.focus();
		elem.setSelectionRange(0, 0)
	}, 10)
});
```