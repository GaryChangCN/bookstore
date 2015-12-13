<?php
include "conn.php";
if (isset($_COOKIE['name'])) {
	$name=$_COOKIE['name'];
//	mysql_select_db("bookstore",$link);
	$dbpassword = mysql_query("select password from b_admin where name ='$name'", $link);
	$row1 = mysql_fetch_array($dbpassword);
	if ($_COOKIE['mima'] == $row1['password']) {
		//echo 'success';
		$certain='success';
	} else {
		$certain="fail";
	}
} else {
	$certain="fail";
}
?>