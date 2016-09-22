 $(function(){
    function resize(){
        var wh=$(window).height();
        if(wh<710){
            $('.hotnews').addClass('jr_height1');
            $('.fp-slidesNav').addClass('jr_height');
        }
        else{
            $('.hotnews').removeClass('jr_height1');
            $('.fp-slidesNav').removeClass('jr_height');
        }
    }
    setTimeout(function(){
        resize();
    },100)
   
    $(window).resize(function(){
        resize();
    })
    $('.logo').addClass('active');
    setTimeout(function(){
        $('.slide1').removeClass('active1');
    },5000)
    $('.nav_ul li').hover(function(){
        $(this).children('a').stop(false,true).animate({'top':'-32px'},200);
    },function(){
        $(this).children('a').stop(false,true).animate({'top':'0px'},200);
    })
    $('.xf_bot').click(function(){
        $(this).children('div').children('div').toggleClass('gb');
        $('.xf_top').fadeToggle();
    })
    $('.xf_top_k').hover(function(){
        $(this).children('.xf_top_k1').fadeIn();
        $(this).find('.xf_top_k_nr').stop(true,false).animate({'right':'10px'},300);
        $(this).css('z-index','111111');
    },function(){
        $(this).children('.xf_top_k1').fadeOut();
        $(this).find('.xf_top_k_nr').stop(true,false).animate({'right':'-154px'},300);

        $(this).css('z-index','111110');
    })
    $('.fhtop').click(function(){
        $('.num_box').animate({'bottom': '0'},1000);
        $('.fixed_r li').eq(0).addClass('on').siblings('li').removeClass('on');
        $('.ddw').val(0);
        $('.head').animate({'scrollTop':'0'},300);
    })
    
    
    fade('sec3more','abs');
    
    touM('sec2nr_bot a');
    touM('sec3nr1 a');
    
    tim2=setInterval(function(){
        
        huxideng('xf_bot>div');
    },3210)



    $('.ul1 li').each(function(){
        if($(this).index()%5==4){
            $(this).css('padding-right','0px');
        }
    })
    $('.map1 area').hover(function(){
        $('.sec4k>div').eq($(this).index()).find('.imagg2').stop(true,false).fadeToggle();
    })

    $('.ul2>li:odd').addClass('zyright');
    $('.ul2>li:even').addClass('zyleft');
    $('.ul2 li').hover(function(){
        $(this).find('.cl').stop(true,false).fadeToggle();
    })
 })

function fade(fuJ,ziJ){
    tim=setInterval(function(){
        huxideng(fuJ);
    },3210)
    $('.'+fuJ).hover(function(){
        $(this).find('.'+ziJ).stop(true,false).fadeIn();
        clearInterval(tim);
    },function(){
        $(this).find('.'+ziJ).stop(true,false).fadeOut();
        tim=setInterval(function(){
            huxideng(fuJ);
        },3210)
    })
 }

function huxideng(ele){
    
        $('.'+ele).fadeOut(1000,function(){

            setTimeout(function(){
                $('.'+ele).fadeIn(500)
            },400)
        });

}
function touM(ele){
    $('.'+ele).hover(function(){
        $(this).find('.opa0').removeClass('opa0').addClass('opa1');
    },function(){
        $(this).find('.opa1').removeClass('opa1').addClass('opa0');
    })
}