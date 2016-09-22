	 //实例化数组,存放图片途径
    var arr1=new Array;
    arr1[0]="images/banner1.jpg";
    arr1[1]="images/banner2.jpg";
    arr1[2]="images/banner3.jpg";
    arr1[3]="images/banner4.jpg";
    var count1=0;
    //切换图片
    function autoPlay(){
    	if (arr1.length==count1) 
    		count1=0;
    	document.getElementById("l-banner1").src=arr1[count1];
    	count1++;
    }
    //定时器
   var ti=setInterval(autoPlay,2500);
    //清除定时器
   function clearTimer(){
   	clearInterval(ti);

   }
//鼠标悬停效果
   function lshowbannerbyid(num){
   	clearTimer();
   	var index1=parseInt(num);
   	document.getElementById("l-banner1").src=arr1[index1-1];
   	count1=index1;

   }
   //鼠标离开效果
   function lbtnMouseout(){
   	    ti=setInterval(autoPlay,2000);
   }