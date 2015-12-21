jQuery(function($){
    $('#slidebox').slideBox();
    $('#slidebox').slideBox({
        direction : 'left',//left,top#方向
        duration : 2,//滚动持续时间，单位：秒
        easing : 'swing',//swing,linear//滚动特效
        delay : 5,//滚动延迟时间，单位：秒
        startIndex : 1//初始焦点顺序
    });
});
//DOM页面加载完成函数==========================================================
$(document).ready(function(){
//	导航栏随着滚动放大缩小
	$(window).on("scroll",function(){
		if($(window).scrollTop() > 60){
			$(".hearder").stop().animate({
				height:'40px'
			}).css("position","fixed");
			$(".hearder-logo").stop().animate({
				width:'100px',
				top:"8px"
			},"fast");
			$(".HearderContentTable").stop().animate({
				height:'40px'
			},"fast");
		}else{
			$(".hearder").stop().animate({
				height:'80px'
			}).css('position','static');
			$(".hearder-logo").stop().animate({
				width:'200px',
				top:"15px"
			},"fast");
			$(".HearderContentTable").stop().animate({
				height:'80px'
			},"fast");
		}
	});
//	导航栏鼠标悬浮变色
    $(".HearderContentTable tr td").mouseover(function(){
    	$(this).css({
    		'background-color':"#05A2EF",
    		'cursor':"pointer"
    	});
    }).mouseleave(function(){
    	$(this).css('background-color','#54BAEC');
    });
//   导航栏上面点击事件
    $(".hearder-logo").click(function(){
		window.location.href = "index.php"
	});
    $(".HearderContentTable tr td:nth-child(1)").click(function(){
    	window.location.href="index.php"
    });
    $(".HearderContentTable tr td:nth-child(2)").click(function(){
    	window.location.href="sell.php"
    });
    $(".HearderContentTable tr td:nth-child(3)").click(function(){
    	window.location.href="buy.php";
    });
    $(".HearderContentTable tr td:nth-child(4)").click(function(){
      	window.open("shopcar.html");
    });
})