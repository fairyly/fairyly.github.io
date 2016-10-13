//获取数据
var allAdress = JSON.parse(localStorage["allAdress"]);
var index =  localStorage["addressIndex"];
console.log(allAdress);
console.log(index);
$(".name").val(allAdress[index].name);
$("#phone").val(allAdress[index].telephone);
$(".chose-address").val(allAdress[index].choseAddress);
$(".del-add").val(allAdress[index].address) ;
var ischeck = allAdress[index].isDft;
rightLeft(ischeck);

$(".save").on("touchstart",function(){
	allAdress[index].name=$(".name").val();
	allAdress[index].telephone = $("#phone").val();
	allAdress[index].choseAdress=$(".chose-address").val();
	allAdress[index].address= $(".del-add").val();
	localStorage["allAdress"] = JSON.stringify(allAdress);
   checkTele();
   checkIsok();
   
  if (isTelOk&&isNameOk&&isAddressOk) {
  	console.log("hahahhaha ")
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
		    history.back();
	  }	
})
$(".delect").on("touchstart",function(){
	allAdress.splice(index,1);
	localStorage["allAdress"] = JSON.stringify(allAdress);
	$(".name").val("");
	$("#phone").val("");
	$(".chose-address").val("");
	$(".del-add").val("") ;
})