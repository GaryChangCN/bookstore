$(document).ready(function() {
	select("1"); //默认加载
	$(".hearder span:eq(1)").click(function() {
		select("2"); //点击已发货显示所有发货订单
		$(".juxing").text("已发货订单");
	});
	$(".hearder span:eq(0)").click(function() {
		$(".juxing").text("未发货订单");
		select("1");
	})

	function select(type) {
		$.ajax({
			type: "post",
			url: "../BuyOrder.php",
			async: false,
			data: {
				"type": type
			},
			success: function(data) {
				$("#table tr:first-child").nextAll().remove();
				$("#table").append(data);
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
	$("#already").click(function() {
		var date0 = $("#selectdate").val()
		selectdate("3", date0); //已发货订单 按日期
	})
	$("#unready").click(function() {
		var date0 = $("#selectdate").val()
		selectdate("4", date0); //未发货订单 按日期
	})

	function selectdate(type, date1) {
		$.ajax({
			type: "post",
			url: "../BuyOrder.php",
			async: false,
			data: {
				"type": type,
				"date": date1
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
		if (state == "未发货") {
			a = "已发货";
			ready = '1';
		} else {
			a = "未发货";
			ready = '0';
		}
		var r = confirm("确定将发货状态改成 " + a + " 吗？");
		if (r == true) {
			$.ajax({
				type: "post",
				url: "../BuyOrder.php",
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
	$(document).on("click", "tr td:nth-child(9)", function() {
		var id = $(this).parent().children("td:first-child").text();
		var name = prompt("请输入新备注", $(this).text());
		if (name != null && name != "") {
			$.ajax({
				type:"post",
				url:"../BuyOrder.php",
				async:false,
				data:{
					"type":"6",
					"remark":name,
					"id":id
				},
				success:function(data){
					alert(data);
					window.location.reload();
				}
			});
		}
	})
})