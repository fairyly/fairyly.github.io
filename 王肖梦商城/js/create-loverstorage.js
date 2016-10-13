if (!localStorage["productionArr"]) {
	var productionArr = [];
	var shengNum = 6;
}else{
	var productionArr = JSON.parse(localStorage["productionArr"]);
	var shengNum = productionArr[0].shengNum;
}
if (!localStorage["loveStorageArr"]) {
	var loveStorageArr=[] ;
}else{
	var loveStorageArr = JSON.parse(localStorage["loveStorageArr"]);
}

//创建商品对象
var islove =false;
var production;
function createObj(){
	 production = {
		shengNum : shengNum,
		shopName:"shop2",
		imageUrl:"img/sort/jiujiu.png",
		name :"圣芝红酒法国银奖干红原瓶进口好喝好喝好好喝……",
	    jianjie:"白色；约 2020万",
	    price : "2222",
	    isLove:false
	}	
}


//如果是收藏的图片为红心
for (var i = 0; i < productionArr.length; i++) {
	var isLove = productionArr[i].isLove;
	if (isLove){
	$(".xin").eq(i).attr("src","img/xinred.png");
	}
}

$(".xin").on("touchstart",function(){	
	islove = !islove;
	if(islove){
		$(this).attr("src","img/xinred.png")
		createObj();		
		production.isLove = true;
        loveStorageArr.push(production); 
        localStorage["loveStorage"]=JSON.stringify(loveStorageArr);
        console.log("loveStorageArr:"+JSON.parse(localStorage["loveStorageArr"]));
	}else{
	  $(this).attr("src","img/xin.png");
	  production.isLove = false;
		//取消收藏
//	  var index = $(this).index(".xin");
//	  loveStorage
	}
})
 var isLove = false;
$(".shoucang").on("touchstart",function(){
	isLove = !isLove;
	if (isLove) {
		$(this).attr("src","img/shoucangred.png")
		createObj();
		production.isLove = true;
		loveStorageArr.push(production);
		localStorage["loveStorageArr"] = JSON.stringify(loveStorageArr); 
		console.log("loveStorageArr:"+JSON.parse(localStorage["loveStorageArr"]));
	}else{
		$(this).attr("src","img/dianpushouye/shoucang.png");
		//从收藏数组删除
		
	}
	
})
//点击加入购物车

$(".add").on("touchstart",function(){
		var carCurNum =parseInt($(".storage-num").html());
	    $(".storage-num").html(carCurNum+curtNum);	
	//把产品存储到本地
	for (var i = 0; i < curtNum; i++) {
		createObj();
		productionArr.push(production);
	}		
	localStorage["productionArr"] = JSON.stringify(productionArr);
    console.log("productionArr:"+productionArr);
})
