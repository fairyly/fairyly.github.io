//获取本地存储的商品并显示
var productionArr = JSON.parse(localStorage["productionArr"]);
for (var i = 0; i < productionArr.length; i++) {
	var  name  = productionArr[i].name;
	var jianjie  = productionArr[i].jianjie;
	var price = productionArr[i].price;
	if (productionArr[i].shopName=="shop2") {
		var newLi = "<li class='production'><img class='check' src='img/shoppingcar/none.png'/></li>"
	  $("#shop2>ul").append(newLi);
	   var goodsPic = "<div class='goods'><img src='"+productionArr[i].imageUrl+"'/><span>仅剩"+productionArr[i].shengNum+"件</span></div>"
	   var index = $("#shop2>ul>li").length-1;
	   $("#shop2>ul>li").eq(index).append(goodsPic);
	   var detail ="<div class='content'><p class='name'>"+name+"</p><p class='color'>"+jianjie+"</p><div class='price'>￥<span class='priceI'>"+price+"</span><span>.00</span><p class='chose'><span class='choseok'>1</span><img src='img/sort/chose.png'/><ul class='chose-num'><li>1</li><li >2</li><li>3</li><li>4</li><li>5</li><li>6</li></ul></p></div></div>";
	   var deleAddImg = "<img src='img/delete.png' class='delet'/><img src='img/xin.png' class='xin'/>";
	    $("#shop2>ul>li").eq(index).append(detail);
	   $("#shop2>ul>li").eq(index).find(".price").append(deleAddImg);	   
	}
}
//商品个数的选择
$(".chose").on("touchstart",function(event){
	//阻止冒泡
	event.stopPropagation();
	//所有先隐藏
	for (var i = 0; i < $(".chose").length; i++) {
		$(".chose-num").eq(i).css("display","none");
	}
	//找到点击的是第几个
	var index1 = $(this).index(".chose");
	//显示出对应的列表
	$(".chose-num").eq(index1).css("display","block");	
	//选择个数
	$(".chose-num li").on("touchstart",function(){ 
		var index2 = $(this).index()+1;
		$(".chose span").eq(index1).html(index2);
		$(".chose-num").eq(index1).css("display","none");
    })
	setOk();
})
$(document).on("touchstart",function(){
	for (var i = 0; i < $(".chose").length; i++) {
		$(".chose-num").eq(i).css("display","none");
	}
	setOk();
})

//ischeck
var ischeck = false;
$(".check").on("touchstart",function(){
	
	ischeck = !ischeck;
	if (ischeck) {
		$(this).removeClass("notok");
		$(this).addClass("ok");
		$(this).attr("src","img/shoppingcar/Checked.png");
		setOk();
		//加入购物清单
		addList();
	}else{
		$(this).removeClass("ok");
		$(this).addClass("notok");
		$(this).attr("src","img/shoppingcar/none.png");
	    setOk();
	}
})
//加入购物清单
var addListArr = []
function addList(){
	 createObj();
	 addListArr.push(production);
	 localStorage["addListArr"] = JSON.stringify(addListArr);
	 console.log(addListArr);
		}
//全选按钮
var checkAll = false;
$(".checkall").on("touchstart",function(){
	checkAll=!checkAll;
	if (checkAll) {
		$(".check").removeClass("notok");
	    $(".check").addClass("ok");
	    $(".check").attr("src","img/shoppingcar/Checked.png");
	    setOk();
	}else{
	  $(".check").removeClass("ok");
	  $(".check").addClass("notok");
	  $(".check").attr("src","img/shoppingcar/none.png");	
	  setOk();
	}
})
//店铺全选按钮
var shopCheck = false;
$(".shopCheck").on("touchstart",function(){
	shopCheck=!shopCheck;
	var index = $(this).index(".shopCheck");
	if (shopCheck){
		$(".shop-wrap").eq(index).find(".check").removeClass("notok");
		$(".shop-wrap").eq(index).find(".check").addClass("ok");
	    $(".shop-wrap").eq(index).find(".check").attr("src","img/shoppingcar/Checked.png");	
	    setOk();
	}else{
		$(".shop-wrap").eq(index).find(".check").removeClass("ok");
		$(".shop-wrap").eq(index).find(".check").addClass("notok");
	    $(".shop-wrap").eq(index).find(".check").attr("src","img/shoppingcar/none.png");
	    setOk();
	 }
})
//计算总的价格
function setOk(){
	var allPrice = 0
	$('.ok').each(function(i,e){
	var priceI =$(e).parent().find('.priceI').text();
	var num = $(e).parent().find('.choseok').text();
	var totalPriceI = priceI*num;
	allPrice +=  totalPriceI; 
	});
	$(".pay-price").html("¥"+allPrice+".00");
	localStorage["allpay"] = allPrice;
}
//清空按钮
$(".clear").on("touchstart",function(){
	//清除本地存储
	 productionArr = [];
	 localStorage["productionArr"] = JSON.stringify(productionArr);
	 $(".all-production").remove();
})
//删除
$(".delet").on("touchstart",function(){
	var index =$(this).index(".delet");
	$(".all-production> .production").eq(index).remove();
	productionArr.splice(index,1);
	localStorage["productionArr"] = JSON.stringify(productionArr);
})



