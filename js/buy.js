jQuery(function($){
    $('#slidebox1').slideBox();
    $('#slidebox').slideBox({
        direction : 'left',//left,top#方向
        duration : 1,//滚动持续时间，单位：秒
        easing : 'swing',//swing,linear//滚动特效
        delay : 5,//滚动延迟时间，单位：秒
        startIndex : 1//初始焦点顺序
    });
});
$(document).ready(function(){
	$("#BuyersNoticeSlide").click(function(){
		$("#BuyersNoticeContent").slideToggle();
		$("#BuyersNoticeSlide").addClass("BuyersNoticeSlideDown");
	});
	$(".BuyersNoticeSlideDown").click(function(){
		$("#BuyersNoticeContent").slideToggle();
		$("#BuyersNoticeSlideDown").removeClass("BuyersNoticeSlideDown");
	})
})