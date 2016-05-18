<?php
include "../../php/conn.php";
$data = array();
$name=$_POST['name'];
$password=$_POST['password'];
$md5=md5($password);
$q = $link -> query("SELECT password FROM b_admin WHERE name='$name' ORDER BY id");
$r = $q -> fetch_row();
if ($r[0]==$md5) {
	$data['code'] = '0';
	$token = array();
	$arr = range(0, 9);
	shuffle($arr);
	$ran = $arr[0];
	$q = $link -> query("SELECT token FROM b_token ORDER BY id");
	while ($r = $q -> fetch_row()) {
		$token[] = $r[0];
	}
	$data['token'] = $token[$ran];
}else{
	$data['code']='1';
}
echo json_encode($data);
$link -> close();
?>