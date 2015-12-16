<?php
	include "conn.php";
	$col=$_POST['col'];
	$new=$_POST['new'];
	$id=$_POST['id'];
	mysql_query("UPDATE b_product SET $col='$new' WHERE id='$id'");
	echo "已经修改成功";
	?>