# 设计文档

杨妍 17307130329

### 1.获取url中名为name的参数。

使用了JavaScript定位字符串中子串的函数indexOf()和lastIndexOf()，定位"name="后的第一个字符位置和下一个"&"前的最后一个字符位置，再使用slice()函数截取name参数的值。


### 2.时间间隔函数。

使用了两个关键定时器函数setInterval()和setTimeout()。
使用setInterval()设置每5000ms调用一次函数timeTest()。
1. 最大时间限制：计算离下一次整分钟时间点的秒数，用setTimeout定时触发clearInterval以解除周期调用。
2. 最大次数限制：每调用一次counter加一，达到十次时也调用clearInterval解除周期调用。


### 3.判断最多出现字符。

先用split()将字符串拆成以单个字符为长度的字符串数组，遍历一遍数组，将{字符：次数}作为一个新的对象（字典）counter。
再遍历一遍counter，找出最大的value及其对应的key，即字符出现的最大次数和最大字符。

