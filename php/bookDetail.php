<?php
include "conn.php";
$id=$_GET['id'];
$data= array();
$data['code']='0';
$q=$link->query("SELECT * FROM b_product WHERE id=$id");
$r=$q->fetch_row();
$data['name']=$r[1];
$data['publish']=$r[2];
$data['editor']=$r[3];
$data['isbn']=$r[4];
$data['newPrice']=$r[5];
$data['oldPrice']=$r[6];
$data['newDiscount']=$r[7];
$data['oldDiscount']=$r[8];
$data['picPath']=$r[12];
echo json_encode($data);
$link->close();
?>