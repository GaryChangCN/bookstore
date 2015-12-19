<?php
include "certain.php";
if ($certain == 'admin') {
	$type= $_POST['name'];
	//几级目录
	include "conn.php";
	function selectGroup($e, $f) {
		$query = mysql_query("SELECT * FROM $e");
		while ($row = mysql_fetch_array($query)) {
			echo "<li>" . $row[$f] . "</li>";
		}
		mysql_close();
	}
	switch ($type) {
		case '1' :
			selectGroup("b_category_grade", 'grade');
			break;
		case '2' :
			selectGroup("b_category_college", 'college');
			break;
		case '3' :
			selectGroup("b_category_major", 'major');
			break;
		default :
			echo "<li>出现错误，请联系管理员</li>";
			break;
	}

} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "请先<a href='index.html'>登录</a>";
}
?>