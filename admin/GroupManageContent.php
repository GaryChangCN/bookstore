<?php
include "conn.php";
	$type=$_POST['type'];
	$first=$_POST['first'];
	$second=$_POST['second'];
	$secondArr=explode("*", $second);
	$number=count($secondArr);
//$type = "1";
//$first = "大一上";
//$second = "0*信息学院*经管学院";
switch ($type) {
	case '1' :
		//第一列为学期grade
		AddContent("b_category_grade", "grade", $first, "b_category_college", "college", "b_rel_col_grade",$second);
		break;
	case '2' :
		//第一列为学院college
		AddContent("b_category_college", "college", $first, "b_category_major", "major", "b_rel_maj_col",$second);
		break;
	case '3' :
		//第一列为专业major

		break;

	default :
		break;
}
function AddContent($e, $f, $g, $h, $i, $j,$second1) {
	$secondArr = explode("*", $second1);
	$number = count($secondArr);
	$query = mysql_query("SELECT * FROM $e WHERE $f='$g'");
	while ($row = mysql_fetch_array($query)) {
		$id1 = $row['id'];
	}
	for ($x = 1; $x < $number; $x++) {
		$query2 = mysql_query("SELECT * FROM $h WHERE $i='$secondArr[$x]'");
		while ($row2 = mysql_fetch_array($query2)) {
			$id2 = $row2['id'];
		}
		mysql_query("INSERT INTO $j VALUES('','$id1','$id2')");
	}
	mysql_close();
	echo "提交成功";
}
?>