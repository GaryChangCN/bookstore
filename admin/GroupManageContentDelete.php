<?php
	include "conn.php";
	$type=$_POST['type'];
	$first=$_POST['first'];
	$second=$_POST['second'];
	switch ($type) {
		case '1':
			DeleteContent($first, "b_category_grade", "grade", "b_category_college", "college", "b_rel_col_grade", "id_category_grade", "id_category_col",$second);
			break;
		case '2':
		    DeleteContent($first,"b_category_college", "college", "b_category_major", "major", "b_rel_maj_col", "id_category_col", "id_category_major",$second);
		case '3':
			DeleteContentBook($first, "b_category_major", "major", "b_product", "b_rel_pro_maj", "id_category_major", "id_product",$second);
		default:
			
			break;
	}
	//$a=$first $b=b_category_grade $c=grade $d=b_category_college $e=college
	//$f=b_rel_col_grade  $g=id_category_grade $h=id_category_col
	function DeleteContent($a,$b,$c,$d,$e,$f,$g,$h,$second1){
		$query1=mysql_query("SELECT id FROM $b WHERE $c='$a' ");
		while ($row1=mysql_fetch_array($query1)) {
			$id1=$row1['id']; //父级目录id
		}
		$secondArr = explode("*", $second1);
	    $number = count($secondArr);
		for ($i=1; $i <$number ; $i++) { 
			$query2=mysql_query("SELECT id FROM $d WHERE $e='$secondArr[$i]'");
			while($row2=mysql_fetch_array($query2)){
				$id2=$row2['id']; //子集目录id
			}
			mysql_query("DELETE FROM $f WHERE $g='$id1' AND $h='$id2'");
		}
		mysql_close();
		echo "删除成功";
	}
	function DeleteContentBook($a,$b,$c,$d,$f,$g,$h,$second1){
		$query1=mysql_query("SELECT id FROM $b WHERE $c='$a' ");
		while ($row1=mysql_fetch_array($query1)) {
			$id1=$row1['id']; //父级目录id
		}
		$secondArr = explode("*", $second1);
	    $number = count($secondArr);
		for ($i=1; $i <$number ; $i++) {
			$aa=$secondArr[$i];
		    $bb=explode("#", $aa); 
			$query3=mysql_query("SELECT id FROM $d WHERE b_isbn='$bb[1]'");
			while($row3=mysql_fetch_array($query3)){
				$id2=$row3['id']; //子集目录id
			}
			mysql_query("DELETE FROM $f WHERE $g='$id1' AND $h='$id2'");
		}
		mysql_close();
		echo "删除成功";
	}
	?>