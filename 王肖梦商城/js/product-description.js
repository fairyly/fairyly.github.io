//顶部按钮动画
$(".shangpin").on("touchstart",function(){
	for (var i = 0; i < $(".text>span").length; i++) {
		$(".text>span").eq(i).css("color","#888988")
	}
	$(this).css("color","#A80428")
	$("#line").animate({
		left:"27%"
	},500);
	//商品页显示
	$(".shangpin-wrap").css("display","block");
	$(".xiangqing-wrap").css("display","none");
	$(".pingjia-wrap").css("display","none");
		
})
$(".xiangqing").on("touchstart",function(){
	for (var i = 0; i < $(".text>span").length; i++) {
		$(".text>span").eq(i).css("color","#888988")
	}
	$(this).css("color","#A80428")
	$("#line").animate({
		left:"44.3%"
	},500);
	//详情页显示
	$(".shangpin-wrap").css("display","none");
	$(".xiangqing-wrap").css("display","block");
	$(".pingjia-wrap").css("display","none");
})
$(".pingjia").on("touchstart",function(){
	for (var i = 0; i < $(".text>span").length; i++) {
		$(".text>span").eq(i).css("color","#888988")
	}
	$(this).css("color","#A80428")
	$("#line").animate({
		left:"61.5%"
	},500);
	//评价页显示
	$(".shangpin-wrap").css("display","none");
	$(".xiangqing-wrap").css("display","none");
	$(".pingjia-wrap").css("display","block");
	
})
//轮播
var dis = 0;
var lunboTimer = setInterval(function () {
	dis++;
	$("#pics").animate({
		left: -dis * 100 + "%"
	}, 1000, function () {
		if (dis == 4) {
		 dis = 0;
		$("#pics").css("left",0);
		}
		$(".num").html(dis + 1 + "/4");		
	});
	localStorage["index"] = dis;
}, 2000);


//添加评论
//头像路径
var touxiangUrl = "img/sort/touxiang.png";
//用户名
var name = "王小二";
//星数
var starNum = 3;
//评论个数
var comdNum =1;
//提交评论
$(".add-pinglun span").on("touchstart",function(){
	if ($('.write').val()=="") {
		$(".notice").css("display","block")
		setTimeout(function(){
		$(".notice").css("display","none")			
		},500)
	}else{
	var reg = /^(\S){1}(\S)+(\S)*$/;
	name = name.replace(reg,"$1*$2");
	var newLi = "<li><img src='"+touxiangUrl+"'class='touxiang'/><span class='name'>"+name+"</span><div class='star'></div><p class='pinglun'>"+$('.write').val()+"</p></li>";
	$(".comment ul").append(newLi);
	//找到这是第几个li
	 var index = $(".comment li").length-1;
	 Id =  $(".comment li .star").eq(index)
     addStar(Id,starNum);	
	//清空评论框
	$('.write').val("");
	//评论动画效果
	$(".comment ul li").eq(index).css("display","none");
	$(".comment ul li").eq(index).slideDown(1000);
	comdNum++;
	$(".allcomd").html("全部（"+comdNum+"）");
	}
	
})
//商店星星数
var shopstar = 2;
var shopId = $(".name .star1");
addStar(shopId,shopstar);
//商店内部星星
//var fuwustar = 1;
//var fuwuId = $(".fuwu");
//addStar(fuwuId,fuwustar);
//var  wuliustar = 2;
//var wuliu = $(".wuliu");
//addStar(wuliuId,wuliustar);
//var  maijiastar =3; 
//var maijia = $(".maijia");
//addStar(maijiaId,maijiastar);




//第二个页面的效果
$("#details p:nth-child(1)").on("touchstart",function(){
	$(".big-pic").css("display","block");
	$("#type").css("display","none");
	//改变按钮背景颜色
	$("#details p").css("background","#e6e6e6");
	$(this).css("background","#F1F1F1");
})
$("#details p:nth-child(2)").on("touchstart",function(){
	$(".big-pic").css("display","none");
	$("#type").css("display","block");
	//改变按钮背景颜色
	$("#details p").css("background","#e6e6e6");
	$(this).css("background","#F1F1F1");
})



//加减按钮
var total = 6;
var curtNum = 1;
var shengNum = 5;

$(".jian").on("touchstart",function(){
	console.log("aaa");
	curtNum = $(".prodNum p").html();
	curtNum--;
	shengNum++;
	if (curtNum<=0) {
		curtNum = 0;
		shengNum = 6;
	}
	if (curtNum<total) {
		$(".ishas").html("现货");
	}
	$(".prodNum p").html(curtNum);
	$(".prodNum span").html("仅剩"+shengNum+"件");
})
$(".jia").on("touchstart",function(){
	console.log("aaaa");
    curtNum = $(".prodNum p").html();
	curtNum++;
	shengNum--;
	if (curtNum>=total){
		curtNum=total;
		shengNum = 0;
		$(".ishas").html("无货");
	}	
	$(".prodNum p").html(curtNum);
	$(".prodNum span").html("仅剩"+shengNum+"件");	
})

//地址选择
