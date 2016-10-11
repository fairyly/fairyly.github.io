$(".ischeck-time").on("touchstart",function(){
	 for (var i = 0; i < $(".ischeck-time").length; i++) {
	 	$(".ischeck-time").eq(i).addClass("uncheck");
		$(".ischeck-time").eq(i).removeClass("check");
	 }
    $(this).removeClass("uncheck");
	$(this).addClass("check");
	console.log($(this));
	var sendTimeIndex = $(this).index(".ischeck-time");
	localStorage["sendTimeIndex"] = sendTimeIndex;
	//console.log(localStorage["sendTimeIndex"])
})
$(".ischeck-way").on("touchstart",function(){
	 for (var i = 0; i < $(".ischeck-time").length; i++) {
	 	$(".ischeck-way").eq(i).addClass("uncheck");
		$(".ischeck-way").eq(i).removeClass("check");
	 }	 
   $(this).removeClass("uncheck");
   $(this).addClass("check");
   var sendWayIndex = $(this).index(".ischeck-way");
	localStorage["sendWayIndex"] = sendWayIndex;
	console.log(sendWayIndex)
})


$(".sendway-back, .bottom").on("touchstart",function () {
	history.back();
})
//$(".sendway-ok").on("touchstart",function () {
//	location.href = "http://127.0.0.1/guomei/write-order.html";
//})