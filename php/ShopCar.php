<?php
include "../admin/conn.php";
$type = $_GET['type'];
switch ($type) {
	case '1' :
		if (isset($_COOKIE['shopcar'])) {
			$shopcarArr = explode("--", $_COOKIE['shopcar']);
			for ($i = 0; $i < count($shopcarArr); $i++) {
				$idArr = explode("A", $shopcarArr[$i]);
				$id = $idArr[0];
				$query = mysql_query("SELECT * FROM b_product WHERE id='$id'");
				$row = mysql_fetch_array($query);
				echo '<div class="ShopCarListX">
						<table border="0">
							<tr>
								<td>
									<img class="ShopCarListPic" src="img/book/' . $row[12] . '" />
								</td>
								<td>
									<div class="BookXiangQing">
									<span id="b_id" style="display:none;">' . $row[0] . '</span>
										<span class="BookName">
											' . $row[1] . '
										</span>
										<br />作者：
										<span class="BookEditor">
											' . $row[3] . '
										</span>
										<br />出版社：
										<span class="BookPublish">
											' . $row[2] . '
										</span>
										<br />ISBN:
										<span class="BookIsbn">
											' . $row[4] . '
										</span>
									</div>
								</td>
								<td>
									<div class="BookPrice">
										<span class="SinglePrice">单价</span>
										<br />旧书：';
				if ($row[8] == "0") {
					echo '<span id="book1">' . $row[6] . '</span>';
				} else {
					$old2016 = ceil($row[6] * ($row[8] / 10));
					echo '<span id="book1">' . $old2016 . '</span>';
				}
				echo '<br />新书：';
				if ($row[7] == "0") {
					echo '<span id="book2">' . $row[5] . '</span>';
				} else {
					$old2015 = ceil($row[5] * ($row[7] / 10));
					echo '<span id="book2">' . $old2015 . '</span>';
				}
				echo '</div>
								</td>
								<td>
									<div class="BookKind">
										<span class="BookKinds">
											选择种类
										</span>
										<div class="BookOld">
											旧书
										</div>
										<div class="BookNew">
											新书
										</div>
									</div>
								</td>
								<td>
									<div class="BookNumber">
										<span class="BookNumbers">数量</span>
										<br />
										<div>
											<table border="0">
												<tr>
													<td>-</td>
													<td class="shuliang">' . $idArr[1] . '</td>
													<td>+</td>
												</tr>
											</table>
										</div>
									</div>
								</td>
								<td>
									<div class="CountPrice">
										<span class="CountPrices">价格</span>
										<br />
										<span class="Price">0.00</span>
									</div>
								</td>
							</tr>
						</table>
					</div>';
			}
		} else {
			echo "购物车是空的。";
		}
		break;
	case '2' :
		$shopcar = $_COOKIE['shopcar'];
		$Arr = explode("--", $shopcar);
		$id = $_GET['id'];
		//$id = "8";
		$new = array();
		for ($i = 0; $i < count($Arr); $i++) {
			if (strstr($Arr[$i], $id)) {

			} else {
				$new[] = $Arr[$i];
			}
		}
		$new2 = implode("--", $new);
		setcookie("shopcar", $new2, time() + 2400, "/");
		break;
	case '3' :
		$query = mysql_query("SELECT text FROM b_ad WHERE number='1'");
		$row = mysql_fetch_array($query);
		echo $row[0];
		break;
	case '5' :
		$id = $_GET['id'];
		$num = $_GET['num'];
		$address = $_GET['xiaoqu'] . "+" . $_GET['loudao'] . "+" . $_GET['qinshi'];
		$phonenumber = $_GET['phonenumber'];
		$remark = $_GET['remark'];
		$paymethod = $_GET['paymethod'];
		$date = date("Y-m-d");
		$time = date("H:i:s");
		$idArr = explode("#", $id);
		$numArr = explode("#", $num);
		for ($i = 1; $i < count($idArr); $i++) {
			if ($remark = "" || $remark = NULL) {
				mysql_query("INSERT INTO b_order VALUES('','$idArr[$i]','$numArr[$i]','$address','$phonenumber','该用户没有备注','$date','$time','0','','$paymethod')");
			} else {
				mysql_query("INSERT INTO b_order VALUES('','$idArr[$i]','$numArr[$i]','$address','$phonenumber','$remark','$date','$time','0','','$paymethod')");
			}
		}
		echo "提交成功，稍后会有工作人员联系您,若长时间没有联系您，您可以去首页反馈";
		setcookie('shopcar','0',time()-3600,"/");
		require_once "../admin/mailer.php";
		$smtpserver = "smtp.126.com";
		//SMTP服务器
		$smtpserverport = 25;
		//SMTP服务器端口
		$smtpusermail = "tinytin@126.com";
		//SMTP服务器的用户邮箱
		$smtpuser = "tinytin";
		//SMTP服务器的用户帐号
		$smtppass = "z123369";
		//SMTP服务器的用户密码
		$q = mysql_query("SELECT mail FROM b_mail WHERE send='1'");
		while ($r = mysql_fetch_array($q)) {
			$smtpemailto = $r['mail'];
			//发送给谁
			$mailtitle = '【booklbook】新买书订单';
			//邮件主题
			$mailcontent = "收到手机号为：" . $phonenumber . "的新订单，请尽快处理";
			//邮件内容
			$mailtype = "HTML";
			//邮件格式（HTML/TXT）,TXT为文本邮件
			//************************ 配置信息 ****************************
			$smtp = new smtp($smtpserver, $smtpserverport, true, $smtpuser, $smtppass);
			//这里面的一个true是表示使用身份验证,否则不使用身份验证.
			$smtp -> debug = false;
			//是否显示发送的调试信息
			$state = $smtp -> sendmail($smtpemailto, $smtpusermail, $mailtitle, $mailcontent, $mailtype);

		}
		break;
	default :
		break;
}
mysql_close();
?>