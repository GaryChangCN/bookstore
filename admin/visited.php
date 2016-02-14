<?php
include "certain.php";
if ($certain == 'admin' || $certain == 'server') {
	include "conn.php";
	$type = $_POST['type'];
	switch ($type) {
		case '1' :
			$count = mysql_query("SELECT COUNT(*) FROM b_visited");
			$rowcount = mysql_fetch_array($count);
			echo $rowcount[0] . "#";
			$num=($_POST['num']-1)*10;
			$query = mysql_query("SELECT * FROM b_visited LIMIT $num,10");
			while ($row = mysql_fetch_array($query)) {
				echo "<tr>" . "<td>" . $row[1] . "-" . $row[2] . "-" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td>" . "</tr>";
			}
			break;
		case '2' :
			$year = $_POST['data'];
			$count = mysql_query("SELECT COUNT(*) FROM b_visited WHERE year='$year'");
			$rowcount = mysql_fetch_array($count);
			echo $rowcount[0] . "#";
			$num=($_POST['num']-1)*10;
			$query = mysql_query("SELECT * FROM b_visited WHERE year='$year' LIMIT $num,10");
			while ($row = mysql_fetch_array($query)) {
				echo "<tr>" . "<td>" . $row[1] . "-" . $row[2] . "-" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td>" . "</tr>";
			}
			break;
		case '3' :
			$mouth = $_POST['data'];
			$count = mysql_query("SELECT COUNT(*) FROM b_visited WHERE mouth='$mouth'");
			$rowcount = mysql_fetch_array($count);
			echo $rowcount[0] . "#";
			$num=($_POST['num']-1)*10;
			$query = mysql_query("SELECT * FROM b_visited WHERE mouth='$mouth' LIMIT $num,10");
			while ($row = mysql_fetch_array($query)) {
				echo "<tr>" . "<td>" . $row[1] . "-" . $row[2] . "-" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td>" . "</tr>";
			}
			break;
		case '4' :
			$day = $_POST['data'];
			$data = explode("-", $day);
			$year = $data[0];
			$mouth = $data[1];
			$day = $data[2];
			$count = mysql_query("SELECT COUNT(*) FROM b_visited WHERE year='$year' AND mouth='$mouth' AND day='$day'");
			$rowcount = mysql_fetch_array($count);
			echo $rowcount[0] . "#";
			$query = mysql_query("SELECT * FROM b_visited WHERE year='$year' AND mouth='$mouth' AND day='$day'");
			while ($row = mysql_fetch_array($query)) {
				echo "<tr>" . "<td>" . $row[1] . "-" . $row[2] . "-" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td>" . "</tr>";
			}
			break;
		case '5' :
			switch ($_POST['type2']) {//1全部 2按年 3 按月 4按天
				case '1' :
					$a = mysql_query("SELECT COUNT(*) FROM b_visited");
					$b = mysql_fetch_array($a);
					$num1 = ceil($b[0] / 10);
					for ($i = 1; $i <= $num1; $i++) {
						echo "<li>" . ($num1 + 1 - $i) . "</li>";
					}
					break;
				case '2' :
					$time = $_POST['data'];
					$a = mysql_query("SELECT COUNT(*) FROM b_visited WHERE year=$time");
					$b = mysql_fetch_array($a);
					$num1 = ceil($b[0] / 10);
					for ($i = 1; $i <= $num1; $i++) {
						echo "<li>" . ($num1 + 1 - $i) . "</li>";
					}
					break;
				case '3' :
					$time = $_POST['data'];
					$a = mysql_query("SELECT COUNT(*) FROM b_visited WHERE mouth=$time");
					$b = mysql_fetch_array($a);
					$num1 = ceil($b[0] / 10);
					for ($i = 1; $i <= $num1; $i++) {
						echo "<li>" . ($num1 + 1 - $i) . "</li>";
					}
					break;
				case '4' :
					$time = $_POST['data'];
					$d = explode("-", $time);
					$y = $d[0];
					$m = $d[1];
					$da = $d[2];
					$a = mysql_query("SELECT COUNT(*) FROM b_visited WHERE year='$year' AND mouth='$mouth' AND day='$day'");
					$b = mysql_fetch_array($a);
					$num1 = ceil($b[0] / 10);
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
} else {
	echo "cookie保存到期请重新登录";
}
?>