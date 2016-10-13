//获取数据
var allAdress = JSON.parse(localStorage["allAdress"]);
//console.log(allAdress);
var 	flag = "uncheck";
for (var i = 0; i < allAdress.length; i++) {
	if(allAdress[i].isDft){
		flag = "check";
	}else{
		flag = "uncheck";
	}
var newLi  = '<li><div class="wrap"><p class="ischeck-ad '+flag+'"></p></div></li>';	
	 $(".all-adress").append(newLi);
var cont = '<p><span class="name">'+allAdress[i].name+'</span>'+allAdress[i].telephone+'</p><p><span class="display  hidden">默认</span>'+allAdress[i].choseAddress+'</p>';
     $(".all-adress>li").eq(i).append(cont);
   var last ='<div class="div2"><img src="img/shoppingcar/bi.png" class="bianji"/><a class="bianji-ad" href="reset-address.html">编辑</a></div>';
     $(".all-adress>li").eq(i).append(last);
//var newLi = '<li><div class="wrap"><p class="ischeck-ad '+flag+'"></p></div><p><span>'+allAdress[i].name+'</span>'+allAdress[i].telephone+'</p><p><span class="display  show">默认</span>'+allAdress[i].choseAdress+'</p><div class="div2"><img src="img/shoppingcar/bi.png" class="bianji"/><a class="bianji-ad" href="reset-address.html">编辑</a></div></li>';  
//$(".all-adress").append(newLi)
}

//按钮
$(".ischeck-ad").on("touchstart",function(){
	$(".ischeck-ad").each(function(i,e){
		$(e).addClass("uncheck").removeClass("check");
		$(".display").addClass("hidden").removeClass("show")
		
	})
	$(this).addClass("check").removeClass("uncheck");
	$(this).parent().parent().find(".display").addClass("show").removeClass("hidden")
})



$(".bianji-ad").on("touchstart",function(){
	var index = $(this).index(".bianji-ad");	
	localStorage["addressIndex"] = index;
})

$(".address-back").on("touchstart",function(){
	history.go(-1);
})