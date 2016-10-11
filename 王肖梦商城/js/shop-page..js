//按星的个数添加黄星
var starNum = $(".star span").html();
for (var i = 0; i < starNum; i++) {
	$(".star img").eq(i).attr("src","img/dianpushouye/xingxing.png");
}

//分类展开栏
$("dl").hide();
$(".all").hide();
var flag = false;	
$(".header span").on("touchstart",function(){	
	$("dl").toggle("fast",function(){
		
		$("dt> img").on("touchstart",function(){	
			flag =!flag;
			var index = $(this).index("dt img");
			//console.log(index)
			$(".all").eq(index).toggle("fast");
			if(flag){
				$(this).attr("src","img/sort/xiangxiajiantou.png");
				$(this).animate({"width":"8%"})
			}
			if(!flag){
				console.log("aaaa")
				$(this).attr("src","img/sort/baijiantou.png");
			    $(this).animate({"width":"6%"});
			}
			
		})
	})
})
