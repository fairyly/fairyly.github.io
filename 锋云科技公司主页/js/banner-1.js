var img = "", count = 50;
		for(var i = 1; i <= 50; i++)
			img += '<img class="grid-image img'+i+'"' +' src="img/'+i+'.jpg" />';

		$(".grid").append(img);

		var easing = "easeOutBounce";
		
		function animate()
		{
			$("img.grid-image").each(function(i){
				$(this).delay(Math.random()*count*25).animate({opacity: 1}, {
					step: function(now, mx){
						$(this).css("transform", "scale("+now+")");
					}, 
					duration: 1000, 
					easing: easing, 
				});
			})
		}
		$(setTimeout(function(){
				if($(this).hasClass("mode")) 
				{
					$(".mode").removeClass("active");
					$(this).addClass("active");
					mode = $(this).attr("data-mode");
				}
				if($(this).hasClass("easing")) 
				{
					$(".easing").removeClass("active");
					$(this).addClass("active");
					easing = $(this).attr("data-easing");
				}
				$("img.grid-image").fadeTo(500, 0).promise().done(function(){
					animate();
				})
				setTimeout(goo,2200);
			},0));
		function goo(){
			$('.img1').css('position','relative').animate({'left': '-170px','top':'-120px'},1500);
			$('.img2').css('position','relative').animate({'left': '-170px','top':'-120px'},1500);
			$('.img3').css('position','relative').animate({'left': '-170px','top':'-120px'},1500);
			$('.img4').css('position','relative').animate({'left': '-170px','top':'-120px'},1500);
			$('.img5').css('position','relative').animate({'left': '-170px','top':'-120px'},1500);
			$('.img6').css('position','relative').animate({'left': '170px','top':'-120px'},1500);
			$('.img7').css('position','relative').animate({'left': '170px','top':'-120px'},1500);
			$('.img8').css('position','relative').animate({'left': '170px','top':'-120px'},1500);
			$('.img9').css('position','relative').animate({'left': '170px','top':'-120px'},1500);
			$('.img10').css('position','relative').animate({'left': '170px','top':'-120px'},1500);
			$('.img11').css('position','relative').animate({'left': '-220px','top':'-70px'},1500);
			$('.img12').css('position','relative').animate({'left': '-220px','top':'-70px'},1500);
			$('.img13').css('position','relative').animate({'left': '-220px','top':'-70px'},1500);
			$('.img14').css('position','relative').animate({'left': '-220px','top':'-70px'},1500);
			$('.img15').css('position','relative').animate({'left': '-220px','top':'-70px'},1500);
			$('.img16').css('position','relative').animate({'left': '220px','top':'-70px'},1500);
			$('.img17').css('position','relative').animate({'left': '220px','top':'-70px'},1500);
			$('.img18').css('position','relative').animate({'left': '220px','top':'-70px'},1500);
			$('.img19').css('position','relative').animate({'left': '220px','top':'-70px'},1500);
			$('.img20').css('position','relative').animate({'left': '220px','top':'-70px'},1500);
			$('.img21').css('position','relative').animate({'left': '-260px'},1200);
			$('.img22').css('position','relative').animate({'left': '-260px'},1200);
			$('.img23').css('position','relative').animate({'left': '-260px'},1200);
			$('.img24').css('position','relative').animate({'left': '-260px'},1200);
			$('.img25').css('position','relative').animate({'left': '-260px'},1200);
			$('.img26').css('position','relative').animate({'left': '260px'},1200);
			$('.img27').css('position','relative').animate({'left': '260px'},1200);
			$('.img28').css('position','relative').animate({'left': '260px'},1200);
			$('.img29').css('position','relative').animate({'left': '260px'},1200);
			$('.img30').css('position','relative').animate({'left': '260px'},1200);
			$('.img31').css('position','relative').animate({'left': '-220px','top':'70px'},1500);
			$('.img32').css('position','relative').animate({'left': '-220px','top':'70px'},1500);
			$('.img33').css('position','relative').animate({'left': '-220px','top':'70px'},1500);
			$('.img34').css('position','relative').animate({'left': '-220px','top':'70px'},1500);
			$('.img35').css('position','relative').animate({'left': '-220px','top':'70px'},1500);
			$('.img36').css('position','relative').animate({'left': '220px','top':'70px'},1500);
			$('.img37').css('position','relative').animate({'left': '220px','top':'70px'},1500);
			$('.img38').css('position','relative').animate({'left': '220px','top':'70px'},1500);
			$('.img39').css('position','relative').animate({'left': '220px','top':'70px'},1500);
			$('.img40').css('position','relative').animate({'left': '220px','top':'70px'},1500);
			$('.img41').css('position','relative').animate({'left': '-170px','top':'120px'},1500);
			$('.img42').css('position','relative').animate({'left': '-170px','top':'120px'},1500);
			$('.img43').css('position','relative').animate({'left': '-170px','top':'120px'},1500);
			$('.img44').css('position','relative').animate({'left': '-170px','top':'120px'},1500);
			$('.img45').css('position','relative').animate({'left': '-170px','top':'120px'},1500);
			$('.img46').css('position','relative').animate({'left': '170px','top':'120px'},1500);
			$('.img47').css('position','relative').animate({'left': '170px','top':'120px'},1500);
			$('.img48').css('position','relative').animate({'left': '170px','top':'120px'},1500);
			$('.img49').css('position','relative').animate({'left': '170px','top':'120px'},1500);
			$('.img50').css('position','relative').animate({'left': '170px','top':'120px'},1500);
			$('.hlogo').addClass('pl').removeClass('hlogo')
		}	














