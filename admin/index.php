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
		<div class="container" style="display: none;">
			<div class="hearder">
				<span id="hearder-logo">
					booklbook管理系统
				</span>
				<span class="HearderSpan">
					<?php
					echo "欢迎您：" . $_COOKIE['name'];
					?>
				</span>
			</div>
			<div class="content">
				<table border="0" class="BigTable">
					<tr>
						<td class="BigTableTd1">
							<div class="left">
								<ul>
									<li>
										上架商品
									</li>
									<li>
										分组管理
									</li>
									<li>
										管理商品
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
						<td class="BigTableTd2">
							<div class="right">
								<div class="RightTop">
									<table border="0" class="FenzuGuanli">
										<tr>
											<td>
												修改分组：
											</td>
											<td>
												<div>
													修改一级分组名
												</div>
											</td>
											<td>
												<div>
													修改二级分组名
												</div>
											</td>
											<td>
												<div>
													修改三级分组名
												</div>
											</td>
										</tr>
										<tr>
											<td>
												添加分组：
											</td>
											<td>
												<div>
													添加一级分组
												</div>
											</td>
											<td>
												<div>
													添加二级分组
												</div>
											</td>
											<td>
												<div>
													添加三级分组
												</div>
											</td>
										</tr>
										<tr>
											<td>
												删除分组：
											</td>
											<td>
												<div>
													删除一级分组
												</div>
											</td>
											<td>
												<div>
													删除二级分组
												</div>
											</td>
											<td>
												<div>
													删除三级分组
												</div>
											</td>
										</tr>
										<tr>
											<td>
												添加分组内容：
											</td>
											<td>
												<div>
													一级分组内容
												</div>
											</td>
											<td>
												<div>
													二级分组内容
												</div>
											</td>
											<td>
												<div>
													三级分组内容
												</div>
											</td>
										</tr>
										<tr>
											<td>
												查/删分组内容：
											</td>
											<td>
												<div>
													一级分组内容
												</div>
											</td>
											<td>
												<div>
													二级分组内容
												</div>
											</td>
											<td>
												<div>
													三级分组内容
												</div>
											</td>
										</tr>
									</table>
								</div>
								<iframe src="" width="1000px" class="iframe">
								</iframe>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<?php
		include "conn.php";
		if (isset($_COOKIE['name'])) {
			$name = $_COOKIE['name'];
//			mysql_select_db("bookstore", $link);
			$password = mysql_query("select password from b_admin where name='$name'", $link);
			$passworda = mysql_fetch_array($password);
			mysql_close();	 
			if ($_COOKIE['mima'] == $passworda['password']) {
				echo '<script type="text/javascript">
                     $(".container").css("display","block");
                      </script>'; 
			} else {
				echo "打开失败请联系管理员";
			}
		} else {
			echo '请先登录<a href="index.html">登录</a>';
		}
		?>
	</body>
</html>
