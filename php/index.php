<?php
include "conn.php";
///////////////////////////
//type===================//
//1----反馈建议
//2----关于我们-----4
//2----最新公告-----2
//2----主页图片-----1
//2----底部居中图片-3
///////////////////////////
$type=$_GET['type'];
$data=array();
$data['code']=0;
//0->ok
//1->无公告
switch ($type) {
	case '1':
		$text=$_GET['text'];
		$q=$link->query("INSERT INTO b_feedback VALUES('','$text')");
		$data['callback']="反馈成功";
		break;
	case '2':
	$q=$link->query("SELECT text FROM b_our WHERE type=4 AND display=1");
	$r=$q->fetch_row();
	if($r[0]){
		$data['text']=$r[0];
	}else{
		$data['code']=1;
	}
	$q=$link->query("SELECT text FROM b_our WHERE type=1 AND display=1");
	$r=$q->fetch_row();
	if($r[0]){
		$data['indexMain']=$r[0];
	}else{
		$data['code']=1;
	}
	$q=$link->query("SELECT text FROM b_our WHERE type=2 AND display=1");
	$r=$q->fetch_row();
	if($r[0]){
		$data['publish']=$r[0];
	}else{
		$data['code']=1;
	}
	$q=$link->query("SELECT text FROM b_our WHERE type=3 AND display=1");
	$r=$q->fetch_row();
	if($r[0]){
		$data['midPic']=$r[0];
	}else{
		$data['code']=1;
	}
	$q=$link->query("SELECT text FROM b_our WHERE type=5 AND display=1");
	$r=$q->fetch_row();
	if($r[0]){
		$data['qrcode']=$r[0];
	}else{
		$data['code']=1;
	}
	break;
	default:
		# code...
		break;
}
echo json_encode($data);
$link->close();
?>