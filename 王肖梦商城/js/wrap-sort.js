
$("ul li").on("touchstart",function(){
   for (var i = 0; i <$(".nav li").length; i++) {
   	$("ul li").eq(i).css(
   		{
		"background-color":"#ECECEC",
		"border-left":"none"		
		})
   	  $(".submenu").eq(i).removeClass("show");	
   	  $(".submenu").eq(i).addClass("hidden");	
   	  	
   }	
		
	$(this).css({
		"background-color":"#FFFFFF",
		"border-left":"3px solid #EF0000"		
		});
		
	var index = $(this).index();
    $(".submenu").eq(index).removeClass("hidden");
	$(".submenu").eq(index).addClass("show");		
})

