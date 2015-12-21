<?php
	include "../admin/conn.php";
	$phone=$_GET['phonenumber'];
	$feedback=$_GET['feedback'];
	mysql_query("INSERT INTO b_feedback VALUES('','$phone','$feedback')");
	mysql_close();
	echo "提交成功！<br/>现在你可以关闭此窗口。";
	?>