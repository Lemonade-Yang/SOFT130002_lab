# lab7设计文档

*******************

<font color=grey>杨妍  17307130329</font>

### 设计思路

利用js原生的dom操作，在html文档中选择元素、添加节点、设置属性，主要用到的方法有：

```js
document.getElementsByClassName();//通过class选择html元素
document.createElement();//生成元素节点对象
document.createTextNode();//生成文本节点对象
appendChild();//在父元素的最后添加子节点
setAttribute();//设置元素属性
```

### 遇到的问题

<font size=1 color=lightgrey>(其实没遇到什么问题（不是x</font>

1. 作者姓名和生卒日期同行的问题：最初以为不能用js添加css属性，很难解决。最后看到通知，于是给h3元素添加了```style:'display:inline'```属性，给h5元素添加了```style:'display:inline;margin-left:1em'```属性，成功解决。

2. 虽然没有怎么踩坑，但还是想提一下```appendChild()```的顺序，查阅资料时发现是在父节点的<b>最后</b>添加子节点，所以书写时最好的方法是创建一个添加一个，按照逻辑来，以免打乱顺序；且避免此后选择该元素时尚未添加的情况。