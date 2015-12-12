<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/index.css"/>
		<script src="../js/jquery.min.js"></script>
		<script src="js/index.js" type="text/javascript" charset="utf-8"></script>
		<title>
			卜克卜客管理
		</title>
	</head>
	<body>
		<?php
		include "conn.php";
		if (isset($_COOKIE['name'])) {
			$name = $_COOKIE['name'];
			mysql_select_db("bookstore", $link);
			$password = mysql_query("select password from b_admin where name='$name'", $link);
			$passworda = mysql_fetch_array($password);
			if ($_COOKIE['mima'] == $passworda['password']) {
				echo '
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
									<li>
										上架商品
									</li>
									<li>
										1
									</li>
									<li>
										1
									</li>
									<li>
										1
									</li>
									<li>
										1
									</li>
									<li>
										1
									</li>
									<li>
										1
									</li>
								</ul>
							</div>
						</td>
						<td>
							<div class="right">
								<div class="RightTop">
								</div>
								<iframe src="" width="1000px" class="iframe">
								</iframe>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>';
		} else {
		echo "打开失败请联系管理员";
		}
		} else {
		echo '请先登录<a href="index.html">登录</a>';
		}

		?>
	</body>
</html>
