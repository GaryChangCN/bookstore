<?php
include "conn.php";
include "certain.php";
if ($certain == 'admin') {
	$type = $_POST['type'];
	switch ($type) {
		case '1' :
			$second = $_POST['name'];
			$secondArr = explode("*", $second);
			$num = count($secondArr);
			for ($i = 1; $i < $num; $i++) {
				$third = $secondArr[$i];
				$thirdArr = explode("#", $third);
				$query = mysql_query("SELECT id FROM b_product WHERE b_isbn='$thirdArr[1]' AND b_name='$thirdArr[0]'");
				while ($row = mysql_fetch_array($query)) {
					$id = $row['id'];
				}
				mysql_query("INSERT INTO b_hot_goods VALUES ('','$id')");
			}
			mysql_close();
			echo "添加成功";
			break;
		case '2' :
			$query = mysql_query("SELECT id_product FROM b_hot_goods");
			$idArr = array();
			while ($row2 = mysql_fetch_array($query)) {
				$idArr[] = $row2['id_product'];
			}
			for ($x = 0; $x < count($idArr); $x++) {
				$query2 = mysql_query("SELECT b_name,b_isbn FROM b_product WHERE id='$idArr[$x]'");
				while ($row3 = mysql_fetch_array($query2)) {
					echo "<li>" . $row3['b_name'] . "#" . $row3['b_isbn'];
				}
			}
			break;
		case '3' :
			$b_isbn = $_POST['isbn'];
			$b_name = $_POST['name'];
			$query = mysql_query("SELECT id FROM b_product WHERE b_isbn='$b_isbn' AND b_name='$b_name'");
			while ($row3 = mysql_fetch_array($query)) {
				$id = $row3['id'];
			}
			mysql_query("DELETE FROM b_hot_goods WHERE id_product='$id'");
			mysql_close();
			echo "删除成功";
		default :
			break;
	}
} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "cookie保存到期请重新登录";
}
?>