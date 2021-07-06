/**
 *
 *   author : bypanghu
 *   email : bypanghu@163.com
 *
 */

//处理header 的显示颜色和banner



$(window).scroll(function() {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //如果banner 滚动超出屏幕距离，则将顶部的banner颜色改成纯色
    if(scrollTop > 750){
        $(".header")[0].style.backgroundColor='#fff'
        $(".header-img-img")[0].src = 'https://cdn.jsdelivr.net/gh/bypanghu/assets@master/web/webIcon-black.png'
        document.documentElement.style.setProperty('--ui-header-text','#000')
    }else if(scrollTop < 750) {
        $(".header")[0].style.background='none'
        $(".header-img-img")[0].src = 'https://cdn.jsdelivr.net/gh/bypanghu/assets@master/web/webIcon-white.png'
        document.documentElement.style.setProperty('--ui-header-text','#fff')
    }
})