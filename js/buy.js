jQuery(function($){
    $('#slidebox1').slideBox();
    $('#slidebox1').slideBox({
        direction : 'right',//left,top#方向
        duration : 1,//滚动持续时间，单位：秒
        easing : 'swing',//swing,linear//滚动特效
        delay : 5,//滚动延迟时间，单位：秒
        startIndex : 1//初始焦点顺序
    });
});
$(document).ready(function(){
	//slide买家须知折叠
	$("#BuyersNoticeSlide").click(function(){
		$("#BuyersNoticeContent").slideToggle();
		$("#BuyersNoticeSlide").addClass("BuyersNoticeSlideDown");
	});
	$(".BuyersNoticeSlideDown").click(function(){
		$("#BuyersNoticeContent").slideToggle();
		$("#BuyersNoticeSlideDown").removeClass("BuyersNoticeSlideDown");
	});
	//学期专业处理效果
	  //点击展开分类
	$(".SelectMajorContent ul ul").slideUp("fast");  
	$(".SelectMajorContentFirst").on("click",function(){
		if ($(this).next().is("ul")) {
			$(".SMCFirst").slideUp();
			if ($(this).next().css('display')=="block") {
				$(this).next().slideUp();
			} else{
				$(this).next().slideDown();
			}
			$(this).parent().children("li").css({
				"font-weight":"300",
				"color":"#000000"
			});
			$(this).css({
				"font-weight":"800",
				"color":"#e05c49"
			});
		}
	})
	$(".SelectMajorContentSecond").on("click",function(){
		if ($(this).next().is("ul")) {
			$(".SMCSecond").slideUp();
			if ($(this).next().css('display')=="block") {
				$(this).next().slideUp();
			} else{
				$(this).next().slideDown();
			}
			$(".SelectMajorContentSecond").css({
				"font-weight":"100",
				"color":"#000000"
			});
			$(this).css({
				"font-weight":"600",
				"color":"#e05c49"
			});
		}
	});
	//===============================================================
	//---------------------------------------------------------------
	$(".PageNumber ul li:nth-child(4)").css({
		"background-color":"#e07262",
		"color":"white"
	})
})