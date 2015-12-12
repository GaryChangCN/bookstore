<?php
	$SessionId=$_COOKIE['PHPSESSID'];
	session_id($SessionId);
	session_start();
	echo $_SESSION['password'];
	?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/index.css"/>
		<script src="../js/jquery.min.js"></script>
		<script src="js/index.js" type="text/javascript" charset="utf-8"></script>
		<title>卜克卜客管理</title>
	</head>
	<body>
		<div class="container">
			<div class="hearder">
				管理系统
			</div>
			<div class="content">
				<table border="0" class="BigTable">
					<tr>
						<td style="vertical-align: top;">
							<div class="left">
								<ul>
									<li>上架商品</li>
									<li>1</li>
									<li>1</li>
									<li>1</li>
									<li>1</li>
									<li>1</li>
									<li>1</li>
								</ul>
							</div>
						</td>
						<td>
							<div class="right">
								<div class="RightTop">
									
								</div>
								<iframe src="" width="1000px" class="iframe"></iframe>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</body>
</html>
