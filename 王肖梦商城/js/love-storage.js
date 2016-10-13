//获取数据
if (!localStorage["loveStorageArr"]) {
	var loveStorageArr = JSON.parse(localStorage["loveStorageArr"]);
}
console.log(localStorage["loveStorageArr"])
//console.log(loveStorageArr[0].name)
for (var i = 0; i < loveStorageArr.length; i++) {
	var newLi = "<li><img src='img/xinred.png' class='isstorage'><img src='"+loveStorageArr[i].imageUrl+"'/></div></li>"
	  $(".love-production").append(newLi);
	  var detail ="<div class='content'><p class='name'>"+loveStorageArr[i].name+"</p><p class='color'>"+loveStorageArr[i].jianjie+"</p><div class='price'>￥<span class='priceI'>"+loveStorageArr[i].price+"</span><span>.00</span></div>";
	  $(".love-production li").eq(i).append(detail);
}
$(".love-back").on("touchstart",function(){
	history.back()
})
var isstorage = true;
$(".isstorage").on("touchstart",function(){
	isstorage=!isstorage;
	var index = $(this).index(".isstorage");
	if (isstorage) {
		$(this).attr("src","img/xinred.png");
	}else{
		$(this).attr("src","img/xin.png");
	    loveStorageArr.splice(index,1);
	    $(".love-production li").eq(index).remove();
	    localStorage["loveStorageArr"]=loveStorageArr;
	}
	
})