// JavaScript Document
$('.ddw').val(0);
$('.ddw2').val(0);
// setTimeout(function(){
// $('.num').eq(0).find('p').stop().animate({'top':'50%'},500)
// 	},500);
	
$(function(){
$('.num_box').mousewheel(function(event, delta) {
	var aaaa=$('.ddw2').val();
	if (aaaa == 1){
		return;	
	}
	qpgd(delta);
});
});


$(function(){
	$("body").on("touchstart", function(e) {
	    
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(".num_box").on("touchmove", function(e) {
	    e.preventDefault();
	    moveEndX = e.originalEvent.changedTouches[0].pageX,
	    moveEndY = e.originalEvent.changedTouches[0].pageY,
	    X = moveEndX - startX,
	    Y = moveEndY - startY;
	    var aaaa=$('.ddw2').val();
			if (aaaa == 1){
				return;	
			}
		if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
	        qpgd(1);
	    }
	    else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
	        qpgd(-1);
	    }
	});
})

// setInterval(play,2000);

var num_index = $('.num').length;
var num_default = -1;
function play(){
	qpgd(-1);
	num_default -=1;
	if(num_default <= -num_index){
		
	}
}


function qpgd(a){
	var z =$('.ddw').val();
     b = parseInt(z);
	c = $('.num').length;
if(a<0){
	if(-b==c-1){
		return;
	}
	b-=1;
	$('.ddw2').val(1);
	}else if(a>0){
		if(-b==0){
			return;
	}
	b+=1;
	$('.ddw2').val(1);
	}

if(-b>0){
	$('.head').css('display','none');
	$('.header').css('display','block');
}else{
	$('.head').css('display','block');
	$('.header').css('display','none');
}

if(-b == 1){
	setTimeout(function(){
		$('.server ul').removeClass('server_ul').addClass('server_ul_hover');
	},1000)

}else{
	$('.server ul').removeClass('server_ul_hover').addClass('server_ul');
}


var incr = 902;
if(-b == 2){
	function incre(){
		if(incr<1532){
			incr+=15;
			$('.case-top-right span').text(incr);
		}
	}
	setInterval(incre,40);
	setTimeout(function(){
		$('.case ul').removeClass('case_ul').addClass('case_ul_hover');
	},1000)
}else{
	incr = 800;
	$('.case ul').removeClass('case_ul_hover').addClass('case_ul');
}

if(-b == 3){
	setTimeout(function(){
		$('.teachshow').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.teachshow').removeClass('cont-right-in').addClass('cont-right-out');
}



if(-b == 4){
	setTimeout(function(){
		$('.news-list').addClass('news-list-in');
	},500)
}else{
		$('.news-list').removeClass('news-list-in');
}
if(-b == 5){
	setTimeout(function(){
		$('.pic-cont').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.pic-cont').removeClass('cont-right-in').addClass('cont-right-out');
}


if(-b == 6){
	setTimeout(function(){
		$('.cont-right').removeClass('cont-right-out').addClass('cont-right-in');
		$('.connect').removeClass('connect-out').addClass('connect-in')
		$('.address').removeClass('address-out').addClass('address-in')
		$('.email').removeClass('email-out').addClass('email-in')
	},500)
}else{
	$('.cont-right').removeClass('cont-right-in').addClass('cont-right-out');
	$('.connect').addClass('connect-out').removeClass('connect-in')
	$('.address').addClass('address-out').removeClass('address-in')
	$('.email').addClass('email-out').removeClass('email-in')
}



// if(-b==0){
// $('.num').eq(1).find('p').animate({'top':'0'},500);
// setTimeout(function(){
// $('.num').eq(0).find('p').animate({'top':'50%'},500);
// 	},1600);
// 	}else if(-b==1){
// $('.num').eq(0).find('p').animate({'top':'0'},500);
// $('.num').eq(2).find('p').animate({'top':'0'},500);
// setTimeout(function(){
// $('.num').eq(1).find('p').animate({'top':'50%'},500);
// 	},1600);
// 		}else if(-b==2){
// $('.num').eq(1).find('p').animate({'top':'0'},500);
// $('.num').eq(3).find('p').animate({'top':'0'},500);
// setTimeout(function(){
// $('.num').eq(2).find('p').animate({'top':'50%'},500);
// 	},1600);
// 		}else if(-b==3){
// $('.num').eq(2).find('p').animate({'top':'0'},500);
// $('.num').eq(4).find('p').animate({'top':'0'},500);
// setTimeout(function(){
// $('.num').eq(3).find('p').animate({'top':'50%'},500);
// 	},1600);
// 		}
// 		else if(-b==4){
// $('.num').eq(3).find('p').animate({'top':'0'},500);
// $('.num').eq(5).find('p').animate({'top':'0'},500);
// setTimeout(function(){
// $('.num').eq(4).find('p').animate({'top':'50%'},500);
// 	},1600);
// 		}
// 		else if(-b==5){
// $('.num').eq(4).find('p').animate({'top':'0'},500);
// setTimeout(function(){
// $('.num').eq(5).find('p').animate({'top':'50%'},500);
// 	},1600);
// 		}	
		








$('.ddw').val(b);
$('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
var single_hh = $(window).height();
click_hh =-single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
setTimeout(function(){
	$('.ddw2').val(0);
	},1400);
}
	// $('.fixed_r li').eq(0).addClass('on');
	$('.head li.nav_num1,.header li.nav_num1').click(function(){
		var b = 1;
		// $(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);
if(b>0){
	$('.head').css('display','none');
	$('.header').css('display','block');
}else{
	$('.head').css('display','block');
	$('.header').css('display','none');
}


if(b == 1){
	setTimeout(function(){
		$('.server ul').removeClass('server_ul').addClass('server_ul_hover');
	},1000)

}else{
	$('.server ul').removeClass('server_ul_hover').addClass('server_ul');
}


var incr = 902;
if(b == 2){
	function incre(){
		if(incr<1532){
			incr+=15;
			$('.case-top-right span').text(incr);
		}
	}
	setInterval(incre,40);
	setTimeout(function(){
		$('.case ul').removeClass('case_ul').addClass('case_ul_hover');
	},1000)
}else{
	incr = 800;
	$('.case ul').removeClass('case_ul_hover').addClass('case_ul');
}

if(b == 3){
	setTimeout(function(){
		$('.teachshow').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.teachshow').removeClass('cont-right-in').addClass('cont-right-out');
}



if(b == 4){
	setTimeout(function(){
		$('.news-list').addClass('news-list-in');
	},500)
}else{
		$('.news-list').removeClass('news-list-in');
}
if(b == 5){
	setTimeout(function(){
		$('.pic-cont').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.pic-cont').removeClass('cont-right-in').addClass('cont-right-out');
}


if(b == 6){
	setTimeout(function(){
		$('.cont-right').removeClass('cont-right-out').addClass('cont-right-in');
		$('.connect').removeClass('connect-out').addClass('connect-in')
		$('.address').removeClass('address-out').addClass('address-in')
		$('.email').removeClass('email-out').addClass('email-in')
	},500)
}else{
	$('.cont-right').removeClass('cont-right-in').addClass('cont-right-out');
	$('.connect').addClass('connect-out').removeClass('connect-in')
	$('.address').addClass('address-out').removeClass('address-in')
	$('.email').addClass('email-out').removeClass('email-in')
}




var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})


$('.head li.nav_num2,.header li.nav_num2').click(function(){
		var b = 2;
		// $(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);
if(b>0){
	$('.head').css('display','none');
	$('.header').css('display','block');
}else{
	$('.head').css('display','block');
	$('.header').css('display','none');
}


if(b == 1){
	setTimeout(function(){
		$('.server ul').removeClass('server_ul').addClass('server_ul_hover');
	},1000)

}else{
	$('.server ul').removeClass('server_ul_hover').addClass('server_ul');
}


var incr = 902;
if(b == 2){
	function incre(){
		if(incr<1532){
			incr+=15;
			$('.case-top-right span').text(incr);
		}
	}
	setInterval(incre,40);
	setTimeout(function(){
		$('.case ul').removeClass('case_ul').addClass('case_ul_hover');
	},1000)
}else{
	incr = 800;
	$('.case ul').removeClass('case_ul_hover').addClass('case_ul');
}

if(b == 3){
	setTimeout(function(){
		$('.teachshow').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.teachshow').removeClass('cont-right-in').addClass('cont-right-out');
}



if(b == 4){
	setTimeout(function(){
		$('.news-list').addClass('news-list-in');
	},500)
}else{
		$('.news-list').removeClass('news-list-in');
}
if(b == 5){
	setTimeout(function(){
		$('.pic-cont').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.pic-cont').removeClass('cont-right-in').addClass('cont-right-out');
}


if(b == 6){
	setTimeout(function(){
		$('.cont-right').removeClass('cont-right-out').addClass('cont-right-in');
		$('.connect').removeClass('connect-out').addClass('connect-in')
		$('.address').removeClass('address-out').addClass('address-in')
		$('.email').removeClass('email-out').addClass('email-in')
	},500)
}else{
	$('.cont-right').removeClass('cont-right-in').addClass('cont-right-out');
	$('.connect').addClass('connect-out').removeClass('connect-in')
	$('.address').addClass('address-out').removeClass('address-in')
	$('.email').addClass('email-out').removeClass('email-in')
}




var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})


$('.head li.nav_num3,.header li.nav_num3').click(function(){
		var b = 4;
		// $(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);
if(b>0){
	$('.head').css('display','none');
	$('.header').css('display','block');
}else{
	$('.head').css('display','block');
	$('.header').css('display','none');
}


if(b == 1){
	setTimeout(function(){
		$('.server ul').removeClass('server_ul').addClass('server_ul_hover');
	},1000)

}else{
	$('.server ul').removeClass('server_ul_hover').addClass('server_ul');
}


var incr = 902;
if(b == 2){
	function incre(){
		if(incr<1532){
			incr+=15;
			$('.case-top-right span').text(incr);
		}
	}
	setInterval(incre,40);
	setTimeout(function(){
		$('.case ul').removeClass('case_ul').addClass('case_ul_hover');
	},1000)
}else{
	incr = 800;
	$('.case ul').removeClass('case_ul_hover').addClass('case_ul');
}

if(b == 3){
	setTimeout(function(){
		$('.teachshow').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.teachshow').removeClass('cont-right-in').addClass('cont-right-out');
}



if(b == 4){
	setTimeout(function(){
		$('.news-list').addClass('news-list-in');
	},500)
}else{
		$('.news-list').removeClass('news-list-in');
}
if(b == 5){
	setTimeout(function(){
		$('.pic-cont').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.pic-cont').removeClass('cont-right-in').addClass('cont-right-out');
}


if(b == 6){
	setTimeout(function(){
		$('.cont-right').removeClass('cont-right-out').addClass('cont-right-in');
		$('.connect').removeClass('connect-out').addClass('connect-in')
		$('.address').removeClass('address-out').addClass('address-in')
		$('.email').removeClass('email-out').addClass('email-in')
	},500)
}else{
	$('.cont-right').removeClass('cont-right-in').addClass('cont-right-out');
	$('.connect').addClass('connect-out').removeClass('connect-in')
	$('.address').addClass('address-out').removeClass('address-in')
	$('.email').addClass('email-out').removeClass('email-in')
}




var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})

$('.head li.nav_num4,.header li.nav_num4').click(function(){
		var b = 3;
		// $(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);
if(b>0){
	$('.head').css('display','none');
	$('.header').css('display','block');
}else{
	$('.head').css('display','block');
	$('.header').css('display','none');
}

if(b == 1){
	setTimeout(function(){
		$('.server ul').removeClass('server_ul').addClass('server_ul_hover');
	},1000)

}else{
	$('.server ul').removeClass('server_ul_hover').addClass('server_ul');
}


var incr = 902;
if(b == 2){
	function incre(){
		if(incr<1532){
			incr+=15;
			$('.case-top-right span').text(incr);
		}
	}
	setInterval(incre,40);
	setTimeout(function(){
		$('.case ul').removeClass('case_ul').addClass('case_ul_hover');
	},1000)
}else{
	incr = 800;
	$('.case ul').removeClass('case_ul_hover').addClass('case_ul');
}

if(b == 3){
	setTimeout(function(){
		$('.teachshow').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.teachshow').removeClass('cont-right-in').addClass('cont-right-out');
}



if(b == 4){
	setTimeout(function(){
		$('.news-list').addClass('news-list-in');
	},500)
}else{
		$('.news-list').removeClass('news-list-in');
}
if(b == 5){
	setTimeout(function(){
		$('.pic-cont').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.pic-cont').removeClass('cont-right-in').addClass('cont-right-out');
}


if(b == 6){
	setTimeout(function(){
		$('.cont-right').removeClass('cont-right-out').addClass('cont-right-in');
		$('.connect').removeClass('connect-out').addClass('connect-in')
		$('.address').removeClass('address-out').addClass('address-in')
		$('.email').removeClass('email-out').addClass('email-in')
	},500)
}else{
	$('.cont-right').removeClass('cont-right-in').addClass('cont-right-out');
	$('.connect').addClass('connect-out').removeClass('connect-in')
	$('.address').addClass('address-out').removeClass('address-in')
	$('.email').addClass('email-out').removeClass('email-in')
}




var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})

$('.head li.nav_num5,.header li.nav_num5').click(function(){
		var b = 5;
		// $(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);

if(b>0){
	$('.head').css('display','none');
	$('.header').css('display','block');
}else{
	$('.head').css('display','block');
	$('.header').css('display','none');
}

if(b == 1){
	setTimeout(function(){
		$('.server ul').removeClass('server_ul').addClass('server_ul_hover');
	},1000)

}else{
	$('.server ul').removeClass('server_ul_hover').addClass('server_ul');
}


var incr = 902;
if(b == 2){
	function incre(){
		if(incr<1532){
			incr+=15;
			$('.case-top-right span').text(incr);
		}
	}
	setInterval(incre,40);
	setTimeout(function(){
		$('.case ul').removeClass('case_ul').addClass('case_ul_hover');
	},1000)
}else{
	incr = 800;
	$('.case ul').removeClass('case_ul_hover').addClass('case_ul');
}

if(b == 3){
	setTimeout(function(){
		$('.teachshow').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.teachshow').removeClass('cont-right-in').addClass('cont-right-out');
}



if(b == 4){
	setTimeout(function(){
		$('.news-list').addClass('news-list-in');
	},500)
}else{
		$('.news-list').removeClass('news-list-in');
}
if(b == 5){
	setTimeout(function(){
		$('.pic-cont').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.pic-cont').removeClass('cont-right-in').addClass('cont-right-out');
}


if(b == 6){
	setTimeout(function(){
		$('.cont-right').removeClass('cont-right-out').addClass('cont-right-in');
		$('.connect').removeClass('connect-out').addClass('connect-in')
		$('.address').removeClass('address-out').addClass('address-in')
		$('.email').removeClass('email-out').addClass('email-in')
	},500)
}else{
	$('.cont-right').removeClass('cont-right-in').addClass('cont-right-out');
	$('.connect').addClass('connect-out').removeClass('connect-in')
	$('.address').addClass('address-out').removeClass('address-in')
	$('.email').addClass('email-out').removeClass('email-in')
}




var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})

$('.head li.nav_num6,.header li.nav_num6').click(function(){
		var b = 6;
		// $(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);

if(b>0){
	$('.head').css('display','none');
	$('.header').css('display','block');
}else{
	$('.head').css('display','block');
	$('.header').css('display','none');
}

if(b == 1){
	setTimeout(function(){
		$('.server ul').removeClass('server_ul').addClass('server_ul_hover');
	},1000)

}else{
	$('.server ul').removeClass('server_ul_hover').addClass('server_ul');
}


var incr = 902;
if(b == 2){
	function incre(){
		if(incr<1532){
			incr+=15;
			$('.case-top-right span').text(incr);
		}
	}
	setInterval(incre,40);
	setTimeout(function(){
		$('.case ul').removeClass('case_ul').addClass('case_ul_hover');
	},1000)
}else{
	incr = 800;
	$('.case ul').removeClass('case_ul_hover').addClass('case_ul');
}

if(b == 3){
	setTimeout(function(){
		$('.teachshow').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.teachshow').removeClass('cont-right-in').addClass('cont-right-out');
}



if(b == 4){
	setTimeout(function(){
		$('.news-list').addClass('news-list-in');
	},500)
}else{
		$('.news-list').removeClass('news-list-in');
}
if(b == 5){
	setTimeout(function(){
		$('.pic-cont').removeClass('cont-right-out').addClass('cont-right-in');
	},500)
}else{
		$('.pic-cont').removeClass('cont-right-in').addClass('cont-right-out');
}


if(b == 6){
	setTimeout(function(){
		$('.cont-right').removeClass('cont-right-out').addClass('cont-right-in');
		$('.connect').removeClass('connect-out').addClass('connect-in')
		$('.address').removeClass('address-out').addClass('address-in')
		$('.email').removeClass('email-out').addClass('email-in')
	},500)
}else{
	$('.cont-right').removeClass('cont-right-in').addClass('cont-right-out');
	$('.connect').addClass('connect-out').removeClass('connect-in')
	$('.address').addClass('address-out').removeClass('address-in')
	$('.email').addClass('email-out').removeClass('email-in')
}




var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})

















function quanp(){
var single_hh = $(window).height();
var single_ww = $(window).width();
$('.num').height(single_hh);
// $('.num li').width(single_ww);
}
quanp();
$(window).resize(function(){
	if (typeof indexSlides != 'undefined' && indexSlides.reformat) 
		indexSlides.reformat();
		quanp();
});














