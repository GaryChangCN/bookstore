<?php
$dbhostname1 = 'localhost';
$dbuser1 = 'tinytin';
$dbpassword1 = 'tinytin';
//连接数据库
$link = mysql_connect($dbhostname1, $dbuser1, $dbpassword1);
if (!$link) {
	//echo "ok";
	die('err' . mysql_error());
}
header("content-type:text/html;charset=utf-8");
mysql_select_db("bookstore",$link);
?>