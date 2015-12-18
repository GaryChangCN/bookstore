<?php
include "conn.php";
	$type=$_POST['type'];
	$first=$_POST['first'];
	$second=$_POST['second'];
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
        AddContentBook($first, $second);
		break;

	default :
		break;
}
function AddContent($e, $f, $g, $h, $i, $j,$second1) {
	$secondArr = explode("*", $second1);
	$number = count($secondArr);
	$query = mysql_query("SELECT id FROM $e WHERE $f='$g'");
	while ($row = mysql_fetch_array($query)) {
		$id1 = $row['id'];
	}
	for ($x = 1; $x < $number; $x++) {
		$query2 = mysql_query("SELECT * FROM $h WHERE $i='$secondArr[$x]'");
		while ($row2 = mysql_fetch_array($query2)) {
			$id2 = $row2['id'];
		}
		mysql_query("INSERT INTO $j VALUES('','$id2','$id1')");
	}
	mysql_close();
	echo "提交成功";
}
function AddContentBook($f,$second1){
	$secondArr=explode("*", $second1);
	$number=count($secondArr);
	$query = mysql_query("SELECT id FROM b_category_major WHERE major='$f'");
	while ($row = mysql_fetch_array($query)) {
		$id1 = $row['id'];
	}
	for ($x = 1; $x < $number; $x++) {
		$a=$secondArr[$x];
		$b=explode("#", $a);
		$query2 = mysql_query("SELECT id FROM b_product WHERE b_isbn='$b[1]'");
		while ($row2 = mysql_fetch_array($query2)) {
			$id2 = $row2['id'];
		}
		mysql_query("INSERT INTO b_rel_pro_maj VALUES('','$id2','$id1')");
	}
	mysql_close();
	echo "提交成功";
}
?>