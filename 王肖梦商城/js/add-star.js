//添加星星
function addStar(Id,starNum){
	for (var i = 0; i<5; i++) {	
		var starImg = "<img src='img/dianpushouye/xingxing.png'/>";
		if(i>starNum){
		 var starImg = "<img src='img/dianpushouye/xingxing2.png'/>";
		}
	     Id.append(starImg);
	}
}