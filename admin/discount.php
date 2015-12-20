<?php
include "certain.php";
if ($certain == 'admin') {
	include "conn.php";
	$type = $_POST['type'];
	switch ($type) {
		case '1' :
			$discount = $_POST['discount'];
			mysql_query("UPDATE b_discount SET discount_new='$discount'");
			echo "修改成功";
			break;
		case '2' :
			$discount = $_POST['discount'];
			mysql_query("UPDATE b_discount SET discount_old='$discount'");
			echo "修改成功";
			break;

		default :
			break;
	}
} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "cookie保存到期请重新登录";
}
?>