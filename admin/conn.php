<?php
$dbhostname = 'localhost';
$dbuser = 'root';
$dbpassword = '';
//连接数据库
$link = mysql_connect($dbhostname, $dbuser, $dbpassword);
if (!$link) {
	//echo "ok";
	die('err' . mysql_error());
}
header("content-type:text/html;charset=utf-8");
?>