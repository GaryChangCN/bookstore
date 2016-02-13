<?php
include "certain.php";
if ($certain == 'admin') {
	include "conn.php";
	$type = $_POST['type'];
	function ChangePic($a, $b) {
		if ((($_FILES['file']['type'] == "image/gif") || ($_FILES['file']['type'] == "image/jpeg") || ($_FILES['file']['type'] == "image/png") || ($_FILES['file']['type'] == "image/jpg")) && ($_FILES['file']['size'] < 2000000)) {
			if ($_FILES['file']['error'] > 0) {
				echo "出现错误" . $_FILES['file']['error'] . "<br/>请联系管理员";
			} else {
				$name1 = iconv("UTF-8", "GBK", $_FILES['file']['name']);
				//GBK格式的新名字
				$name2 = $_FILES['file']['name'];
				//UTF格式新名字
				$query = mysql_query("SELECT text FROM b_ad WHERE number='$b'");
				while ($row = mysql_fetch_array($query)) {
					$nameOld = $row['text'];
				}
				$nameOld1 = iconv("UTF-8", "GBK", $nameOld);
				//gbk格式老名字
				if (file_exists($a . $name1)) {
					echo $name2 . "图片名已存在请更名后上传";
				} else {
					move_uploaded_file($_FILES['file']["tmp_name"], $a . $name1);
					if (file_exists($a . $nameOld1)) {
						unlink($a . $nameOld1);
						mysql_query("UPDATE b_ad SET text='$name2' WHERE number='$b'");
						echo "上传成功" . "<a href='frame/Ad.html'>返回</a>";
					} else {
						mysql_query("UPDATE b_ad SET text='$name2' WHERE number='$b'");
						echo "上传成功" . "<a href='frame/Ad.html'>返回</a>";
					}
				}
			}
		}
	}
	switch ($type) {
		case '1' :
			ChangePic("../img/icon/", "1");
			break;
		case '2' :
			$number0=$_POST['number'];
			ChangePic("../img/show/", $number0);
			break;
		case '3' :
			$number = $_POST['number'];
			$text = $_POST['text'];
			mysql_query("UPDATE b_ad SET text='$text' WHERE number='$number'");
			echo "修改成功";
			break;

		default :
			break;
	}
	mysql_close();
} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "cookie保存到期请重新登录";
}
?>