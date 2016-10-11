var senttime = ["工作日","双休节假日","时间不限"];
var senway = ["快递","平邮","邮政"];
var title = ["个人","单位"];
var content = ["明细","酒"];
$(".way").html(senway[0]);
$(".time").html(senttime[0]);
$(".title-fapiao").html(title[0]);
$(".content-fapiao").html(content[0]);
var sendTimeIndex = localStorage["sendTimeIndex"];
var sendWayIndex = localStorage["sendWayIndex"];
var needFapiao = localStorage["needFapiao"];
var titleInex = localStorage["titleInex"];
var contentIndex =  localStorage["contentIndex"]; 

var allPrice = localStorage["allpay"]  ;
$(".totle-pay").html("¥"+allPrice+".00");
$(".real-pay").html("¥"+(parseInt(allPrice)+5)+".00")




$(".way").html(senway[sendWayIndex]);
$(".time").html(senttime[sendTimeIndex]);
$(".title-fapiao").html(title[titleInex]);
$(".content-fapiao").html(content[contentIndex]);