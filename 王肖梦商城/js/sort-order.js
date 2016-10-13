$.ajax({
	type:"get",
	url:"message.json",
	dataType:"json",
	async:true,
	success:function(data){
		var dataArr = data;
		console.log(dataArr);
		sortDown(dataArr,"salesNum");
		 //销量降序
		 $(".list li:nth-child(1)").on("touchstart",function(){
		 	clear();
		 	sortDown(dataArr,"salesNum");
		 	
		 })
		 //价格升序
		 $(".list li:nth-child(2)").on("touchstart",function(){
		 	clear();
		 	sortUp(dataArr,"price");	
		 })
		  //新品升序
		 $(".list li:nth-child(3)").on("touchstart",function(){
		 	clear();
		 	sortUp(dataArr,"date"); 	
		 })
		  //人气降序
		 $(".list li:nth-child(4)").on("touchstart",function(){
		 	clear();
		 	sortDown(dataArr,"peopleLove");		 	
		 })

		 
}
})



 function sortUp(dataArr,pro){
		for (var i = 0; i < dataArr.length-1; i++) {			
			for (var j = 0; j < dataArr.length-i-1; j++) {	
				if (dataArr[j][pro]>dataArr[j+1][pro]) {
					 var temp = dataArr[j];
				     dataArr[j] = dataArr[j+1];
				     dataArr[j+1] = temp;
				}
			}
		}
		createLi(dataArr);
	}
 function sortDown(dataArr,pro){
		for (var i = 0; i < dataArr.length-1; i++) {			
			for (var j = 0; j < dataArr.length-i-1; j++) {			
				if (dataArr[j][pro]<dataArr[j+1][pro]) {
					 var temp = dataArr[j];
				     dataArr[j] = dataArr[j+1];
				     dataArr[j+1] = temp;
				}
			}
		}
	createLi(dataArr);
	
}
function createLi(dataArr){
	for (var i = 0; i < dataArr.length; i++) {
		var newLi = "<li><img  src='"+dataArr[i].imgUrl+"'/><p>"+dataArr[i].content+"</p><p><span>价格"+dataArr[i].price+"</span>.00</p><p>人气"+dataArr[i].peopleLove+"</p></li>"
	$(".canping ul").append(newLi);
	}
	
}
function clear(){
	$(".canping ul li").remove();
}


