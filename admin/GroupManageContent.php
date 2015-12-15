<?php
	$type=$_POST['type'];
	$first=$_POST['first'];
	$second=$_POST['second'];
	switch ($type) {
		case '1':  //第一列为学期grade
			AddContent("b_category_grade", "grade", $first, "b_category_college","college",$second)
			break;
		case '2': //第一列为学院college
			
			break;
		case '3': //第一列为专业major
			
			break;
		
		default:
			
			break;
	}
	$secondArr=explode("*", $second);
	function AddContent($e,$f,$g,$h,$i,$j){
		include_once "conn.php";
		$query=mysql_query("SELECT * FROM $e WHERE $f='$g'");
		while($row=mysql_fetch_array($query)){
			$id1=$row['id'];
		}
		$query2=mysql_query("SELECT * FROM $h WHERE $i='$j'");
		while($row2=mysql_fetch_array($query2)){
			$id2=$row2['id'];
		}
		mysql_query("INSERT INTO $e VALUES('','')")
	}
	?>