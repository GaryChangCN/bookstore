$(document).ready(function() {
	var second = "0";
	$.ajax({
		type: "post",
		url: "../SelectGood.php",
		async: true,
		success: function(data) {
			$("#ulLeft").html(data);
		}
	});
	$.ajax({
		type:"post",
		url:"../BestSell.php",
		async:false,
		data:{
			"type":"2"
		},
		success:function(data){
			$("#ulRight").html("<li>id</li>"+data);
		}
	});
	$("#ulLeft").on("click", "li", function() {
		if ($(this).css('background-color') == "rgb(211, 211, 211)") {
			$(this).css('background-color', "transparent");
		} else {
			$(this).css("background-color", "#D3D3D3");
		}
	});
	$("#ulRight").on("dblclick","li",function(){
		var r=confirm("确定要移除热销商品"+$(this).text().split("#")[0]+"吗？");
		if(r==true){
			$.ajax({
				type:"post",
				url:"../BestSell.php",
				async:false,
				data:{
					"type":"3",
					"name":$(this).text().split("#")[0],
					"isbn":$(this).text().split("#")[1]
				},
				success:function(data){
					alert(data);
					window.location.href="";
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
		} else{
			$.ajax({
				type:"post",
				url:"../BestSell.php",
				async:false,
				data:{
					"type":"1",
					"name":second
				},
				success:function(data){
					alert(data);
					window.location.href="";
				}
			});
		}
	})
})