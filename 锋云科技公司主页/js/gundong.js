
		 $(function(){

				var timer = setInterval(nextscroll,3000);
		 		var v_width = $('.v_cont li').width()*$('.v_cont li').length;
		 		$('.v_cont').width(v_width);
				/*======next======*/
				$(".next a").click(function(){ 
					clearInterval(timer);
					nextscroll() ;
					timer = setInterval(nextscroll,3000);
				});
				function nextscroll(){
						var vcon = $(".v_cont ");
						var offset = ($(".v_cont li").width())*-1;
						vcon.stop().animate({left:offset},"slow",function(){
							 var firstItem = $(".v_cont ul li").first();
							 vcon.find("ul").append(firstItem);
							 $(this).css("left","0px");
							 circle()
						});  
				};
				function circle(){
						var currentItem = $(".v_cont ul li").first();
						var currentIndex = currentItem.attr("index");
						$(".circle li").removeClass("circle-cur");
						$(".circle li").eq(currentIndex).addClass("circle-cur");
				}

				$('.v_cont ul li').hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(nextscroll,3000)
				})
				/*======prev======*/
				$(".prev a").click(function(){
						clearInterval(timer);
						var vcon = $(".v_cont ");
						var offset = ($(".v_cont li").width()*-1);
						var lastItem = $(".v_cont ul li").last();
						vcon.find("ul").prepend(lastItem);
						vcon.css("left",offset);
						vcon.animate({left:"0px"},"slow",function(){
							 circle()
						})
						timer = setInterval(nextscroll,3000)
				 });
			   /*======btn====circle======*/
				 var animateEnd = 1;
				$(".circle li").click(function(){
					   if(animateEnd==0){return;}
					   $(this).addClass("circle-cur").siblings().removeClass("circle-cur");
						var nextindex = $(this).index();
						var currentindex = $(".v_cont li").first().attr("index");
						var curr = $(".v_cont li").first().clone();
						if(nextindex > currentindex){
								for (var i = 0; i < nextindex - currentindex; i++) {
									 var firstItem = $(".v_cont li").first();
									 $(".v_cont ul").append(firstItem); 
								}
								$(".v_cont ul").prepend(curr);
								var offset = ($(".v_cont li").width())*-1;
								if(animateEnd==1){
									animateEnd=0;	
									$(".v_cont").stop().animate({left:offset},"slow",function(){
											$(".v_cont ul li").first().remove();
											$(".v_cont").css("left","0px");
											animateEnd=1;
									}); 
								} 
						}else{
								var curt = $(".v_cont li").last().clone();
								for (var i = 0; i < currentindex - nextindex; i++) {
									 var lastItem = $(".v_cont li").last();
									 $(".v_cont ul").prepend(lastItem);
								}
								$(".v_cont ul").append(curt);
								var offset = ($(".v_cont li").width())*-1;
								$(".v_cont").css("left",offset);
								  if(animateEnd==1){
										animateEnd=0;	
										$(".v_cont").stop().animate({left:"0px"},"slow",function(){
											$(".v_cont ul li").last().remove();
											animateEnd=1;
										}); 
									} 
							}
				});
		 })