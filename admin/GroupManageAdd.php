<?php
$level = $_POST['name'];//从groupmanage获取的用于选择某个表
switch ($level) {
	case '1' :
		AddGroup("b_category_grade","grade");//年级
		break;
	case '2' :
		AddGroup("b_category_college","college");//学院
		break;
	case '3' :
		AddGroup("b_category_major","major");//专业
		break;
	default :
		echo "出现错误，请联系管理员。";
		break;
}
function AddGroup($data,$col) {
	include_once "conn.php";
	$content = $_POST['content'];
	//表里面 几级分组名称
	$query=mysql_query("SELECT $col FROM $data",$link);
	while($row=mysql_fetch_array($query)){
		$a[]=$row[$col];
	}
	if(in_array($content, $a)){
		echo "分组已存在";
	}else{
	mysql_query("INSERT INTO $data VALUES('','$content')");
	mysql_close();
	echo "添加成功";
	}
}
?>