$(document).ready(function(){
	select("1");
	$(".hearder span:eq(1)").click(function() {
		select("2"); //点击已收书显示所有收书订单
		$(".juxing").text("已收书订单");
	});
	$(".hearder span:eq(0)").click(function() {
		$(".juxing").text("未收书订单");
		select("1");
	})
	function select(type) {
		$.ajax({
			type: "post",
			url: "../SellOrder.php",
			async: false,
			data: {
				"type":type
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
		selectdate("3", date0); //已收书订单 按日期
	})
	$("#unready").click(function() {
		var date0 = $("#selectdate").val()
		selectdate("4", date0); //未收书订单 按日期
	})
	function selectdate(type, date1) {
		$.ajax({
			type: "post",
			url: "../SellOrder.php",
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
				type:"post",
				url:"../SellOrder.php",
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