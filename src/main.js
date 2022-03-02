let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `/*你好，我是一个前端新人
* 接下来，我来展示一下制作八卦图的过程
* 首先，准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 再将div变成左白右黑的圆形*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    border:none;
}
/* 加上黑白两个宝珠*/
#div1::before{
    content:'';
    width:100px;
    height:100px;
    background: rgb(0,0,0);
    border-radius:50%;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%);
}
#div1::after{
    content:'';
    width:100px;
    height:100px;
    background: rgb(255,255,255);
    border-radius:50%;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 100%);
}
/* 最后，添加动画，让八卦动起来吧！*/
@keyframes changeRight{       
		 
    0%{transform:rotate(0deg);}

    50%{transform:rotate(180deg);}

    100%{transform:rotate(360deg);}
}
#div1 {
    animation:changeRight 6s linear infinite;
}
`;
let n = 0;
let string2 = '';
let step = ()=>{
    setTimeout(()=>{
        if(string[n] === '\n'){
            string2 += '<br>';//string里是空格则替换Html写法
        }else if(string[n] === ' '){
            string2 += '&nbsp;';//string里是缩进则替换成Html写法
        }else{
            string2 += string[n];//若都不是则照搬
        }
        n += 1;
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,9999);
        html.scrollTo(0,9999);
        if(n <string.length){
            step();
        }
    },0)
}
step();