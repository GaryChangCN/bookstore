<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.slideBox.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/General.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="css/jquery.slideBox.css" />
		<link rel="stylesheet" type="text/css" href="css/general.css"/>
		<link rel="stylesheet" type="text/css" href="css/sell.css" />
	</head>

	<body>
		<div class="container">
			<!--hearder-->
			<div class="hearder">
				<div class="hearder-content">
					<img class="hearder-logo" src="img/icon/booklbook-logo.png" />
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
							<img class="slideBoxPic" src="img/ad/2.png">
						</li>
						<li>
							<a href="" title="测试轮播2"></a>
							<img class="slideBoxPic" src="img/ad/4.png">
						</li>
					</ul>
				</div>
				<!--卖书须知-->
				<div class="ContentSellNotice">
					<!--卖书须知矩形-->
					<div class="ContentSellNoticeJuxing">
						卖书须知
					</div>
					<div class="ContentSellNoticeText">
						别的是否合格vs据印度分公司的积分很少有饭呢稍等，uokgbufesfbeshjfyudiehwiohwi的和别人发v
						这是一个测试测试测试额这是一个测试测试测试额这是一个测试测试测试额这是一个测试测试测试额
						这是一个测试测试测试额这是一个测试测试测试额这是一个测试测试测试额这是一个测试测试测试额
						这是一个测试测试测试额这是一个测试测试测试额这是一个测试测试测试额这是一个测试测试测试额
					</div>
					<div class="ContentSellNoticeFenge">
						<div></div>
					</div>
				</div>
				<!--填写地址-->
				<div class="ContentAddress">
					<!--填写地址矩形-->
					<div class="ContentAddressJuxing">
						填写地址
					</div>
					<div class="contentText">
						<form action="" method="post" id="InputSubmit">
							<span>
								手机：
							</span>
							<input type="text" name="phonenumber" id="phonenumber" value="" placeholder="唯一联系方式请仔细填写"/>
							<br />
							<span>
								小区：
							</span>
							<input type="text" name="xiaoqu" id="xiaoqu" value=""placeholder="例：9小区" />
							<br />
							<span>
								楼道：
							</span>
							<input type="text" name="loudao" id="loudao" value=""placeholder="例：a073" />
							<br />
							<span>
								寝室：
							</span>
							<input type="text" name="qinshi" id="qinshi" value="" placeholder="例：301"/>
							<br />
							<span>
								备注：
							</span>
							<input id="remark" placeholder="备注信息"/>
							<br />
							<input type="submit" value="提交"/>
						</form>
					</div>
				</div>
			</div>
			<!--foot脚步-->
			<div class="footer">
				booklbook卜克卜客®版权所有
			</div>
			<script type="text/javascript">
                $(".contentText form input").on("focus",function(){
                	$(window).scrollTop(382)
                })
			</script>
	</body>
    <script src="js/input.js" type="text/javascript" charset="utf-8"></script>
</html>