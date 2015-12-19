<?php
include "conn.php";
if (isset($_COOKIE['name'])) {
	$name = $_COOKIE['name'];
	$dbpassword = mysql_query("select password from b_admin where name ='$name'", $link);
	$row1 = mysql_fetch_array($dbpassword);
	$pass=$row1['password'];
	if ($_COOKIE['mima'] == $pass) {
		echo 'success';
	} else {
		echo "fail";
	}
} else {
	echo "fail";
}
?>