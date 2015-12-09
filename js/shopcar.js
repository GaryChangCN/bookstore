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
		//		$(".BookKind div").css("border-color", "gainsboro");
		//		$(this).css("border-color", "#E05C49");
		if ($(this).attr('class') == "BookOld") {
			$(this).css("border-color", "#E05C49").next().css("border-color", "gainsboro");
			var danjia1 = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book1").text();
			var shuliang1 = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage1 = (parseFloat(danjia1) * parseInt(shuliang1)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage1);
		} else if ($(this).attr('class') == "BookNew") {
			$(this).css("border-color", "#E05C49").prev().css("border-color", "gainsboro");
			var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book2").text();
			var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage = (parseFloat(danjia) * parseInt(shuliang)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage);
		}
	});
	//加减数量===函数
	$(".BookNumber div table tr td:nth-child(3)").on("click", function() {
		var a = $(this).prev().text();
		$(this).prev().text(parseInt(a) + 1);
		if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(224, 92, 73)") {
			var danjia1 = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book1").text();
			var shuliang1 = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage1 = (parseFloat(danjia1) * parseInt(shuliang1)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage1);
		} else if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(220, 220, 220)") {
			var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book2").text();
			var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage = (parseFloat(danjia) * parseInt(shuliang)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage);
		}
	});
	$(".BookNumber div table tr td:nth-child(1)").on("click", function() {
		var a = parseInt($(this).next().text());
		if (a > 1) {
			$(this).next().text(a - 1);
			if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(224, 92, 73)") {
				var danjia1 = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book1").text();
				var shuliang1 = $(this).parents(".ShopCarListX").find(".shuliang").text();
				var jiage1 = (parseFloat(danjia1) * parseInt(shuliang1)).toFixed(2);
				$(this).parents(".ShopCarListX").find(".Price").text(jiage1);
			} else if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(220, 220, 220)") {
				var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book2").text();
				var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
				var jiage = (parseFloat(danjia) * parseInt(shuliang)).toFixed(2);
				$(this).parents(".ShopCarListX").find(".Price").text(jiage);
			}
		} else if (a == 1) {
			var r = confirm("确认要删除这样商品名么");
			if (r == true) {
				$(this).parents(".ShopCarListX").remove();
			} else {
				//document.write("You pressed Cancel!")
			}
		}
	});
	//每个商品单独总价格
	$(".Price").each(function() {
		var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book1").text();
		var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
		$(this).text((parseFloat(danjia) * parseInt(shuliang)).toFixed(2));
	})
});