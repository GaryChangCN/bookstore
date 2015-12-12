<?php
include "conn.php";
$name1 = $_POST['username'];
$password = $_POST['password'];
mysql_select_db("bookstore", $link);
$namequery = mysql_query("select name from b_admin", $link);
while ($dbUserName = mysql_fetch_array($namequery)) {//$adUserName是数据库已经注册的用户名
	$dbNames[] = $dbUserName['name'];
}
if (in_array($name1, $dbNames)) {
	$dbpassword = mysql_query("select password from b_admin where name ='$name1'", $link);
	$row = mysql_fetch_array($dbpassword);
	if ($password == $row['password']) {
		//setcookie("user",$name1);//username为cookie id
		session_id($name1);
		session_start();
		$_SESSION['password']=$password;
		echo "<a href='../index.php'>点击去管理页面</a>";
	} else {
		echo "抱歉不能让你登陆";
	}
} else {
	echo "对不起不能让你登陆！";
}
?>