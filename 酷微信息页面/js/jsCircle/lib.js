var Browser = {

	isSafari: function() {
		var chrome = /chrome/i.test(navigator.userAgent);
		var safari = /safari/i.test(navigator.userAgent);
		return safari && ! chrome ? true : false;
	},

	isIE: function( version ) {
		var ua = navigator.userAgent;
		// var ua = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)'; // for tests

		if ( ! /MSIE (\d+)\.\d+/.test(ua) )
			return false;

		if ( ! version )
			return true;

		var ieversion = new Number(RegExp.$1);
		
		return version == ieversion;
	},

	isMac: function() {
		return (navigator.appVersion.indexOf("Mac")!=-1) ? true : false;
	},

	isMobile: function() {
		return ( 'ontouchstart' in document.documentElement ? true : false );
	}
}

/*
*
* IE Warning
* 
* Show warning window for IE 6-8 for old and not supported browser
* 
*/
$(function() {
	if ( Browser.isIE(6) || Browser.isIE(7) || Browser.isIE(8) ) {
		var 
		iePopup  = '<div style="position:fixed; z-index:2147483646; top:50px; right:50px; width:300px; padding:20px; background:rgb(253, 160, 160); font-family:sans-serif; line-height:26px;">';
		iePopup += '<h1 style="font-size:20px; font-weight:bold; text-decoration:underline">Your browser is old!</h1>';
		iePopup += 'This version of Internet Explorer is old and not supported.<br>';
		iePopup += 'Please download <a href="http://abetterbrowser.org/" style="color:#000; text-decoration:underline">a better browser</a>.';
		iePopup += '</div>';

		$('body').append(iePopup);
	}
});



/* 代码整理：懒人之家 www.lanrenzhijia.com */

/*
*
* Swipe Detector
*
*
	* 
	* 	JS:
	* 

		var swipe = new SwipeDetector('.slider', {
			thresholdX: 20,
			thresholdY: 20,
			swipeLeft: function() {},
			swipeRight: function() {},
			swipeUp: function() {},
			swipeDown: function() {},
			preventDefaultEvents: true
		});
*
*/
function SwipeDetector( selector, options ) {

	if ( typeof selector === 'undefined' || ! $(selector).length )
		return;

	var defaults = {
		thresholdX: 20,
		thresholdY: 20,
		swipeLeft: function() {},
		swipeRight: function() {},
		swipeUp: function() {},
		swipeDown: function() {},
		preventDefaultEvents: true
	},
	_this = this;

	var options = $.extend(defaults, options),
	element = $(selector)[0],
	startX,
	startY,
	isMoving = false;

	function cancelTouch() {
		element.removeEventListener('touchmove', onTouchMove);
		startX = null;
		isMoving = false;
	};

	function onTouchMove(e) {

		if ( options.preventDefaultEvents )
			e.preventDefault();

		if( ! isMoving ) 
			return;

		var x = e.touches[0].pageX;
		var y = e.touches[0].pageY;
		var dx = startX - x;
		var dy = startY - y;
		
		if ( Math.abs(dx) >= options.thresholdX ) {
			cancelTouch();
			dx > 0 ? options.swipeLeft() : options.swipeRight();
		}
		else if ( Math.abs(dy) >= options.thresholdY ) {
			cancelTouch();
			dy > 0 ? options.swipeDown() : options.swipeUp();
		}
	};

	function onTouchStart(e) {

		if (e.touches.length !== 1)
			return;

		startX = e.touches[0].pageX;
		startY = e.touches[0].pageY;
		isMoving = true;
		element.addEventListener('touchmove', onTouchMove, false);
	};

	if ('ontouchstart' in document.documentElement) {
		element.addEventListener('touchstart', onTouchStart, false);
	}
};





/*
*
* Button Decorator
*
*
	* 
	* 	JS:
	* 

		var btn = new ButtonDecorator('input[type=submit]');
*
*/
function ButtonDecorator( selector ) {

	if ( ! selector )
		selector = 'input[type=submit]';

	$(selector).each(function() {
		
		$(this).wrap('<span class="btn btn-input"></span>');
		$(this).parent().on('mouseenter', function() {
			$(this).addClass('hover');
		}).on('mouseleave', function() {
			$(this).removeClass('hover');
		});

	});
};





/*
*
* Checkbox Decorator
*
*
	* 
	* 	HTML:
	*

		<input type="radio" name="aaa" id="1"> <label for="1">One</label>
		<input type="radio" name="aaa" id="2"> <label for="2">Two</label>
		<input type="radio" name="aaa" id="3"> <label for="3">Three</label>

		<input type="checkbox" name="aaa" id="1"> <label for="1">One</label>
		<input type="checkbox" name="aaa" id="2"> <label for="2">Two</label>
		<input type="checkbox" name="aaa" id="3"> <label for="3">Three</label>

	* 
	* 	JS:
	* 

		var chx = new CheckboxDecorator('input[type=checkbox], input[type=radio]');
*
*/
function CheckboxDecorator( selector ) {

	if ( ! selector )
		selector = 'input[type=checkbox], input[type=radio]';

	this.selector = selector;

	var _this = this,
	el, id, cls, label, 
	elements = $(this.selector);

	elements.hide();
	elements.each(function(k,e) {

		el = $(this),
		id = el.prop('id'),
		cls = el.attr('type') == 'radio' ? 'radio' : 'checkbox',
		label = $('label[for="'+id+'"]');

		if ( ! id || ! label.length )
			return;

		label.addClass(cls);
		
	});

	$(document).on('change', _this.selector, function() {
		_this.checkLabels();
	});

	_this.checkLabels();
};

CheckboxDecorator.prototype.checkLabels = function() {

	$(this.selector).each(function() {
		var el = $(this);
		var id = el.prop('id');

		if ( el.is(':checked') )
			$('label[for="'+id+'"]').addClass('checked');
		else
			$('label[for="'+id+'"]').removeClass('checked');
	});
};





/*
*
* Select Decorator
*
*
	* 
	* 	JS:
	* 

		var slc = new SelectDecorator('.selectDecorator');
*
*/
function SelectDecorator( selector ) {

	var _this = this;

	_this.s = {
		wrapper : 'sd-wrapper',
		select 	: 'sd-select',
		label 	: 'sd-label',
		options : 'sd-options'
	};

	_this.sc = {
		wrapper : '.'+_this.s.wrapper,
		select 	: '.'+_this.s.select,
		label 	: '.'+_this.s.label,
		options : '.'+_this.s.options
	};

	_this.isMobile = Browser.isMobile();

	$(selector).each(function() {
		_this.parseElements($(this));
	});

	_this.registerEvents();
};

SelectDecorator.prototype.close = function( wrapper ) {

	var _this = this;

	wrapper = typeof wrapper === 'undefined' ? $(_this.sc.wrapper) : wrapper;
	wrapper.each(function() {
		var w = $(this);
		$(this).find(_this.sc.options).stop(true,true).slideUp(100, function() {
			w.removeClass('open');	
		});
	});
};

SelectDecorator.prototype.open = function( wrapper ) {

	var _this = this;

	wrapper = typeof wrapper === 'undefined' ? $(_this.sc.wrapper) : wrapper;
	wrapper.each(function() {
		$(this).find(_this.sc.options).stop(true,true).slideDown(100);
		$(this).addClass('open');
	});
};

SelectDecorator.prototype.reload = function( wrapper ) {

	var _this = this;

	wrapper = typeof wrapper === 'undefined' ? $(_this.sc.wrapper) : wrapper;
	wrapper.each(function() {
		var html = [],
		opts = $(this).find('select option'),
		selected = opts.filter(':selected')
		select = $(this).find(_this.sc.options)
		label = $(this).find(_this.sc.label);

		selected = selected.length ? selected : opts.filter(':first');
		opts.each(function() { html.push( '<li style="display:block">'+ $(this).text() +'</li>' ); });
		label.html(selected.text());
		select.html(html.join(''));
	});
};

SelectDecorator.prototype.parseElements = function( el ) {

	var wrapper = null,
	select = null,
	label = null,
	options = null,
	height = el.outerHeight()+'px',
	opts = el.find('option'),
	selected = opts.filter(':selected'),
	html = ['<span class="'+ this.s.label +'"></span>', '<ul class="'+ this.s.options +'">'],
	css = {
		position 		: 'relative',
		display			: 'inline-block', 
		verticalAlign	: 'middle', 
		width			: el.outerWidth(), 
		height			: el.outerHeight(),
		marginTop		: this.o(el.css('marginTop')),
		marginRight		: this.o(el.css('marginRight')),
		marginBottom	: this.o(el.css('marginBottom')),
		marginLeft		: this.o(el.css('marginLeft'))
	},
	cssBlock = {
		position :'relative', 
		display :'block', 
		width 	:'100%', 
		height 	:'100%'
	},
	sdWrapper = $('<div></div>').addClass('sd ' + this.s.wrapper).css(css),
	sd = $('<div></div>').addClass(this.s.select).css(cssBlock);

	el.css({position:'absolute', top:0, margin:0});
	el.css( ( this.isMobile ? {opacity:0,zIndex:2} : {display:'none'} ) );
	el.wrap(sdWrapper);

	sd.insertAfter(el);

	wrapper = el.parent();
	select = wrapper.find(this.sc.select);

	selected = selected.length ? selected : opts.filter(':first');
	opts.each(function() { html.push( '<li style="display:block">'+ $(this).text() +'</li>' ); });
	html.push('</ul>');

	select.html(html.join(''));

	label = select.find(this.sc.label);
	label.css(cssBlock).css({lineHeight:height}).html(selected.text());

	options = select.find('ul');
	options.hide();
	options.css({position:'absolute', top:height, width:'100%'});

	el.data('sd', this);
};

SelectDecorator.prototype.registerEvents = function() {

	var _this = this;

	if ( _this.isMobile ) {
		/*
		* 	Select options
		*/
		$(document).off('change.sdSelectOptionsMobile');
		$(document).on('change.sdSelectOptionsMobile', _this.sc.wrapper+' > select', function() {
			var select = $(this);
			var options = select.find('option');
			var selected = options.filter(':selected');
			var label = select.next().find(_this.sc.label);

			label.html(selected.text());
		});
	}
	else {
		/*
		* 	Toggle options
		*/
		$(document).off('click.sdToggleOptions');
		$(document).on('click.sdToggleOptions', _this.sc.label, function() {
			var el = $(this);
			var options = $(this).siblings('ul');
			var wrapper = options.closest(_this.sc.wrapper);

			if ( options.is(':visible') ) {
				_this.close(wrapper);
			}
			else {
				_this.open(wrapper);
			}
		});

		/*
		* 	Select options
		*/
		$(document).off('click.sdSelectOptions');
		$(document).on('click.sdSelectOptions', _this.sc.options+' > li', function() {
			var el = $(this);
			var label = el.parent().prev();
			var options = el.parent().children();
			var index = options.index(el);
			var wrapper = label.closest(_this.sc.wrapper);
			var select = wrapper.find('select');

			label.html(el.text());

			select.find('option:selected').prop('selected',false);
			select.find('option').eq(index).prop('selected',true);
			select.trigger('change');
			_this.close(wrapper);
		});

		/*
		* 	Close options on click outside
		*/
		$(document).off('click.sdCLoseOptions');
		$(document).on('click.sdCLoseOptions', null, function(e) {

			if ( ! $(_this.sc.wrapper).length )
				return;

			var el = $(e.target).closest(_this.sc.wrapper);
			var sds = $(_this.sc.wrapper);
			
			if ( el.length ) {
				el.attr('data-sd-target', 1);
				sds = sds.filter(':not([data-sd-target])');
			}

			sds.each(function() {
				var wrapper = $(this).closest(_this.sc.wrapper);
				$(this).find('> select').data('sd').close(wrapper);
			});

			el.removeAttr('data-sd-target');

		});
	}
};

SelectDecorator.prototype.o = function( val ) {

	return isNaN(parseInt(val)) ? 0 : parseInt(val);
};





/*
*
* Popup
* 
*
	* 
	* 	CSS:
	*

		.popup_bg {
			position: fixed;
			z-index: 10;
			width: 100%;
			height: 100%;
			background: #000;
			.opacity (0);
			.transition(0.3s, ease-in-out);

			&.animate {
				.opacity (0.3);
			}
		}
		.popup {
			position: fixed;
			top: 0;
			left: 50%;
			z-index: 2000;
			width: 796px;
			min-height: 500px;
			margin-left: -398px;
			padding: 30px 50px;
			background: #fff;
			.radius (10px);
			.opacity (0);
			.transition(0.5s, ease-in-out);

			&.animate {
				.opacity (1);
			}
		}

	* 
	* 	JS:
	* 

		var pp = new Popup({
			popupBgClass: 'popup_bg',
			popupClass: 'popup',
			hasClose: true,
			showSpeed: 200,
			hideSpeed: 200,
			removeAfter: 800,
			onBeforeShow: function() {},
			onShow: function() {}
		});
		pp.show('test');
* 
*/
function Popup( options ) {

	var settings = {
		popupBgClass: 'popup_bg',
		popupClass: 'popup',
		hasClose: true,
		showSpeed: 200,
		hideSpeed: 200,
		removeAfter: 800,
		onBeforeShow: function() {},
		onShow: function() {}
	};

	options = typeof options == 'undefined' ? {} : options;

	this.options 	= $.extend(settings, options);
	this.bothEls 	= '.'+ this.options.popupBgClass +', .'+ this.options.popupClass;
	this.window 	= { w: $(window).width(), h: $(window).height() };
	this.popupSize 	= { w:0, h:0 };

	this.registerClose();
}

Popup.prototype.registerClose = function() {

	var _this = this;

	$(document).on('click', _this.bothEls+' .close', function() {

		var popup = $('body').find(_this.bothEls);
		popup.each(function(){
			$(this).removeClass('animate');
		});

		setTimeout(function() {
			popup.remove();
		}, _this.options.removeAfter);

	});
};

Popup.prototype.showOnScreen = function() {
	
	$('body').find(this.bothEls).each(function(){
		$(this).addClass('animate');
	});
};

Popup.prototype.calculatePopupTop = function() {
	
	var pH = this.popupSize.h;
	var wH = this.window.h;
	
	var top = ((wH - pH) / 2 - 30); // no idea why -30 but it centers better

	return top;
};

Popup.prototype.show = function( content ) {

	var _this = this;

	var html = '';
	html += '<div class="'+ this.options.popupBgClass +'"></div>';
	html += '<div class="'+ this.options.popupClass +'">';
	if ( this.options.hasClose )
		html += 	'<span class="close">&times;</span>';
	html += 	content;
	html += '</div>';

	var popup = $(html);

	$('body').prepend(popup);

	var popupDOM = $('body').find('.popup');
	this.popupSize = {
		w: popupDOM.width(),
		h: popupDOM.height()
	};

	var popupTop = _this.calculatePopupTop();
	var popupCss = popupTop > 0 ? {
		top: popupTop
	} : {
		position: 'absolute'
	};

	_this.options.onBeforeShow(_this);
	setTimeout(function() {
		popupDOM.css(popupCss);
		_this.showOnScreen();
		_this.options.onShow(_this);
	},100);
};

Popup.prototype.hide = function() {

	$('.'+ this.options.popupBgClass).click();
};

Popup.prototype.close = function() {

	this.hide();
};





/*
*
* Slider
*
* IMPORTANT: The Slider class requires SwipeDetector() in order to add touch funtionality
* 
*
	*
	* 	HTML:
	*

		<div class="shell slider">
			<div class="slides">
				<article></article>
				<article></article>
				<article></article>
			</div>
		</div>

	* 
	* 	CSS:
	* 

		.slider {
			width: ?;
			height: ?;
		}

	* 
	* 	JS:
	* 
	* 	[selector], [number of slides in one view], [time to hold on a view]
	*

		var slider = new Slider('.slider', {
			holdTime: 5000,
			animateTime: 250,
			itemsOnSlide: 1,
			handles: true,
			handlesOutside: false,
			infinite: false,
			autostart: true,
			onBeforeSlide: function() {},
			onAfterSlide: function() {}
		});
*
*/
function Slider( selector, options ) {

	if ( typeof selector === 'undefined' || ! $(selector).length )
		return;
	
	var defaults = {
		holdTime: 5000,
		animateTime: 250,
		itemsOnSlide: 1,
		handles: true,
		handlesOutside: false,
		infinite: false,
		autostart: true,
		onBeforeSlide: function() {},
		onAfterSlide: function() {}
	},
	_this = this;

	this.options 		= $.extend(defaults, options);
	this.selector 		= selector;

	this.callbacks 		= [];
	this.timer;
	this.disableHandles;
	this.width;
	this.handles;
	this.slider 		= $(selector); 
	this.holder 		= this.slider.children(':first');
	this.slidesCount 	= Math.ceil(this.items().length/this.options.itemsOnSlide);
	this.width 			= this.slider.outerWidth(true);
	this.height 		= this.slider.outerHeight(true);
	this.currentSlide 	= 0;

	if ( this.getSlidesCount() < 2 )
		return;

	this.registerSlideCallback(function() { _this.appendAnimatedSlide(); });
	this.registerSlideCallback(function() { _this.disableHandles = false; });
	this.registerSlideCallback(function() {
		if ( _this.options.handles ) 
			_this.handles.children().eq(_this.currentSlide).addClass('active').siblings().removeClass('active')
	});
	this.registerSlideCallback(function() { _this.options.onAfterSlide(_this); });

	this.slideCallbacks();

	this.css();
	this.setSlidesIndexes();
	this.buildHandles();
	this.resizeSlides(true);
	this.mobileEvents();

	if ( this.options.autostart )
		this.moveToSlide();

	$(window).resize(function() { _this.resizeSlides() });

	this.slider.data('slider', this);
};

Slider.prototype.items = function() {

	return this.holder.children();
};

Slider.prototype.getSlidesCount = function() {

	return ( this.slidesCount = Math.ceil(this.items().length/this.options.itemsOnSlide) );
};

Slider.prototype.slideCallbacks = function() {

	var _this = this,
	callbacks = this.callbacks,
	transEnd = ['transitionend', 'mozTransitionEnd', 'webkitTransitionEnd', 'msTransitionEnd', 'oTransitionEnd'];

	for ( t in transEnd ) {
		this.holder[0].addEventListener( transEnd[t], function() { 
			_this.invokeSlideCallback();
		}, false );
	}
};

Slider.prototype.registerSlideCallback = function( callback ) {

	this.callbacks.push(callback);
};

Slider.prototype.invokeSlideCallback = function( callback ) {

	var callbacks = this.callbacks;

	for ( var i in callbacks )
		callbacks[i]();
};

Slider.prototype.css = function() {

	var _this = this;

	this.slider.css({
		overflow:'hidden'
	});
	
	this.holder.css({
		position: 'relative',
		width: this.slidesCount * this.width,
		// height: _this.height,
		whiteSpace: 'nowrap'
	});

	this.items().each(function() {
		$(this).css({
			float: 'left',
			overflow: 'hidden',
			display: 'block',
			width: _this.width,
			// height: _this.height,
			whiteSpace: 'normal'
		});
	});
};

Slider.prototype.setSlidesIndexes = function() {

	this.items().each(function(i,e) {
		$(this).attr('data-index', i);
	})
};

Slider.prototype.move = function( distance, speed ) {

	var animateTimeS = ! isNaN(parseInt(speed)) ? parseInt(speed)/1000 : this.options.animateTime/1000;
	
	this.holder.css({
		transform: "translate3d("+ distance +"px,0,0)", 
		
		transition: "transform " + animateTimeS + "s",
		mozTransition: "-moz-transform " + animateTimeS + "s",
		webkitTransition: "-webkit-transform " + animateTimeS + "s",
		msTransition: "-ms-transform " + animateTimeS + "s",
		oTransition : "-o-transform " + animateTimeS + "s"
	});
};

Slider.prototype.next = function() {

	this.moveToSlide(this.currentSlide+1);
};

Slider.prototype.prev = function() {

	this.moveToSlide(this.currentSlide-1);
};

Slider.prototype.appendAnimatedSlide = function() {

	if ( ! this.options.infinite )
		return;

	var first = this.items().filter(':first'),
		clone = first.clone(),
		width = clone.width();

	first.remove();
	this.holder.append(clone);
	
	this.move(0, 0);
};

Slider.prototype.resizeSlides = function( initial ) {

	var _this = this,
	width = this.slider.outerWidth(true);
	this.width = width;

	this.items().each(function() {
		var ml = $(this).css('marginLeft');  ml = isNaN(parseInt(ml)) ? 0 : parseInt(ml);
		var mr = $(this).css('marginRight'); mr = isNaN(parseInt(mr)) ? 0 : parseInt(ml);
		
		$(this).width( width - ml - mr );
	});

	if ( ! initial ) {
		if ( this.options.infinite ) { 
			_this.move(0, 0.5); 
		}
		else {
			this.currentSlide = this.currentSlide - 1 < 0 ? this.items().length - 2 : this.currentSlide - 1;
			var left = this.currentSlide * width * -1;
			_this.move(left, 0.5);
			this.handles.children().eq(this.currentSlide).addClass('active').siblings().removeClass('active');
		}
	}

	var wdth = this.slidesCount * width;
	this.holder.width(wdth);
};

Slider.prototype.moveToSlide = function( slideNumber ) {
	
	var _this = this,
	left = 0,
	holdTime = slideNumber !== undefined ? 1 : _this.options.holdTime;

	if ( _this.timer )
		clearTimeout(_this.timer);

	_this.timer = setTimeout(function() {

		_this.options.onBeforeSlide(_this);

		nextSlideIndex = slideNumber !== undefined ? (isNaN(parseInt(slideNumber)) ? 0 : parseInt(slideNumber)) : _this.currentSlide + 1;
		nextSlideIndex = nextSlideIndex < 0 ? _this.slidesCount - 1 : nextSlideIndex;
		nextSlideIndex = nextSlideIndex == _this.slidesCount ? 0 : nextSlideIndex;
		_this.currentSlide = nextSlideIndex;
		
		left = _this.options.infinite ? _this.width * -1 : _this.width * nextSlideIndex * -1;

		_this.move(left);

		if ( slideNumber === undefined )
			_this.moveToSlide();

	}, holdTime);
};

Slider.prototype.buildHandles = function() {

	if ( ! this.options.handles )
		return;

	var _this = this,
	handles = '<div class="handles" style="width:100%; text-align:center">';

	for ( var i = 1; i <= this.slidesCount; i++ )
		handles += ( i == 1 ) ? '<span class="active">'+ i +'</span>' : '<span>'+ i +'</span>';

	handles += '</div>';

	if ( this.options.handlesOutside ) {
		$(handles).insertAfter(this.slider);
		this.handles = this.slider.next('.handles');
	}
	else {
		this.slider.append(handles);
		this.handles = this.slider.find('.handles');
	}

	this.handles.find('span').on('click', function() {
		if ( $(this).hasClass('active') || _this.disableHandles )
			return;
		
		var clickedSlide = _this.handles.children().index($(this));

		if ( _this.options.infinite ) {
			_this.disableHandles = true;

			var targetItem = _this.items().filter('[data-index='+ clickedSlide +']');

			if ( _this.items().index(targetItem) !== 1 ) {
				var clone = targetItem.clone();
				targetItem.remove();
				clone.insertAfter(_this.items().filter(':first'));
			}
		}

		_this.moveToSlide( clickedSlide );
	});
};

Slider.prototype.mobileEvents = function() {

	var _this = this;
	
	try {
		var swipe = new SwipeDetector(this.selector, {
			swipeLeft: function() {
				_this.moveToSlide(_this.currentSlide + 2);
			},
			swipeRight: function() {
				_this.moveToSlide(_this.currentSlide);
			}
		});
	} catch(e) {}
};





/*
*
* Tabber
*
*
	* 
	* 	HTML:
	*

		<div class="tabs">
			<nav>
				<a href="#!link1">Link 1</a>
				<a href="#!link2">Link 2</a>
				<a href="#!link3">Link 3</a>
			</nav>
			<div>
				<article>Tab 1<br>Tab 1<br>Tab 1</article>
				<article>Tab 2<br>Tab 2</article>
				<article>Tab 3<br>Tab 3<br>Tab 3<br>Tab 3</article>
			</div>
		</div>

	* 
	* 	JS:
	* 

		var tb = new Tabber('.tabs', {
			changeTime: 300,
			showTime: 500,
			hashNavigation: true,
			onBeforeChange: function() {},
			onChange: function() {}
		});
*
*/
function Tabber( selector, options ) {

	if ( typeof selector === 'undefined' || ! $(selector).length )
		return;

	var defaults = {
		changeTime: 300,
		showTime: 500,
		hashNavigation: true,
		onBeforeChange: function() {},
		onChange: function() {}
	},
	_this = this;

	this.options 		= $.extend(defaults, options);
	this.selector 		= selector;
	this.tabber 		= $(selector);
	this.tabIndex 		= 0;
	this.menu 			= $(this.selector).children('nav').first();
	this.tabs 			= $(this.selector).children(':not(nav)').first();

	this.showTab(0, 0);
	this.menuEvents();
	this.getCurrentTab();
	this.showTabOnLoad();
};

Tabber.prototype.getCurrentTab = function() {

	this.tabIndex = this.menu.children().index(this.menu.children('.active'));
	this.tabIndex = this.tabIndex > -1 ? this.tabIndex : 0;

	return this.tabIndex;
};

Tabber.prototype.getSavedTab = function() {

	var link,
	hash = document.location.hash;

	if ( ! this.options.hashNavigation )
		return;

	if ( ! hash ) 
		return;

	hash = hash.replace('#!','');
	link = this.menu.children('.'+hash);
	link = link.length ? link : this.menu.children('[href^="#!'+hash+'"]');

	return link.length ? link : null;
};

Tabber.prototype.showTabOnLoad = function() {

	var tab = this.getSavedTab();
	tab ? tab.click() : this.showTab(this.tabIndex, 0);
};

Tabber.prototype.showTab = function( index, changeTime ) {

	var _this = this,
	clicked = _this.menu.children().eq(index),
	tab = _this.tabs.children().eq(index),
	changeTime = isNaN(parseInt(changeTime)) ? _this.options.changeTime : parseInt(changeTime);

	_this.options.onBeforeChange(_this, clicked, index);

	clicked.addClass('active').siblings().removeClass('active');

	_this.tabs.stop(true,true).animate({ 
		height: tab.outerHeight() 
	}, changeTime);

	tab.siblings(':visible').hide();

	tab.fadeIn(_this.options.showTime, function() {
		_this.tabs.css({ height: 'auto' });
	});

	_this.options.onChange(_this, clicked, index);
};

Tabber.prototype.menuEvents = function() {

	var _this = this,
	links = this.menu.children();
	
	links.on('click', function() {
		
		_this.showTab( links.index($(this)) );

		if ( ! _this.options.hashNavigation )
			return false;

	});
};





/*
*
* AjaxContactForm
*
*
	* 
	* 	HTML:
	*
		
		<div class="cf-message cf-success">Your message was sent successfully!</div>
		<div class="cf-message cf-error">Please fill all fields and use a valid email!</div>
		<form method="post" class="contact-form">
			<input type="text" name="name" placeholder="Name">
			<input type="text" name="email" placeholder="Email">
			<textarea name="message" placeholder="Message"></textarea>
			<input type="submit" value="Send">
		</form>
		
	* 
	* 	JS:
	* 

		var acf = new AjaxContactForm('.contact-form', {
			ajaxUrl : '/ajax/contact-form',
			errorSelector : '.cf-error',
			successSelector : '.cf-success',
			msgFadeTime : 200,
			formFadeTime : 1000,
			onSuccess : function(response) {},
			onFailure : function(response) {},
			onResponse : function(response) {}
		});
		
	* 
	* 	PHP:
	* 

		// Config
		$to = 'development@dtailstudio.com';
		$subject = 'Contact form';
		$values = array(
			'name' 		=> trim(@$_POST['name']), 			// mandatory
			'email' 	=> trim(@$_POST['email']), 			// mandatory
			'website' 	=> trim(@$_POST['website']),
			'message' 	=> nl2br(trim(@$_POST['message'])), 	// mandatory
		);
		// End of Config

		$errors = $content = array();

		foreach ( $values as $key => $value ) {
			if ( ! strlen($value) )
				$errors[] = $key . ' is empty';
		}

		if ( ! preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/', $values['email']) )
			$errors[] = 'email is invalid';

		if ( count($errors) ) {
			echo json_encode(array('status'=>'failure','errors'=>$errors));
			exit;
		}

		foreach ( $values as $key => $value )
			$content[] = '<strong>'.$key.'</strong>: ' . $value;

		$content[] = '<br><em><small>This email is sent from a contact form.</small></em>';

		$headers = array('MIME-Version: 1.0', 'Content-type: text/html; charset=utf-8', 'From: ' . $values['name'] . ' <' . $values['email'] . '>');

		mail($to, $subject, implode("<br>", $content), implode("\r\n", $headers) . "\r\n");

		echo json_encode(array('status'=>'success'));
		exit;
*
*/
function AjaxContactForm( selector, options ) {

	if ( typeof selector === 'undefined' || ! $(selector).length )
		return;

	var defaults = {
		ajaxUrl: '/ajax/contact-form',
		errorSelector: '.cf-error',
		successSelector: '.cf-success',
		msgFadeTime: 200,
		formFadeTime: 1000,
		onSuccess: function() {},
		onFailure: function() {},
		onResponse: function() {}
	},
	_this = this;

	this.options 	= $.extend(defaults, options);
	this.selector 	= selector;
	this.form 		= $(selector);
	this.response 	= {};

	this.options.ajaxUrl 			= this.options.ajaxUrl 			|| console.warn('Required ajaxUrl selector');
	this.options.errorSelector 		= this.options.errorSelector 	|| console.warn('Required errorSelector selector');
	this.options.successSelector 	= this.options.successSelector 	|| console.warn('Required successSelector selector');

	this.errorEl 	= $(this.options.errorSelector).hide();
	this.successEl 	= $(this.options.successSelector).hide();

	this.form.on('submit', function() {

		$.post(_this.options.ajaxUrl, _this.form.serialize(), function(responseJSON) {

			_this.response = _this.parseResponse(responseJSON);
			_this.options.onResponse(_this.response);

			_this.response.status == 'success' ? _this.success() : _this.failure();

		});

		return false;

	});
};

AjaxContactForm.prototype.parseResponse = function( response ) {
	
	var json = {};

	try {
		json = JSON.parse(response);
	} catch(e) {
		json['status'] = 'failure';
		json['errors'] = ['Cannot parse AJAX response. Check ajaxUrl or response.'];
	}
	return json;
}

AjaxContactForm.prototype.success = function() {

	this.form.find('input,textarea').not('[type=submit]').each(function() {
		$(this).val('');
	});

	this.form.find('select').each(function() {
		$(this).find('option:first').attr('selected',true);
	});

	this.form.fadeOut(this.formFadeTime);

	this.successShow();

	this.options.onSuccess(this.response);
};

AjaxContactForm.prototype.failure = function() {

	this.errorShow();

	this.options.onFailure(this.response);
};

AjaxContactForm.prototype.errorHide = function() {

	if ( this.errorEl.is(':visible') )
		this.errorEl.fadeOut(this.options.msgFadeTime);
};

AjaxContactForm.prototype.errorShow = function() {

	if ( ! this.errorEl.is(':visible') )
		this.errorEl.fadeIn(this.options.msgFadeTime);

	this.successHide();
};

AjaxContactForm.prototype.successHide = function() {

	if ( this.successEl.is(':visible') )
		this.successEl.fadeOut(this.options.msgFadeTime);
};

AjaxContactForm.prototype.successShow = function() {

	if ( ! this.successEl.is(':visible') )
		this.successEl.fadeIn(this.options.msgFadeTime);

	this.errorHide();
};





/*
*
* HashNavigator
* 
*
	* 
	* 	JS:
	* 

	var hash = new HashNavigator({
		scrollSpeed: 2000,
		onBeforeScroll: function(e) {
			console.log(e);
		},
		onScrollComplete: function(e) {
			console.log(e);
		}
	});
	hash.autoScrollToHash();
*
*/
function HashNavigator( options ) {

	this.hash = '';
	this.links = [];

	var settings = {
		scrollSpeed: 800,
		onBeforeScroll: function() {},
		onScrollComplete: function() {}
	};

	options = typeof options == 'undefined' ? {} : options;

	this.options = $.extend(settings, options);
};

HashNavigator.prototype.getHash = function() {

	return ( this.hash = document.location.hash.replace('#!','') );
};

HashNavigator.prototype.getLinksForHash = function() {

	return ( this.links = $('body').find('a[href^="#!' + this.hash + '"]') );
};

HashNavigator.prototype.getTargetTop = function( hash ) {

	var hash = hash ? hash : this.getHash();
	var el = $('[id='+ hash +'], [name='+ hash +']').filter(':first');

	return ( ! el.length ) ? 0 : el.offset().top;
};

HashNavigator.prototype.scrollToHash = function( hash ) {

	var _this = this;
	var hash = hash ? hash : this.getHash();

	_this.options.onBeforeScroll(_this);

	$('html,body').stop(true).animate({
		
		scrollTop : _this.getTargetTop( hash )

	}, _this.options.scrollSpeed, function() {
		
		_this.options.onScrollComplete(_this);

	});
};

HashNavigator.prototype.autoScrollToHash = function() {

	var _this = this;

	$(document).on('click', function(e) {
		setTimeout(function() {
			if ( $(e.target).is('a[href$="#!'+ _this.getHash() +'"]') )
				_this.scrollToHash();
		},25);
	});

	$(window).load(function() {
		if ( _this.getHash().length )
			_this.scrollToHash();
	});
};