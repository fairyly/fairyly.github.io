$(function(){
    $("#iSlider-wrapper li").eq(1).click(function(){
      console.log("第二个");
      $("#iSlider-wrapper").hide();
      $(".more").hide();
      $("ul.dot1").hide();
      $(".edit1").show();
      console.log("第二个");
	       $("#upfile").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
				console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".m1 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					$(".up1").hide();
				}
			});
	       $("#upfile2").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile2").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
				console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".m2 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					$(".up2").hide();
				}
			});
	        
	       //建立一个可存取到该file的url
			function getObjectURL(file) {
				var url = null ; 

				if (window.createObjectURL!=undefined) { // basic
					url = window.createObjectURL(file) ;
				} else if (window.URL!=undefined) { // mozilla(firefox)
					url = window.URL.createObjectURL(file) ;
				} else if (window.webkitURL!=undefined) { // webkit or chrome
					url = window.webkitURL.createObjectURL(file) ;
				}
				return url ;
			}
    });
    //第一页结束
     $("#iSlider-wrapper li").eq(2).click(function(){
      console.log("第二个");
      $("#iSlider-wrapper").hide();
      $(".more").hide();
      $("ul.dot1").hide();
      $(".edit1").hide();
      $(".edit2").show();
     		 $("#upfile3").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile3").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
				console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".mm2 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					$(".up3").hide();
				}
			});
     		 $("#upfile4").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile4").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
				console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".mm22 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					$(".up4").hide();
				}
			});
     		 //建立一个可存取到该file的url
			function getObjectURL(file) {
				var url = null ; 

				if (window.createObjectURL!=undefined) { // basic
					url = window.createObjectURL(file) ;
				} else if (window.URL!=undefined) { // mozilla(firefox)
					url = window.URL.createObjectURL(file) ;
				} else if (window.webkitURL!=undefined) { // webkit or chrome
					url = window.webkitURL.createObjectURL(file) ;
				}
				return url ;
			}
    });
    //第二页结束
    $("#iSlider-wrapper li").eq(0).click(function(){
      console.log("第三个");
      $("#iSlider-wrapper").hide();
      $(".more").hide();
      $("ul.dot1").hide();
      $(".edit1").hide();
      $(".edit2").hide();
      $(".edit3").show();
   //   		 $("#upfile3").change(function(){
			// 	var objUrl = getObjectURL(this.files[0]) ;
	  //              var file = document.getElementById("upfile3").files;
			// 	    console.log(file);
			// 	    console.log(file[0].size);
			// 	    console.log(file[0].type);
			// 	    console.log(file[0].name);
			// 	console.log("objUrl = "+objUrl) ;
			// 	if (objUrl) {
			// 		$(".mm2 img").attr("src", objUrl) ;
			// 		// $(".indexone").hide();
			// 		// $(".xianshi").show();
			// 		$(".up3").hide();
			// 	}
			// });
   //   		 $("#upfile4").change(function(){
			// 	var objUrl = getObjectURL(this.files[0]) ;
	  //              var file = document.getElementById("upfile4").files;
			// 	    console.log(file);
			// 	    console.log(file[0].size);
			// 	    console.log(file[0].type);
			// 	    console.log(file[0].name);
			// 	console.log("objUrl = "+objUrl) ;
			// 	if (objUrl) {
			// 		$(".mm22 img").attr("src", objUrl) ;
			// 		// $(".indexone").hide();
			// 		// $(".xianshi").show();
			// 		$(".up4").hide();
			// 	}
			// });
   //   		 //建立一个可存取到该file的url
			// function getObjectURL(file) {
			// 	var url = null ; 

			// 	if (window.createObjectURL!=undefined) { // basic
			// 		url = window.createObjectURL(file) ;
			// 	} else if (window.URL!=undefined) { // mozilla(firefox)
			// 		url = window.URL.createObjectURL(file) ;
			// 	} else if (window.webkitURL!=undefined) { // webkit or chrome
			// 		url = window.webkitURL.createObjectURL(file) ;
			// 	}
			// 	return url ;
			// }
    });
    //第三页结束
});