<?php
include "certain.php";
if ($certain == 'admin') {
	include "conn.php";
	$query = mysql_query("SELECT b_name,b_isbn FROM b_product", $link);
	while ($row = mysql_fetch_array($query)) {
		echo "<li>" . $row['b_name'] . "#" . $row['b_isbn'] . "</li>";
	}
} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "请先<a href='index.html'>登录</a>";
}
?>
