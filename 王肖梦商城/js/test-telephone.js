 var isTelOk = false;
 $(".get-testNum").on("touchstart", function() {
 	testTel();
 	if(isTelOk) {
 		$(this).addClass("hidden").removeClass("show");
 		$(".last-time").addClass("show").removeClass("hidden");
 		$(".get-testNum span").html("重新获取验证码");
 		var $1 = $(".last-time");
 		var $2 = $(".get-testNum");
 		var $3 = $(".last-time span:nth-child(1)");
 		timeMinus($1, $2, $3);
 	} else {
 		alert("请输入正确的手机号")
 	}
 })

 function testTel() {
 	var regular = /^1[3|5|7|8][0-9]{9}$/;
 	isTelOk = regular.test($(".tele-num input").val());
 }

 function timeMinus($1, $2, $3) {
 	var lastTime = 10;
 	var lastTimer = setInterval(function() {
 		lastTime--;
 		$3.html(lastTime + "秒");
 		if(lastTime <= 0) {
 			clearInterval(lastTimer);
 			$1.addClass("hidden").removeClass("show");
 			$2.addClass("show").removeClass("hidden");
 		}
 	}, 1000)
 }
 //提交
 $(".tijiao").on("touchstart", function() {
 	testTel();
 	if(isTelOk) {
 		localStorage["telephoneNum"] = $(".tele-num input").val();	    
 	    	 $(this).attr("href","mine.html");   
 	} else {
 		alert("输入正确的手机号")
 	}
 })