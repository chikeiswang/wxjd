jQuery(document).ready(function($){
	$('#jdshop .dropdown').mouseenter(function(){
		$(this).find('.dspace').css({"width":$(this).width()-2})
		$(this).find('.dropdown-layer').css({"display":"block"})
	}).mouseleave(function(){
		$(this).find('.dropdown-layer').css({"display":"none"})
	})
 	$('.fl a').click(function(index){
 		$('.fl a').removeClass('selected');
 		$(this).addClass('selected');
 		$('#city').html($(this).html());
 		setTimeout(function(){
			$('.fl .dropdown-layer').css({"display":"none"})
 		},500)
 	})

 	$('#topbanner-close').mouseover(function(){
 		$(this).css({"background":"url(images/top-banner/topbanner-close.png) 0 -19px no-repeat"})
 		$(this).click(function(){
 			$('#top-banner').fadeOut();
 		})
 	}).mouseout(function(){
 		$(this).css({"background":"url(images/top-banner/topbanner-close.png) 0 0 no-repeat"})
 	})

 	$('#search input').focus(function(){
 		var oldvalue=$(this).val()
 		if(oldvalue==this.defaultValue)
 			{
 				$(this).val("");
 				$(this).css("color","rgb(51, 51, 51)")
 			}
 	}).blur(function(){
 		var oldvalue=$(this).val();
 		if(oldvalue=="")
 		{
 			$(this).val(this.defaultValue);
 			$(this).css("color","rgb(153, 153, 153)")
 		}
 	})

	$('.dd-inner .item').mouseover(function(){
		var i=$(this).index();
		var x=$(window).scrollTop();
		var y=$('#focus').offset().top;
		if(x>y){
			$('#layer').css({top:(x-y-1)+'px'});
		}else{
			$('#layer').css({top:'-1px'})
		}
		$('#layer').show();
		$('.dd-inner .item').eq(i).addClass('hover').siblings().removeClass('hover');
		$('#layer .item-down').eq(i).show().siblings().hide();
	})
 	$('#dd').mouseleave(function(){
 		$('#layer').hide();
 		$('.dd-inner .item').removeClass('hover');
 		$('#layer .item-down').hide();
 	})

	/*透明图切换*/
 	$.fn.extend({
 		sliderFade:function(){
 			var $_this=$(this);
 			var n=0;
 			var timer=null;
 			//向右切换
 				$_this.find('.slider-right').click(function(){
 				clearInterval(timer);
 				n++;
 				if(n>=$_this.find('.slider-main li').length){
 					n=0;
 				}
 				move();
 			})
 			//向左切换
 			$_this.find('.slider-left').click(function(){
 				clearInterval(timer);
 					n--;
	 				if(n<0){
	 					n=$_this.find('.slider-main li').length-1;
	 				}
	 				move();
 			})
 			//下标mouseover
 			$_this.find('.slider-nav li').mouseover(function(){
 				clearInterval(timer);
 				n=$(this).index();
 				move()
 			})

 			$_this.find('.slider').mouseover(function(){
 				clearInterval(timer);
 				$_this.find('.slider-page').show();
 			}).mouseout(function(){
 				$_this.find('.slider-page').hide();
 				automove();
 			})

 			function move(){
 				$_this.find('.slider-main li').eq(n).css({zIndex:"1"}).siblings().css({zIndex:"0"});
 				$_this.find(".slider-main li").stop(true).animate({opacity:"0"})
 				$_this.find(".slider-main li").eq(n).stop(true).animate({opacity:"1"});
 				// $_this.find('.slider-main li').stop().eq(n).fadeIn().siblings().fadeOut();
 				$_this.find('.slider-nav li').eq(n).addClass('slider-selected').siblings().removeClass('slider-selected');
 			}
 			function automove(){
 				timer=setInterval(function(){
 					n++;
	 				if(n>=$_this.find('.slider-main li').length){
	 					n=0;
	 				}
	 				move();
 				},3000)
 			}
 			automove();
 		}
 	})
 	$('#focus').sliderFade();


	$('#lifeserv i').each(function(index){
		$('#lifeserv i').eq(index).css({background:"url(images/lifeservice.png) 0 "+index*-25+"px no-repeat"});
	})
	$('#lifeserv i').each(function(index){
		$('#lifeserv .cw-icon').eq(index).mouseover(function(){
			$('#lifeserv i').eq(index).css({background:"url(images/lifeservice.png) -25px "+index*-25+"px no-repeat"})
		})
		$('#lifeserv .cw-icon').eq(index).mouseout(function(){
			$('#lifeserv i').eq(index).css({background:"url(images/lifeservice.png) 0 "+index*-25+"px no-repeat"})
		})
	})

 	$('#lifeserv .mc ul li:lt(4)').on('mouseover',bindMouseover);
 	$('#lifeserv .mc ul li:lt(4)').on('mouseout',bindMouseout);
 	var timeout1=null;
 	var timeout2=null;
 	function bindMouseover(){
 		var i=$(this).index();
 		timeout1=setTimeout(function(){
 			$('#lifeserv .mc ul li:lt(4)').off('mouseover',bindMouseover);
 			$('.mc-inner div').eq(i).show();
 			$('.mc-inner').stop().animate({"top":$('#lifeserv .mc ul li').height()},function(){
 				// $('.mc-inner').stop().animate({top:"28px"})
 				$('#lifeserv .mc ul li>a>i:lt(4)').stop().animate({top:"-25px"});
 				$('#lifeserv .mc ul li>a:lt(4)').stop().animate({paddingTop:0});
 				$('#lifeserv .mc ul li:lt(4)').stop().animate({height:'27px'});
	 			$('#lifeserv .mc ul li:lt(4)').eq(i).css({
	 				borderTop:"2px solid #c81623",
	 				borderBottom:"none"
	 			}).find("a").css({
	 				marginTop:"-2px"
	 			});
	 			$('#lifeserv .mc ul li:lt(4)').on('mouseover',tableMouseover)	
	 		}).animate({top:"28px"});
 			},500);
 	}
 	function bindMouseout(){
 		clearInterval(timeout1);
 	}
 	function tableMouseover(){
 		var i=$(this).index();
 		$('#lifeserv .mc-inner>div').eq(i).show().siblings().hide();
 		$('#lifeserv .mc ul li:lt(4)').css({
 			borderTop:"none",
 			borderBottom:"1px solid #e8e8e7"
 		}).find("a").css({marginTop:"0px"})
 		$('#lifeserv .mc ul li:lt(4)').eq(i).css({
 			borderTop:"2px solid #c81623",
 			borderBottom:"none"
 		}).find("a").css({marginTop:"-2px"})
 	}
 	$('.mc-inner .close').on('click',function(){
 		$('#lifeserv .mc ul li:lt(4)').off('mouseover',tableMouseover);
 		$('#lifeserv .mc ul li>a:lt(4)').stop().animate({paddingTop:"41px"});
 		$('#lifeserv .mc ul li>a>i:lt(4)').stop().animate({top:"13px"})
		$('#lifeserv .mc ul li:lt(4)').stop().animate({height:'69px'});
		$('#lifeserv .mc ul li:lt(4)').css({
			borderTop:"none",
			borderBottom:"1px solid #e8e8e7"
		}).find("a").css({
			marginTop:0
		});
		$('.mc-inner').stop().animate({"top":"208px"},'fast',function(){
			$('#lifeserv .mc ul li:lt(4)').on('mouseover',bindMouseover);
			$('.mc-inner>div').hide();
		});
 	})

 	// $('#guessyou .mc ul').on("mouseenter",iright);
 	// function iright(){
 	// 	$('#guessyou .spacer i').css({right:"840px"}).animate({right:"-1"})
 	// }
 	$('#guessyou .mc ul').hover(function(){
 		// timer=setTimeout(function(){
 			$('#guessyou .spacer i').css({right:"840px"}).animate({right:"-1"})
 		// },50);
 	},function(){
 		// clearInterval(timer);
 	})


 	$('#guessyou .replace').click(function(){
 		var uls=$('#guessyou .mc').find('ul');
 		uls.each(function(index){
 			if(uls.eq(index).attr('class')=='acting'){
 				uls.eq(index).removeClass('acting');
 				if(index==uls.length-1){
 					uls.eq(0).addClass('acting');
 				}else{
 					uls.eq(index+1).addClass('acting');
 				}
 				return false;
 			}
 		})
 	})
	/*大图滚动*/
	$.fn.extend({
		sliderPage:function(){
			var $_this=$(this);
			var num=1,num1=0,timer=null,timer1=null;
			var init=false,tag=true;
			var imgw=$_this.find('.slider-main li').width();
			$_this.find('.slider-main').css('left',-imgw)//初始位置
			//复制、插入节点
			var fir=$_this.find('.slider-main li:first').clone();
			var last=$_this.find('.slider-main li:last').clone();
			$_this.find('.slider-main').append(fir);
			$_this.find('.slider-main').prepend(last);
			//自滚动
			autoMove();
			function autoMove(){
				timer=setInterval(function(){
					$_this.find('.slider-next').click();
				},5000);
			}
			//鼠标滑过显示左右箭头
			$_this.find('.slider').hover(function(){
				$_this.find('.slider-page').show();
			},function(){
				$_this.find('.slider-page').hide();
			})
			//点击右箭头slide-next
			$_this.find('.slider-next').click(function(){
				if(!tag) return false;
				tag=false;
				num++;
				if(num>=$_this.find('.slider-main li').length){
					num=2;
					$_this.find('.slider-main').css('left',-imgw)
				}
				num1==$_this.find('.slider-nav li').length-1 ? num1=0 : num1++;
				move();
			})
			//点击左箭头slide-prev
			$_this.find('.slider-prev').click(function(){
				if(!tag) return false;
				tag=false;
				num--;
				if(num<0){
					num=$_this.find('.slider-main li').length-3;
					$_this.find('.slider-main').css("left",-imgw*(num+1))
				}
				num1==0 ?num1=$_this.find('.slider-nav li').length-1 : num1--;
				move();
			})
			//slider-nav 小圆点hover
			$_this.find('.slider-nav li').hover(function(){
				var item=$(this).index();
				timer1=setTimeout(function(){
					num1=item;
					num=num1+1;
					move();
				},200)
			},function(){
				clearTimeout(timer1);
			});
			function move(){
				clearInterval(timer);
				$_this.find('.slider-nav li').removeClass('slider-selected').eq(num1).addClass('slider-selected')
				$_this.find('.slider-main').animate({
					left:-imgw*num
				},function(){
					tag=true;
				});
				autoMove();
			}
		}
	})
	$('#clothes').sliderPage();
	$('#cosmetics').sliderPage();
	$('#mobiles').sliderPage();
	$('#electronics').sliderPage();
	$('#digitals').sliderPage();
	$('#sports').sliderPage();
	$('#babys').sliderPage();
	$('#livings').sliderPage();
	$('#foods').sliderPage();
	$('#books').sliderPage();
	$('#cars').sliderPage();
	$('#life-one').sliderPage();
	$('#life-two').sliderPage();
	/*tab切换*/
	$.fn.extend({
		tabSwitch:function(){
			var $_this=$(this);
			$_this.find('.tab .tab-item').mouseover(function(){
				var index=$(this).index();
				$_this.find('.main').addClass('hide').css({display:'none'}).eq(index).removeClass('hide').css({display:'block'})
				$_this.find('.tab .tab-item').removeClass('tab-selected').eq(index).addClass('tab-selected');
			})
		}
	})
	$('#clothes').tabSwitch();
	$('#cosmetics').tabSwitch();
	$('#mobiles').tabSwitch();
	$('#electronics').tabSwitch();
	$('#digitals').tabSwitch();
	$('#sports').tabSwitch();
	$('#babys').tabSwitch();
	$('#livings').tabSwitch();
	$('#foods').tabSwitch();
	$('#books').tabSwitch();
	$('#cars').tabSwitch();

	/*今日低价 low-right*/
	$.fn.extend({
		lowScroll:function(){
			var $_this=$(this);
			var num=1,timer=null;
			var lih=$_this.find('.sw li').eq(0).outerHeight(true);
			var fir=$_this.find('.sw li:first').clone();
			var last=$_this.find('.sw li:last').clone();
			$_this.find('.sw').scrollTop(lih);
			$_this.find('ul').append(fir);
			$_this.find('ul').prepend(last);
			autoScroll();
			function autoScroll(){
				timer=setInterval(function(){
					num--;
					if(num<0){
						num=$_this.find('.sw li').length-3;
						$_this.find('.sw').scrollTop(lih*(num+1));
					}
					$_this.find('.sw').animate({scrollTop:lih*num},'slow');
				},3000);
			}
			$_this.find('.mc').hover(function(){
				clearInterval(timer);
			},function(){
				autoScroll();
			})
		}
	})
	$('#low-right').lowScroll();

	/*页面加载或滚动时 判断所在楼层*/
	var scrollTimer = null;
	$(window).on('load scroll',function(){
		var floor1H=$('#clothes').offset().top;
		var floor12H=$('#life').offset().top+$('#life').parent().outerHeight(true);
		var screenH=$(window).height();
		var windowScroll=$(window).scrollTop();
		// if (scrollTimer) {
			clearTimeout(scrollTimer);
		// }
		scrollTimer = setTimeout(function() {
			eleShow();
			floorCheck();
		}, 100);
		function eleShow(){
			if(windowScroll>floor1H-screenH && windowScroll<floor12H){
				$('#elevator').css("display","block");
			}else{
				$('#elevator').css("display","none")
			}
		}
		function floorCheck(){
			for(var i=0;i<$('.floor').length;i++){
				var floorH=$('.floor').eq(i).offset().top;
				if(i<$('.floor').length-1){
					var floor2H=$('.floor').eq(i+1).offset().top;
					if(windowScroll>floorH-screenH/2 && windowScroll<floor2H-screenH/2){
						change(i);
					}
				}else{
					if(windowScroll>floorH-screenH/2)
						change(i);
				}
			}
		}
		function change(i){
			$('.floor').eq(i).addClass('floor-current').siblings().removeClass('floor-current');	
			$('#elevator li').eq(i).addClass('current').siblings().removeClass('current');
		}
	})

	/*点击楼层导航进行楼层定位*/
	$('#elevator li').click(function(){
		var i=$(this).index();
		$('#elevator li').eq(i).addClass('current').siblings().removeClass('current');
		$('document,html,body').animate({scrollTop:$('.floor').eq(i).offset().top})
	})

	//右侧定位工具条点击事件
	$('#global_toolbar .toolbar_header').click(function() {
		$('#global_toolbar .toolbar').animate({right:'270px'});
		$(this).addClass('hover').siblings().removeClass('hover').find('em').css('left', '35px');
	});
	//右侧定位工具条关闭按钮
	$('#global_toolbar .close').click(function() {
		$('#global_toolbar .toolbar').animate({right:'0px'})
		$('#global_toolbar .toolbar_tabs .tab').removeClass('hover');
	});
	//返回顶部
	$('#backToTop').click(function() {
		$('document').animate({'scrollTop': 0});
		$('html, body').animate({'scrollTop': 0});
	});
	//右侧定位工具条hover事件
	$('#global_toolbar .tab').hover(function() {
		$(this).find('em').stop().animate({left: '-60px'}, 100);
	}, function() {
		$(this).find('em').stop().animate({left: '35px'}, 100);
	});

	$('#jdshop .fore9').one('mouseover',function(){
		$.ajax({
			type:'get',
			url:'js/e.json',
			beforeSend:function(XMLHttpRequest){},
			success:function(result,Status){
				$.each(result.data,function(index,item){
					var str='';
					str+='<dl class=fore'+(index+1)+'><dt>'+item.n+'</dt></dl>';
					$('#jdshop .fore9').find('.dropdown-layer').append(str);
					$.each(result.data[index].s,function(ind,itson){
						var trs='';
						trs+='<dd><div class="item"><a href="javascript:">'+itson.n+'</a></div></dd>'
						$('#jdshop .fore9 .dropdown-layer').find('dl').eq(index).append(trs);
					})
				});
			},
			complete:function(XMLHttpRequest, textStatus){
				if(textStatus=='success'){
					$('#jdshop .dd-inner').remove();
				}
       		}
		})
	})
 })



// window.onload = function(){
// 	var dd=document.getElementById('dd');
// 	var items=getclass('dd','item');
// 	var layer=document.getElementById('layer');
// 	var itemdowns=getclass('layer','item-down');

// 	var focus=document.getElementById('focus');
// 	var slider=getClasses(focus,'slider')[0];
// 	var sliderUl=document.getElementById('sliderul');
// 	var lis=sliderUl.getElementsByTagName('li');
// 	var sliderPage=getClasses(focus,'slider-page')[0];
// 	var sliderNav=document.getElementById("sliderNav");
// 	var nlis=sliderNav.getElementsByTagName('li');
// 	var sliderLeft=sliderPage.getElementsByTagName('a')[0];
// 	var sliderRight=sliderPage.getElementsByTagName('a')[1];
// 	var num=0,tnum=0,timer1=null;
// 	// var timer=setInterval(automove,5000);
// 	var rtag=true,ttag=false;
// 		for(var i=0;i<items.length;i++){
// 			items[i].onmouseover=function(){
// 				for(var j=0;j<items.length;j++){
// 					itemdowns[j].className='item-down';
// 					items[j].className='item';
// 					if(this==items[j]){
// 						layer.style.display='block';
// 						itemdowns[j].className='item-down hover';
// 						items[j].className='item hover';
// 						var x=document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
// 						var y=offsetLT(focus).top;
// 						if(x>y){
// 							layer.style.top=x-y-1+'px';
// 						}else{
// 							layer.style.top=-1+'px';
// 						}
// 					}
// 				}
// 			}
// 		}

// 	addEvent(dd,"mouseout",teca);
// 	function teca(e){
// 		var e=e||window.event;
// 		var to=e.toElement || e.relatedTarget;
// 		while (to) {
// 			if (to == this) {
// 				return false;
// 			}
// 			to = to.parentNode;
// 		}
// 		layer.style.display='none';
// 		for (var i = 0; i < items.length; i++){
// 			itemdowns[i].className='item-down';
// 			items[i].className='item';
// 		};
// 	}

// 		 //透明图切换

// 		 //滑入slider
// 		 // addEvent(slider,'mouseover',sliderOver);
// 		 // addEvent(slider,'mouseout',sliderOut);
// 		 // addEvent(sliderLeft,'click',Left);
// 		 // addEvent(sliderRight,'click',Right);
// 	 	// // for(var p=0;p<nlis.length;p++){
// 	 	// // 	nlis[p].index=p;
// 	 	// // 	addEvent(nlis[p],'mouseover',sNav);
// 	 	// // }
// 		 // // function sNav(){
// 		 // // 	clearInterval(timer);
// 			// // if(num==this.index){
// 			// // 	return false;
// 			// // }else{
// 			// // 	num=this.index;
// 			// // 	move();
// 			// // 	nav();
// 			// // }
// 		 // // }
// 		 // function start(){
// 		 // 	for(var i=0;i<nlis.length;i++){
// 		 // 		nlis[i].index=i;
// 		 // 		nlis[i].onmouseover=function(){
// 		 // 			tnum=this.index;
// 		 // 			ttag=true;
// 		 // 		}
// 		 // 	}
// 		 // }
// 		 // function end(){
// 		 // 	for(var i=0;i<nlis.length;i++){
// 		 // 		nlis[i].index=i;
// 		 // 		nlis[i].onmouseover=function(){
// 		 // 			if(num==this.index){
// 			// 			return false;
// 			// 		}else{
// 			// 			num=this.index;
// 			// 			move();
// 			// 			nav();
// 			// 		}
// 		 // 		}
// 		 // 	}
// 		 // }
// 		 // function sliderOver(e){
// 		 // 	clearInterval(timer);
// 		 // 	var e=e||window.event;
// 		 // 	var from=e.fromElement||e.relatedTarget;
// 		 // 	while(from){
// 		 // 		if(from==this)
// 		 // 		{
// 		 // 			return false;
// 		 // 		}
// 		 // 		from=from.parentNode;
// 		 // 	}
// 		 // 	sliderPage.style.display='block';
// 		 // }
// 		 // function sliderOut(e){
// 		 // 	var e=e||window.event;
// 		 // 	var to=e.toElement||e.relatedTarget;
// 		 // 	while(to){
// 		 // 		if(to==this){
// 		 // 			return false;
// 		 // 		}
// 		 // 		to=to.parentNode;
// 		 // 	}
// 		 // 	sliderPage.style.display='none';
// 		 // 	timer=setInterval(automove,5000);
// 		 // }
// 		 // function Left(){
// 		 // 	clearInterval(timer);
// 		 // 	if(rtag==true){
// 		 // 		rtag=false;
// 		 // 		num--;
// 		 // 		if(num<0){
// 		 // 			num=lis.length-1;
// 		 // 		}
// 		 // 		move();
// 		 // 		nav();
// 		 // 	}
// 		 // }
// 		 // function Right(){
// 		 // 	clearInterval(timer);
// 		 // 	if(rtag==true){
// 		 // 		rtag=false;
// 		 // 		num++;
// 		 // 		if(num>=lis.length){
// 		 // 			num=0;
// 		 // 		}
// 		 // 		move();
// 		 // 		nav();
// 		 // 	}
// 		 // }
		
// 		 // function move(){
// 		 // 	clearInterval(timer1);
// 		 // 	start();
// 		 // 	for(var i=0;i<lis.length;i++){
// 		 // 		if(num==i){
// 		 // 			lis[i].style.zIndex=1;
// 		 // 		}else{
// 		 // 			lis[i].style.zIndex=0;
// 		 // 		}
// 		 // 	}
// 		 // 	var j=0;
// 		 // 	timer1=setInterval(function(){
// 			// 	j+=10;
// 			//  	if(j>100){
// 			//  		clearInterval(timer1);
// 			//  		rtag=true;
// 			//  		for(var z=0;z<lis.length;z++){
// 			//  			if(z==num){
// 			//  				lis[z].style.opacity=1;
// 			//  				lis[z].style.filter="alpha(opacity=100)";
// 			//  			}else{
// 			//  				lis[z].style.opacity=0;
// 			//  				lis[z].style.filter="alpha(opacity=0)";
// 			//  			}
// 			//  		}
// 			//  		end();console.log(num+" , "+tnum);
// 			//  		if(ttag==true){
// 			//  			if(tnum!=num){
// 			//  				num=tnum;
// 			//  				move();
// 			//  				nav();
// 			//  				ttag=false;
// 			//  			}
// 			//  		}
// 			//  	}else{
// 			//  		lis[num].style.opacity=j/100;
// 			//  		lis[num].style.filter="alpha(opacity="+j+")";
// 			//  	}
// 		 // 	},30)
// 		 // }
// 		 // function nav(){
// 		 // 	for(var q=0;q<nlis.length;q++){
// 		 // 		nlis[q].className=''
// 		 // 	}
// 		 // 	nlis[num].className='slider-selected';
// 		 // }
// 		 // function automove(){
// 		 // 	clearInterval(timer);
// 		 // 	num++;
// 		 // 	if(num>=lis.length){
// 		 // 		num=0;
// 		 // 	}
// 		 // 	move();
// 		 // 	nav();
// 		 // 	timer=setInterval(automove,5000);
// 		 // }
		 
	  // var lifeserv=document.getElementById('lifeserv');
	  // var is=lifeserv.getElementsByTagName('i');
	  // var as=getClasses(lifeserv,'cw-icon');
	  // for(var i=0;i<is.length;i++){
	  // 	is[i].style.background="url(images/lifeservice.png) 0 "+i*-25+"px no-repeat";
	  // }
	  // for(var i=0;i<as.length;i++){
	  // 	as[i].onmouseover=function(){
	  // 		for(var j=0;j<as.length;j++){
	  // 			if(as[j]==this){
	  // 				var tum=as[j].getElementsByTagName('i')[0];
	  // 				tum.style.background="url(images/lifeservice.png) -25px "+j*-25+"px no-repeat";
	  // 			}
	  // 		}
	  // 	}
	  // }
	  //  for(var i=0;i<as.length;i++){
	  // 	as[i].onmouseout=function(){
	  // 		for(var j=0;j<as.length;j++){
	  // 			if(as[j]==this){
	  // 				var tum=as[j].getElementsByTagName('i')[0];
	  // 				tum.style.background="url(images/lifeservice.png) 0 "+j*-25+"px no-repeat";
	  // 			}
	  // 		}
	  // 	}
	  // }
// }
