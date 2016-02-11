$(document).ready(function() {
	select("1", "1");
	getPagenumber("1");
	var data = new Object(); //type: 1=>未收书 2=>已收书 3=>按日期未收书  4=>按日期已收书
	data.type = "1";
	data.time = "";
	$(".hearder span:eq(0)").click(function() {
		$(".juxing").text("未收书订单"); //点击未收书显示所有收书订单  type  1
		select("1", "1");
		getPagenumber("1");
		data.type = "1";
		data.time = "";
	})
	$(".hearder span:eq(1)").click(function() {
		select("2", "1"); //点击已收书显示所有收书订单       type  2
		getPagenumber("2");
		$(".juxing").text("已收书订单");
		data.type = "2";
		data.time = "";
	});
	$(".PageNumber").on("click", "li", function() { //切换页码
		$(this).parent().children().css({
			'background-color': "transparent",
			'color': '#0392DC'
		});
		$(this).css({
			'background-color': "#0392DC",
			'color': 'white'
		})
		var num = $(this).text();
		switch (data.type) {
			case "1":
				select("1", num);
				break;
			case "2":
				select("2", num);
				break;
			case "3":
			    selectdate("3",data.time,num);
			    break;
			case "4":
			    selectdate("4",data.time,num);
			    break;    
			default:
				break;
		}
	})

	function select() {
		$.ajax({
			type: "post",
			url: "../SellOrder.php",
			async: false,
			data: {
				"yema": arguments[1], //获取已收书 和未收书下 第一页
				"type": arguments[0]
			},
			success: function(data) {
				$("#table tr:first-child").nextAll().remove();
				$("#table").append(data);
			}
		});
	}

	function getPagenumber() { //pageNumberType 1--未收书  2--已收书  3--按日期未收书 4--按日期已收书
		$.ajax({
			type: "post",
			url: "../SellOrder.php",
			async: false,
			data: {
				"type": "7",
				"pageNumberType": arguments[0],
				"pageNumberDate": arguments[1]
			},
			success: function(data) {
				$(".PageNumber").children().remove();
				$(".PageNumber").html(data);
			}
		});
	}
	$(".hearder span:eq(2)").click(function() {
		$(".alert").show();
		$(".cover").show();
	})
	$(".cover").click(function() {
		$(this).hide();
		$(".alert").hide()
	})
	$("#unready").click(function() {
		var dat = $("#selectdate").val()
		selectdate("4", dat,"1"); //未收书订单 按日期==============================================
		data.type = "3";
		data.time = dat;
		getPagenumber("3", dat);
	})
	$("#already").click(function() {
		var date0 = $("#selectdate").val()
		selectdate("3", date0,"1"); //已收书订单 按日期=========================================
		data.type = "4";
		data.time = date0;
		getPagenumber("4", date0);
	})

	function selectdate(type, date1) {
		$.ajax({
			type: "post",
			url: "../SellOrder.php",
			async: false,
			data: {
				"type": type,
				"date": date1,
				"selectDatePageNum":arguments[2]
			},
			success: function(data) {
				$("#table tr:first-child").nextAll().remove();
				$("#table").append(data);
				$(".cover").hide();
				$(".alert").hide();
				$(".juxing").text(date1 + "的订单");
			}
		});
	}
	$(document).on("click", "tr td:last-child", function() {
		var id = $(this).parent().children("td:first-child").text();
		var state = $(this).text();
		var a;
		var ready;
		if (state == "未收书") {
			a = "已收书";
			ready = '1';
		} else {
			a = "未收书";
			ready = '0';
		}
		var r = confirm("确定将收书状态改成 " + a + " 吗？");
		if (r == true) {
			$.ajax({
				type: "post",
				url: "../SellOrder.php",
				async: false,
				data: {
					"type": "5",
					"id": id,
					"ready": ready
				},
				success: function(data) {
					alert(data);
					window.location.reload();
				}
			});
		} else {

		}
	})
	$(document).on("click", "tr td:nth-child(7)", function() {
		var id = $(this).parent().children("td:first-child").text();
		var name = prompt("请输入新1备注", $(this).text());
		if (name != null && name != "") {
			$.ajax({
				type: "post",
				url: "../SellOrder.php",
				async: false,
				data: {
					"type": "6",
					"remark": name,
					"id": id
				},
				success: function(data) {
					alert(data);
					window.location.reload();
				}
			});
		}
	})
})