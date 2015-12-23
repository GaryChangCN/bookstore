$(document).ready(function() {

	$("#hearder-logo").click(function() {
		window.location.href = "index.html";
	}).mouseover(function() {
		$(this).css('cursor', 'pointer');
	});
	$(".left ul li").click(function() {
		$(this).parent().children("li").css('background-color', "#05A2EF");
		$(this).css('background-color', '#0392DC');
	})
	$(".left ul li:eq(0)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/AddGood.html').css('display', 'block');
	});
	$(".left ul li:eq(1)").click(function() {
		$(".iframe").css('display', 'none');
		$(".FenzuGuanli").css('display', 'block');
	});
	$(".left ul li:eq(2)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/ChangeGood.html').css('display', 'block');
	})
	$(".left ul li:eq(3)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/BestSell.html').css('display', 'block');
	})
	$(".left ul li:eq(4)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/Administrator.html').css('display', 'block');
	})
	$(".left ul li:eq(5)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/Our.html').css('display', 'block');
	})
	$(".left ul li:eq(6)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/Discount.html').css('display', 'block');
	})
	$(".left ul li:eq(7)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/Ad.html').css('display', 'block');
	})
	$(".left ul li:eq(8)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/BuyOrder.html').css('display', 'block');
	})
	$(".left ul li:eq(9)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/SellOrder.html').css('display', 'block');
	})
	$(".left ul li:eq(10)").click(function() {
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/visited.html').css('display', 'block');
	})
	$(".FenzuGuanli").find("div").click(function() {
		$(".FenzuGuanli").find("div").css({
			"background-color": "transparent",
			"color": "black"
		});
		$(this).css({
			"background-color": "#05A2EF",
			"color": "white"
		});
		var indexes = $(this).parents(".FenzuGuanli").find("div").index(this);
		$(".iframe").attr("src", "frame/GroupManage.html?" + indexes + "").css('display', 'block');
	})
});