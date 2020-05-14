const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

var justify=document.getElementsByClassName('justify')[0];

for(let work of works){

    console.log(work);

    //添加整个大框
    let item=document.createElement('div');
    item.className='item';
    justify.appendChild(item);

    //第一行
    let h4=document.createElement('h4');
    h4.appendChild(document.createTextNode('Genre : '+work['tips']));
    item.appendChild(h4);

    //第二行
    let div=document.createElement('div');
    div.className='inner-box';
    item.appendChild(div);
    //作者姓名
    let h3=document.createElement('h3');
    h3.setAttribute('style','display:inline');
    h3.appendChild(document.createTextNode(work['author']));
    div.appendChild(h3);
    //生卒日期
    let h5=document.createElement('h5');
    h5.appendChild(document.createTextNode('lifetime:'+work['lifetime']));
    h5.setAttribute('style','display:inline;margin-left:1em');
    div.appendChild(h5);

    //第三行
    div=document.createElement('div');
    div.className='inner-box';
    item.appendChild(div);
    //标题
    h3=document.createElement('h3');
    h3.appendChild(document.createTextNode('Popular Photos'));
    div.appendChild(h3);
    //图片
    for(let photo of work['photos']){
        let img=document.createElement('img');
        img.src=photo;
        img.className='photo';
        div.appendChild(img);
    }

    //第四行
    let button=document.createElement('button');
    button.appendChild(document.createTextNode('Visit'));
    item.appendChild(button);
}

