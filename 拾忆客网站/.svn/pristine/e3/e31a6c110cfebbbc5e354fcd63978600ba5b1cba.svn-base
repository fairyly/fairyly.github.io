/*-----------------------------------------------
 *author: muzilei
 *blog: http://www.muzilei.com/
 *email: 530624206@qq.com
 ----------------------------------------------*/
(function($){
 $.fn.niceForm = function(options){

    //创建一些默认值
    var settings = $.extend({
 		eventType:'click',
		change:function(){}
      },options);
	  
	return this.each(function(){
  	 $.fn.niceForm.init(this,settings);	
 	 });
     
  };
  
 
 //菜单初始化函数
 $.fn.niceForm.init=function(obj,settings){
	 $(obj).wrap("<div class='select-nice' id='nice-"+obj.id+"'></div>");
	 
	 var op=$(obj).find("option"),box=$("#nice-"+obj.id),ht="",defval=box.find("[selected='selected']"),de=null,retval="";
 	 
	 de=!defval.size()?op.eq(0):defval;
	 
	 if($(obj).attr("multiple")=="multiple"){
		op.each(function(index, element) {
            var t=$(this).text();
			$(this).text(t+" ");
        });
		
		de.each(function(){
			retval+=$(this).attr("value")+",";
			});
		retval=retval.substr(0,retval.length-1);	
		
 		 }else{
			 retval=de.attr("value");
			 }
 		 
	 ht+="<div class='select-nice-box'><span data-value='"+retval+"'>"+de.text()+"</span><s></s></div>";
	 ht+="<ul class='select-nice-option'>";
	 for(var i=1;i<op.length;i++){
		 var t=op.eq(i);
		 var claStr=t.is(defval)?"selected":"";
		 var mult=$(obj).attr("multiple")=="multiple"?"<i></i>":"";
		 
		 ht+="<li data-value='"+t.attr("value")+"' class='"+claStr+"'><span>"+mult+t.text()+"</span></li>";
 		 
 		 }
	 ht+="</ul>";
 	 
	 box.prepend($(ht));
	 
	 //计算每个select的值
	 var i=$("select").size();
	 $(".select-nice").each(function(index, element) {
        $(this).css({"z-index":i,"width":$(this).find("select").attr("data-width")});
		i=i-1;
      });
	 
	 //如果是多选添加多选状态	  
	 if($(obj).attr("multiple")=="multiple"){
		$(obj).parent().find("ul").addClass("multiple");
		 } 
	 
	 var niceBox= box.find(".select-nice-box"),
	     niceLi=box.find("ul>li");
		 
	 //单击出现下拉框
	 niceBox
	 .live(settings.eventType,function(event){
		 event.stopPropagation();
		 
		 var next=$(this).next("ul");
		 if(next.is(":hidden")){
		 next.width($(this).width()).show();
		 }else{
			 next.hide();
			 }
			 
		//隐藏其余下拉菜单
		$(".select-nice-option").not(next).hide();	 
		 });
	
	//鼠标经过下拉框选项效果
	niceLi
	.hover(function(){
		$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		})
	//单击选中	
	.live("click",function(event){
 		
		//如果是单选
		if(!$(this).parent().hasClass("multiple")){
		
		niceLi.removeClass("selected");
		$(this).addClass("selected");
		niceBox.find("span").text($(this).find("span").text()).attr("data-value",$(this).attr("data-value"));
 		
		var i=niceLi.index($(this));
		op.attr("selected",false);
		op.eq(i+1).attr("selected","selected");
		
		//如果是多选
		}else{
			event.stopPropagation();
						
			var i=niceLi.index($(this));
 			
			if(!$(this).hasClass("selected")){
			$(this).addClass("selected");
			op.eq(i+1).attr("selected","selected");
			}else{
				$(this).removeClass("selected");
				op.eq(i+1).attr("selected",false);
				}
				
			var p=$(this).parent(".select-nice-option"),de=p.find("li.selected"),retval="";
			
			de.each(function(){
			retval+=$(this).attr("data-value")+",";
			});
			
			de=de.size()?de:op.eq(0);
			
		    retval=retval.length?retval.substr(0,retval.length-1):op.eq(0).attr("value");
		     
			niceBox.find("span").text(de.text()).attr("data-value",retval);
            p.width(niceBox.width());
			}
  		
		settings.change();
		});	
	
	//单击空白处隐藏下拉菜单
	$(document).click(function(){
		$(".select-nice-option").hide();
		});
 		
	 }; 
  
})(jQuery);