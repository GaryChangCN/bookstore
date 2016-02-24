<?php
include "certain.php";
if ($certain == 'admin') {
	include "conn.php";
	$type=$_GET['type'];
	switch ($type) {//type  0获取邮箱列表  1添加邮箱 2修改是否发送 3删除该条
		case '0':
			$q0=mysql_query("SELECT * FROM b_mail");
			while($r0=mysql_fetch_array($q0)){
				if($r0['send']==0){
					echo "<tr><td>".$r0['mail']."</td><td>×</td><td><button class='delete'>删</button></td></tr>";
				}else{
					echo "<tr><td>".$r0['mail']."</td><td>√</td><td><button class='delete'>删</button></td></tr>";
				}
			}
			break;
		case '1':
			$mail=$_GET['mailaddress'];
			$q10=mysql_query("SELECT COUNT(*) FROM b_mail WHERE mail='$mail'");
			$r10=mysql_fetch_array($q10);
			if ($r10[0]==0) {
				mysql_query("INSERT INTO b_mail VALUES('','$mail','0')");
			} else {
				echo "fail";
			}
			break;
		case '2':
			$mail=$_GET['mailaddress'];
			$send=$_GET['send'];
			mysql_query("UPDATE b_mail SET send='$send' WHERE mail='$mail' ");
			break;
		case '3':
			$mail=$_GET['mailaddress'];
			mysql_query("DELETE FROM b_mail WHERE mail='$mail'");
			break;		
		default:
			
			break;
	}
	mysql_close();
} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "cookie保存到期请重新登录";
}	
	?>