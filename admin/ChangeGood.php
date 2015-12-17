<?php
include "conn.php";
$type = $_POST['type'];
switch ($type) {
	case '1' :
		$col = $_POST['col'];
		$new = $_POST['new'];
		$id = $_POST['id'];
		mysql_query("UPDATE b_product SET $col='$new' WHERE id='$id'");
		mysql_close();
		echo "已经修改成功";
		break;
	case '2' :
		$new = $_POST['new'];
		$id = $_POST['id'];
		mysql_query("UPDATE b_product SET b_hot='$new' WHERE id='$id'");
		mysql_close();
		echo "已经修改成功";
	case '3' :
		$id = $_POST['id'];
		if ((($_FILES['file']['type'] == "image/gif") || ($_FILES['file']['type'] == "image/jpeg") || ($_FILES['file']['type'] == "image/png") || ($_FILES['file']['type'] == "image/jpg")) && ($_FILES['file']['size'] < 2000000)) {
			if ($_FILES['file']['error'] > 0) {
				echo "出现错误" . $_FILES['file']['error'] . "<br/>请联系管理员";
			} else {
				$name1 = iconv("UTF-8", "GBK", $_FILES['file']['name']);
				$name2 = $_FILES['file']['name'];
				$query = mysql_query("SELECT b_pic_name FROM b_product WHERE id='$id'", $link);
				while ($row = mysql_fetch_array($query)) {
					$nameOld = $row['b_pic_name'];
				}
				$nameOld1=iconv("UTF-8", "GBK", $nameOld);
				if (file_exists("../img/book/" . $name1)) {
					echo $name2 . "图片名已存在请更名后上传";
				} else {
					move_uploaded_file($_FILES['file']["tmp_name"], "../img/book/" . $name1);
					unlink("../img/book/" . $nameOld1);
					mysql_query("UPDATE b_product SET b_pic_name='$name2' WHERE id='$id'");
					echo "上传成功" . "<a href='frame/ChangeGood.html'>返回</a>";
				}
			}
		}
	default :
		break;
}
?>