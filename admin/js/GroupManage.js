$(document).ready(function() {
	var urla = document.URL.split("?");
	var urlid;
	switch (urla[1]) { //RightTop传过来的参数
		case "0": //修改一级分组名
			SelectGroup("1");
			ChangeGroup();
			break;
		case "1": //修改二级分组名
			SelectGroup("2");
			ChangeGroup();
			break;
		case "2": //修改三级分组名
			SelectGroup("3");
			ChangeGroup();
			break;
		case "3": //添加一级分组
			urlid = "一";
			Addgroup(1);
			break;
		case "4": //添加二级分组
			urlid = "二";
			Addgroup(2);
			break;
		case "5": //添加三级分组
			urlid = "三";
			Addgroup(3);
			break;
		case "6": //删除一级分组
			SelectGroup("1");
			DeleteGroup("grade");
			break;
		case "7": //删除二级分组
			SelectGroup("2");
			DeleteGroup("college");
			break;
		case "8": //删除三级分组
			SelectGroup("3");
			DeleteGroup("major");
			break;
		case "9": //一级分组内容
			ContentGroup("1");
			break;
		case "10": //二级分组内容
			ContentGroup("2");
			break;
		case "11": //三级分组内容
			ContentGroup("3");
			break;
		case "12": //查/删一级分组内容
			ContentGroupDelete("1");
			break;
		case "13": //查/删二级分组内容
			ContentGroupDelete("2");
			break;
		case "14": //查/删三级分组内容
			ContentGroupDelete("3");
			break;
		default:
			break;
	}

	function Addgroup(data) { //添加分组函数
		$("form").css('display', 'block');
		$(".TdContainer").css('display', 'none');
		$(".LiContainer").css('display', 'none');
		$("#level").text(urlid + "级分组名");
		$("#enter").click(function() {
			var a = $("#groupname").val();
			$.ajax({
				type: "post",
				url: "../GroupManageAdd.php",
				async: false,
				data: {
					"name": data,
					"content": a
				},
				success: function(data1) {
					document.write(data1);
				}
			});
		});
	}

	function SelectGroup(data) { //修改分组名函数---显示分组详情列表
		$("form").css('display', 'none');
		$(".TdContainer").css('display', 'none');
		$(".LiContainer").css('display', 'block');
		$.ajax({
			type: "post",
			url: "../GroupManageSelect.php",
			data: {
				"name": data
			},
			async: false,
			success: function(data1) {
				$(".LiContainer").children("ul").html(data1);
			}
		});
	}

	function ChangeGroup() { //修改分组名函数
		$(".LiContainer ul").on("click", "li", function() {
			var GroupName = $(this).text();
			var name = prompt("请输入新分组名", GroupName);
			if (name != null && name != "") {
				$.ajax({
					type: "post",
					url: "../GroupManageChange.php",
					async: false,
					data: {
						"nameNew": name,
						"nameOld": GroupName,
						"type": urla[1]
					},
					success: function(data1) {
						document.write(data1 + "<a href=' '>返回</a>");
					}
				});
			}
		})
	}

	function DeleteGroup(data) { //删除分组函数
		$(".LiContainer ul").on("click", "li", function() {
			var name = confirm("确定删除此分组？");
			if (name == true) {
				var name = $(this).text();
				$.ajax({
					type: "post",
					url: "../GroupManageDelete.php",
					async: false,
					data: {
						"name": name,
						"type": data
					},
					success: function(data1) {
						document.write(data1 + "<a href=' '>返回</a>");
					}
				});
			} else {

			}
		})
	}

	function ContentGroup(data) { //分组容器显示每级目录列表
		var first = "";
		var second = "0";
		$("form").css('display', 'none');
		$(".LiContainer").css('display', 'none');
		$(".TdContainer").css('display', 'block');
		$("#div1").css('display', 'block');
		$("#div2").css('display', 'none');
		$.ajax({
			type: "post",
			url: "../GroupManageSelect.php",
			async: false,
			data: {
				"name": data
			},
			success: function(data1) {
				$(".TdContainer table tr td:eq(0)").children("ul").html(data1);
			}
		});
		$(".TdContainer table tr td:eq(0) ul").on("click", "li", function() { //分组容器显示每级目录列表 First！！！！！
			$(this).parent("ul").children("li").css('background-color', "transparent");
			$(this).css("background-color", "#D3D3D3");
			first = $(this).text(); //储存first值
			switch (data) {
				case "1":
					GetList("2");
					break;
				case "2":
					GetList("3");
					break;
				case "3":
					GetGoodList();
					break;
				default:
					break;
			}

			function GetList(list) { //从商品分组GroupManageSelect获取分组信息显示在 Second！
				$.ajax({
					type: "post",
					url: "../GroupManageSelect.php",
					async: false,
					data: {
						"name": list
					},
					success: function(data1) {
						$(".TdContainer table tr td:eq(1)").children("ul").html(data1);
					}
				});
			}

			function GetGoodList() { //从商品分组GroupManageSelect获取图书！！！信息显示在 Second！
				$.ajax({
					type: "post",
					url: "../SelectGood.php",
					async: false,
					success: function(data1) {
						$(".TdContainer table tr td:eq(1)").children("ul").html(data1);
					}
				});
			}
		});
		$(".TdContainer table tr td:eq(1) ul").on("click", "li", function() { //Second栏点击函数
			if ($(this).css('background-color') == "rgb(211, 211, 211)") {
				$(this).css('background-color', "transparent");
			} else {
				$(this).css("background-color", "#D3D3D3");
			}
		});
		$("#SubmitAdd").click(function() {
			second="0";
			$(".TdContainer table tr td:eq(1) ul").children("li").each(function() {
				if ($(this).css("background-color") == "rgb(211, 211, 211)") {
					var a = $(this).text();
					second = second + "*" + a;
				} else {

				}
			});
			if (second == "0") {
				alert("你还没有选择要添加的内容!");
			} else {
				$.ajax({
					type: "post",
					url: "../GroupManageContent.php",
					async: true,
					data: {
						"type": data,
						"first": first,
						"second": second
					},
					success: function(a) {
						alert(a);
						window.location.href="";
					}
				});
			}
		})
	}

	function ContentGroupDelete(data) { //删除每级分组内容
		$("#div2").css('display', 'block');
		$("#div1").css('display', 'none');
		var name1 = "";
		var name2 = "0";
		$.ajax({
			type: "post",
			url: "../GroupManageSelect.php",
			async: false,
			data: {
				"name": data
			},
			success: function(data1) {
				$(".TdContainer table tr td:eq(0)").children("ul").html(data1);
			}
		});
		$(".TdContainer table tr td:eq(0)").children("ul").on("click", "li", function() {
			$(this).parent("ul").children("li").css('background-color', "transparent");
			$(this).css("background-color", "#D3D3D3");
			name1 = $(this).text();
			$.ajax({
				type: "post",
				url: "../GroupManageContentSelect.php",
				async: false,
				data: {
					"type": data,
					"name1": name1
				},
				success: function(data) {
					$(".TdContainer table tr td:eq(1)").children("ul").html(data);
				}
			});
		});
		$(".TdContainer table tr td:eq(1)").children("ul").on("click", "li", function() {
			if ($(this).css('background-color') == "rgb(211, 211, 211)") {
				$(this).css('background-color', "transparent");
			} else {
				$(this).css("background-color", "#D3D3D3");
			}
		})
		$("#SubmitDelete").click(function() {
			name2='0';
			$(".TdContainer table tr td:eq(1) ul").children("li").each(function() {
				if ($(this).css("background-color") == "rgb(211, 211, 211)") {
					var a = $(this).text();
					name2 = name2 + "*" + a;
				} else {

				}
			});
			if (name2 == "0") {
				alert("你还没有选择要删除的内容!");
			} else {
				$.ajax({
					type: "post",
					url: "../GroupManageContentDelete.php",
					async: false,
					data: {
						"type": data,
						"first": name1,
						"second": name2
					},
					success: function(data1) {
						alert(data1);
						window.location.href="";
					}
				});
			}
		})
	}
})