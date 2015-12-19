<?php
include "conn.php";
if (isset($_COOKIE['name'])) {
	$name=$_COOKIE['name'];
	$dbpassword = mysql_query("select password,power from b_admin where name ='$name'", $link);
	$row1 = mysql_fetch_array($dbpassword);
	if ($_COOKIE['mima'] == $row1['password']) {
		if($row1['power']=="0"){
			$certain='admin';
		}elseif($row1['power']=="1"){
			$certain='server';
		}
	} else {
		$certain="fail";
	}
} else {
	$certain="fail";
}
?>