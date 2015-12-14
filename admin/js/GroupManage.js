$(document).ready(function() {
	var urla = document.URL.split("?");
	var urlid;
	switch (urla[1]) { //RightTop传过来的参数
		case "0":
			SelectGroup("1");
			ChangeGroup();
			break;
		case "1":
			SelectGroup("2");
			ChangeGroup();
			break;
		case "2":
			SelectGroup("3");
			ChangeGroup();
			break;
		case "3":
			urlid = "一";
			Addgroup(1);
			break;
		case "4":
			urlid = "二";
			Addgroup(2);
			break;
		case "5":
			urlid = "三";
			Addgroup(3);
			break;
		default:
			break;
		case "6":
			SelectGroup("1");
			DeleteGroup("grade");
			break;
		case "7":
			SelectGroup("2");
			DeleteGroup("college");
			break;
		case "8":
			SelectGroup("3");
			DeleteGroup("major");
			break;
	}

	function Addgroup(data) { //添加分组函数
		$("form").css('display', 'block');
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
	
	function DeleteGroup(data){
		$(".LiContainer ul").on("click","li",function(){
			var name=confirm("确定删除此分组？");
			if (name==true) {
				var name=$(this).text();
				$.ajax({
					type:"post",
					url:"../GroupManageDelete.php",
					async:false,
					data:{
						"name":name,
						"type":data
					},
					success:function(data1){
						document.write(data1 + "<a href=' '>返回</a>");
					}
				});
			} else{
				
			}
		})
	}
})