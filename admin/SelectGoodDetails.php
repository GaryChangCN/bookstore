<?php
include "certain.php";
if ($certain == 'admin') {
	include "conn.php";
	$isbn = $_POST['name'];
	$name = $_POST['name2'];
	$query = mysql_query("SELECT * FROM b_product WHERE b_isbn='$isbn' AND b_name='$name'", $link);
	while ($row = mysql_fetch_array($query)) {
		echo "<li><p>" . $row[0] . "</p></li>" . "<li><p>书名：" . $row[1] . "</p></li>" . "<li><p>出版社：" . $row[2] . "</p></li>" . "<li><p>作者：" . $row[3] . "</p></li>" . "<li><p>ISBN码：" . $row[4] . "</p></li>" . "<li><p>新书价格：" . $row[5] . "</p></li>" . "<li><p>旧书价格：" . $row[6] . "</p></li>" . "<li><p>新书折扣(为空或0表示不打折)：" . $row[7] . "</p></li>" . "<li><p>旧书折扣(为空或0表示不打折)：" . $row[8] . "</p></li>" . "<li><p>新书库存：" . $row[9] . "</p></li>" . "<li><p>旧书库存：" . $row[10] . "</p></li>" . "<li><p>是否热销:" . $row[11] . "</p></li>" . "<li><p>照片：" . $row[12] . "</p></li>";
	}
} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "cookie保存到期请重新登录";
}
?>
