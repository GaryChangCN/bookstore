$(document).ready(function() {
	$.ajax({
		type: "post",
		url: "../SelectGood.php",
		async: false,
		success: function(data) {
			$("#ulLeft").html(data);
		}
	});
	$("#ulLeft").on("click", "li", function() { //点击左边栏事件
		$(this).parent().children("li").css('background-color', 'transparent');
		$(this).css('background-color', '#D3D3D3');
		var a = $(this).text();
		var aa = a.split("#");
		$.ajax({
			type: "post",
			url: "../SelectGoodDetails.php",
			async: false,
			data: {
				"name": aa[1],
				"name2": aa[0]
			},
			success: function(data) {
				$("#ulRight").html(data);
			}
		});
	});
	$("#ulLeft").on("dblclick", "li", function() {
		var nameArr = $(this).text().split("#");
		var really = confirm("确定要删除->" + nameArr[0] + "<-这本书么");
		if (really == true) {
			$.ajax({
				type: "post",
				url: "../DeleteGood.php",
				async: false,
				data: {
					"name": nameArr[0],
					"isbn": nameArr[1]
				},
				success: function(data) {
					alert("删除成功！请查看图书列表是否还有此图书。\n如果未能删除，请再试几次或者联系管理员");
					window.location.reload();
				}
			});
		} else {}
	})
	$("#ulRight").on("click", "li", function() { //有侧单机修改书目详情
		var ulRightIndex = $(this).index().toString(); //获取当前li的索引
		var id = $(this).parent().children("li:eq(0)").text(); //获取当前书的主键
		var name = $(this).text();
		var namea = name.split("：");
		switch (ulRightIndex) {
			case "1": //书名
				ChangeGood("b_name");
				break;
			case "2": //出版社
				ChangeGood("b_publish");
				break;
			case "3": //作者
				ChangeGood("b_editor");
				break;
			case "4": //ISBN
				ChangeGood("b_isbn");
				break;
			case "5": //新书价格
				ChangeGood("b_price_new");
				break;
			case "6": //旧书价格
				ChangeGood("b_price_old");
				break;
			case "7": //新书折扣价格
				ChangeGood("b_price_show_new");
				break;
			case "8": //旧书折扣价格
				ChangeGood("b_price_show_Old");
				break;
			case "9": //新书库存
				ChangeGood("b_stock_new");
				break;
			case "10": //旧书库存
				ChangeGood("b_stock_old");
				break;
			case "11": //是否热销
				ChangeGoodHot();
				break;
			case "12": //是否热销
				ChangeGoodPic(id);
				break;	
			default:
				break;
		}
		function ChangeGood(data) { //修改商品详情 除了热销和图片
			var nameNew = prompt("请输入新" + namea[0], namea[1]);
			if (nameNew != null && nameNew != "") {
				$.ajax({
					type: "post",
					url: "../ChangeGood.php",
					async: false,
					data: {
						"type": "1",
						"col": data,
						"new": nameNew,
						"id": id
					},
					success: function(data) {
						alert(data);
						window.location.reload();
					}
				});
			}
		}

		function ChangeGoodHot() { //修改商品详情  热销
			$(".alert div").show();
			$(".alert form").hide();
			$(".cover").show();
			$(".alert").slideDown();
			cover();
			$(".alert div").click(function() {
				$(this).parent().children().css('background-color', 'white');
				$(this).css('background-color', '#DCDCDC');
				var r = confirm("确要改为->" + $(this).text());
				if (r == true) {
					$.ajax({
						type: "post",
						url: "../ChangeGood.php",
						async: false,
						data: {
							"type": "2",
							"new": $(this).text(),
							"id": id
						},
						success: function(data) {
							alert(data);
							window.location.reload();
						}
					});
				} else {}
			})
		}

		function ChangeGoodPic(data) { //修改商品详情  图片
			$("#inputid").val(data);
			$(".cover").show();
			$(".alert div").hide();
			$(".alert form").show();
			$(".alert").slideDown();
			cover();
		}
		function cover(){   //隐藏遮盖图层
			$(".cover").click(function(){
				$(this).hide();
				$(".alert").slideUp();
			})
		}
	})
})