$(".ischeck-fapiao").on("touchstart",function(){
	$(".ischeck-fapiao").each(function(i,e){
		$(e).addClass("uncheck").removeClass("check");
	})
    $(this).removeClass("uncheck").addClass("check");
	var needFapiao = $(this).index(".ischeck-fapiao");
	localStorage["needFapiao"] = needFapiao;
	
	if (needFapiao==1) {
		$("ul>li:nth-child(n+2)").css("display","none")
	}
	if (needFapiao==0) {
		$("ul>li:nth-child(n+2)").css("display","block")
	}
})
var flag = true;
$(" .ischeck-type").on("touchstart",function(){	
	 flag = !flag;
	 if (flag) {
	 	 $(this).removeClass("uncheck").addClass("check");
	 }else{
	 	$(this).removeClass("check").addClass("uncheck");
	 }
})
var titleInex;
$(".ischeck-title").on("touchstart",function(){
	$(".ischeck-title").each(function(i,e){
		$(e).find("p").addClass("title-uncheck").removeClass("title-check");
	})	 
   $(this).find("p").removeClass("title-uncheck").addClass("title-check");
    titleInex = $(this).index(".ischeck-title");
    localStorage["titleInex"] = titleInex;
// console.log(titleInex)
})

$(".cont-check").on("touchstart",function(){
	$(".cont-check").each(function(i,e){
		$(e).addClass("uncheck").removeClass("check")
	})
	 
   $(this).removeClass("uncheck").addClass("check");
    contentIndex = $(this).index(".cont-check");
    localStorage["contentIndex"] = contentIndex;
    console.log(contentIndex)
})



$(".fapiao-back").on("touchstart",function () {
	history.back();
})
$(".bottom").on("touchstart",function () {
	if (titleInex==1&&$(".wirte-danwei").val()=="") {
	
			console.log("哈哈哈哈")
			alert("请输入单位名");	   	  
   }else{
   	history.back();
   }
})