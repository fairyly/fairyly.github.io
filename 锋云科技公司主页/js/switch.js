(function(){

window.Dom=Dom=
{	
	addEvent:function(s,fn){this.attachEvent?this.attachEvent('on'+s,fn):this.addEventListener(s,fn,false);return this;},//添加事件[事件(要去掉前面的on),方法]
	delEvent:function(s,fn){this.detachEvent?this.detachEvent('on'+s,fn):this.removeEventListener(s,fn,false);return this;},//删除事件[事件(要去掉前面的on),方法]
	addDom:function(node,tag,first){var o=node.createElement(tag);first?node.insertBefore(o,node.firstChild):node.appendChild(o);return o;},//创建子节点[节点，要创建的TAG，插入位置]
	delDom:function(node,obj){node.removeChild(obj);},//删除子节点[父节点，要删除节点]
	addImg:function(url){var img=new Image();img.src=url;return img;},//创建缓存图片[图片地址]
	winh:function(){return Math.min(document.documentElement.clientHeight,document.body.clientHeight);},//返回浏览器可用高
	mouseX:function(event){return (event.pageX || (event.clientX +l(document)));},//返回鼠标的X座标
	mouseY:function(event){return (event.pageY || (event.clientY +t(document)));}//返回鼠标的Y座标
}
Fun.xcopy(Dom,Element);

})();

window.Effect=
{

	//滚动/切屏效果，[id,子容器/孙容器,方向,速度,上按钮,下按钮,分页切换时间,每次切屏的条数]
	HtmlMove:function(id,tag,path,rate,upbt,downbt,pgtime,lis)
	{
		var c,mous=false,fg=tag.split('/'),o=$(id),as=o.find(fg[1]),fx=(path=="scrollRight"||path=="scrollLeft")?"scrollLeft":"scrollTop",ow=fx=="scrollTop"?as[0].h():as[0].w();
		o.onmouseover=function(){mous=true;};o.onmouseout=function(){mous=false;}
		if(pgtime==null)
		{
			var mx=ow*as.length,mi=0,oldra=rate,os=o.find(fg[0])[0];os.innerHTML+=os.innerHTML;
			if(upbt){$(upbt).onmousedown=function(){down();rate+=3;};$(upbt).onmouseup=function(){rate=oldra;};}
			if(downbt){$(downbt).onmousedown=function(){up();rate+=3;};$(downbt).onmouseup=function(){rate=oldra;};}
			function up(){clearInterval(c);c=setInterval(function(){if(mous){return;}(o[fx]-rate>0)?(o[fx]-=rate):(o[fx]=mx);},30);}
			function down(){clearInterval(c);c=setInterval(function(){if(mous){return;}(o[fx]+rate<mx)?(o[fx]+=rate):(o[fx]=0);},30);}
			if(path=="scrollTop"||path=="scrollLeft"){down();}else{up();}
		}
		else
		{
			var pw=fx=="scrollTop"?o.h():o.w(),pgli=lis||Math.floor((pw+ow/2)/ow),pg=Math.floor((as.length+(pgli-1))/pgli),pgmx=ow*pgli,now=0,mx,d;
			var os=o.find(fg[0])[0];os.innerHTML+=os.innerHTML;d=setInterval(function(){go_to((path=="scrollTop"||path=="scrollLeft")?true:false);},pgtime);
			if(upbt){$(upbt).onmousedown=function(){clearInterval(d);go_to(true);d=setInterval(function(){go_to(true);},pgtime);}}
			if(downbt){$(downbt).onmousedown=function(){clearInterval(d);go_to(false);d=setInterval(function(){go_to(false);},pgtime);}}
			if(fg[2]){var pf=o.find(fg[2])[0];};function pfs(vs){if(fg[2]){pf.style.display="block";pf.style.left=vs+"px";}};function pfscl(){if(fg[2]){pf.style.display="none";}}
			function go_to(fxs)
			{
				if(mous){return;};var ex;
				if(fxs){if(now<pg){now++;}else{now=1;o[fx]=0;}pfs((now-1)*pgmx);mx=now*pgmx;ex=setInterval(function(){(o[fx]+rate<mx)?(o[fx]+=rate):o[fx]=mx;if(o[fx]==mx){clearInterval(ex);ex=null;pfscl();}},5);}
				else{if(now>0){now--;}else{now=pg-1;o[fx]=pg*pgmx;}pfs((now+1)*pgmx);mx=now*pgmx;ex=setInterval(function(){(o[fx]-rate>mx)?(o[fx]-=rate):o[fx]=mx;if(o[fx]==mx){clearInterval(ex);ex=null;pfscl();}},5);}
			}
		}
	},
	
	//缓冲：id，要设置的图片ID，节点移动速度，要移动到的目的支持：['width:100','height:100','left:100','top:100','opacity:100','scrollTop:100','scrollLeft:100']，移动完成后回调方法名不支持参数，可选
	//如果事件中有opacity属性：则页面样式中要定义：opacity:0.1;filter:alpha(opacity=10);
	SpaceTo:function(id,slot,mx,fun)
	{
		var o=$(id),over=0,ar=Array(),len=mx.length,temp;
		for(var i=0;i<len;i++){ar[i]=mx[i].split(":");ar[i]=ar[i].concat(li(ar[i][0]));ar[i][1]=parseInt(ar[i][1]);ar[i][1]>ar[i][2]&&(ar[i][1]+=(slot-1));ar[i][5]=true;}
		clearInterval(window[id+"spaceTo"]);window[id+"spaceTo"]=setInterval(mov,10);
		function mov()
		{
			for(var i=0;i<len;i++)
			{
				if(ar[i][5])
				{
					ar[i][2]+=(temp=Math.floor((ar[i][1]-ar[i][2])/slot));
					ar[i][3][ar[i][0]]=ar[i][0]=='opacity' && !(/*@cc_on!@*/false)?ar[i][2]*0.01:ar[i][2]+ar[i][4];
					if(temp==0){ar[i][5]=false;over++;}
				}
			}
			if(over==len){clearInterval(window[id+"spaceTo"]);if(fun){fun();}}
		}
		
	}
}
function del(){
    $("#a1").removeClass('animation1');
    $(".banner3 #a2").removeClass('animation2');
    $(".banner3 .another").removeClass('animation2_1');
    $(".banner1 #a3").removeClass('animation3');
}