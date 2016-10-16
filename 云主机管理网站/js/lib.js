jQuery(document).ready(function($) {


    //菜单
    $(".MENUS li").hover(function(){           
        $(this).addClass("ok").find("dl").stop(true,true).slideUp(0).slideDown(300);
    },function(){
    $(".ok").find("dl").stop(true,true).slideUp(200);
        $(this).removeClass("ok");
    });


    //选项卡切换
    $(".TAB li").mousemove(function(){
        var tab=$(this).parent(".TAB");
        var con=tab.attr("id");
        var on=tab.find("li").index(this);
        $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
        $(con).eq(on).show().siblings(con).hide();
    });


    //选项卡点击切换
    $(".TAB_CLICK li").click(function(){
        var tab=$(this).parent(".TAB_CLICK");
        var con=tab.attr("id");
        var on=tab.find("li").index(this);
        $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
        $(con).eq(on).show().siblings(con).hide();
    });

    search();
    

});


function search(){
    var hdr = $('.form-right'); 
    $('span.fa-search').click(function(event) {
        hdr.addClass('show-search');
    });

    $('body').click(function(e){
        var container = hdr;
           if (!container.is(e.target)
               && container.has(e.target).length === 0)
           {
                hdr.removeClass('show-search');
           }
    })
}


//
;(function(){
    var tipNum = $('.ul-top li:eq(1)').find('em').text();
        
})();

;(function(){
    function setTip(num){
        var tip = num;
        var tipNum = tip.text()*1;
            if(tipNum > 99){
                tip.addClass('big-tip').text('99');
            }
    }
    setTip($('.ul-top li:eq(1)').find('em'));
    setTip($('.u-tip'));
  
})();
