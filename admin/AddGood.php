<?php
include "certain.php";
if ($certain == 'admin') {
	include "conn.php";
	$bookname = $_POST['BookName'];
	$bookpublish = $_POST['BookPublish'];
	$bookeditor = $_POST['BookEditor'];
	$bookisbn = $_POST['BookIsbn'];
	$bookpricenew = $_POST['BookPriceNew'];
	$bookpriceold = $_POST['BookPriceOld'];
	$bookpriceshownew = $_POST['BookPriceShowNew'];
	$bookpriceshowold = $_POST['BookPriceShowOld'];
	$bookstocknew = $_POST['BookStockNew'];
	$bookstockold = $_POST['BookStockOld'];
	$bookhot = $_POST['BookHot'];
	if ((($_FILES['file']['type'] == "image/gif") || ($_FILES['file']['type'] == "image/jpeg") || ($_FILES['file']['type'] == "image/png") || ($_FILES['file']['type'] == "image/jpg")) && ($_FILES['file']['size'] < 2000000)) {
		if ($_FILES['file']['error'] > 0) {
			echo "出现错误" . $_FILES['file']['error'] . "<br/>请联系管理员";
		} else {
			$name1 = iconv("UTF-8", "GBK", $_FILES['file']['name']);
			$name2 = $_FILES['file']['name'];
			if (file_exists("../img/book/" . $name1)) {
				echo $name2 . "图片名已存在请更名后上传";
			} else {
				move_uploaded_file($_FILES['file']["tmp_name"], "../img/book/" . $name1);
				//				mysql_select_db("bookstore", $link);
				mysql_query("insert into b_product values('','$bookname','$bookpublish','$bookeditor','$bookisbn','$bookpricenew','$bookpriceold','$bookpriceshownew','$bookpriceshowold','$bookstocknew','$bookstockold','$bookhot','$name2')");
				echo "上传成功" . "<a href='frame/AddGood.html'>返回</a>";
			}
		}
	} else {
		echo "您的上传信息没有填写完整或者图片格式不对或者过大（图片仅限gif/jpg/jpeg/png格式且图片不超过3M）" . "<a href='frame/AddGood.html'>返回</a>";
	}
} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "请先<a href='index.html'>登录</a>";
}
?>