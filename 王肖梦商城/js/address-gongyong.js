$(".isright ,.isnone,.isdel").css("color","#A9A9A9");
var isChoseAdd = false;
//点击选择地址
$(".address img").on("touchstart",function(event){
	event.stopPropagation();
	$(".sele-addr").css("display","inline-block");
	$(".sele-addr>li").on("touchstart",function(event){
		var index = $(this).index();
		var cont = $(".sele-addr>li").eq(index).html();
	$(".address input").val(cont);
	isChoseAdd = true;
	})
})
$(document).on("touchstart",function(){
	$(".sele-addr").css("display","none");
})
//是否默认选择按钮
function rightLeft(ischeck){
	if(ischeck){
	$(".defau").css("float","right");
	$(".defauT").css("background","#b91b34");	   	
}else{
	$(".defau").css("float","left");
	$(".defauT").css("background","#6D6D6D");
}
}
$(".defauT").on("touchstart",function(){
    ischeck = !ischeck;
	rightLeft(ischeck);	
	if (ischeck){
		for (var i = 0; i < allAdress.length; i++) {
			allAdress[i].isDft = false;
		}
     }
})

   var isTelOk = false;
   var isNameOk = false;
   var isAddressOk = false;	
function checkIsok(){
	if($(".name").val()==""){
		$(".isnone").html("请填收货人");
	}else{
		isNameOk = true;
	}
	//判断地址
	if($(".del-add").val()==""){
		$(".isdel").html("请填详细地址");
	}else{
		isAddressOk = true;
	}	
}
function checkTele(){
		var regular = /^1[3|5|7|8][0-9]{9}$/;
	    isTelOk = regular.test($("#phone").val());
	  if (isTelOk) {		
		 rellayTel = phone.value;		 
	     var reg = /1(\d{2})\d{4}(\d{4})/g;
		 str1 = rellayTel.replace(reg,"1$1****$2");
		 phone.value=str1;
		 isTelOk = true;
	  }else{
	  	$(".isright").html("请输入正确的手机号");
         isTelOk = false;
	  }
	}
//设置默认收货地址	
var ischeck  = false;
//保存
var allAdress = [];
//为了防止获取不到数据报错先创建一个
//var	 address = {
//	            	name:"wangxiaomeng",
//	            	telephone:"17749768488",
//	            	choseAddress:"河南开封",
//	            	address:"卫视",	            	
//	            	isDft:false,            
//			  }
//allAdress.push(address);
//localStorage["allAdress"] = JSON.stringify(allAdress);
var allAdress = JSON.parse(localStorage["allAdress"]);


$(".address-back").on("touchstart",function(){
      history.back();
})
