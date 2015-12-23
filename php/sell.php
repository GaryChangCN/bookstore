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
	mysql_close();
} else {
	mysql_query("INSERT INTO b_sell VALUES('','$xiaoqu+$loudao+$qinshi','$phonenumber','$date','$time','$remark','0','')");
	mysql_close();
}

echo '<div style="witdh:100%;height:200px;line-height:100px;text-align:center;font-size:1em;color:#54baec">';
echo "卖书信息提交成功，稍后会有工作人员联系您，请确定您的手机号：" . $phonenumber . "填写无误。";
echo "<br>若工作人员长时间没有联系您，你可以到首页提交反馈。<a href='javascript:history.go(-1)'>返回</a>";
echo '</div>';
?>
</div>