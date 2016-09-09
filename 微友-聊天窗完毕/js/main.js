$(document).ready(function(){
    function lt(){
			 /*数据循环*/	
			var ins=$(".footer_input input").val();
	        $(".box").last().after('<div class="box"><div class="box_right"><p></p><i></i><span>'+ins+'</span></div></div>') 
 			var lengs=$(".box span").length-1;
			$(".box span").css("marginBottom","15px");
			$(".box span").eq(lengs).css("marginBottom","20px");
     	
	};	 
	 $(".inputbutton").click(function(){
		 lt()
         tm()
		 $(".footer_input input").val("");
	})  
	   function tm(){
		var s=$('.content')[0].scrollHeight;
		$(".content").animate({"scrollTop":s},400)
       }   
})