
$(function() {
	  $(".l li").mouseover(function(){
	  	$(this).addClass("activeli");
	  	$(this).siblings().removeClass("activeli");
	  });
	  var mySwiper = new Swiper('.swiper-container', {//轮转
			loop: true,
			pagination: '.pagination-s',
			paginationClickable: true,
			autoplay: 5000,
			autoplayDisableOnInteraction: false
	  });
	  $(".swiper-slide img").css("opacity", 1);
	  var mySwiper1 = new Swiper('.swiper-tabs', {//轮转2
			loop: true,
			autoplay: 5000,
			autoplayDisableOnInteraction: false,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
	        paginationClickable: true
	  });
	  $('.arrow-left').on('click', function(e){
	    e.preventDefault();
	    mySwiper1.swipePrev();
	  });
	  $('.arrow-right').on('click', function(e){
	    e.preventDefault();
	    mySwiper1.swipeNext();
	  });
});