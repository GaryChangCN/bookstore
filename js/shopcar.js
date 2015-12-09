//DOM页面加载完成函数==========================================================
$(document).ready(function() {
	//	导航栏随着滚动放大缩小
	$(window).on("scroll", function() {
		if ($(window).scrollTop() > 60) {
			$(".hearder").stop().animate({
				height: '40px'
			}).css("position", "fixed");
			$(".hearder-logo").stop().animate({
				width: '100px',
				top: "8px"
			}, "fast");
			$(".hearder-content").stop().animate({
				height: '40px'
			}, "fast");
		} else {
			$(".hearder").stop().animate({
				height: '80px'
			}).css('position', 'static');
			$(".hearder-logo").stop().animate({
				width: '200px',
				top: "15px"
			}, "fast");
			$(".hearder-content").stop().animate({
				height: '80px'
			}, "fast");
		}
	});
	//	导航栏鼠标悬浮变色
	$(".HearderContentTable tr td").mouseover(function() {
		$(this).css('background-color', "#05A2EF");
	}).mouseleave(function() {
		$(this).css('background-color', '#54BAEC');
	});
	//   导航栏上面点击事件
	$(".HearderContentTable tr td:nth-child(1)").click(function() {
		window.location.href = "index.html"
	});
	$(".HearderContentTable tr td:nth-child(2)").click(function() {
		window.location.href = "sell.html"
	});
	$(".HearderContentTable tr td:nth-child(3)").click(function() {
		window.location.href = "buy.html";
	});
	$(".HearderContentTable tr td:nth-child(4)").click(function() {
		window.location.reload();
	});
	//购物车操控函数-----------------------
	//选择新旧书 而 变颜色
	$(".BookKind").on("click", "div", function() {
		$(".BookKind div").css("border-color", "gainsboro");
		$(this).css("border-color", "#E05C49");
		var b=15;
		var a=$(this).parents(".ShopCarListX").find(".BookPrice").children("span:contains(b)").text();
	    alert(a);
	});
	//加减数量===函数
	$(".BookNumber div table tr td:nth-child(3)").on("click",function(){
		FigureAdd();
	});
    $(".BookNumber div table tr td:nth-child(1)").on("click",function(){
    	var a = $(".BookNumber div table td:nth-child(2)").text();
		if (a > 1) {
			FigureMinus();
		} else if (a == 1) {
			var r = confirm("确认要删除这样商品名么");
			if (r == true) {
				$(this).parents(".ShopCarListX").remove();
			} else {
				//document.write("You pressed Cancel!")
			}
		}
   });
	function FigureAdd() {
		var a = $(".BookNumber div table td:nth-child(2)").text();
		$(".BookNumber div table td:nth-child(2)").text(parseInt(a) + 1);
	}

	function FigureMinus() {
		var a = $(".BookNumber div table td:nth-child(2)").text();
		$(".BookNumber div table td:nth-child(2)").text(parseInt(a) - 1);
	}
//	function CountPrice(){
//		var a=$(this).parents(".ShopCarListX").find(".BookPrice").children("span#aaa").text();
//	   alert(a);
//	}
});