$(function(){
	// $(".rilicontent").glDatePicker();
	$(".today").click(function(){
		$(".qdsuccess").show();
		$(".qdsuccess").click(function(){
			$(".qdsuccess").hide();
			$(".yqd").show();
			$(".today").css("color","#bebdbd");
		})
	});
});