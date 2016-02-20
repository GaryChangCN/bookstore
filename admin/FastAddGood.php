<?php
include "conn.php";
$type = $_POST['type'];
$title = $_POST['title'];
$publisher = $_POST['publisher'];
$author = $_POST['author'];
$isbn = $_POST['isbn'];
$newprice = $_POST['newprice'];
$oldprice = $_POST['oldprice'];
$newdiscount = $_POST['newdiscount'];
$olddiscount = $_POST['olddiscount'];
function GrabImage($url, $dir = '', $filename = '') {
	if (empty($url)) {
		return false;
	}
	$ext = strrchr($url, '.');
	if ($ext != '.gif' && $ext != ".jpg" && $ext != ".bmp") {
		echo "格式不支持！";
		return false;
	}
	if (empty($dir))
		$dir = './';
	$dir = realpath($dir);
	//目录+文件
	$filename = $dir . (empty($filename) ? '/' . time() . $ext : '/' . $filename);
	//开始捕捉
	ob_start();
	readfile($url);
	$img = ob_get_contents();
	ob_end_clean();
	$size = strlen($img);
	$fp2 = fopen($filename, "a");
	fwrite($fp2, $img);
	fclose($fp2);
	return $filename;
}

if (preg_match('/[0-9]/', "$newdiscount") && $newdiscount - 10 < 0) {

} else {
	$newdiscount = "0";
}
if (preg_match('/[0-9]/', "$olddiscount") && $olddiscount - 10 < 0) {

} else {
	$olddiscount = "0";
}
$newstock = $_POST['newstock'];
$oldstock = $_POST['oldstock'];
if ($type == "0") {
	$picsrc = $_POST['picsrc'];
	$picname = $isbn . '.jpg';
	GrabImage("$picsrc", '../img/book/', $picname);
	//echo $type . $title . $author . $isbn . $newprice . $oldprice . $newdiscount . $olddiscount . $newstock . $oldstock . $picsrc;
	mysql_query("INSERT INTO b_product VALUES('','$title','$publisher','$author','$isbn','$newprice','$oldprice','$newdiscount','$olddiscount','$newstock','$oldstock','否','$picname')");
	echo "上传成功，请刷新";
} else if($type=='1') {
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
				mysql_query("INSERT INTO b_product VALUES('','$title','$publisher','$author','$isbn','$newprice','$oldprice','$newdiscount','$olddiscount','$newstock','$oldstock','否','$name2')");
				echo "上传成功，请刷新";
			}
		}
	} else {
		echo "您的上传信息没有填写完整或者图片格式不对或者过大（图片仅限gif/jpg/jpeg/png格式且图片不超过3M）" . "<a href='frame/AddGood.html'>返回</a>";
	}
}else{
	echo "undefined type";
}
?>