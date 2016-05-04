<?php
include "conn.php";
//type
//1 获取年级列表
//2获取学院列表
//3获取专业列表
//4获取对应书本列表
//5默认推荐图书列表
$type=$_GET['type'];
switch ($type) {
	case '1' :
		$q1 = $link -> query("SELECT * FROM b_category_grade");
		$arr = array();
		$arr['grade'] = array();
		$arr['code'] = 0;
		while ($r1 = $q1 -> fetch_row()) {
			$arr['grade'][] = array("id" => $r1[0], "name" => $r1[1]);
		};
		if (count($arr['grade']) == 0) {
			$arr['code'] = 1;
			//没有结果
		}
		echo json_encode($arr);
		break;
	case '2' :
		$gradeId=$_GET['gradeId'];
		$arr = array();
		$q2 = $link -> query("SELECT COUNT(id_category_col) FROM b_rel_col_grade WHERE id_category_grade='$gradeId'");
		$r2 = $q2 -> fetch_row();
		if ($r2[0] <= 0) {
			$arr['code'] = 1;
		} else {
			$q1 = $link -> query("SELECT id_category_col FROM b_rel_col_grade WHERE id_category_grade='$gradeId'");
			while ($r1 = $q1 -> fetch_row()) {
				$tmp = $r1[0];
				$q3 = $link -> query("SELECT college FROM b_category_college WHERE id='$tmp'");
				$r3 = $q3 -> fetch_row();
				$arr['college'][] = array("id" => $r1[0], "name" => $r3[0]);
			}
			$arr['code'] = 0;
		}
		echo json_encode($arr);
		break;
	case '3' :
		$arr = array();
		$collegeId = $_GET['collegeId'];
		$q2 = $link -> query("SELECT COUNT(id_category_major) FROM b_rel_maj_col WHERE id_category_college='$collegeId'");
		$r2 = $q2 -> fetch_row();
		if ($r2[0] <= 0) {
			$arr['code'] = 1;
		} else {
			$q1 = $link -> query("SELECT id_category_major FROM b_rel_maj_col WHERE id_category_college='$collegeId'");
			while ($r1 = $q1 -> fetch_row()) {
				$tmp = $r1[0];
				$q3 = $link -> query("SELECT major FROM b_category_major WHERE id='$tmp'");
				$r3 = $q3 -> fetch_row();
				$arr['major'][] = array("id" => $r1[0], "name" => $r3[0]);
			}
			$arr['code'] = 0;
		}
		echo json_encode($arr);
		break;
	case '4' :
		$majorId=$_GET['majorId'];
		$collegeId=$_GET['collegeId'];
		$gradeId=$_GET['gradeId'];
		$arr = array();
		$q2 = $link -> query("SELECT COUNT(id_product) FROM b_rel_pro_maj WHERE id_category_major='$majorId' AND id_category_college='$collegeId' AND id_category_grade='$gradeId'");
		$r2 = $q2 -> fetch_row();
		if ($r2[0] <= 0) {
			$arr['code'] = 1;
		} else {
			$q1 = $link -> query("SELECT id_product FROM b_rel_pro_maj WHERE id_category_major='$majorId' AND id_category_college='$collegeId' AND id_category_grade='$gradeId'");
			while ($r1 = $q1 -> fetch_row()) {
				$tmp = $r1[0];
				$q3 = $link -> query("SELECT * FROM b_product WHERE id='$tmp'");
				$r3 = $q3 -> fetch_row();
				$arr['product'][] = array("id" => $r3[0], "name" => $r3[1], "publish" => $r3[2], "editor" => $r3[3], "oldPrice" => $r3[6], "newPrice" => $r3[5], "oldDiscount" => $r3[8], "newDiscount" => $r3[7], "hot" => $r3[11], "pic" => $r3[12]);
			}
			$arr['code'] = 0;
		}
		echo json_encode($arr);
		break;
	case '5' :
		$arr = array();
		$q1 = $link -> query("SELECT COUNT(id_product) FROM b_hot_goods");
		$r1 = $q1 -> fetch_row();
		if ($r1[0] <= 0) {
			$arr['code'] = -1;
		} else {
			$q2 = $link -> query("SELECT id_product FROM b_hot_goods");
			while ($r2 = $q2 -> fetch_row()) {
				$tmp = $r2[0];
				$q3 = $link -> query("SELECT * FROM b_product WHERE id='$tmp'");
				$r3 = $q3 -> fetch_row();
				$arr['product'][] = array("id" => $r3[0], "name" => $r3[1], "publish" => $r3[2], "editor" => $r3[3], "oldPrice" => $r3[6], "newPrice" => $r3[5], "oldDiscount" => $r3[8], "newDiscount" => $r3[7], "hot" => $r3[11], "pic" => $r3[12]);
			}
			$arr['code'] = 0;
		}
		echo json_encode($arr);
		break;
	default :
		$arr = array();
		$arr['code'] = -1;
		//-1出问题
		echo json_encode($arr);
		break;
}
$link->close();
?>