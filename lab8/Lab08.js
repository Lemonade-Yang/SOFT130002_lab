
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/


var span=document.getElementsByClassName('on')[0];
var index=parseInt(span.innerHTML);
var wrap=document.getElementsByClassName('wrap')[0];
var margin=parseInt(wrap.style['left'].substring(0,wrap.style['left'].search('px')));
var container=document.getElementsByClassName('container')[0];


/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/

function next_img() {
    span.removeAttribute('class');
    index=(index+1===6)?1:index+1;
    span=document.querySelector("span:nth-child("+index+")");
    span.className='on';
    margin=(margin-600===-3600)?-600:margin-600;
    wrap.style['left']=margin+'px';
}

function prev_img() {
    span.removeAttribute('class');
    index=(index-1===0)?5:index-1;
    span=document.querySelector("span:nth-child("+index+")");
    span.className='on';
    margin=(margin+600===0)?-3000:margin+600;
    wrap.style['left']=margin+'px';
}

(function(){

    //左箭头监听事件
    let prev_a=document.getElementsByClassName('arrow_left')[0];
    prev_a.onclick=prev_img;

    //右箭头监听事件
    let next_a=document.getElementsByClassName('arrow_right')[0];
    next_a.onclick=next_img;

})();


/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
(function(){
    function play() {
        auto_play = setInterval("next_img()", 2000);
    }
    play();
    container.onmouseenter=function(e){
        console.log('stop');
        clearInterval(auto_play);
    };
    container.onmouseleave=function (e) {
        console.log('restart');
        play();
    };
})();


/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
(function () {
    let spans=document.getElementsByTagName('span');
    for(let this_span of spans){
        this_span.onclick=function () {
            let current_index=parseInt(this_span.innerText);
            span.removeAttribute('class');
            this_span.className='on';
            span=this_span;
            margin=-600*current_index;
            wrap.style['left']=margin+'px';
        }
    }
})();

/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
$(function () {
    let cells = $("tbody td");
    for(let cell of cells){
        cell.onclick=function () {
            let cell=$(this);
            if (cell.children("input").length > 0) {
                return false;
            }
            let input = $("<input type='text' id='input'>");
            input.val(cell.html());
            cell.html(input);
            input.focus();
            input.each(function() {
                    let elem = this;
                    setTimeout(function () {
                        elem.focus();
                        elem.setSelectionRange(0, 0)
                    }, 10)
                });
            //当文本框失去焦点时重新变为文本
            input.blur(function(){
                cell.html($(this).val());
            });
        };
    }
});

/*********************************************end*************************************/
