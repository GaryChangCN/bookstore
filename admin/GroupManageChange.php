<?php
header("content-type:text/html;charset=utf-8");
include "conn.php";
include "certain.php";
if ($certain == 'admin') {
	$type = $_POST['type'];
	$nameNew = $_POST['nameNew'];
	$nameOld = $_POST['nameOld'];
	// 选择行名称
	switch ($type) {
		case '0' :
			//grade
			changeGroup("b_category_grade", "grade", $nameOld, $nameNew);
			break;
		case '1' :
			//college
			changeGroup("b_category_college", "college", $nameOld, $nameNew);
			break;
		case '2' :
			//major
			changeGroup("b_category_major", "major", $nameOld, $nameNew);
			break;
		default :
			break;
	}
	function changeGroup($e, $f, $g, $h) {//$e->表名称 $f->列名称 $g->选择行名称OLD $h->修改后行名称
		$query = mysql_query("SELECT * FROM $e WHERE $f='$g' ");
		while ($row = mysql_fetch_array($query)) {
			$id = $row['id'];
		}
		mysql_query("UPDATE $e SET $f='$h' WHERE id='$id'");
		echo "已经成功把原分组名:&nbsp;" . $g . "改为：&nbsp;" . $h;
	}

} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "cookie保存到期请重新登录";
}
?>