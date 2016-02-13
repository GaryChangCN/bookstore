<?php
include "certain.php";
if ($certain == 'admin' || $certain == 'server') {
	include "conn.php";
	$type = $_POST['type'];
	function select($ready, $limit) {
		$query = mysql_query("SELECT * FROM b_order WHERE b_ready='$ready' LIMIT $limit,8");
		while ($row = mysql_fetch_array($query)) {
			$query2 = mysql_query("SELECT b_name,b_isbn FROM b_product WHERE id='$row[1]'");
			$row2 = mysql_fetch_array($query2);
			if ($row[8] == "0") {
				echo "<tr><td>" . $row[0] . "</td><td>" . $row2[0] . "-" . $row2[1] . "</td><td>" . $row[2] . "</td><td>" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td><td>" . $row[6] . "</td><td>" . $row[7] . "</td><td>" . $row[9] . "</td><td>" . $row[10] . "</td><td>未发货</td></tr>";
			} else {
				echo "<tr><td>" . $row[0] . "</td><td>" . $row2[0] . "-" . $row2[1] . "</td><td>" . $row[2] . "</td><td>" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td><td>" . $row[6] . "</td><td>" . $row[7] . "</td><td>" . $row[9] . "</td><td>" . $row[10] . "</td><td>已发货</td></tr>";
			}
		}
	}

	function selectdate($ready, $date, $limit2) {
		$query = mysql_query("SELECT * FROM b_order WHERE b_ready='$ready' AND b_date='$date' LIMIT $limit2,8");
		while ($row = mysql_fetch_array($query)) {
			$query2 = mysql_query("SELECT b_name,b_isbn FROM b_product WHERE id='$row[1]'");
			$row2 = mysql_fetch_array($query2);
			if ($row[0] == "") {
				echo "<td>此日无订货单，请换个日期</td>";
			} else {
				if ($row[8] == "0") {
					echo "<tr><td>" . $row[0] . "</td><td>" . $row2[0] . "-" . $row2[1] . "</td><td>" . $row[2] . "</td><td>" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td><td>" . $row[6] . "</td><td>" . $row[7] . "</td><td>" . $row[9] . "</td><td>" . $row[10] . "</td><td>未发货</td></tr>";
				} else {
					echo "<tr><td>" . $row[0] . "</td><td>" . $row2[0] . "-" . $row2[1] . "</td><td>" . $row[2] . "</td><td>" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td><td>" . $row[6] . "</td><td>" . $row[7] . "</td><td>" . $row[9] . "</td><td>" . $row[10] . "</td><td>已发货</td></tr>";
				}
			}
		}
	}

	switch ($type) {
		case '1' :
			$number1 = ($_POST['yema'] - 1) * 8;
			select("0", $number1);
			break;
		case '2' :
			$number2 = ($_POST['yema'] - 1) * 8;
			select("1", $number2);
			break;
		case '3' :
			$number3 = ($_POST['selectDatePageNum'] - 1) * 8;
			$date = $_POST['date'];
			selectdate("1", $date, $number3);
			break;
		case '4' :
			$number4 = ($_POST['selectDatePageNum'] - 1) * 8;
			$date = $_POST['date'];
			selectdate("0", $date, $number4);
			break;
		case '5' :
			$id = $_POST['id'];
			$ready = $_POST['ready'];
			mysql_query("UPDATE b_order SET b_ready='$ready' WHERE id='$id' ");
			echo "修改成功";
			break;
		case '6' :
			$remark = $_POST['remark'];
			$id1 = $_POST['id'];
			mysql_query("UPDATE b_order SET b_admin_remark='$remark' WHERE id='$id1'");
			echo "修改成功";
			break;
		case '7' :
			switch ($_POST['pageNumberType']) {
				case '1' :
					$qu = mysql_query("SELECT COUNT(*) FROM b_order WHERE b_ready='0'");
					$ro = mysql_fetch_array($qu);
					$num1 = ceil($ro[0] / 8);
					for ($i = 1; $i <= $num1; $i++) {
						echo "<li>" . ($num1 + 1 - $i) . "</li>";
					}
					break;
				case '2' :
					$qu = mysql_query("SELECT COUNT(*) FROM b_order WHERE b_ready='1'");
					$ro = mysql_fetch_array($qu);
					$num1 = ceil($ro[0] / 8);
					for ($i = 1; $i <= $num1; $i++) {
						echo "<li>" . ($num1 + 1 - $i) . "</li>";
					}
					break;
				case '3' :
					$time = $_POST['pageNumberDate'];
					$qu = mysql_query("SELECT COUNT(*) FROM b_order WHERE b_ready='0' AND b_date='$time'");
					$ro = mysql_fetch_array($qu);
					$num1 = ceil($ro[0] / 8);
					for ($i = 1; $i <= $num1; $i++) {
						echo "<li>" . ($num1 + 1 - $i) . "</li>";
					}
					break;
				case '4' :
					$time = $_POST['pageNumberDate'];
					$qu = mysql_query("SELECT COUNT(*) FROM b_order WHERE b_ready='1' AND b_date='$time'");
					$ro = mysql_fetch_array($qu);
					$num1 = ceil($ro[0] / 8);
					for ($i = 1; $i <= $num1; $i++) {
						echo "<li>" . ($num1 + 1 - $i) . "</li>";
					}
					break;
				default :
					break;
			}
			break;
		default :
			break;
	}
	mysql_close();

} else {
	echo "cookie保存到期请重新登录";
}
?>