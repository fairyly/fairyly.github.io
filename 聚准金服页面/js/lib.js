$.stickyFooter = function(footer){
   function positionFooter() {
       footer = (typeof footer === "undefined") ? $("#footer") : $(footer);
       if ((($(document.body).height() + footer.outerHeight()) < $(window).height() && footer.css("position") == "fixed") || ($(document.body).height() < $(window).height() && footer.css("position") != "fixed")) {
           footer.css({
               position: "fixed",
               bottom: "0",
               width: '100%'
           });
       } else {
           footer.css({
               position: "static"
           });
       }
   }
   function stickFooter(){
       $(window).load(function(){positionFooter();}).resize(function(){positionFooter();});
   }
   stickFooter();
}
$.stickyFooter();

;(function(){
    var isMobile = false;
    $(window).resize(function(event) {
        isMobile = $('.m-hd').is(':visible'); 
        return isMobile;
    }).resize();

    var MobileMenu = {
        init: function(){
            this.showNav();
            this.showSub();
            this.hideNav();
            this.hassub();
        },
        showNav: function(){
            $('.m-trigger').click(function(e){
                var m_nav = $('.m-nav'); 
                if(m_nav.is(':visible')){
                    $('.m-nav').hide();
                }else{
                    $('.m-nav').show();
                }
                e.stopPropagation();
            });
        },
        hassub: function(){
            $('.m-nav li').each(function() {
                if( $(this).find('.m-sub a').length > 0 ){
                    $(this).addClass('has-sub');
                }
            });
        },
        showSub: function(){
            $('.m-nav li > a').click(function(){
                var sub = $(this).next('.m-sub');
                if( !sub.length > 0){
                    return true;
                }
                if(sub.is(':visible')){
                    sub.hide();
                    $(this).removeClass('on');
                }else{
                    $('.m-sub').hide();
                    $('.m-nav li .on').removeClass('on');
                    $(this).addClass('on');
                    sub.show();
                }
                return false;
            })
        },
        hideNav:function(){
            $('body').click(function(){
                $('.m-nav').hide();
            })
        }
    }
    MobileMenu.init();
    
})();




