//实例化数组,存放图片途径
    var arr=new Array;
    arr[0]="images/banner1.jpg";
    arr[1]="images/banner2.jpg";
    arr[2]="images/banner3.jpg";
    arr[3]="images/banner4.jpg";
    var count=0;
    //切换图片
    function autoPlay(){
    	if (arr.length==count) 
    		count=0;
    	document.getElementById("banner1").src=arr[count];
    	count++;
    }
    //定时器
   var timer=setInterval(autoPlay,2500);
    //清除定时器
   function clearTimer(){
   	clearInterval(timer);

   }
//鼠标悬停效果
   function showbannerbyid(num){
   	clearTimer();
   	var index=parseInt(num);
   	document.getElementById("banner1").src=arr[index-1];
   	count=index;

   }
   //鼠标离开效果
   function btnMouseout(){
   	    timer=setInterval(autoPlay,2000);
   }