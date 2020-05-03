/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    let number=1;
    let interval=window.setInterval(addCounter, 5000);
    let counter = 0;
    let sec = 60 - (new Date()).getSeconds();
    console.log("current time:"+(new Date()).toTimeString());
    console.log('counter:'+counter+';number:'+number);
    // 最大时间限制
    if(sec<50) {
        setTimeout(function () {
            console.log("Stopped for integer minutes:"+(new Date()).toTimeString());
            clearInterval(interval);
        }, sec * 1000);
    }

    function addCounter() {
        number= number* 2;
        counter++;
        console.log('counter:'+counter+';number:'+number);
        // 最大次数限制
        if (counter >= 10) {
            clearInterval(interval);
            console.log("Stopped for counter>=10");
        }
    }
}

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    /** 正则表达
     * 手机号码由11位数字组成，
     * 匹配格式：前三位固定格式+后8位任意数
     * 此方法中前三位格式有：
     * 13+任意数
     * 15+除4的任意数
     * 18+除1和4的任意数
     * 17+除9的任意数
     * 147
     * 以上为百度所得 ；）
     */
    let reg4tel=/^(13[0-9]|15[0-35-9]|18[02-35-9]|17[0-8]|147)\d{8}$/;
    let flag4tel=reg4tel.test(telephone);
    /**
     * 这里邮箱的格式为x.x.x@x.x
     * 其中x可为多个字符[0-9a-zA-Z]
     * ‘@’将其分成两部分，代表前半部分可出现‘.’或‘_’，后半部分只能出现‘.’
     * ‘.’或‘_’将每部分分成多节，前半部分至少一节，后半部分至少两节
     * ‘.’或‘_’不能在首尾，只能出现在节间
     * ‘_’允许连续出现多次（见新浪邮箱、网易邮箱），‘.’不允许出现多次（见谷歌邮箱）,‘.’和‘_’不能连续出现
     * 以上为实验所得 ；）
    */
    let reg4mail=/^([0-9a-zA-Z]+(_+|\.))*[0-9a-zA-Z]+@([0-9a-zA-Z]+\.)+[0-9a-zA-Z]+$/;
    let flag4mail=reg4mail.test(mail);
    console.log(`The telephone is ${flag4tel} and the mail is ${flag4mail}!`);
}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    let re=/[a-z]+['-]?[a-z]+/ig;
    let words=str.match(re);
    let set=new Set();
    for(let index=0;index<words.length-1;index++){
        if(words[index].toLowerCase()===words[index+1].toLowerCase())
            set.add(words[index]+' '+words[index+1]);
    }
    console.log(set);
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    let set=new Set();
    for(let index=0;index<wantInput.length;index++){
        if(actualInput.indexOf(wantInput[index])<0)
            set.add(wantInput[index].toUpperCase());
    }
    console.log(set);
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    str=str.replace('+',' ');
    let re=/\S+/ig;
    let words=str.match(re);
    let len=words.length;
    let msg='';
    for(let index=0;index<len;index++){
        msg=msg+words[len-1-index];
        if(index<len-1)
            msg=msg+' ';
    }
    console.log("result:"+msg);
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    nums=JSON.parse(nums);
    target=parseInt(target);
    let map=new Map();
    for(let index=0;index<nums.length;index++){
        let num=nums[index];
        if(map.has(target-num)){
            console.log(`[${map.get(target-num)},${index}]`);
        }
        map.set(num,index);
    }
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let map=new Map();
    let maxLength=0;
    let minIndexWithoutRepeat=-1;//往右无重复字母的最小下标
    for(let index=0;index<str.length;index++){
        let letter=str[index];
        let currentMax;
        if(!map.has(letter)) {
            /**
             * 如果map中不含该字母，即该字母第一次出现，当前最大子串应为：
             *  “从当前位置往左找，第一个记录过出现*其他*重复字母的位置（即，往右无重复字母的最大下标）”
             */
            currentMax=index-minIndexWithoutRepeat;
        }
        else{
            /**
             * 如果map中已有该字母，当前最大子串长度应为：
             * 1.“从当前位置往左找，第一个记录过出现*其他*重复字母的位置（即，往右无重复字母的最大下标）”
             * 2.“从当前位置往左找，第一个记录过出现该字母的位置（即，map中的值）”
             * 两者取最小值。
             */
            let tmpI=map.get(letter);
            currentMax=index-minIndexWithoutRepeat<index-map.get(letter)?index-minIndexWithoutRepeat:index-map.get(letter);
            minIndexWithoutRepeat=minIndexWithoutRepeat>tmpI?minIndexWithoutRepeat:tmpI;
        }
        //更新最大长度。
        maxLength=maxLength<currentMax?currentMax:maxLength;
        map.set(letter, index);
    }
    console.log(maxLength);
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
function DevelopingCountry(){
    Country.call(this);
    this.sayHi=function () {
        console.log("Hi,i am a developing country.");
    }
}
function PoorCountry() {}
PoorCountry.prototype=new Country();
PoorCountry.prototype.saySad=function () {
    console.log("I am a sad poor country.");
};

function DevelopedCountry() {}
DevelopedCountry.prototype=Object.create(Country.prototype);
DevelopedCountry.prototype.sayHappy=function () {
    console.log("I am a Happy developed country.");
};


function test(op) {
    switch (op) {
        case 1:{
            // test 1
            testTime();
            break;
        }
        case 2:{
            //test 2
            let telephone=document.getElementById('telephone').value;
            let mail=document.getElementById('mail').value;
            if(telephone!==''&&mail!=='') {
                console.log(`telephone:${telephone};mail:${mail}`);
                testMail(telephone, mail);
                document.getElementById('telephone').value=telephone;
                document.getElementById('mail').value=mail;
            }
            break;
        }
        case 3:{
            let str=document.getElementById('str3').value;
            if(str!=='') {
                console.log(`str:${str}`);
                testRedundancy(str);
                document.getElementById('str3').value=str;
            }
            break;
        }
        case 4:{
            let wantInput=document.getElementById('wantInput').value;
            let actualInput=document.getElementById('actualInput').value;
            if(wantInput!==''&&actualInput!=='') {
                console.log(`wantInput:${wantInput};actualInput:${actualInput}`);
                testKeyBoard(wantInput,actualInput);
                document.getElementById('wantInput').value=wantInput;
                document.getElementById('actualInput').value=actualInput;
            }
            break;
        }
        case 5:{
            let str=document.getElementById('str5').value;
            if(str!=='') {
                console.log(`str:${str}`);
                testSpecialReverse(str);
                document.getElementById('str5').value=str;
            }
            break;
        }
        case 6:{
            let nums=document.getElementById('nums').value;
            let target=document.getElementById('target').value;
            if(nums!==''&& target!=='') {
                console.log(`nums:${nums};target:${target}`);
                twoSum(nums,target);
                document.getElementById('nums').value=nums;
                document.getElementById('target').value=target;
            }
            break;
        }
        case 7:{
            let str=document.getElementById('str7').value;
            if(str!=='') {
                console.log(`str:${str}`);
                lengthOfLongestSubstring(str);
                document.getElementById('str7').value=str;
            }
            break;
        }
        case 8:{
            (new DevelopingCountry())['sayHi']();
            (new PoorCountry())['saySad']();
            (new DevelopedCountry())['sayHappy']();
            break;
        }
    }
}
