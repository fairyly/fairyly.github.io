	$(".get-test-num").on("touchstart", function() {
			$(this).addClass("hidden").removeClass("show");
			$(".tel-last-time").addClass("show").removeClass("hidden");
			$(".get-test-num span").html("重新获取验证码");
			var $1 = $(".tel-last-time");
			var $2 = $(".get-test-num");
			var $3 = $(".tel-last-time span:nth-child(1)");
			timeMinus($1, $2, $3);
		})
		//下一步
	$(".next").on("touchstart", function() {
		$(".old-wrap").css("display", "none");
		$(".new-wrap").css("display", "block");
		$(".left p").css("background", "#C9C9C9")
		$(".right p").css("background", "#206F00")
	})