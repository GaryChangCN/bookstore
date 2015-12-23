<?php
	include "../admin/conn.php";
	$name=$_GET['name'];
	$query=mysql_query("SELECT id FROM b_product WHERE b_name='$name'");
	$row=mysql_fetch_array($query);
	echo $row[0];
	mysql_close();
	?>