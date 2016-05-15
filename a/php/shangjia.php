<?php
include "../../php/conn.php";
ini_set("display_errors", "Off");
error_reporting(E_ALL | E_STRICT);
$data = array();
$data['code'] = '0';
$token = $_POST['token'];
$imgBase64 = $_POST['imgBase64'];
$name = $_POST['name'];
$isbn=$_POST['isbn'];
$publisher = $_POST['publisher'];
$editor = $_POST['editor'];
$newPrice = $_POST['newPrice'];
$oldPrice = $_POST['oldPrice'];
$newDiscount = $_POST['newDiscount'];
$oldDiscount = $_POST['oldDiscount'];
$newStock = $_POST['newStock'];
$oldStock = $_POST['oldStock'];
function GrabImage($url, $dir = '', $filename = '') {
		if (empty($url)) {
			return false;
		}
		$ext = strrchr($url, '.');
		if ($ext != '.gif' && $ext != ".jpg" && $ext != ".bmp") {
			$data['code']='5';
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
$q = $link -> query("SELECT * FROM b_token WHERE token='$token'");
$r = $q -> fetch_row();
if ($r[0]) {
	if ($imgBase64 == "true") {
		if ((($_FILES['img']['type'] == "image/gif") || ($_FILES['img']['type'] == "image/jpeg") || ($_FILES['img']['type'] == "image/png") || ($_FILES['img']['type'] == "image/jpg")) && ($_FILES['img']['size'] < 2000000)) {
			$t1=explode("/", $_FILES['img']['type']);
			$picname=$isbn.".".$t1[1];
			if ($_FILES['img']['error'] > 0) {
				$data['code']='1';
			} else {
				move_uploaded_file($_FILES['img']["tmp_name"], "../../img/book/" . $picname);
				if($q=$link->query("INSERT INTO b_product VALUES('','$name','$publisher','$editor','$isbn','$newPrice','$oldPrice','$newDiscount','$oldDiscount','$newStock','$oldStock','否','$picname')")){
					$data['msg']="上传成功";
			    }else{
				    $data['code']='3';
			    }
			}
		} else {
			$data['code']="4";
		}
	} else {
		$img=$_POST['img'];
		$picName = $isbn . '.jpg';
		GrabImage("$img","../../img/book/",$picName);
		if($q=$link->query("INSERT INTO b_product VALUES('','$name','$publisher','$editor','$isbn','$newPrice','$oldPrice','$newDiscount','$oldDiscount','$newStock','$oldStock','否','$picName')")){
			$data['msg']="上传成功";
	    }else{
		    $data['code']='3';
	    }
	}
} else {
	$data['code'] = '1';
}
$link->close();
echo json_encode($data);
//0成功
//1帐号密码不对
//3未保存到数据库成功
//4图片格式不对或者太大；
//5外链图片不支持
?>