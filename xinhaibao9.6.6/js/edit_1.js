$(function(){
	var $cw=document.documentElement.clientWidth;
	var $ch=document.documentElement.clientHeight;
	$(".start img").css("width",$cw);
	$(".start img").css("height",$ch);
	// $(".st333").click(function(){
	// 	$(".start").hide();
	// 	$(".first").show();

	// });
	console.log("屏幕宽高为："+screen.width+"*"+screen.height);
    // $(".swiper-wrapper").find("div").eq(0).click(function(){
    //   console.log("第一个");
    //   console.log($(".title1 p").length);
    //  $("body").css("background","none")
    //   $(".more").hide();
    //   $(".swiper-container").hide();
    //   $(".edit1").show();
    //   console.log($(".edit1").css("width"));
    //   console.log($(".edit1").css("height"));
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
      					// $(".up1").hide();
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
					// $(".up2").hide();
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
			$(".shengcheng").click(function(){
                
                $(".shengcheng").hide();
                // $(".edit1").show();
                $(".up1").hide();
                $(".up2").hide();
                $(".header").hide();
                $("body").css("background","none");
                html2canvas($("body"), {
                        allowTaint: true,
                        taintTest: false,
                        onrendered: function(canvas) {
          //               	var extra_canvas = document.createElement("canvas");
						    // extra_canvas.setAttribute('width',700);
						    // extra_canvas.setAttribute('height',713);

						    //获取屏幕像素比
						   // var ctx = canvas.getContext('2d');
         //                        var getPixelRatio = function(context) {
					    //             var backingStore = context.backingStorePixelRatio ||
					    //                 context.webkitBackingStorePixelRatio ||
					    //                 context.mozBackingStorePixelRatio ||
					    //                 context.msBackingStorePixelRatio ||
					    //                 context.oBackingStorePixelRatio ||
					    //                 context.backingStorePixelRatio || 1;
					    //             return (window.devicePixelRatio || 1) / backingStore;
					    //         };
					    //         var ratio = getPixelRatio(ctx);
					    //          console.log(ratio);

					    //          var iw=canvas.width*ratio;
					    //          var ih=canvas.height*ratio;
						   //  ctx.drawImage(canvas,0,0,iw, ih,0,0,iw,ih);
                            // canvas.id = "mycanvas";
                            //document.body.appendChild(canvas);
                            //生成base64图片数据
                            $(".header").show();
                            $(".baocun").show();
                            var dataUrl = canvas.toDataURL("image/jpeg");
                            $.ajax({  
	                            type : "POST",  
	                            url : '1.php',  
	                            data : {data:dataUrl},  
	                            timeout : 60000,  
	                            success : function(data){  
	                                // console.log(data);
	                                
	                                var src=data;
	                                // $('#myShowImage').attr('src', '${ctxStatic}/images/'+data+'.jpg'); //服务器上保存图片路径，data是返回的文件名。  
	                                $(".baocunimg img").attr("src",src) ;
	                            }  
	                        });  
                            // $(".baocunimg img").attr("src",dataUrl) ;
                            $(".edit1").hide();
                        }
                });
    		});
    		//生成第一个页面结束
   // });
    //第一页结束
     // $(".swiper-slide").eq(1).click(function(){
     //  console.log("第二个");
     
     //  $(".more").hide();
     //  $(".swiper-container").hide();
     //  $(".edit1").hide();
     //  $(".edit2").show();
     //  console.log($(".edit2").css("width"));
     //  console.log($(".edit2").css("height"));
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
					// $(".up3").hide();
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
					// $(".up4").hide();
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
			$(".shengcheng2").click(function(){
                
                $(".shengcheng2").hide();
                // $(".edit2").show();
                $(".up3").hide();
                $(".up4").hide();
                $(".header").hide();
                $("body").css("background","none");
                html2canvas($("body"), {
                        allowTaint: true,
                        taintTest: false,
                        onrendered: function(canvas) {
                            canvas.id = "mycanvas";
                            //document.body.appendChild(canvas);
                            //生成base64图片数据
                            $(".header").show();
                            $(".baocun").show();
                            var dataUrl = canvas.toDataURL("image/png");
                             $.ajax({  
	                            type : "POST",  
	                            url : '1.php',  
	                            data : {data:dataUrl},  
	                            // timeout : 60000,  
	                            success : function(data){  
	                                // console.log(data);
	                                // $('#myShowImage').attr('src', '${ctxStatic}/images/'+data+'.jpg'); //服务器上保存图片路径，data是返回的文件名。  
	                                $(".baocunimg img").attr("src",data) ;

	                            }  
	                        });  
                            // $(".baocunimg img").attr("src",dataUrl) ;
                            $(".edit2").hide();
                        }
                });

    		});
    		//生成第二个页面结束
    // });
    //第二页结束
    // $(".swiper-slide").eq(2).click(function(){
    //   console.log("第三个");
    //   $(".more").hide();
    //   $(".swiper-container").hide();
    //   $(".edit1").hide();
    //   $(".edit2").hide();
    //   $(".edit3").show();
    //   console.log($(".edit3").css("width"));
    //   console.log($(".edit3").css("height"));
     		 $("#upfile5").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile5").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
					console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".m3 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					// $(".up5").hide();
				}
			});
     		 $("#upfile6").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile6").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
					console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".con33 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					// $(".up6").hide();
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
			$(".shengcheng3").click(function(){
                
                $(".shengcheng3").hide();
                // $(".edit3").show();
                $(".up5").hide();
                $(".up6").hide();
                $(".header").hide();
                $("body").css("background","none");
                html2canvas($("body"), {
                        allowTaint: true,
                        taintTest: false,
                        onrendered: function(canvas) {
                            canvas.id = "mycanvas";
                            //document.body.appendChild(canvas);
                            //生成base64图片数据
                            $(".header").show();
                            $(".baocun").show();
                            var dataUrl = canvas.toDataURL("image/png");
                             $.ajax({  
	                            type : "POST",  
	                            url : '1.php',  
	                            data : {data:dataUrl},  
	                            // timeout : 60000,  
	                            success : function(data){  
	                                // console.log(data);
	                                // $('#myShowImage').attr('src', '${ctxStatic}/images/'+data+'.jpg'); //服务器上保存图片路径，data是返回的文件名。  
	                                $(".baocunimg img").attr("src",data) ;
	                            }  
	                        });  
                            // $(".baocunimg img").attr("src",dataUrl) ;
                            $(".edit3").hide();
                        }
                });
    		});
    		//生成第三个页面结束
    // });
    //第三页结束
    $("#edit4_upfile7").change(function(){
        var objUrl = getObjectURL(this.files[0]) ;
                 var file = document.getElementById("edit4_upfile7").files;
            console.log(file);
            console.log(file[0].size);
            console.log(file[0].type);
            console.log(file[0].name);
          console.log("objUrl = "+objUrl) ;
        if (objUrl) {
          $(".edit4_m3 img").attr("src", objUrl) ;
          // $(".indexone").hide();
          // $(".xianshi").show();
          // $(".up5").hide();
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
      $(".shengcheng4").click(function(){
                
                $(".shengcheng4").hide();
                // $(".edit3").show();
                $(".edit4_up7").hide();
                $(".header").hide();
                $("body").css("background","none");
                html2canvas($(".edit4_con"), {
                        allowTaint: true,
                        taintTest: false,
                        onrendered: function(canvas) {
                            canvas.id = "mycanvas";
                            //document.body.appendChild(canvas);
                            //生成base64图片数据
                            $(".header").show();
                            $(".baocun").show();
                            var dataUrl = canvas.toDataURL("image/png");
                             $.ajax({  
                              type : "POST",  
                              url : '1.php',  
                              data : {data:dataUrl},  
                              // timeout : 60000,  
                              success : function(data){  
                                  // console.log(data);
                                  // $('#myShowImage').attr('src', '${ctxStatic}/images/'+data+'.jpg'); //服务器上保存图片路径，data是返回的文件名。  
                                  $(".baocunimg img").attr("src",data) ;
                              }  
                          });  
                            // $(".baocunimg img").attr("src",dataUrl) ;
                            $(".edit4").hide();
                        }
                });
        });
    // 第四个页面结束
    $("#edit5_upfile8").change(function(){
        var objUrl = getObjectURL(this.files[0]) ;
                 var file = document.getElementById("edit5_upfile8").files;
            console.log(file);
            console.log(file[0].size);
            console.log(file[0].type);
            console.log(file[0].name);
          console.log("objUrl = "+objUrl) ;
        if (objUrl) {
          $(".edit5_m3 img").attr("src", objUrl) ;
          // $(".indexone").hide();
          // $(".xianshi").show();
          // $(".up5").hide();
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
      $(".shengcheng5").click(function(){
                
                $(".shengcheng5").hide();
                // $(".edit3").show();
                $(".edit5_up8").hide();
                $(".header").hide();
                $("body").css("background","none");
                html2canvas($(".edit5_con"), {
                        allowTaint: true,
                        taintTest: false,
                        onrendered: function(canvas) {
                            canvas.id = "mycanvas";
                            //document.body.appendChild(canvas);
                            //生成base64图片数据
                            $(".header").show();
                            $(".baocun").show();
                            var dataUrl = canvas.toDataURL("image/png");
                             $.ajax({  
                              type : "POST",  
                              url : '1.php',  
                              data : {data:dataUrl},  
                              // timeout : 60000,  
                              success : function(data){  
                                  // console.log(data);
                                  // $('#myShowImage').attr('src', '${ctxStatic}/images/'+data+'.jpg'); //服务器上保存图片路径，data是返回的文件名。  
                                  $(".baocunimg img").attr("src",data) ;
                              }  
                          });  
                            // $(".baocunimg img").attr("src",dataUrl) ;
                            $(".edit5").hide();
                        }
                });
        });
    //第五个页面结束
    // $(".more").click(function(){
    // 	// $(".more").hide();
    //  //    $(".swiper-container").hide();
    //  //    $(".editmore").show();
    //  window.location.href="index_more.html";
    // });
    //模板页结束
    // $(".conshengcheng h3").click(function(){
    // 	window.location.href="index1.html";
    // });
    //<!-- 添加touch事件 -->
//<script type="text/javascript">
       // 获取节点
      // var block = document.getElementById("m1");
      // var oW,oH;
      // // 绑定touchstart事件
      // block.addEventListener("touchstart", function(e) {
      //  console.log(e);
      //  var touches = e.touches[0];
      //  oW = touches.clientX - block.offsetLeft;
      //  oH = touches.clientY - block.offsetTop;
      //  //阻止页面的滑动默认事件
      //  document.addEventListener("touchmove",defaultEvent,false);
      // },false)
     
      // block.addEventListener("touchmove", function(e) {
      //  var touches = e.touches[0];
      //  var oLeft = touches.clientX - oW;
      //  var oTop = touches.clientY - oH;
      //  if(oLeft < 0) {
      //   oLeft = 0;//改过-150
      //  }else if(oLeft > document.documentElement.clientWidth - block.offsetWidth) {
      //   oLeft = (document.documentElement.clientWidth - block.offsetWidth);
      //  }
      //  block.style.left = oLeft + "px";
      //  block.style.top = oTop + "px";
      // },false);
       
      // block.addEventListener("touchend",function() {
      //  document.removeEventListener("touchmove",defaultEvent,false);
      // },false);
      // function defaultEvent(e) {
      //  e.preventDefault();
      // }
    //</script>
    //<script type="text/javascript">
      // 获取节点
      // var block2 = document.getElementById("mm2");
      // var oW2,oH2;
      // // 绑定touchstart事件
      // block2.addEventListener("touchstart", function(e) {
      //  console.log(e);
      //  var touches = e.touches[0];
      //  oW2 = touches.clientX - block2.offsetLeft;
      //  oH2 = touches.clientY - block2.offsetTop;
      //  //阻止页面的滑动默认事件
      //  document.addEventListener("touchmove",defaultEvent,false);
      // },false)
     
      // block2.addEventListener("touchmove", function(e) {
      //  var touches = e.touches[0];
      //  var oLeft = touches.clientX - oW2;
      //  var oTop = touches.clientY - oH2;
      //  if(oLeft < 0) {
      //   oLeft = 0;
      //  }else if(oLeft > document.documentElement.clientWidth - block2.offsetWidth) {
      //   oLeft = (document.documentElement.clientWidth - block2.offsetWidth);
      //  }
      //  block2.style.left = oLeft + "px";
      //  block2.style.top = oTop + "px";
      // },false);
       
      // block2.addEventListener("touchend",function() {
      //  document.removeEventListener("touchmove",defaultEvent,false);
      // },false);
      // function defaultEvent(e) {
      //  e.preventDefault();
      // }
   // </script>
   // <script type="text/javascript">
      // 获取节点
      // var block3 = document.getElementById("m3");
      // var oW3,oH3;
      // // 绑定touchstart事件
      // block3.addEventListener("touchstart", function(e) {
      //  console.log(e);
      //  var touches = e.touches[0];
      //  oW3 = touches.clientX - block3.offsetLeft;
      //  oH3 = touches.clientY - block3.offsetTop;
      //  //阻止页面的滑动默认事件
      //  document.addEventListener("touchmove",defaultEvent,false);
      // },false)
     
      // block3.addEventListener("touchmove", function(e) {
      //  var touches = e.touches[0];
      //  var oLeft = touches.clientX - oW3;
      //  var oTop = touches.clientY - oH3;
      //  if(oLeft < 0) {
      //   oLeft = 0;
      //  }else if(oLeft > document.documentElement.clientWidth - block3.offsetWidth) {
      //   oLeft = (document.documentElement.clientWidth - block3.offsetWidth);
      //  }
      //  block3.style.left = oLeft + "px";
      //  block3.style.top = oTop + "px";
      // },false);
       
      // block3.addEventListener("touchend",function() {
      //  document.removeEventListener("touchmove",defaultEvent,false);
      // },false);
      // function defaultEvent(e) {
      //  e.preventDefault();
      // }
   // </script>
    //<!-- 拖动-->
   //  <script type="text/javascript">
    //     // 获取节点
    //   touch.on('#mm2', 'touchstart', function(ev){
    //         ev.preventDefault();
    //     });

    //     var target = document.getElementById("mm2");
    //     var dx, dy;

    //     touch.on('#mm2', 'drag', function(ev){
    //         dx = dx || 0;
    //         dy = dy || 0;
    //         console.log("当前x值为:" + dx + ", 当前y值为:" + dy +".");
    //         var offx = dx + ev.x + "px";
    //         var offy = dy + ev.y + "px";
    //         this.style.webkitTransform = "translate3d(" + offx + "," + offy + ",0)";
    //     });

    //     touch.on('#mm2', 'dragend', function(ev){
    //         dx += ev.x;
    //         dy += ev.y;
    //     });
    //</script>
    //<script type="text/javascript">
      //   // 获取节点
      // touch.on('#m3', 'touchstart', function(ev){
      //       ev.preventDefault();
      //   });

      //   var target3 = document.getElementById("m3");
      //   var dx3, dy3;

      //   touch.on('#m3', 'drag', function(ev){
      //       dx3 = dx3 || 0;
      //       dy3 = dy3 || 0;
      //       console.log("当前x值为:" + dx3 + ", 当前y值为:" + dy3 +".");
      //       var offx = dx3 + ev.x + "px";
      //       var offy = dy3 + ev.y + "px";
      //       this.style.webkitTransform = "translate3d(" + offx + "," + offy + ",0)";
      //   });

      //   touch.on('#m3', 'dragend', function(ev){
      //       dx3 += ev.x;
      //       dy3 += ev.y;
      //   });
    //</script>
   // <!-- 监听手势 缩放-->
   // <script type="text/javascript">
   //          var target1 = document.getElementById("m1");
   //          target1.style.webkitTransition = 'all ease 0.05s';

   //          touch.on('#m1', 'touchstart', function(ev){
   //              ev.preventDefault();
   //          });

   //          var initialScale = 1;
   //          var currentScale;

   //          touch.on('#m1', 'pinchend', function(ev){
   //              currentScale = ev.scale - 1;
   //              console.log(currentScale);
   //              currentScale = initialScale + currentScale;
   //              currentScale = currentScale > 2 ? 2 : currentScale;
   //              currentScale = currentScale < 1 ? 1 : currentScale;
   //              this.style.webkitTransform = 'scale(' + currentScale + ')';
   //              console.log("当前缩放比例为:" + currentScale + ".");
   //          });

   //          touch.on('#m1', 'pinchend', function(ev){
   //              initialScale = currentScale;
   //          });
   // // </script>
   //  //<script type="text/javascript">
   //          var target2 = document.getElementById("mm2");
   //          target2.style.webkitTransition = 'all ease 0.05s';

   //          touch.on('#mm2', 'touchstart', function(ev){
   //              ev.preventDefault();
   //          });

   //          var initialScale = 1;
   //          var currentScale;

   //          touch.on('#mm2', 'pinchend', function(ev){
   //              currentScale = ev.scale - 1;
   //              console.log(currentScale);
   //              currentScale = initialScale + currentScale;
   //              currentScale = currentScale > 2 ? 2 : currentScale;
   //              currentScale = currentScale < 1 ? 0.5 : currentScale;
   //              this.style.webkitTransform = 'scale(' + currentScale + ')';
   //              console.log("当前缩放比例为:" + currentScale + ".");
   //          });

   //          touch.on('#mm2', 'pinchend', function(ev){
   //              initialScale = currentScale;
   //          });
    //</script>
   // <script type="text/javascript">
            // var target33 = document.getElementById("m3");
            // target33.style.webkitTransition = 'all ease 0.05s';

            // touch.on('#m3', 'touchstart', function(ev){
            //     ev.preventDefault();
            // });

            // var initialScale = 1;
            // var currentScale;

            // touch.on('#m3', 'pinchend', function(ev){
            //     currentScale = ev.scale - 1;
            //     currentScale = initialScale + currentScale;
            //     currentScale = currentScale > 2 ? 2 : currentScale;
            //     currentScale = currentScale < 1 ? 1 : currentScale;
            //     this.style.webkitTransform = 'scale(' + currentScale + ')';
            //     console.log("当前缩放比例为:" + currentScale + ".");
            // });

            // touch.on('#m3', 'pinchend', function(ev){
            //     initialScale = currentScale;
            // });
    //</script>
    
});