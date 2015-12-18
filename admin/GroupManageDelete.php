<?php
include "conn.php";
$name=$_POST['name'];
$type=$_POST['type'];
switch ($type) {
	case 'grade':
		DeleteGroup("b_category_grade", "grade", $name,"b_rel_col_grade","id_category_grade");
		break;
	case 'college':
		DeleteGroup("b_category_college", "college", $name,"b_rel_maj_col","id_category_college");
		break;
	case 'major':
		DeleteGroup("b_category_major", "major", $name,"b_rel_pro_maj","id_category_major");
		break;	
	default:
		
		break;
}
function DeleteGroup($e,$f,$g,$h,$i){  //$e表名称 $f 列名称 $g 值名称   $h 关系表名 $i 关系表列名
    $query=mysql_query("SELECT id FROM $e WHERE $f='$g'");
	while ($row=mysql_fetch_array($query)) {
		$id=$row['id'];
	}
	mysql_query("DELETE FROM $h WHERE $i='$id'");
	mysql_query("DELETE FROM $e WHERE $f='$g'");	
	mysql_close();
	echo "已成功删除".$g."分组";
}

	?>