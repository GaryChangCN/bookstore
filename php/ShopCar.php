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
				if (($row[8] == "") || ($row[8] == NULL) || (ctype_space($row[8]))) {
					echo '<span id="book1">' . $row[6] . '</span>';
				} else {
					echo '<span id="book1">' . $row[8] . '</span>';
				}
				echo '<br />新书：';
				if (($row[7] == "") || ($row[7] == NULL) || (ctype_space($row[7]))) {
					echo '<span id="book2">' . $row[5] . '</span>';
				} else {
					echo '<span id="book2">' . $row[7] . '</span>';
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
		$num=$_GET['num'];
		$address = $_GET['xiaoqu'] . "+" . $_GET['loudao'] . "+" . $_GET['qinshi'];
		$phonenumber = $_GET['phonenumber'];
		$remark = $_GET['remark'];
		$paymethod = $_GET['paymethod'];
		$date = date("Y-m-d");
		$time = date("H:i:s");
		$idArr = explode("#", $id);
		$numArr=explode("#", $num);
		for ($i = 1; $i < count($idArr); $i++) {
			if ($remark = "" || $remark = NULL) {
				mysql_query("INSERT INTO b_order VALUES('','$idArr[$i]','$numArr[$i]','$address','$phonenumber','该用户没有备注','$date','$time','0','','$paymethod')");
			} else {
				mysql_query("INSERT INTO b_order VALUES('','$idArr[$i]','$numArr[$i]','$address','$phonenumber','$remark','$date','$time','0','','$paymethod')");
			}
		}
		echo "提交成功，稍后会有工作人员联系您,若长时间没有联系您，您可以去首页反馈";
		break;
	default :
		break;
}
?>