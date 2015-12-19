<?php
include "conn.php";
$type=$_POST['type'];
if ($type=="1") {
	$name=$_POST['name'];
	$query = mysql_query("select password,id from b_admin where name ='$name'", $link);
	$row1 = mysql_fetch_array($query);
	$id=$row1['id'];
    $pass = $row1['password'];
	$password=$_POST['password'];
	$md5password=md5($password);
	if ($md5password==$pass) {
		echo "inline#".$id;
	} else {
		echo "none";
	}	
} elseif($type=="2") {
	$name=$_POST['name'];
	$password=$_POST['password'];
	$md5password=md5($password);
	$id=$_POST['id'];
	mysql_query("UPDATE b_admin SET name='$name',password='$md5password' WHERE id='$id' ");
	echo "修改成功";
}
mysql_close();
?>