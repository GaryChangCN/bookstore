<?php
include "conn.php";
$name=$_POST['name'];
$isbn=$_POST['isbn'];
$query=mysql_query("SELECT id,b_pic_name FROM b_product WHERE b_name='$name' AND b_isbn='$isbn'",$link);
while($row=mysql_fetch_array($query)){
	$name0=$row['b_pic_name'];
	$id=$row['id'];
}
$weizhi = "../img/book/";
$name=iconv("UTF-8", "GBK", $name0);
mysql_query("DELETE FROM b_product WHERE id='$id'");
mysql_close();
if(unlink($weizhi.$name)){
	echo "success";
}else{
	echo "fail";
}
?>