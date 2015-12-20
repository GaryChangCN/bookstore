<?php
include "certain.php";
if ($certain == 'admin') {
	include "conn.php";
	$type = "1";
	$type = $_POST['type'];
	switch ($type) {
		case '1' :
			select("b_category_grade", "grade", "id_category_col", "b_rel_col_grade", "id_category_grade", "college", "b_category_college");
			break;
		case '2' :
			select("b_category_college", "college", "id_category_major", "b_rel_maj_col", "id_category_college", "major", "b_category_major");
		case '3' :
			selectBook("b_category_major", "major", "id_product", "b_rel_pro_maj", "id_category_major", "b_name", "b_product", "b_isbn");
		default :
			break;
	}
	function select($i, $j, $k, $l, $m, $n, $o) {
		$name1 = $_POST['name1'];
		$query1 = mysql_query("SELECT id FROM $i WHERE $j='$name1'");
		while ($row1 = mysql_fetch_array($query1)) {
			$id1 = $row1['id'];
		}
		$query2 = mysql_query("SELECT $k FROM $l WHERE $m='$id1'");
		while ($row2 = mysql_fetch_array($query2)) {
			$id2Arr[] = $row2[$k];
		}
		$num = count($id2Arr);
		for ($a = 0; $a < $num; $a++) {
			$query = mysql_query("SELECT $n FROM $o WHERE id='$id2Arr[$a]' ");
			while ($row3 = mysql_fetch_array($query)) {
				$nameOutput = $row3[$n];
			}
			echo "<li>" . $nameOutput . "</li>";
		}
		mysql_close();
	}

	function selectBook($i, $j, $k, $l, $m, $n, $o, $p) {
		$name1 = $_POST['name1'];
		$query1 = mysql_query("SELECT id FROM $i WHERE $j='$name1'");
		while ($row1 = mysql_fetch_array($query1)) {
			$id1 = $row1['id'];
		}
		$query2 = mysql_query("SELECT $k FROM $l WHERE $m='$id1'");
		while ($row2 = mysql_fetch_array($query2)) {
			$id2Arr[] = $row2[$k];
		}
		$num = count($id2Arr);
		for ($a = 0; $a < $num; $a++) {
			$query = mysql_query("SELECT $n,$p FROM $o WHERE id='$id2Arr[$a]' ");
			while ($row3 = mysql_fetch_array($query)) {
				$nameOutput = $row3[$n];
				$isbnOutput = $row3[$p];
			}
			echo "<li>" . $nameOutput . "#" . $isbnOutput . "</li>";
		}
		mysql_close();
	}

} else if ($certain == 'server') {
	echo "对不起你没有权限";
} else {
	echo "cookie保存到期请重新登录";
}
?>