<?php
include "certain.php";
if ($certain == 'admin') {
	include "conn.php";
	$type=$_POST['type'];
	switch ($type) {
		case '1' :
			$a = mysql_query("SELECT COUNT(*) FROM b_product");
			$b = mysql_fetch_array($a);
			$num1 = ceil($b[0] / 12);
			for ($i = 1; $i <= $num1; $i++) {
				echo "<li>" . ($num1 + 1 - $i) . "</li>";
			}
			break;
		case '2' :
			$num=($_POST['num']-1)*12;
			$query = mysql_query("SELECT b_name,b_isbn FROM b_product LIMIT $num,12", $link);
			while ($row = mysql_fetch_array($query)) {
				echo "<li><p>" . $row['b_name'] . "#" . $row['b_isbn'] . "</p></li>";
			}
			break;
		default :
			break;
	}
} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "cookie保存到期请重新登录";
}
?>
