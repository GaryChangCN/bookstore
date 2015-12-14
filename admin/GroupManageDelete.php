<?php
include "conn.php";
$name=$_POST['name'];
$type=$_POST['type'];
switch ($type) {
	case 'grade':
		DeleteGroup("b_category_grade", "grade", $name);
		break;
	case 'college':
		DeleteGroup("b_category_college", "college", $name);
		break;
	case 'major':
		DeleteGroup("b_category_major", "major", $name);
		break;	
	default:
		
		break;
}
function DeleteGroup($e,$f,$g){  //$e表名称 $f 列名称 $g 值名称
	mysql_query("DELETE FROM $e WHERE $f='$g'");	
	mysql_close();
	echo "已成功删除".$g."分组";
}

	?>