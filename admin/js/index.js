$(document).ready(function(){
	$("#hearder-logo").click(function(){
		window.location.href="index.html";
	}).mouseover(function(){
		$(this).css('cursor','pointer');
	});
	$(".left ul li:eq(0)").click(function(){
		$(".RightTop").children().css('display','none');
		$(".iframe").attr('src','frame/AddGood.html').css('display','block');
	});
	$(".left ul li:eq(1)").click(function(){
		$(".iframe").css('display','none');
		$(".FenzuGuanli").css('display','block');
	});
	$(".left ul li:eq(2)").click(function(){
		$(".RightTop").children().css('display','none');
		$(".iframe").attr('src','frame/ChangeGood.html').css('display','block');
	})
	$(".FenzuGuanli").find("div").click(function(){
		$(".FenzuGuanli").find("div").css({
			"background-color":"transparent",
			"color":"black"
		});
		$(this).css({
			"background-color":"#05A2EF",
			"color":"white"
		});
		var indexes=$(this).parents(".FenzuGuanli").find("div").index(this);
		$(".iframe").attr("src","frame/GroupManage.html?"+indexes+"").css('display','block');
	})
});
