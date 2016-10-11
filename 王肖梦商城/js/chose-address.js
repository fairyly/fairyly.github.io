$(".set-address").on("touchstart",function () {
	$(".address-wrap").show();
	$(".address-wrap").animate({
		"left":"0%",
	},500);
	chosePro();
	display();
	moRen();
})
function moRen(){
	$(".provence").css("display", "block");
	$(".add-line").animate({
		"left":"29.5%"
	},500)
	$(this).css("color","#C44B5E");
}
$(".address-back,.close").on("touchstart",function () {
	$(".address-wrap").animate({
		"left":"100%",
	},500);
	$(".address").html($("#proname").html()+$("#cityname").html()+$("#areaname").html())
})
chosePro();	
$("#proname").on("touchstart", function() {
	moRen();
})
function display(){
	$(".provence,.city,.area").css("display", "none");
	$(".chose-address span").css("color","#16171A")
}
function chosePro() {
	var html = "";
	var provLeng = provinceList.length;
	for(var i = 0; i < provLeng; i++) {
		html += "<li>" + provinceList[i].name + "</li>";
	}
	$(".provence").html(html);
	$(".provence li").on("touchstart", function() {
		var provIndex = $(this).index(".provence li");
		$("#proname").html($(this).html());
		choseCity(provIndex);
		$("#cityname").on("touchstart", function() {
		display();
		$(".city").css("display", "block");
		$(".add-line").animate({
		"left":"52%"
	},500);
	$(this).css("color","#C44B5E");
	})
	})
	
}
function choseCity(provIndex) {
	var html = "";
	var city = provinceList[provIndex].cityList;
	var cityLeng = city.length;
	for(var i = 0; i < cityLeng; i++) {
		html += "<li>" + city[i].name + "</li>";
	}
	$(".city").html(html);
	$(".city li").on("touchstart", function() {
		var cityIndex = $(this).index(".city li");
		$("#cityname").html($(this).html());
		choseArea(provIndex, cityIndex);
	    $("#areaname").on("touchstart", function() {
		display();
		$(".area").css("display", "block");
		$(".add-line").animate({
		"left":"73%"
	},500)
   $(this).css("color","#C44B5E");
	})
	})
	
}
function choseArea(provIndex, cityIndex) {
	var area = provinceList[provIndex].cityList[cityIndex].areaList;
	var areaLeng = area.length;
	var html = "";

	for(var i = 0; i < areaLeng; i++) {
		html += "<li>" + area[i] + "</li>";
	}
	$(".area").html(html);
	$(".area li").on("touchstart", function() {
		$("#areaname").html($(this).html())
	})
}

