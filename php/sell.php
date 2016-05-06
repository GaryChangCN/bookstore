<?php
include "conn.php";
$address=$_GET['address'];
$phone=$_GET['phone'];
$date = date("Y-m-d");
$time = date("H:i:s");
$remark=$_GET['remark'];
$ready="0";
$data=array();
$data['code']=1;
$q1=$link->query("INSERT INTO  b_sell VALUES('','$address','$phone','$date','$time','$remark','$ready','')");
$q2=$link->query("SELECT last_insert_id() AS id");
$r2=$q2->fetch_row();
$data['id']=$r2[0];
echo json_encode($data);
?>