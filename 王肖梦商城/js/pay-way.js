$(".payway-back").on("touchstart",function(){
	history.back();
})
var totalPay = localStorage["allpay"];
$(".allpay").html("¥"+totalPay);
$("#close").on("touchstart",function(){
	
	$(".alert").css("display","block");
})
$("#cha ,.go-on").on("touchstart",function(){
	
	$(".alert").css("display","none")
})
