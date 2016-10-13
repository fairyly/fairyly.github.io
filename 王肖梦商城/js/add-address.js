//判断电话	
$("#phone").focus(function(){
	$("#phone").blur(function(){
		checkTele();    
   })
})
$(".save").on("touchstart",function(){

//checkTele();
  checkIsok();
if (isTelOk&&isNameOk&&isAddressOk&&isChoseAdd) {
	  	//所有的都设置对了	  
		 var	 address = {
	            	name:$(".name").val(),
	            	telephone:rellayTel,
	            	choseAddress:$(".address input").val(),
	            	address: $(".del-add").val(),	            	
	            	isDft: ischeck,	         	                  
			  }	          
		   if (ischeck) {//如果是默认地址		   	
		   	 localStorage["defAddress"] =JSON.stringify(address);
		   }
		     allAdress.push(address);
		     localStorage["allAdress"] = JSON.stringify(allAdress);
		     history.back()
	  }	
})

//网页跳转
console.log(allAdress)