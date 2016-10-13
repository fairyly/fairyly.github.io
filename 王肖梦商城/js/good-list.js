$(".show-list").on("touchstart",function(){
	$(".goods-list").css("display","block");
	$(".goods-list").animate({
		"left":"0%",
		});
})
$(".title-list img").on("touchstart",function(){
	$(".goods-list").css("display","none");
	$(".goods-list").animate({
		"left":"100%",
		});
})
//加入购物清单
var addListArr = JSON.parse(localStorage["addListArr"]);
console.log(addListArr);
for (var i = 0; i < addListArr.length; i++) {
	console.log(addListArr[i].price)
	var newLi = "<li class='production'><div class='goods'><img src='img/sort/jiujiu.png'/><span>"+addListArr[i].shengNum+"</span></div><div class='content'><p class='name'>"+addListArr[i].name+"</p><p class='color'>"+addListArr[i].jianjie+"</p><div class='price'>￥<span class='priceI'>"+addListArr[i].price+"</span><span>.00</span></div></div></li>";
$(".topay-list").append(newLi);
}