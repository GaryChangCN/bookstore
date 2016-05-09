<?php
include "conn.php";
$phone=$_GET['phone'];
$address=$_GET['address'];
$countPrice=$_GET['countPrice'];
$tmp=$_GET['list'];
$beizhu=$_GET['beizhu'];
$date = date("Y-m-d");
$time = date("H:i:s");
$list=json_decode($tmp,true);
$information="";
$len=count($list['list']);
$data=array();
$data['code']=0;
for ($i=0;$i<$len;$i++) {
     $information=$information.$list['list'][$i]['name']."=".$list['list'][$i]['isbn']."&";	
     }
$query=$link->query("INSERT INTO b_order VALUES('','$information','$countPrice','$address','$phone','$beizhu','$date','$time','0','','0')");
$q2=$link->query("SELECT last_insert_id() AS id");
$r2=$q2->fetch_row();
$data['id']=$r2[0];
echo json_encode($data);
?>