/**
 * Created by Administrator on 2016/7/12.
 */
var h,w;
$(function() {
    if (window.innerHeight){
        h = window.innerHeight;
        w =window.innerWidth;
    }
    else if ((document.body) && (document.body.clientHeight)){
        h = document.body.clientHeight
        w = document.body.clientWidth;
    };
    $('header').css({
        'height':h+'px'
    });
    if($('header').css('left')=='0px'){
        if(w>1100){
            $('.content').css({
                'width':w-310+'px'
            })
        }else{
            $('.content').css({
                'width':w+'px'
            })
        }
    }else{
        $('.caselist').css({
            'width':w-50+'px'
        })
    }
    $('.caseshow').css({
        'width':w+'px'
    })
    $('.switch').click(function(){
        var l;
        if($('header').css('left')=='0px'){
            $('.content').css({'width':w-50+'px'})
            $('header,.toolbar,.content').removeClass('active');
            $(this).addClass('glyphicon-th-list');
            $(this).removeClass('glyphicon-chevron-left');
            l = ((w-$('.items li').width()))/2;
            $('.items').css({
                'margin-left':l+'px'
            })
        }else{
            $('.content').css({'width':w-310+'px'})
            $('header,.toolbar,.content').addClass('active');
            $(this).addClass('glyphicon-chevron-left');
            $(this).removeClass('glyphicon-th-list');
            l = ((w-$('.items li')[0].width()))/2;

            $('.items').css({
                'margin-left':l+'px'
            })
        }
    })
    $('.mini').hover(function(){
        $(this).addClass('open');
    },function(){
        $(this).removeClass('open');
    })
});
$(window).load(function(){
    var l;
    if(w>1100){
        l = ((w-310)%330)/2;
    }else{
         //l = (w%310)/2;
        l = ((w-$('.items li').width()))/2;
    }
    $('.items').css({
        'margin-left':l+'px'
    })
})