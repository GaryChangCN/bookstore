<?php
$SelectGroup = $_POST['name'];
//几级目录
include "conn.php";
switch ($SelectGroup) {
	case '1':
		selectGroup("b_category_grade",'grade');
		break;
	case '2':
		selectGroup("b_category_college",'college');
		break;
	case '3':
		selectGroup("b_category_major",'major');
		break;		
	default:
		echo "<li>出现错误，请联系管理员</li>";
		break;
}
function selectGroup($e,$f) {
	$query = mysql_query("SELECT * FROM $e");
	while ($row = mysql_fetch_array($query)) {
		echo "<li>" . $row[$f] . "</li>";
	}
	mysql_close();
}
?>