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
			$query = mysql_query("SELECT * FROM b_visited");
			while ($row = mysql_fetch_array($query)) {
				echo "<tr>" . "<td>" . $row[1] . "-" . $row[2] . "-" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td>" . "</tr>";
			}
			break;
		case '2' :
			$year = $_POST['data'];
			$count = mysql_query("SELECT COUNT(*) FROM b_visited WHERE year='$year'");
			$rowcount = mysql_fetch_array($count);
			echo $rowcount[0] . "#";
			$query = mysql_query("SELECT * FROM b_visited WHERE year='$year'");
			while ($row = mysql_fetch_array($query)) {
				echo "<tr>" . "<td>" . $row[1] . "-" . $row[2] . "-" . $row[3] . "</td><td>" . $row[4] . "</td><td>" . $row[5] . "</td>" . "</tr>";
			}
			break;
		case '3' :
			$mouth = $_POST['data'];
			$count = mysql_query("SELECT COUNT(*) FROM b_visited WHERE mouth='$mouth'");
			$rowcount = mysql_fetch_array($count);
			echo $rowcount[0] . "#";
			$query = mysql_query("SELECT * FROM b_visited WHERE mouth='$mouth'");
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
		default :
			break;
	}
} else {
	echo "cookie保存到期请重新登录";
}
?>