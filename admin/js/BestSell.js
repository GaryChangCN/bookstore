$(document).ready(function() {
	function totop(top) { //返回顶部函数
		$(window.parent).scrollTop(top).scrollLeft(top);
		$(window).scrollTop(top).scrollLeft(top);
	}
	//type 1 获取页码 type  2  切换页码----->SelectGood.php
	var second = "0";
	$.ajax({ //获取总页码
		type: "post",
		url: "../SelectGood.php",
		async: false,
		data: {
			"type": "1"
		},
		success: function(data) {
			$(".PageNumberfirst").html(data);
		}
	});
	changePageNumber("1");
	pageNum("1");

	function changePageNumber() {
		$.ajax({
			type: "post",
			url: "../SelectGood.php",
			async: false,
			data: {
				"type": "2",
				"num": arguments[0]
			},
			success: function(d) {
				$("#ulLeft").html(d);
				totop('0');
			}
		});
	}
	$(".PageNumberfirst").on("click", "li", function() { //改变页码
			$(this).parent().children().css({
				'background-color': "transparent",
				'color': '#0392DC'
			});
			$(this).css({
				'background-color': "#0392DC",
				'color': 'white'
			})
			var num = $(this).text();
			changePageNumber(num);
		})
		//BestSell type----1添加热门商品  2获取热门商品  3 删除  type2----1获取列表  2选择页面
	$.ajax({
		type: "post",
		url: "../BestSell.php",
		async: false,
		data: {
			"type": "2",
			"type2": "1"
		},
		success: function(data) {
			$(".PageNumber2").html(data);
		}
	});
	$(".PageNumber2").on("click", "li", function() { //改变页码
		$(this).parent().children().css({
			'background-color': "transparent",
			'color': '#0392DC'
		});
		$(this).css({
			'background-color': "#0392DC",
			'color': 'white'
		})
		var num = $(this).text();
		pageNum(num);
	})

	function pageNum() {
		$.ajax({
			type: "post",
			url: "../BestSell.php",
			async: false,
			data: {
				"type": "2",
				"type2": "2",
				"num": arguments[0]
			},
			success: function(data) {
				$("#ulRight").html("<li>id</li>" + data);
				totop('0');
			}
		});
	}

	$("#ulLeft").on("click", "li", function() {
		if ($(this).css('background-color') == "rgb(211, 211, 211)") {
			$(this).css('background-color', "transparent");
		} else {
			$(this).css("background-color", "#D3D3D3");
		}
	});
	$("#ulRight").on("dblclick", "li", function() {
		var r = confirm("确定要移除热销商品" + $(this).text().split("#")[0] + "吗？");
		if (r == true) {
			$.ajax({
				type: "post",
				url: "../BestSell.php",
				async: false,
				data: {
					"type": "3",
					"name": $(this).text().split("#")[0],
					"isbn": $(this).text().split("#")[1]
				},
				success: function(data) {
					alert(data);
					window.location.href = "";
				}
			});
		}
	})
	$("#submitadd").click(function() {
		$("#ulLeft").children("li").each(function() {
			if ($(this).css("background-color") == "rgb(211, 211, 211)") {
				var a = $(this).text();
				second = second + "*" + a;
			} else {

			}
		});
		if (second == "0") {
			alert("你还没有选择要添加 的内容!");
		} else {
			$.ajax({
				type: "post",
				url: "../BestSell.php",
				async: false,
				data: {
					"type": "1",
					"name": second
				},
				success: function(data) {
					alert(data);
					window.location.href = "";
				}
			});
		}
	})
})