<?php
include "certain.php";
if ($certain == 'admin') {
	include "conn.php";
	$isbn = $_POST['name'];
	$name = $_POST['name2'];
	$query = mysql_query("SELECT * FROM b_product WHERE b_isbn='$isbn' AND b_name='$name'", $link);
	while ($row = mysql_fetch_array($query)) {
		echo "<li>" . $row[0] . "</li>" . "<li>书名：" . $row[1] . "</li>" . "<li>出版社：" . $row[2] . "</li>" . "<li>作者：" . $row[3] . "</li>" . "<li>ISBN码：" . $row[4] . "</li>" . "<li>新书价格：" . $row[5] . "</li>" . "<li>旧书价格：" . $row[6] . "</li>" . "<li>新书折扣价格：" . $row[7] . "</li>" . "<li>旧书折扣价格：" . $row[8] . "</li>" . "<li>新书库存：" . $row[9] . "</li>" . "<li>旧书库存：" . $row[10] . "</li>" . "<li>是否热销:" . $row[11] . "</li>" . "<li>照片：" . $row[12] . "</li>";
	}
} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "请先<a href='index.html'>登录</a>";
}
?>