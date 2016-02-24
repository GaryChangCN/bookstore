<?php
include "../admin/conn.php";
$phonenumber = $_GET['phonenumber'];
$xiaoqu = $_GET['xiaoqu'];
$loudao = $_GET['loudao'];
$qinshi = $_GET['qinshi'];
$remark = $_GET['remark'];
$date = date("Y-m-d");
$time = date("H:i:s");
if ($remark == "") {
	mysql_query("INSERT INTO b_sell VALUES('','$xiaoqu+$loudao+$qinshi','$phonenumber','$date','$time','该用户没有填写备注','0','')");
} else {
	mysql_query("INSERT INTO b_sell VALUES('','$xiaoqu+$loudao+$qinshi','$phonenumber','$date','$time','$remark','0','')");
}
echo '<div style="witdh:100%;height:200px;line-height:100px;text-align:center;font-size:1em;color:#54baec">';
echo "卖书信息提交成功，稍后会有工作人员联系您，请确定您的手机号：" . $phonenumber . "填写无误。";
echo "<br>若工作人员长时间没有联系您，你可以到首页提交反馈。<a href='javascript:history.go(-1)'>返回</a>";
echo '</div>';
require_once "../admin/mailer.php";
$smtpserver = "smtp.126.com";
//SMTP服务器
$smtpserverport = 25;
//SMTP服务器端口
$smtpusermail = "tinytin@126.com";
//SMTP服务器的用户邮箱
$smtpuser = "tinytin";
//SMTP服务器的用户帐号
$smtppass = "z123369";
//SMTP服务器的用户密码
$q = mysql_query("SELECT mail FROM b_mail WHERE send='1'");
while ($r = mysql_fetch_array($q)) {
	$smtpemailto = $r['mail'];
	//发送给谁
	$mailtitle = '【booklbook】新卖书订单';
	//邮件主题
	$mailcontent = "收到手机号为：" . $phonenumber . "的新订单，请尽快处理";
	//邮件内容
	$mailtype = "HTML";
	//邮件格式（HTML/TXT）,TXT为文本邮件
	//************************ 配置信息 ****************************
	$smtp = new smtp($smtpserver, $smtpserverport, true, $smtpuser, $smtppass);
	//这里面的一个true是表示使用身份验证,否则不使用身份验证.
	$smtp -> debug = false;
	//是否显示发送的调试信息
	$state = $smtp -> sendmail($smtpemailto, $smtpusermail, $mailtitle, $mailcontent, $mailtype);

}

mysql_close();
?>
</div>