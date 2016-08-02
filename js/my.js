// window.onload=function (){
    //获取局部class函数
    function getclass(parentId,oclass) {
    	var parent=document.getElementById(parentId);
    	var tags=parent.all ? parent.all : parent.getElementsByTagName('*');
    	var arr=new Array();
    	for (var i = 0; i < tags.length; i++) {
    		if (tags[i].className==oclass) {
    			arr.push(tags[i]);
    		};
    	};
    	return arr;
    };
    function getClasses(parent, className) {
    var tags = parent.all ? parent.all : parent.getElementsByTagName('*');
    var arr = new Array();
    for (var i = 0; i < tags.length; i++) {
        if (tags[i].className.indexOf(className) != -1) {
            arr.push(tags[i]);
        }
    };
    return arr;
};
    //获取全局class函数
    function byclass(oclass) {
    	var tags=document.all?document.all:document.getElementsByTagName('*');
    	var arr=new Array();
    	for (var i = 0; i < tags.length; i++) {
    		if (tags[i].className==oclass) {
    			arr.push(tags[i]);
    		};
    	};
    	return arr;
    };
    //事件监听
    function addEvent(obj,ev,fn){  
        if(obj.addEventListener){  
            //监听 谷歌,火狐,IE9...
            obj.addEventListener(ev, fn, false);
        }else if(obj.attachEvent){
        	//监听 IE6 7 8
            obj.attachEvent("on" + ev, fn);
        }else{  
            obj["on" + ev] = fn;  
        };
    };
    //删除事件监听
    function removeEvent(obj, ev, fn) {  
        if (obj.removeEventListener){  
            //监听 谷歌,火狐,IE9...
            obj.removeEventListener(ev, fn, false);  
        } else if (obj.detachEvent){ 
        	//监听 IE6 7 8
            obj.detachEvent("on" + ev, fn);  
        }else {  
            delete obj["on" + ev];  
        }; 
    };
    //获取非行间样式
    function getstyle(obj,oStyle){ //obj→对象  oStyle→样式名
        if (obj.currentStyle){
            return obj.currentStyle[oStyle]; //IE6 7 8
        }else{
            return getComputedStyle(obj,null)[oStyle]; //非IE
        };
    };
    //获取下一个兄弟节点
    function next(obj){
        if (obj.nextElementSibling){
            return obj.nextElementSibling; //谷歌火狐IE9+等支持
        }else{
            return obj.nextSibling; //IE6 7 8支持
        };
    };
    //获取上一个兄弟节点
    function previous(obj){
        if (obj.previousElementSibling){
            return obj.previousElementSibling; //谷歌火狐IE9+等支持
        }else{
            return obj.previousSibling; //IE6 7 8支持
        };
    };
    //返回顶部
    function toTop(objId){
		var Tween = {
		    Linear: function(t,b,c,d){ return c*t/d + b; },
		    Cubic: {
		        easeIn: function(t,b,c,d){
		            return c*(t/=d)*t*t + b;
		        },
		        easeOut: function(t,b,c,d){
		            return c*((t=t/d-1)*t*t + 1) + b;
		        },
		        easeInOut: function(t,b,c,d){
		            if ((t/=d/2) < 1) return c/2*t*t*t + b;
		            return c/2*((t-=2)*t*t + 2) + b;
		        }
		    }
		};
		var oDiv=document.getElementById(objId);
		var ind=0;
		var timer=null;
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if (window.navigator.userAgent.indexOf("MSIE 6")!=-1){
			oDiv.style.top=scrollTop+document.documentElement.clientHeight-oDiv.offsetHeight+"px";
		}else{
			oDiv.style.position="fixed";
		};
		oDiv.onclick=function (){
			ind=0;
			clearInterval(timer);
			var start=scrollTop;
			var change=-start;
			timer=setInterval(function (){
				ind++;
				if (ind>=20){
					clearInterval(timer);
				};
				document.documentElement.scrollTop=Tween.Cubic.easeInOut(ind,start,change,20);
				document.body.scrollTop=Tween.Cubic.easeInOut(ind,start,change,20);
			},25);
		};
	};
	// 获取offsetLeft、offsetTop
	function offsetLT(obj){
		var L=0;
		var T=0;
		while(obj){
			L=L+obj.offsetLeft;
			T=T+obj.offsetTop;
			obj=obj.offsetParent;
		};
		return {left:L , top:T};
	};

      // 判断obj是否有此class
  function hasClass(obj,cls){  //class位于单词边界
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
   }
   //给 obj添加class
  function addClass(obj,cls){ 
    if(!this.hasClass(obj,cls)){ 
       obj.className += cls;
    }
  }
  //移除obj对应的class
  function removeClass(obj,cls){ 
    if(hasClass(obj,cls)){ 
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
         obj.className = obj.className.replace(reg,'');
    }
  }
// }
