/**
 * Created by CY on 2016/6/29.
 */
var h,w;//定义屏幕狂高
var p = $('.part').length-1;
var n = 0;
var minw = 980;
//设置导航栏下标位置
function setnav(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var p1 = $('.part1').eq(0)[0].offsetTop;
    var p2 = $('.part2').eq(0)[0].offsetTop-70;
    var p3 = $('.part3').eq(0)[0].offsetTop-70;
    var p4 = $('.part4').eq(0)[0].offsetTop-70;
    var p5 = $('.part5').eq(0)[0].offsetTop-70;
    var p6 = $('.part6').eq(0)[0].offsetTop-70;
    //console.log(p1+','+p2+','+p4+','+p6+','+3*t);
    if(p1==t){
        n=0;
        $('.xiabiao').css({
            'width':'2em',
            'margin-left':'calc(25% - 2em)',
        })
        $('.nav0').css('color','red');
        $('.navnav li a').addClass('bignav');
    }
    if(p2==t || p3==t || p4==t){
        if(p2==t)n=1;
        if(p3==t)n=2;
        if(p4==t)n=3;
        $('.xiabiao').css({
            'width':'4.2em',
            'margin-left':'calc(50% - 4em)',
        });
        $('.nav1').css('color','red');
        p2init();
    }
    if(p5==t){
        if(p5==t)n=4;
        $('.xiabiao').css({
            'width':'4.2em',
            'margin-left':'calc(75% - 4em)',
        })
        $('.nav3').css('color','red');
    }
    if(p6==t){
        n=5;
        $('.xiabiao').css({
            'width':'4.2em',
            'margin-left':'calc(100% - 4em)',
        });
        $('.nav5').css('color','red');
        footinit();
    }
    if(n==0){
        $('.navlogo span').css('color','#fff');
        $('.nav').css('height','0px');
        $('.navnav li a').css('color','#fff');
    }else{
        $('.nav').css('height','70px');
    }
}

//手机界面初始
function phoneinit(){
    $('.nav .list').click(function(){
        $('.nav .navwrapper').toggle('fast');
    })
    $('.navnav li').click(function(){
        $('body').animate({scrollTop:$('.panel').eq($(this).attr('data-nav'))[0].offsetTop - 70},400,function(){
            $('.nav .navwrapper').hide('fast');
        });
    })
    var nowpage = 0;
    //给最大的盒子增加事件监听
    $("body").swipe(
        {
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    nowpage = nowpage + 1;
                }else if(direction == "down"){
                    nowpage = nowpage - 1;
                }
                if(nowpage==6){
                    nowpage = 5;
                }
                if(nowpage<0){
                    nowpage = 0;
                }
                if(nowpage==0){
                    $('.navlogo span').css('color','#fff');
                    //$('.nav').css('height','0px');
                    $('.navnav li a').css('color','#fff');
                }else{
                    $('.navlogo span').css('color','#fff');
                    $('.nav').css('height','70px');  $('.navnav li a').css('color','#fff');
                }
                console.log(nowpage+'ss')
                $('body').animate({scrollTop:$('.panel').eq(nowpage)[0].offsetTop - 70},400,setnav);
            }
        }
    );
    var pw = $('.mar90 .titlep3').width();
    var pb = $('.mar90 .bigfont').width();
    var uw = $('.aboutul').width();
    var part4h = $('#swiper4').height();
    $('.part1 .text p').css('font-size',w/18+'px');
    $('.aboutli').css({
        'width':uw*0.45+'px','height':uw*0.45+20+'px',
        'margin-bottom':(h-$('.aboutul').height())/5+'px'
    });
    $('.aboutradio').css({
        'width':uw*0.45+'px','height':uw*0.45+'px'
    });
    $('.aboutradio i').css({
        'width':uw/4+'px','height':uw/6+'px','margin-top':uw/10+'px','margin-left':uw/15+'px'
    });
    $('.aboutli .bl,.aboutli .br').css({
        'width':uw/4+'px','height':uw/4+'px',
        'clip': 'rect('+uw/4+'px,'+uw/8+'px,'+uw/4+'px,0px)'
    });
    var pw4 = $('.part4 .title4').width();
    $('.part4 .title4').css('font-size',pw4/16+'px');
    $('.ysli').css({
        //'margin-top':(h-170)/4+'px'
        'margin-top':'2%'
    });
    if(w<minw){
        //$('.p5 .zuopin').css('margin-top',(h-300)/6+'px');

    }else{
        $('.p5 .zuopin').css('margin-top',(h-300)/6+'px');
    }
}
//alert($('.part').eq(1)[0].offsetTop)
 var windowobject;
var scrollFunc = function (e) {
    var direct = 0;
    e = e || window.event;

    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            //alert("滑轮向上滚动");
            if(!$(windowobject).is(":animated")){
                n--;
                if (n < 0) {
                    n = 0;
                }
                if(n==0){
                    $('.navlogo span').css('color','#fff');
                    $('.navnav li a').css('color','#fff');
                    $('.nav').css('height','0px');
                }else
                {
                    $('.navlogo span').css('color','#333');
                    $('.navnav li a').css('color','#333');
                }
                $(windowobject).animate({scrollTop: $('.part').eq(n)[0].offsetTop-70}, 500,setnav);
            }
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            if(!$(windowobject).is(":animated")) {
                n++;
                if (n>p) {
                    n = p;
                }
                $('.navlogo span').css('color','#333');
                $('.navnav li a').css('color','#333');
                $('.nav').css('height','70px');
                $(windowobject).animate({scrollTop: $('.part').eq(n)[0].offsetTop-70}, 500,setnav);
            }
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚动时
            if(!$(windowobject).is(":animated")) {
                n++;
                if (n > p) {
                    n = p;
                }
                $('.navlogo span').css('color','#333');
                $('.navnav li a').css('color','#333');
                $('.nav').css('height','70px');
                $(windowobject).animate({scrollTop: $('.part').eq(n)[0].offsetTop-70}, 500,setnav);
            }
        }
        if (e.detail< 0) { //当滑轮向下滚动时
            //alert("滑轮向下滚动");
            if(!$(windowobject).is(":animated")) {
                n--;
                if (n < 0) {
                    n = 0;
                }
                if(n==0){
                    $('.navlogo span').css('color','#fff');
                    $('.navnav li a').css('color','#fff');
                    $('.nav').css('height','0px');
                }
                $(windowobject).animate({scrollTop: $('.part').eq(n)[0].offsetTop-70}, 500,setnav);


            }
        }
    }
}

//初始化元素宽高
function allinit(){
    $('.part2,.part3,.part4,.part5,.part6').css({
        'height':h-70+'px'
    })
    var ulw = $('.serveul').width();
    if(w<minw){
        $('.serveli').css({
            'height':h*0.18+'px',
            'width':'45%',
            'margin':'0px 2.5% 0 2.5%'
        });
        $('.part6 .h1').css({
            'top':(h-110-$('.part6 .h1').height())/2+'px',
            'margin-top':0
        });
    }else{
        $('.serveli').css({
            'height':h*0.3+'px',
            'width':ulw*0.22+'px',
            'margin-right':(ulw*0.035)+'px'
        })
        $('.serveli:nth-child(4)').css({
            "margin-right": "0"
        })
        $('.part6 .h1').css('margin-top',(h-110-$('.part6 .h1').height())/2+'px');
    }
    var cw =  $('.cl').width();
    $('.cl').css({
        'clip':'rect(0px,'+cw/2+'px,'+cw+'px,'+'0px)'
    })
    $('.cr').css({
        'clip':'rect(0px,'+cw+'px,'+cw+'px,'+cw/2+'px)'
    })
    $('.serveli').hover(function(){
        $(this).find('.cl').css({
            'clip':'rect('+cw+'px,'+cw/2+'px,'+cw+'px,'+'0px)'
        })
        $(this).find('.cr').css({
            'clip':'rect(0,'+cw+'px,'+'0px,'+cw/2+'px)'
        })
    },function(){
        $(this).find('.cl').css({
            'clip':'rect(0px,'+cw/2+'px,'+cw+'px,'+'0px)'
        })
        $(this).find('.cr').css({
            'clip':'rect(0px,'+cw+'px,'+cw+'px,'+cw/2+'px)'
        })
    })
    $('.part6 .h2').css('margin-top',(h-110-$('.part6 .h1').height())/2+'px');
}


function partinit(){
    document.getElementById('part1').style.height = h+'px';
}
function p1init(){
    var pcw = $('.pc').width(); var pch = $('.pc').height();
    var mcw = $('.macbook').width();
    if(w<minw){
        $('.part1 .text').css({
            'top':'calc(50% - 11em)',
            'left':'5%',
            'opacity':'1'
        })
        $('.pc').css({
            'font-size':w/6+'px',
            //'right':(w-pcw*1.7)/2+'px',
            'left': 'calc(50% - .8em)',
            'top':'calc(50% - 1.5em)',
            'opacity':'1'
        });
        $('.macbook').css({
            'font-size':$('.macbook').width()/14+'px',
            'left': 'calc(50% - 3em)',
            'bottom':'calc(50% - 1em)',
            'opacity':'1'
        });
        $('.iphone').css({
            'left': '5%',
            'bottom':'25%',
            'opacity':'1'
        });
        $('.part1 .text p').css({
            'padding-top':'0'
        })
        var teh = $('.part1 .text').height()+25;
        $('.part1 .leftbor,.rightbor').css({
            'width':teh+'px',
            'height':teh+'px'
        })
    }else{
        //tw = $('.part1 .text').width();
        $('.part1 .text').css({
            'top':'calc(50% - 16em)',
            'left':'calc(50% - 14em)',
            'opacity':'1'
        })
        //alert($('.part1 .text').width())
        $('.pc').css({
            'font-size':$('.macbook').width()/3+'px',
            //'right':(w-pcw*1.7)/2+'px',
            'left': 'calc(50% -     .5em)',
            'top':'calc(50% - 1.5em)',
            'opacity':'1'
        });
        $('.macbook').css({
            'font-size':$('.macbook').width()/13+'px',
            'left': 'calc(50% - 2em)',
            'bottom':'calc(50% - 2em)',
            'opacity':'1'
        });
        $('.iphone').css({
            'left': 'calc(50% - 17em)',
            'bottom':'25%',
            'opacity':'1'
        });

        $('.part1 .text p').css({
            'padding-top':'0'
        })
         teh = $('.part1 .text').height()+25;
        $('.part1 .leftbor,.rightbor').css({
            'width':teh+'px',
            'height':teh+'px'
        })
    }
}
function p2init(){
    if(w<minw) { //宽度小于minw时
        $('.part2 .title2').css({
            'position':'static',
            'margin-top':h/30+'px',
            'opacity':'1'
        });
        $('.part2 .num8').css({
            'bottom':'20px',
            'opacity':'1',

        });
        $('.title2 h6').css({
            'padding-top':'0'
        })
    }else{
        $('.part2 .title2').css({
            'top':'20px',
            'opacity':'1'
        });
        $('.part2 .num8').css({
            'bottom':'10px',
            'opacity':'1'
        });
        $('.title2 h6').css({
            'padding-top':'0'
        })
    }

}

function lun2init(){
    $('.bigtitle').css({
        top: '30%',
        opacity:'1'
    });
    $('.l2title3').css({
        bottom:'45%',
        opacity:'1'
    });
    $('.l2title4').css({
        bottom:'35%',
        opacity:'1'
    })
}
function lun3init(){
    $('.bigtitle3').css({
        top: '30%',
        opacity:'1'
    });
    $('.l3title3').css({
        bottom:'45%',
        opacity:'1'
    });
    $('.l3title4').css({
        bottom:'35%',
        opacity:'1'
    })
}

function footinit(){
    $('.part6 .h1').children().css({
        'margin-left':0
    });
    $('.part6 .sendform .ct').css({
        'margin-left':0
    });
    if(w<minw){
        $('.part6 .cd8').css({
            //'float':'right',
            'margin-left':'20%'
        })
    }else{
        $('.part6 .cd8').css({
            //'float':'right',
            'margin-left':'0'
        })
    }
}
$(window).load(function(){

    var browser=navigator.appName
    var b_version=navigator.appVersion
    var version=b_version.split(";");
    //var trim_Version=version[1].replace(/[ ]/g,"");
    if(browser=="Microsoft Internet Explorer" && version[1].replace(/[ ]/g,"")=="MSIE8.0"||browser=="Microsoft Internet Explorer" && version[1].replace(/[ ]/g,"")=="MSIE9.0")
    {
        lun2init(); lun3init();
    };
    p1init();
    var oDiv = document.getElementById('body');
    function onMouseWheel(ev) {/*当鼠标滚轮事件发生时，执行一些操作*/
        var ev = ev || window.event;
        var down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
        down = ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
        if(down){
        }else{
        }
        if(ev.preventDefault){/*FF 和 Chrome*/
            ev.preventDefault();// 阻止默认事件
        }
        return false;
    };
    addEvent(oDiv,'mousewheel',onMouseWheel);
    addEvent(oDiv,'DOMMouseScroll',onMouseWheel);
    $('.wrapperpan').each(function () {
        $(this).css('margin-top',(h-70-$(this).height())/2+'px');
    });
    //swiper轮播
    var swiper = new Swiper('#swiper',{
        pagination: '.swiper-pagination',
        //nextButton: '.swiper-button-next',
        //prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 3000,//设置首页轮播图时间间隔，毫秒
        autoplayDisableOnInteraction: false,
        onSlideChangeEnd: function(swiper){
            if(swiper.progress == 0.5){
                lun2init();
            }
            if(swiper.progress == -0 || swiper.progress ==0.75){
                lun3init();
            }
        },
    });
})
var isrun = false;
function addEvent(obj,xEvent,fn) {
    if(obj.attachEvent){
        obj.attachEvent('on'+xEvent,fn);
    }else{
        obj.addEventListener(xEvent,fn,false);
    }
}
$(window).ready(function() {
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if(is_chrome){
        //判断是chrome、搜狗chrome内核, 供scrollTop兼容性使用
        windowobject ="body";
    }else{
        //支持ie和ff
        windowobject ="html";
    };
    $(windowobject).animate({scrollTop: $('.part').eq(0)[0].offsetTop - 70},100);


    ////导航栏点击设置相应位置
    $('#navnav li').click(function () {
        n=$(this).attr('data-nav');
        $(windowobject).animate({scrollTop: $('.part').eq($(this).attr('data-nav'))[0].offsetTop - 70}, 500,setnav);
        if(w<minw){
            $('.navlogo span').css('color','#fff');
            $('.nav').css('height','70px');  $('.navnav li a').css('color','#fff');
        }else{
            if(n==0){
                $('.navlogo span').css('color','#fff');
                $('.nav').css('height','0px');
                $('.navnav li a').css('color','#fff');
            }else{
                $('.navlogo span').css('color','#333');
                $('.nav').css('height','70px');  $('.navnav li a').css('color','#333');
            }
        }
    });
    //获取屏幕狂高
    if (window.innerHeight){
        h = window.innerHeight;
        w =window.innerWidth;
    }
    else if ((document.body) && (document.body.clientHeight)){
        h = $(window).height();
        w = $(window).width();
    }
    partinit();
    allinit();
    if(w<minw){ //宽度小于minw时
        phoneinit();
        $('.block').smoove({offset:'8%'});
        var swiper5 = new Swiper('#swiper5', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0,
            loop: true,
            //autoplay: 2500,
            //autoplayDisableOnInteraction: false
        });
        var swiper4 = new Swiper('#swiper4', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 15,
            loop: true,
            //autoplay: 2500,
            //autoplayDisableOnInteraction: false
        });
    }else{
            $('.navlogo span').css('color','#333');
            $('.navnav li a').css('color','#333');
        //给页面绑定滑轮滚动事件
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        //滚动滑轮触发scrollFunc方法
        window.onmousewheel = document.onmousewheel = scrollFunc;
        $('.block').smoove({offset:'8%'});
    }
    if(h<500){
        $('.serveli h3').hide();
    }
    setnav();
})
