console.log(JSON.parse(localStorage["isLoad"]));

if (JSON.parse(localStorage["isLoad"])=="undefined") {
	var isLoad=false;
}else{
	
	var isLoad = JSON.parse(localStorage["isLoad"]);
}
if (localStorage["telephoneNum"]!="undefined") {
	var telephoneNum = localStorage["telephoneNum"];
}
if (JSON.parse(localStorage["imgUrl"])!="undefined") {
	var imgUrl = JSON.parse(localStorage["imgUrl"]);
}

hasLoad(isLoad);
function hasLoad(isLoad){
	if (isLoad) {
		//如果为登录状态无法点击登录		
		$(".isload").css("color","#F8CC00");
		$(".exit").css("color","#666666");
		$("#uesr-head img").attr("src","img/pic.png")
		$("#uesr-head p").html(telephoneNum);
		localStorage["imgUrl"] = "img/pic.png";
		setTimeout(function(){
			$(".load-a").attr("href","###");
		},2000)
		
	}else{		
		$(".load-a").attr("href","test-telephone.html")	
		$(".isload").css("color","#666666");
		$(".exit").css("color","#F8CC00");
	    $("#uesr-head img").attr("src","img/mine/touxiangbeijing.png");
	    $("#uesr-head p").html("");
	    localStorage["imgUrl"] = "img/mine/touxiangbeijing.png";	    
	}
}
$(".isload").on("touchstart",function(){	
	isLoad = true;
	hasLoad(isLoad);
	localStorage["isLoad"] = JSON.stringify(isLoad);
})
$(".exit").on("touchstart",function(){
	isLoad = false;
	hasLoad(isLoad);
	localStorage["isLoad"] = JSON.stringify(isLoad);
})
