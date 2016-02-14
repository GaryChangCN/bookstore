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
	$(".left ul li:eq(0)").click(function() {//上架商品
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/AddGood.html').css('display', 'block');
	});
	$(".left ul li:eq(1)").click(function() {//手机、快速上架商品
		$(".RightTop").children().css('display', 'none');
		$(".iframe").css('display', 'none');
		window.open("frame/FastAddGood.html");
	});
	$(".left ul li:eq(2)").click(function() {//分组管理
		$(".iframe").css('display', 'none');
		$(".FenzuGuanli").css('display', 'block');
	});
	$(".left ul li:eq(3)").click(function() {//管理商品
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/ChangeGood.html').css('display', 'block');
	})
	$(".left ul li:eq(4)").click(function() { //管理推荐商品
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/BestSell.html').css('display', 'block');
	})
	$(".left ul li:eq(5)").click(function() {  //管理员管理
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/Administrator.html').css('display', 'block');
	})
	$(".left ul li:eq(6)").click(function() {   //我们的动态管理
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/Our.html').css('display', 'block');
	})
	$(".left ul li:eq(7)").click(function() {  //广告管理
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/Ad.html').css('display', 'block');
	})
	$(".left ul li:eq(8)").click(function() {  //买书订单管理
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/BuyOrder.html').css('display', 'block');
	})
	$(".left ul li:eq(9)").click(function() {  // 卖书订单管理
		$(".RightTop").children().css('display', 'none');
		$(".iframe").attr('src', 'frame/SellOrder.html').css('display', 'block');
	})
	$(".left ul li:eq(10)").click(function() { //浏览量管理
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