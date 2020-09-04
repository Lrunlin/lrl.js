// 地址： http://101.200.141.4/lrl.js
// 联系方式：QQ：1974109227
// 微信号：webzhizuo(接bootsrtap,jq,h5,c3,简单的vue)
// github（随便做着玩）：liurl@gmail.com（Liu Run Lin）
// js加密地址：https://www.sojson.com/charEncode.html
var element = document.getElementsByTagName('*');
// 选择所有标签
function loadStyle() {
    let time = new Date().getTime();
    // 设置时间戳清除缓存
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'http://101.200.141.4/lrl.css?v' + time;
    // link.href = 'lrl.css?v' + time;A
    // // 创建link标签并且设置他的属性
    // // 引入的css地址
    let head = document.getElementsByTagName('head')[0];
    let metaa = document.createElement('meta');
    let metab = document.createElement('meta');
    let metac = document.createElement('meta');
    metaa.name = 'renderer';
    metaa.content = "webkit";
    metab.name = 'force-rendering';
    metab.content = 'webkit';
    metac.content = 'IE=Edge,chrome=1';
    // 浏览器优先使用webkit内核
    // 引入
    head.appendChild(link);
    head.appendChild(metaa);
    head.appendChild(metab);
    head.appendChild(metac);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://101.200.141.4/event.js?v' + time;
    // script.src = 'event.js?v' + time;
    head.appendChild(script);
}
loadStyle();
// 引入个人外部css浏览器优先使用webkit


let arrClass = [];
for (let i = 0; i < element.length; i++) {
    arrClass.push(element[i].className)
}

// 创建for循环数组，存储所有元素的className













function style(unit) {
    let element = document.getElementsByTagName('*');
    // 参数为单位默认单位为px
    let nameArr = ['mt', 'marginTop',
        'mb', 'marginBottom',
        'ml', 'marginLeft',
        'mr', 'marginRight',
        'pt', 'paddingTop',
        'pb', 'paddingBottom',
        'pl', 'paddingLeft',
        'pr', 'paddingRight',
        'to', 'top',
        'bot', 'bottom',
        'lef', 'left',
        'rig', 'right',
        'wid', 'width',
        'hei', 'height',
        'fs', 'fontSize',
        'bor', 'borderRadius'
    ];
    // 修改为左边为在自定义属性中使用的词，右边为数字词
    for (let i = 0; i < element.length; i++) {
        let data = element[i].getAttribute('lrl') || element[i].getAttribute('data-lrl') || element[i].getAttribute('data-') || element[i].getAttribute('style') || element[i].getAttribute('alt');
        // 控制在HTML中使用的名称
        if (data != null) {
            // 判断是否使用了方法
            for (var w = 0; w < nameArr.length; w++) {
                // 使用循环数组分配数据
                if (data.indexOf(nameArr[w]) != -1) {
                    let type = /^\d{1,}$/ //正则表达式仅数字
                    let name = data.indexOf(nameArr[w]);
                    // 创建变量分别为属性名称后面的值对应的位数
                    let a = type.test(Number(data.substring(name + nameArr[w].length, name + nameArr[w].length + 3)));
                    let b = type.test(Number(data.substring(name + nameArr[w].length, name + nameArr[w].length + 2)));
                    let c = type.test(Number(data.substring(name + nameArr[w].length, name + nameArr[w].length + 1)));
                    let d = type.test(Number(data.substring(name + nameArr[w].length, name + nameArr[w].length + 4)));
                    // 截取name名称后面的值1,2，3位，转化为数字类型，使用正则表达式验证，先验证三位是否都是数字如果是值为名称后三位的数字，类推
                    if (d == 1) {
                        var value = data.substring(name + nameArr[w].length, name + nameArr[w].length + 4) + unit;
                    } else if (a == 1) {
                        var value = data.substring(name + nameArr[w].length, name + nameArr[w].length + 3) + unit;
                    } else if (b == 1) {
                        var value = data.substring(name + nameArr[w].length, name + nameArr[w].length + 2) + unit;
                    } else if (c == 1) {
                        var value = data.substring(name + nameArr[w].length, name + nameArr[w].length + 1) + unit;
                    }
                    element[i].style[nameArr[w + 1]] = value;
                    // 设置标签的name=value值+‘px’
                }
            }
        }
    }
}
window.addEventListener('load', style('px'));

















// 自动获取元素，适用于lineheight之类的属性
window.addEventListener('load', function () {
    for (let i = 0; i < element.length; i++) {
        if ([element[i].className].indexOf('light') != -1) {
            let height = element[i].offsetHeight;
            element[i].style.lineHeight = height + 'px';
        }
        // 控制行高居中
    }
})



// 选项卡功能（鼠标触碰）
function tab() {
    let btn = document.getElementsByClassName('tabBtn');
    let box = document.getElementsByClassName('tabBox');
    // 设置索引值
    for (let i = 0; i < btn.length; i++) {
        btn[i].onmouseover = function () {
            for (let i = 0; i < box.length; i++) {
                box[i].style.display = 'none';
            }
            box[i].style.display = 'block';
        }
    }
    if (btn.length !== box.length) {
        console.error('选项卡：按钮的数量和显示盒子的数量不一致请检查');
    }
}
// 使用方法：按钮添加class：tabBtn需要切换的内容：tabBox
tab()
















// 设置单位默认为px,使用时不是px直接修改即可
// width为设计宽度
function rem(width, remValue) {
    let container = document.getElementsByClassName('container')[0];
    let html = document.getElementsByTagName('html')[0];
    let maxWidth = window.innerWidth;
    html.style.fontSize = maxWidth / width * remValue + 'px';
    // 默认像素为10
}

// rem(1209,10)
//1,本人电脑屏幕像素， 设计稿像素2,rem大小1rem=多少像素，默认为10


function zoom(value, maxWidth) {
    // 火狐浏览器不兼容zoom
    if (window.navigator.userAgent.indexOf('Firefox') != -1) {
        let body = document.body;
        let width = window.innerWidth / value;
        body.style.width = maxWidth + 'px';
        body.style.transform = 'scale(' + width + ')';
        body.style.transformOrigin = 'top left';
    } else {
        let body = document.body;
        let width = window.innerWidth / value;
        body.style.width = maxWidth + 'px';
        body.style.zoom = width;
    }
}
// zoom(1200,1200)
// 第一个参数为比例，即已多大的显示屏为标准，第二个参数为body的宽度两个类型都是数字










var Lrl = new Object; //创建对象Lrl




// 组件 Component

Lrl.component = function (name, data) {
    let obj = document.getElementsByTagName(name);
    // 自定义标签
    for (let i = 0; i < obj.length; i++) {
        obj[i].className += 'disb '
        // 设置为块状 留出空格：为了之后添加class
        // HTML:
        if (data.html != undefined || data.html != null) {
            obj[i].innerHTML = data.html;
            // 设置自定义标签标签的innerHTML
        }
        // class:
        if (data.class != undefined || data.class != null) {
            obj[i].className += data.class;
        }
        // imgs:
        let img = obj[i].getElementsByTagName('img'); //设置里面图片的src
        if (data.imgs != undefined || data.imgs != null) {
            if (img.length != data.imgs.length) {
                console.error('img标签数量与imgs数组储存的路径数量不一致，请检查');
            } else {
                for (let i = 0; i < img.length; i++) {
                    img[i].src = data.imgs[i];
                }
            }
        }
        // addStyle:
        if (data.addStyle != undefined || data.addStyle != null) {
            obj[i].setAttribute('style', data.addStyle);
        }
        //style；
        if (data.style != undefined || data.style != null) {
            obj[i].innerHTML += '<style>' + data.style + '</style>';
        }
        // script： 
    }
    // script事件不参与循环放在整个body的最下面
    if (data.script != undefined || data.script != null) {
        let script = document.createElement('script');
        script.innerHTML += data.script;
        document.body.appendChild(script)
    }
}
Lrl.component('liu', {
    html: '<div>我是组件</div>', //填写HTML
    class: '', // class注意中间要留空格
    addStyle: '', //行内style
    imgs: [], //如果有图片添加图片
    style: '', //设置style标签到obj内
    script: 'console.log("1");', //设置script标签到obj内
})












// 事件函数创建













function hide() {
    this.style.display = 'none'
}
// 点击隐藏
function show() {
    this.style.display = 'blcok'
}
// 点击显示
// 轮播
function carouselLrl(width, height, time) {
    // 参数顺序：宽度{盒子，图片}高度{盒子，图片，ul}间隔时间{js定时器间隔时间}
    let box = document.getElementById('carouselBox');
    let ul = box.getElementsByTagName('ul')[0];
    let li = ul.getElementsByTagName('li');
    let img = box.getElementsByTagName('img');
    let position = [];
    box.setAttribute('style', 'overflow: hidden;height:' + height + 'px;' + 'width:' + width + 'px')
    ul.setAttribute('style', "position: relative;width: 400000px;height:" + height + 'px;')
    for (var i = 0; i < img.length; i++) {
        position.push(-width * i + 'px');
        // 将轮播图的位置依次推进数组
        img[i].setAttribute('style', 'display: block;float: left;height:' + height + 'px;' + 'width:' + width + 'px')
    }
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute('style', "float: left;list-style-type: none;")
        // 设置li属性
    }
    let num = 0;
    setInterval(
        () => {
            num == position.length ? num = 0 : num++;
            ul.style.left = position[num];
            // 定时器设置ul移动
        }, time
    );
    let btn = document.getElementById('carouselBtn') || box.getElementsByTagName('ul')[1];
    // 如果设置了id就设置为id否则设置为外层盒子里面的第二个ul
    if (btn != undefined) {
        // 判断是否使用了轮播触碰按钮
        let btnLi = btn.getElementsByTagName('li');
        // 设置轮播图的触碰按钮
        btn.className += 'pa';
        for (let i = 0; i < btnLi.length; i++) {
            btnLi[i].onmousemove = () => {
                ul.style.left = position[i];
            }
        }
    }
}
// carouselLrl(400, 200, 5000);
// 需要在css中设置transition,也就是运动时间

























// ajax({
//     url: "assets/test.json",
//     method: "GET",
//     success: function (response) {
//         console.log(response);

//     },

// })

// function ajax(obj) {
//     let http;
//     http = new XMLHttpRequest();
//     http.onreadystatechange = function () {
//         if (http.readyState == 4 && http.status >= 200 && http.status < 300) {
//             // 成功执行的事件
//             obj.success && obj.success(http.responseText, http.responseXML);
//         }
//         obj.method.toLocaleLowerCase() == 'post' ? obj.method = 'POST' : obj.method = 'GET';
//     }
//     let time = '?v' + new Date().getTime();
//     http.open(obj.method, obj.url + time, true);
//     http.send();
// }
// ajax()


// m