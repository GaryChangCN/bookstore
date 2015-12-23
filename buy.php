<?php
	include "admin/conn.php";
	function content($number){   //选择图片和小内容
		$query=mysql_query("SELECT text FROM b_ad WHERE number='$number'");
		$row=mysql_fetch_array($query);
		return $row['text'];
	}
	function Our($number){
		$query1=mysql_query("SELECT text FROM b_our WHERE display='$number'");
		$row1=mysql_fetch_array($query1);
		return $row1['text'];
	}
	?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<script src="js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/jquery.slideBox.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/jquery.jcarousellite.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/General.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/buy.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="css/jquery.slideBox.css" />
		<link rel="stylesheet" type="text/css" href="css/general.css" />
		<link rel="stylesheet" type="text/css" href="css/buy.css" />
		<title>我要买书</title>
	</head>

	<body>
		<div class="container">
			<!--hearder-->
			<div class="hearder">
				<div class="hearder-content">
					<img alt="logo" class="hearder-logo" src="img/icon/<?php echo content("1"); ?>" />
					<table border="0" class="HearderContentTable">
						<tr>
							<td>
								<div>首页</div>
							</td>
							<td>
								<div>我要卖书</div>
							</td>
							<td>
								<div>我要买书</div>
							</td>
							<td>
								<div>购物车</div>
							</td>
						</tr>
					</table>
				</div>
			</div>
			<!--content-->
			<div class="content">
				<!--轮播-->
				<div id="slidebox" class="slideBox">
					<ul class="items">
						<li>
							<a href="" title="测试轮播"></a>
							<img class="slideBoxPic" src="img/ad/<?php echo content("22"); ?>">
						</li>
						<li>
							<a href="" title="测试轮播2"></a>
							<img class="slideBoxPic" src="img/ad/<?php echo content("23"); ?>">
						</li>
						<li>
							<a href="" title="测试轮播2"></a>
							<img class="slideBoxPic" src="img/ad/<?php echo content("24"); ?>">
						</li>
						<li>
							<a href="" title="测试轮播2"></a>
							<img class="slideBoxPic" src="img/ad/<?php echo content("25"); ?>">
						</li>
					</ul>
				</div>
				<!--买家须知-->
				<div class="BuyersNotice">
					<div class="BuyersNoticeJuxing">

					</div>
					<div class="BuyersNoticeText">
						买家须知
						<span class="BuyersNoticeSlide">
							<img src="img/icon/top.gif" class="top"/>
							<img src="img/icon/down.gif" class="down"/>
						</span>
					</div>
					<!--动态折叠的买家须知-->
					<div class="BuyersNoticeContent" id="BuyersNoticeContent">
						<?php echo content("20") ?>
					</div>
				</div>
				<!--选择学期专业和热销商品-->
				<div class="SelectPopular">
					<div class="SelectMajor">
						<!--学期专业矩形-->
						<div class="SelectMajorJuxing">
							学期专业
						</div>
						<!--学期专业content-->
						<div class="SelectMajorContent">
							<!--ul-li列表 first代表一级。。。。\
								SMCFirst  表示ul标签等级
							-->
							<ul>
								<?php
								   $result1=mysql_query("SELECT * FROM b_category_grade");
								   while ($hang1=mysql_fetch_array($result1)) {
								   	    echo "<li class='SelectMajorContentFirst'>".$hang1[1]."</li>";  //输出年级
									    echo "<ul>";
										$result2=mysql_query("SELECT id_category_col FROM b_rel_col_grade WHERE id_category_grade='$hang1[0]'");
										while ($hang2=mysql_fetch_array($result2)) {
											$id_col=$hang2[0];
											$result2_1=mysql_query("SELECT college FROM b_category_college WHERE id='$id_col'");
											$hang2_1=mysql_fetch_array($result2_1);
											echo "<li class='SelectMajorContentSecond'>".$hang2_1[0]."</li>";  //输出学院
											echo "<ul>";
											$result3=mysql_query("SELECT id_category_major FROM b_rel_maj_col WHERE id_category_college='$id_col'");
											while ($hang3=mysql_fetch_array($result3)) { //输出专业
												$id_maj=$hang3[0];
												$result3_1=mysql_query("SELECT major,id FROM b_category_major WHERE id='$id_maj'");
												$hang3_1=mysql_fetch_array($result3_1);
												echo "<li class='SelectMajorContentThird'><span>".$hang3_1[1]."</span>".$hang3_1[0]."</li>";
											}
											echo "</ul>";
										}
										echo "</ul>";
								   }
								?>
							</ul>
						</div>
						<!--搜索部分-->
						<div class="SearchJuxing">
							搜索书籍
						</div>
						<div class="SearchContent">
							<input type="text" name="search" id="search" placeholder="请输入的书籍名" />
							<button id="SearchSubmit">搜索</button>
						</div>
						<!--我要卖书-->
						<div class="SellBook">
							我要卖书
						</div>
						<div class="SellBookContent">
							<img class="SellBookPic" src="img/ad/<?php echo content("21") ?>" alt="点击去卖书" />
						</div>
					</div>
					<!--热销商品栏-->
					<div class="PopularGood">
						<div class="DivideGroupJuxing">
							分类图书
						</div>
						<div class="DivideGroupContent">
							
							
						</div>
						<!--页码-->
						<div class="PageNumber" id="HotPageNumber">
							<ul>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--footer-->
			<div class="footer">
				booklbook卜克卜客®版权所有
			</div>
		</div>
	</body>
</html>