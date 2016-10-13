$(document).ready(function(e) {
	
	//根据滚动条来设置右侧信息位置固定
	xlc.setFixed(".js_fixed");
	
	//上一个鼠标移入效果
	$("#js_last").mousemove(function(e) {
		var e = e || window.event;
		var mousex = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft ;
		var mousey = e.clientY + document.body.scrollTop + document.documentElement.scrollTop ;
		
		$("#js_lastcase").show().css({
			"left": mousex - 270, 
			"top" : mousey + 10
		});
    }).mouseleave(function(e) {
        $("#js_lastcase").hide();
    });
	
	//下一个鼠标移入效果
	$("#js_next").mousemove(function(e) {
		var e = e || window.event;
		var mousex = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft ;
		var mousey = e.clientY + document.body.scrollTop + document.documentElement.scrollTop ;
		
		$("#js_nextcase").show().css({
			"left": mousex - 270, 
			"top" : mousey + 10
		});
        $("#js_lastcase").hide();
    }).mouseleave(function(e) {
        $("#js_nextcase").hide();
    });;
	
});