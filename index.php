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
	include_once "php/GetUser.php";
	$year=date("Y");
	$mouth=date("m");
	$day=date("d");
	$ip=get_real_ip();
	$browser=GetBrowser();
	mysql_query("INSERT INTO b_visited VALUES('','$year','$mouth','$day','$ip','$browser')");
	?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>卜克卜客</title>
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.slideBox.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/General.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="css/jquery.slideBox.css" />
		<link rel="stylesheet" type="text/css" href="css/general.css"/>
		<link rel="stylesheet" type="text/css" href="css/index.css" />
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
			<!--conent内容-->
			<div class="content">
				<!--轮播-->
				<div id="slidebox" class="slideBox">
					<ul class="items">
						<li>
							<a href="" title="测试轮播"></a>
							<img class="slideBoxPic" src="img/ad/<?php echo content("2"); ?>">
						</li>
						<li>
							<a href="" title="测试轮播2"></a>
							<img class="slideBoxPic" src="img/ad/<?php echo content("3"); ?>">
						</li>
						<li>
							<a href="" title="测试轮播"></a>
							<img class="slideBoxPic" src="img/ad/<?php echo content("4"); ?>">
						</li>
						<li>
							<a href="" title="测试轮播"></a>
							<img class="slideBoxPic" src="img/ad/<?php echo content("5"); ?>">
						</li>
					</ul>
				</div>
				<!--服务内容-->
				<div class="ServerContent">
					<div class="ServerContentJuxing">
					</div>
					<div class="ServerContentText">
						<span>服务内容</span>
						<br /> 我们能为你做什么？
						<span>What can we do for you?</span>
					</div>
				</div>
				<!--我要买书，我要买书，问题反馈-->
				<div class="SellBuyList">
					<table class="SellBuyListTable">
						<tr>
							<td>
								<span style="color: white;font-size: 2.2em;position: relative;top: -30px;left: 20px;">我要卖书</span>
								<span style="color: white;font-size: 2.0em;position: relative;top: 30px;left: 70px;">Sell</span>
							</td>
							<td>
								<span style="color: white;font-size: 2.2em;position: relative;top: -30px;left: 20px;">我要买书</span>
								<span style="color: white;font-size: 2.0em;position: relative;top: 30px;left: 80px;">Buy</span>
							</td>
							<td>
								<span style="color: white;font-size: 2.2em;position: relative;top: -30px;left: 20px;">信息反馈</span>
								<span style="color: white;font-size: 2.0em;position: relative;top: 30px;left: 0px;">Response</span>
							</td>
						</tr>
					</table>
				</div>
				<!--我们的动态-->
				<div class="OurDynamic">
					<div class="OurDynamicText">
						我们的动态
						<span style="position: relative;left: 883px; font-weight: 100;font-size: 0.8em;top: 3px;">more</span>
					</div>
					<div class="OurDynamicJuxing">
						<div class="OurDynamicJuxingTianchong">

						</div>
					</div>
					<!--我们的动态实时更新可编辑-->
					<div class="OurDynamicContent">
						<?php echo Our("1"); ?>
					</div>
				</div>
				<!--我们的服务-->
				<div class="OurService">
					<div class="OurServiceText">
						我们的服务
					</div>
					<div class="OurServiceJuxing">
						<div class="OurServiceJuxingTianchong">

						</div>
					</div>
					<!--我们的服务list-->
					<div class="OurServiceList">
						<table class="OurServiceListTable">
							<tr>
								<td>
									<div><img src="img/ad/<?php echo content("6"); ?>" alt="专业"/></div>
									<span style="font-weight: 500;font-size: 1.2em;"><?php echo content("7"); ?></span>
									<br />
									<div><?php echo content("8"); ?></div>
								</td>
								<td>
									<div><img src="img/ad/<?php echo content("9"); ?>" alt="优惠"/></div>
									<span style="font-weight: 500;font-size: 1.2em;"><?php echo content("10"); ?></span>
									<br />
									<div><?php echo content("11"); ?></div>
								</td>
								<td>
									<div><img src="img/ad/<?php echo content("12"); ?>" alt="更新"/></div>
									<span style="font-weight: 500;font-size: 1.2em;"><?php echo content("13"); ?></span>
									<br />
									<div><?php echo content("14"); ?></div>
								</td>
								<td>
									<div><img src="img/ad/<?php echo content("26"); ?>" alt="贴心"/></div>
									<span style="font-weight: 500;font-size: 1.2em;"><?php echo content("27"); ?></span>
									<br />
									<div><?php echo content("28"); ?></div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<!--foot脚步-->
			<div class="footer">
				booklbook卜克卜客®版权所有
			</div>
	</body>
    <script type="text/javascript">
    	$(".SellBuyListTable tr td:eq(2)").click(function(){
    		window.open("feedback.html","给我们的信息反馈","height=350px,width=1020px,top=100px,left=400px");
    	})
    	$(".SellBuyListTable tr td:nth-child(1)").click(function(){
    		window.location.href="sell.php";
    	})
    	$(".SellBuyListTable tr td:nth-child(2)").click(function(){
    		window.location.href="buy.php";
    	})
    </script>
</html>
<?php
	mysql_close();
	?>