$(document).ready(function() {
	//点击换页
	var idMajor="0";
	selectBookList("0","0");
	$(document).on("click",".SelectMajorContentThird",function(){
		idMajor=$(this).children("span").text();
		selectBookList("1",$(this).children("span").text())
	})
	//pagenumber 变化
    $(".PageNumber ul").on('click',"li",function(){
    	$(this).parent("ul").children("li").css('background-color','transparent');
    	$(this).css('background-color','#E05C49');
    	var r=$(this).text()
    	selectNumber(r);
    })
	function selectNumber(text){
		$.ajax({
			type:"post",
			url:"php/BookList.php",
			async:false,
			data:{
				"type":"2",
				"idMajor":idMajor,
				"number":text
			},
			success:function(data){
				$(".DivideGroupContent").html(data);
			}
		});
	}
	function selectBookList(type,name){
		$.ajax({
			type:"post",
			url:"php/BookList.php",
			async:false,
			data:{
				"type":type,
				"name":name
			},
			success:function(data){
				var num=data.split("%%")[0];
				var con=data.split("%%")[1];
				$("#HotPageNumber ul").html(num);
				$(".DivideGroupContent").html(con);
			}
		});
	}
	//图书搜索
	$("#SearchSubmit").click(function(){
		$.ajax({
			type:"get",
			url:"php/Search.php",
			async:false,
			data:{
				"name":$("#search").val()
			},
			success:function(data){
				if ((data=='')||(data==null)||(data.indexOf(" ")>=0)) {
					alert("网站搜索功能有限，只支持精确搜索，您可以去专业分类选书。");
				} else{
					window.open("bookdetail.html?"+data);
				}
			}
		});
	})
	//slide买家须知折叠
	function zhedie(){
		$("#BuyersNoticeContent").slideToggle();
		$(".top").toggle();
		$(".down").toggle();
	}
	$(".BuyersNoticeText").click(function() {
		zhedie();
	});
	//打开我要卖书页面
	$(".SellBookPic").click(function(){
		window.open("../sell.php");
	})
	//学期专业处理效果
	//点击展开分类
	$(".SelectMajorContent ul ul").slideUp("fast");
	$(".SelectMajorContentFirst").on("click", function() {
		if ($(this).next().is("ul")) {
			$(".SelectMajorContent ul ul").slideUp();
			if ($(this).next().css('display') == "block") {
				$(this).next().slideUp();
			} else {
				$(this).next().slideDown();
			}
			$(this).parent().children("li").css({
				"font-weight": "300",
				"color": "#000000"
			});
			$(this).css({
				"font-weight": "800",
				"color": "#e05c49"
			});
		}
	})
	$(".SelectMajorContentSecond").on("click", function() {
		if ($(this).next().is("ul")) {
			$(".SelectMajorContent ul ul ul").slideUp();
			if ($(this).next().css('display') == "block") {
				$(this).next().slideUp();
			} else {
				$(this).next().slideDown();
			}
			$(".SelectMajorContentSecond").css({
				"font-weight": "100",
				"color": "#000000"
			});
			$(this).css({
				"font-weight": "600",
				"color": "#e05c49"
			});
		}
	});
	$(".SelectMajorContentThird").on('click',function(){
		$("#BuyersNoticeContent").slideUp()
		$("#slidebox").slideUp();
		$(".hearder").css('top',"0px");
		$(".content").css('margin-top','30px')
		$(".SelectMajorContentThird").css('color','#000000');
		$(this).css('color','#E05C49');
	})
	//===============================================================
	//---------------------------------------------------------------
	$(".PageNumber ul li:nth-child(4)").css({
		"background-color": "#e07262",
		"color": "white"
	});
	//显示商品详情页面
	$(document).on("click",".BuyContentList",function(){
		var ThisId=$(this).find("span#thisId").text();
		window.open("bookdetail.html?"+ThisId);
	})
})