<?php
include "conn.php";
///////////////////////////
//type===================//
//1----反馈建议
///////////////////////////
$type=$_GET['type'];
$data=array();
$data['code']=0;
switch ($type) {
	case '1':
		$text=$_GET['text'];
		$q=$link->query("INSERT INTO b_feedback VALUES('','$text')");
		$data['callback']="反馈成功";
		echo json_encode($data);
		break;
	
	default:
		# code...
		break;
}
$link->close();
?>