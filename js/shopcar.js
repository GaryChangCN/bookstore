//全局变量区域


//计算总价函数
function CountPrice() {
	var cp = 0;
	$(".Price").each(function() {
		var b = parseFloat($(this).text());
		cp = cp + b;
	});
	$("#CountPrice").text(cp.toFixed(2));
	if ($(".ShopCarList").children().length == 0) {
		$(".ShopCarList").html("<div class='ShopCarEmpty'>购物车是空的~</div>")
	}
};
//DOM页面加载完成函数==========================================================
//===========================================================================
$(document).ready(function() {
	$.ajax({
		type: "get",
		url: "php/ShopCar.php",
		async: true,
		data: {
			"type": "3"
		},
		success: function(data) {
			$(".hearder-logo").attr('src', 'img/icon/' + data);
		}
	});
	$.ajax({
		type: "get",
		url: "php/ShopCar.php",
		async: false,
		data: {
			"type": "1"
		},
		success: function(data) {
			$(".ShopCarList").html(data);

		}
	});
	//若没有新书或者旧书 则此按钮不可用            默认选中旧书  如果旧书价格不存在则选择新书
	$(".ShopCarListX").each(function() {
			if (($(this).find("#book1").text() == "") || ($(this).find("#book1").text().indexOf(" ") >= 0)) {
				$(this).find(".BookOld").attr('disabled', 'disabled');
				$(this).find(".BookOld").css('border-color', 'gainsboro')
				$(this).find(".BookNew").css('border-color', '#E05C49');
			} else {
				$(this).find(".BookOld").removeAttr('disabled');
				$(this).find(".BookOld").css('border-color', '#E05C49');
			}
			if (($(this).find("#book2").text() == "") || ($(this).find("#book2").text().indexOf(" ") >= 0)) {
				$(this).find(".BookNew").attr('disabled', 'disabled');
				$(this).find(".BookNew").css('border-color', 'gainsboro');
				$(this).find(".BookOld").css('border-color', '#E05C49');
			} else {
				$(this).find(".BookNew").removeAttr('disabled');
			}
		})
		//	滚动增加盒子阴影
	$(window).on('scroll', function() {
			if ($(window).scrollTop() >= 29) {
				$(".zhegai").addClass("ZhegaiShadow");
			} else {
				$(".zhegai").removeClass("ZhegaiShadow");
			}
		})
		//	导航栏鼠标悬浮变色
	$(".HearderContentTable tr td").mouseover(function() {
		$(this).css('background-color', "#05A2EF");
		$(this).css('cursor', 'pointer');
	}).mouseleave(function() {
		$(this).css('background-color', '#54BAEC');
	});
	//   导航栏上面点击事件
	$(".hearder-logo").click(function() {
		window.location.href = "index.php"
	});
	$(".HearderContentTable tr td:nth-child(1)").click(function() {
		window.location.href = "index.php"
	});
	$(".HearderContentTable tr td:nth-child(2)").click(function() {
		window.location.href = "sell.php"
	});
	$(".HearderContentTable tr td:nth-child(3)").click(function() {
		window.location.href = "buy.php";
	});
	$(".HearderContentTable tr td:nth-child(4)").click(function() {
		window.location.reload();
	});
	//购物车操控函数-----------------------
	//选择新旧书 而 变颜色
	$(".BookKind").on("click", "div", function() {
		if ($(this).attr('disabled')) {

		} else {
			$(this).parent("div").children("div").css('border-color', 'gainsboro');
			$(this).css('border-color', '#E05C49');
			var suoyin = $(this).index();
			var danjia = $(this).parents(".ShopCarListX").find(".BookPrice span:eq(" + suoyin + ")").text();
			var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage = (parseFloat(danjia) * parseFloat(shuliang)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage);
			CountPrice();
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
			CountPrice();
		} else if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(220, 220, 220)") {
			var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book2").text();
			var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage = (parseFloat(danjia) * parseInt(shuliang)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage);
			CountPrice();
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
				CountPrice();
			} else if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(220, 220, 220)") {
				var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book2").text();
				var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
				var jiage = (parseFloat(danjia) * parseInt(shuliang)).toFixed(2);
				$(this).parents(".ShopCarListX").find(".Price").text(jiage);
				CountPrice();
			}
		} else if (a == 1) {
			var r = confirm("确认要删除这样商品名么");
			if (r == true) {
				$(this).parents(".ShopCarListX").remove();
				var id = $(this).parents(".ShopCarListX").find("#b_id").text();
				$.ajax({
					type: "get",
					url: "php/ShopCar.php",
					async: false,
					data: {
						"type": "2",
						"id": id
					},
					success: function() {},
					error: function() {
						alert("删除失败");
					}
				});
				CountPrice();
			} else {}
		}
	});

	//每个商品单独总价格
	$(".Price").each(function() {
		var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book1").text();
		var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
		$(this).text((parseFloat(danjia) * parseInt(shuliang)).toFixed(2));
	});
	//网页载入时候计算总价格
	CountPrice();
	//填写收货信息网页滚动
	$(".ReceiveAddressText input").on('focus', function() {
		//alert("ooo");
		var a = $(".ShopCarList").css('height');
		$(window).scrollTop(parseInt(a) + 70);
	});
	$("#enterbuy").click(function() {
		var exg = /^[1][358][0-9]{9}$/;
		var id = "0";
		var num = "0";
		$(".ShopCarListX").each(function() {
			id += "#" + $(this).find("#b_id").text();
			num += "#" + $(this).find(".shuliang").text();
		})
		if (id == "0") {
			alert("您的购物车还是空的呢！")
		} else if (($("#phonenumber").val() != "") && ($("#xiaoqu").val() != "") && ($("#loudao").val() != "") && ($("#qinshi").val() != "")) { //exg.test($("#phonenumber").val())
			if (exg.test($("#phonenumber").val())) {
				$.ajax({
					type: "get",
					url: "php/ShopCar.php",
					async: false,
					beforeSend:function(){
						$(".three-quarters-loader").show();
					},
					data: {
						"type": "5",
						"id": id,
						"num": num,
						"phonenumber": $("#phonenumber").val(),
						"xiaoqu": $("#xiaoqu").val(),
						"loudao": $("#loudao").val(),
						"qinshi": $("#qinshi").val(),
						"remark": $("#remark").val(),
						"paymethod": $(".PayMethodsText input").val()
					},
					success: function(data) {
						$(".three-quarters-loader").hide();
						alert(data);
						window.location.reload();
					}
				});
			} else {
				alert("请输入正确的手机号！")
			}

		} else {
			var a = $(".ShopCarList").css('height');
			$(window).scrollTop(parseInt(a) + 70);
			alert("带星号为必填项！");
		}
	})
});
//=====================================================================================
//===================================================================================