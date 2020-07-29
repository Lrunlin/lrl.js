var element = document.getElementsByTagName('*');
// 选择所有标签
function loadStyle() {
    let time = new Date().getTime();
    // 设置时间戳清除缓存
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'http://101.200.141.4/liurl.css?v' + time;
    // 引入的css地址
    // 创建link标签并且设置他的属性
    let head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
    head.innerHTML = '<meta name="renderer" content="webkit"/><meta name="force-rendering" content="webkit"/><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>' + head.innerHTML
    let script = document.getElementsByTagName('script');
    for (let i = 0; i < script.length; i++) {
        if (script[i].src = 'http://101.200.141.4/lrl.js') {
            script[i].src = 'http://101.200.141.4/lrl.js?v' + time;
        }
    }
}
loadStyle();
// 引入个人外部css浏览器优先使用webkit
function style(unit) {
    let element = document.getElementsByTagName('*');
    // 参数为单位默认单位为px
    let nameArr = ['mt',
        'mb',
        'ml',
        'mr',
        'pt',
        'pb',
        'pl',
        'pr',
        'top',
        'bottom',
        'left',
        'right',
        'wid',
        'hei'
    ];
    // 上方是在HTML中使用的词
    // 下方是控制属性
    let nameStyle = ['marginTop',
        'marginBottom',
        'marginLeft',
        'marginRight',
        'paddingTop',
        'paddingBottom',
        'paddingLeft',
        'paddingRight',
        'top',
        'bottom',
        'left',
        'right',
        'width',
        'height'
    ];
    for (let i = 0; i < element.length; i++) {
        let data = element[i].getAttribute('lrl') || element[i].getAttribute('data-lrl') || element[i].getAttribute('data-') || element[i].getAttribute('style');
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
                    if (a == 1) {
                        var value = data.substring(name + nameArr[w].length, name + nameArr[w].length + 3) + unit;
                    } else if (b == 1) {
                        var value = data.substring(name + nameArr[w].length, name + nameArr[w].length + 2) + unit;
                    } else if (c == 1) {
                        var value = data.substring(name + nameArr[w].length, name + nameArr[w].length + 1) + unit;
                    }
                    if (d == 1 && Number(data.substring(name + nameArr[w].length, name + nameArr[w].length + 4)) >= 1000) {
                        var value = data.substring(name + nameArr[w].length, name + nameArr[w].length + 3) + unit;
                        console.error('四位没必要弄用的少容易出错改一下（不改自动按照3位值来）：' + nameArr[w] + value);
                        // 设置正则表达式判断仅数字4位是否正确，并要求大于1000以免误伤3位及其以下
                    }
                    element[i].style[nameStyle[w]] = value;
                }
            }
        }
    }
}

window.addEventListener('load', style('px'));
// 自动获取元素，适用于lineheight之类的属性
window.addEventListener('load', function () {
    for (var i = 0; i < element.length; i++) {
        if (element[i].className.indexOf('light') != -1) {
            let height = element[i].offsetHeight;
            element[i].style.lineHeight = height + 'px'
        }
        // 控制行高居中
    }
})

















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
        var body = document.body;
        var html = document.getElementsByTagName('html')[0]
        var width = window.innerWidth / value
        body.style.width = maxWidth + 'px'
        body.style.transform = 'scale(' + width + ')'
        body.style.transformOrigin = 'top left'
    } else {
        var body = document.body;
        var html = document.getElementsByTagName('html')[0]
        var width = window.innerWidth / value
        body.style.width = maxWidth + 'px'
        body.style.zoom = width
    }
}
// zoom()
// 第一个参数为比例，即已多大的显示屏为标准，第二个参数为body的宽度两个类型都是数字































































































































// m