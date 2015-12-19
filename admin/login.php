<?php
include "conn.php";
$name1 = $_POST['username'];
$password = $_POST['password'];
$md5password=md5($password);
$namequery = mysql_query("select name from b_admin", $link);
while ($dbUserName = mysql_fetch_array($namequery)) {//$adUserName是数据库已经注册的用户名
	$dbNames[] = $dbUserName['name'];
}
if (in_array($name1, $dbNames)) {
	$dbpassword = mysql_query("select name,password from b_admin where name ='$name1'", $link);
	$row = mysql_fetch_array($dbpassword);
	if ($md5password == $row['password']) {
		setcookie("name",$name1,time()+1200,"/");
		setcookie("mima",$md5password,time()+1200,"/");
        echo '<script type="text/javascript">
	            location.href="index.php";
             </script>';
	} else {
		echo "抱歉不能让你登陆 <a href='index.html'>返回</a>";
	}
} else {
	echo "对不起不能让你登陆！<a href='index.html'>返回</a>";
}
?>