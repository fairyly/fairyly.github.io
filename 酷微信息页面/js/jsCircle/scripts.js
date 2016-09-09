function UI() {

	var btn = new ButtonDecorator();

	var chx = new CheckboxDecorator();

	var slc = new SelectDecorator('select');

}

$(function() {

	UI();

	$('#case-study3 .detail-slider .bg .slides').cycle({
		speed: 600,
		slides: '> figure',
		pager: '> .handles',
		log: false,
		swipe:true,

	});

	$('#case-study2 .detail-slider .slides').cycle({
		speed: 600,
		slides: '> div',
		pager: '> .handles',
		log: false,
		swipe:true


	});

	$('#home-slider').cycle({
		speed:600,
		slides: '> div',
		pager: '#page-navigation',
		log: false,
		swipe:true
	})


	// fix Cycle2 slider bullet to change at same time when animation begin (on click and auto play)
	// $('.handles span').on('click', function(e) {
	// 	$(e.target).siblings().removeClass('cycle-pager-active selected');
	// 	$(e.target).addClass('selected');
	// })
	// $('#case-study3 .detail-slider .bg .slides, #case-study2 .detail-slider .slides').on( 'cycle-before', function() {
	// 	var cur = $(this).find('.handles span.cycle-pager-active').index();
	// 	var next = $(this).find('.handles span.cycle-pager-active').next();
	// 	if (cur == 2) {
	// 		next = $(this).find('.handles span:first-child');
	// 	};
	// 	$(this).find('.handles span.cycle-pager-active').removeClass('cycle-pager-active selected');
	// 	next.addClass('selected');
	// })
	// Early bird wireframe tabs
	// var tb1 = new Tabber('.tabbed-box', {
	// 	changeTime: 300,
	// 	showTime: 500,
	// 	hashNavigation: false
	// });

var tb2 = new Tabber('#tab1', {
	changeTime: 300,
	showTime: 500,
	hashNavigation: false,
	onBeforeChange: function() {},
	onChange: function() {}
});

var tb3 = new Tabber('#tab2', {
	changeTime: 300,
	showTime: 500,
	hashNavigation: false,
	onBeforeChange: function() {},
	onChange: function() {}
});

var contactTabs = new Tabber('#contact #main .cnt-tabs', {
	changedTime: 300,
	showTime: 800,
	hashNavigation: false
})

var acf = new AjaxContactForm('.contact-form', {
	ajaxUrl : '/ajax/contact-form',
	errorSelector : '.cf-error',
	successSelector : '.cf-success',
	msgFadeTime : 500,
	formFadeTime : 500,
	onSuccess : function(response) {},
	onFailure : function(response) {},
	onResponse : function(response) {}
});

	// lastTitle();

	if ( $('#case-study5').length > 0 ) {

		animationElements();
		cubeMove();
		//tooltip();
		$(document).on('click touchstart', '#features_nav ul li a', function(e) {
			e.preventDefault();
		});
	}

});

$(window).load(function() {
	topNav();
});

function drags(elem) {
	var slider = elem.parent().find('.handle-slider');
	var steps = slider.find('.slides').children().length;

	if (steps == 0) {
		steps = slider.find('.slides > .slide').length;
	};
	var handleSlider = new Slider('.handle-slider', {
		holdTime: 8000,
		handles: false,
		animateTime: 300
	});

	elem.noUiSlider({
		range: [0, steps-1],
		start: 0,
		handles: 1,
		slide: function() {
			var ind = Math.round(elem.val());
			handleSlider.moveToSlide(ind);
		}
	})
}
/* 代码整理：懒人之家 www.lanrenzhijia.com */
function switchIMG(elem) {
	var x, y, H;

	var oldIMG = elem.find('.second-image');
	var newIMG = elem.find('.first-image');

	var areaH = oldIMG.height();
	var areaW = oldIMG.width();
	var areaL = oldIMG.offset().left;
	var areaT = oldIMG.offset().top;

	var mouseIn = areaT - 15;
	var mouseOut = areaT+areaH + 100;

	$(document).on('mousemove', function(e){

		if (e.pageY > mouseIn && e.pageY < mouseOut) {
			H = areaH - (e.pageY - areaT);

			if ((areaH/2) > H) {
				oldIMG.removeClass('changed');
			} else {
				oldIMG.addClass('changed');
			}
			newIMG.css({
				height: H
			})
		} else {
			oldIMG.addClass('changed');
		};
	})

	$(document).on('touchmove', function(e) {
		var x = event.touches[0].pageX;
		var y = event.touches[0].pageY;
		var H = areaH - (y - areaT);

		if ((x > areaL && x < (areaL + areaW)) && (y > areaT-15 && y < (areaT + areaH - 15))) {
			e.preventDefault();
			newIMG.css({
				height: H
			})
			if ((areaH/2) > H) {
				oldIMG.removeClass('changed');
			} else {
				oldIMG.addClass('changed');
			}
		} else {
			return true;
		};
	})
}

function Animator(startingPointEl, targetEl, removeClass, addClass, transitionClass, offset, action) {

		$(document).on(action, function() {
			var target = $(startingPointEl);

			if (startingPointEl == targetEl) {
				var element = $(targetEl);
			} else {
				var element = $(target).find(targetEl);
			}

			var inViewPort = $.inviewport(target, {
				threshold: offset, container : window
			})

			element.addClass(transitionClass);

			// if (targetEl == "#phase3-mails-img") {console.log(inViewPort)};


			if (inViewPort && ! $(element).hasClass(addClass)) {
				$(element).addClass(addClass);
				$(element).removeClass(removeClass);

			} else if (!inViewPort  && $(element).hasClass(addClass) || !inViewPort && !$(element).hasClass(removeClass)) {
				$(element).removeClass(addClass);
				$(element).addClass(removeClass);
			}
		})
}

function buildSideNav() {
	var title;
	var rows = $('body.cases-studies').find('.phase-row');
	var phases = rows.length;
	var counter = 0;
	var html = '<div id="page-navigation">';
	var top = $('#section-header');
	var y = $(window).scrollTop();

	rows.each( function() {
		if (counter == 0 ) {
			html = html + '<a href="#!section-header" class="top-btn"></a>';
		};
		counter++;
		title = $(this).data('title');
		html = html + '<a href="#!'+ $(this).attr("id") +'"><span>' + title + '</span></a>';
	})
	html = html + '</div>';

	$('body').prepend(html);

	$('#page-navigation').css({
		marginTop: -$('#page-navigation').height()/2
	})

	$('html, body').animate({ scrollTop: y+1}, 1);

	if ( y > top.next().offset().top) {
		$('.top-btn').animate({
			opacity: 1
		}, 500)
	};

	$(document).on('scroll', function(e) {
		var wH = $(window).innerHeight()/2;
		var target = $('.phase-row');
		var nav = $('#page-navigation');
		var link = $('#page-navigation').find('a');
		var headerH = top.height();
		var footerPush = $('#site-wrapper #footer-push');
		var footerT = footerPush.length ? footerPush.offset().top : 0;
		var id, elH, elT;

		y = $(window).scrollTop();

		if (  (y + wH) > top.next().offset().top && $('.top-btn').css('opacity') == '0' ) {
			$('.top-btn').animate({opacity: 1}, 100);
		}

		target.each( function() {
			elT = $(this).offset().top;
			elH = $(this).height() + elT;

			if ((headerH-wH) > y) {
				link.removeClass('active');
				nav.removeClass();
				nav.addClass('header');

				if ( $('.top-btn').css('opacity') == '1' ) {
					$('.top-btn').animate({opacity: 0}, 100);
				};
			} else if (y > (footerT-wH)) {
				link.removeClass('active');
				nav.removeClass();
				nav.addClass('footer')
			} else if ((elT-wH) < y && y < (elH-wH)) {
				id = $(this).attr('id');
				link.removeClass('active');
				nav.removeClass();
				nav.addClass(id);
				nav.find('a[href="#!'+ id +'"]').addClass('active');
			}
		})
	});

	$('#page-navigation a, #back-to-top').on('click', function(e) {
		var target, top;
		var href = $(e.target).closest('a').attr('href');

		href = '#' + href.replace('#!','');
		top = $('body').find(href).offset().top;
		$('html, body').stop().animate({ scrollTop: top + 'px'}, 2000);
	});
}

function lastTitle() {
	var disableScroll = false;
	var titleT = $('.last-title h1').offset().top;
	var titleH2 = ($('.last-title h1').height())/2;
	var rowHeight = $('.last-title').height()/2;
	var top = $('.last-title').offset().top;
	var mid = $(window).innerHeight()/2;
	var view = $(window).innerHeight();
	var middle = rowHeight + top;
	var scroll = rowHeight;
	var y;
	var scrollTop = 0;

	$(document).on('scroll',function(e) {

		if (disableScroll) {
			return false;
		};

		y = $(window).scrollTop();

		if (scrollTop > y) {
			return true;
		};

		// console.log('14395');
		scroll = middle - mid;
		if ( (y+view) > titleT && y < scroll) {
			disableScroll = true;

			scrollTop = y;
			e.preventDefault();
			console.log('animateStart');
			$('html').animate({ scrollTop:  scroll + 'px' }, function() {
				// console.log('animateCallback');
				disableScroll = false;
			})
			// console.log('title-a vliza');
		}


		// y = $(window).scrollTop();
		// if (top < y && y < middle) {
		// 	// e.preventDefault;
		// 	scroll = middle - mid;
		// 	$('html, body').animate({ scrollTop:  scroll + 'px' })
		// 	// console.log('vleze');
		// }
		// } else {
		// 	// console.log('izleze');
		// 	return true;
		// };
		// if ( top < y < titleT ) {
		// 	e.preventDefault;
		// 	// console.log(y);
		// 	scroll = y + scroll;
		// 	$('html, body').animate({ scrollTop: scroll })
		// } else {
		// 	$('body').on('scroll', function() {
		// 		return true;
		// 	})
		// };
	})
}

function topNav() {
	var y;
	var nav = $('.top-nav');
	nav.show();
	if ( Browser.isMobile() ) {
		setTimeout(function() {
			y = window.scrollY;

			if (y > 60) {
				nav.addClass('animate');
			};

			$(document).on('scroll', function() {
				y = $(window).scrollTop();

				if (y > 60) {
					nav.addClass('animate');
				} else {
					nav.removeClass('animate');
				};
			})

		}, 2);
	} else {
		y = $(document).scrollTop();
	}

	if (y > 60) {
		nav.addClass('animate');
	};

	$(document).on('scroll', function() {
		y = $(window).scrollTop();

		if (y > 60) {
			nav.addClass('animate');
		} else {
			nav.removeClass('animate');
		};
	})
}

//AddAction animations
function animationElements() {

	Animator('#hosting', '#btn', '', 'hatch', '', -100, 'scroll');

	Animator('#wireframing', '.colors img', '', 'animate', '', -100, 'scroll');

	Animator('#iphones', '#text', 'fadeOut-withMotion leftToRight', 'fadeIn-withMotion', '', -350, 'scroll');

	Animator('#iphones', '#iphone-account', 'fadeOut-withMotion rightToleft', 'fadeIn-withMotion', '', -350, 'scroll');

	Animator('#details', '#iphone-creat', 'fadeOut-withMotion leftToRight', 'fadeIn-withMotion', '', -350, 'scroll');

	Animator('#details', '#builder-txt', 'fadeOut-withMotion rightToleft', 'fadeIn-withMotion', '', -350, 'scroll');

	Animator('#detailsTwo', '#profile-txt', 'fadeOut-withMotion leftToRight', 'fadeIn-withMotion', '', -350, 'scroll');

	Animator('#detailsTwo', '#iphone-profile', 'fadeOut-withMotion rightToleft', 'fadeIn-withMotion', '', -350, 'scroll');

	Animator('#detailsLast', '#iphone-last', 'fadeOut-withMotion leftToRight', 'fadeIn-withMotion', '', -350, 'scroll');

	Animator('#detailsLast', '#features-txt', 'fadeOut-withMotion rightToleft', 'fadeIn-withMotion', '', -350, 'scroll');

	Animator('#testimonials', '#imgS', 'changeF', 'changeS', '', -400, 'scroll');

	Animator('#testimonials', '#imgF', 'changeS', 'changeF', '', -400, 'scroll');

	$(document).on('scroll', function() {

		var y = $(document).scrollTop();

		if( y > 8150 ) {
			$('.show').fadeIn(2000);
		}
	});
};

function cubeMove() {

	setTimeout(function() {

		$(document).on('scroll', function() {
			var y = window.scrollY;
			var cube = $('#cube');
			if (y > 3050 & y<3300) {
				cube
				.removeClass('fadeOut')
				.addClass('hatch');
			}
			else {
				cube.removeClass('hatch');
				cube.addClass('fadeOut');
			}
		});

	}, 2);
};

function tooltip() {
	$('#features > .shell > .half > span').on('mouseenter', function() {
		$(this).find('.tt').stop(true,true).fadeIn(200);
	});

	$('#details > .shell ').on('mouseenter', function() {
		$(this).find('.tt').stop(true,true).fadeIn(200);
	});
}

// resizing function for brown divs
function relativeMovment(defPageContainer, movableElement, elementProperty, aspectRatio) {


		// calcolate div pozition on pageload
		var initDisplatWidth = $(window).width()
		var defPageContainerWidth = $(defPageContainer).width();
		var initPosition = parseInt($(movableElement).css(elementProperty),10);
		var newPosition = Math.floor((defPageContainerWidth - initDisplatWidth)/aspectRatio);
		$(movableElement).css(elementProperty, initPosition + newPosition);
		initPosition = initPosition + newPosition;

		$(window).bind('resize', function()
		{
			resizeMe(initDisplatWidth, initPosition, movableElement, elementProperty);

		}).trigger('resize');


		function resizeMe() {

			var currentdisplayWidth = $(window).width();
			var calcPosition = Math.floor(Math.abs(initDisplatWidth - currentdisplayWidth)/aspectRatio);

			if (initDisplatWidth<currentdisplayWidth) {
				var newPosition = initPosition - calcPosition;

			}
			if (initDisplatWidth>currentdisplayWidth) {
				var newPosition = initPosition + calcPosition ;

			}

			$(movableElement).css(elementProperty, newPosition);

		}
};
/* 代码整理：懒人之家 www.lanrenzhijia.com */