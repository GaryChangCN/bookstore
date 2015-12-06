jQuery(function($){
    $('#slidebox').slideBox();
    $('#slidebox').slideBox({
        direction : 'left',//left,top#方向
        duration : 0.8,//滚动持续时间，单位：秒
        easing : 'swing',//swing,linear//滚动特效
        delay : 5,//滚动延迟时间，单位：秒
        startIndex : 1//初始焦点顺序
    });
});
//DOM页面加载完成函数
$(document).ready(function(){
	$(window).on("scroll",function(){
		if($(window).scrollTop() > 60){
			$(".hearder").stop().animate({
				height:'40px'
			}).css("position","fixed");
			$(".hearder-logo").stop().animate({
				width:'100px',
				top:"8px"
			},"fast")
		}else{
			$(".hearder").stop().animate({
				height:'80px'
			}).css('position','static');
			$(".hearder-logo").stop().animate({
				width:'200px',
				top:"15px"
			},"fast")
		}
	})
})