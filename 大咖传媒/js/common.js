/**
 * Created by chenzhongying on 16/1/25.
 */
$(function(){
    (function(){
        var $navcur = $(".nav-current");
        var $nav = $("#nav");
        var current = ".current";
        var itemW = $nav.find(current).innerWidth();	//默认当前位置宽度
        var defLeftW = $nav.find(current).position().left;	//默认当前位置Left值

//添加默认下划线
        $navcur.css({width:itemW,left:defLeftW});

//hover事件
        $nav.find("li").hover(function(){
            var index = $(this).index();	//获取滑过元素索引值
            var leftW = $(this).find("a").position().left;	//获取滑过元素Left值
            var currentW = $nav.find("a").eq(index).innerWidth();	//获取滑过元素Width值
            $navcur.stop().animate({
                left: leftW,
                width: currentW
            },300);

        },function(){
            $navcur.stop().animate({
                left: defLeftW,
                width: itemW
            },300)
        })
    })();
    $(window).on("resize",function(){
        var $navcur = $(".nav-current");
        var $nav = $("#nav");
        var current = ".current";
        var itemW = $nav.find(current).innerWidth();	//默认当前位置宽度
        var defLeftW = $nav.find(current).position().left;	//默认当前位置Left值

//添加默认下划线
        $navcur.css({width:itemW,left:defLeftW});

//hover事件
        $nav.find("li").hover(function(){
            var index = $(this).index();	//获取滑过元素索引值
            var leftW = $(this).find("a").position().left;	//获取滑过元素Left值
            var currentW = $nav.find("a").eq(index).innerWidth();	//获取滑过元素Width值
            $navcur.stop().animate({
                left: leftW,
                width: currentW
            },300);

        },function(){
            $navcur.stop().animate({
                left: defLeftW,
                width: itemW
            },300)
        })
    });
    //广告主,产品介绍切换页面
    $(".product_list li").on("click",function(){
        $(".product_list li img:nth-of-type(odd)").addClass("active");
        $(".product_list li img:nth-of-type(even)").removeClass("active");
        $(this).find("img").eq(0).removeClass("active");
        $(this).find("img").eq(1).addClass("active");
        $(".product_list p").removeClass("active");
        $(this).find("p").addClass("active");
        $(".product_list_con>section").removeClass("active");
        $(".product_list_con>section").eq($(this).index()).addClass("active");
        return false;
    });
});
