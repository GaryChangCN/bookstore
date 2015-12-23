<?php
include "../admin/conn.php";
function BookList($table, $where, $limit1) {
	$listquery = mysql_query("SELECT id_product FROM $table $where ORDER BY 'id' LIMIT $limit1,6");
	while ($listrow = mysql_fetch_array($listquery)) {
		$book_id = $listrow[0];
		$listquery2 = mysql_query("SELECT * FROM b_product WHERE id='$book_id'");
		$listrow2 = mysql_fetch_array($listquery2);
		if ($listrow2[11] == "是") {
			echo '<div class="BuyContentList">';
			echo '<table>';
			echo '<tr>';
			echo ' <td>';
			echo '<img src="img/book/' . $listrow2[12] . '" class="BuyContentListPic" />';
			echo '</td>';
			echo '<td>';
			echo '<div class="BuyContentListMore">';
			echo '<span class="BookTitle">' . $listrow2[1] . '</span>';
			echo ' <span class="BookHot">热</span>';
			echo '<br />';
			echo '<span class="BookEditor">作者：' . $listrow2[3] . '</span>';
			echo '<br />';
			echo '<span class="BookPublish">出版社：' . $listrow2[2] . '</span>';
			echo '<br />';
			echo '<span class="BookIsbn">ISBN码：' . $listrow2[4] . '</span>';
			echo '<br />';
			echo '<span class="BookStock">库存：充足</span><span id="thisId">' . $listrow2[0] . '</span>';
			echo '</div>';
			echo '</td>';
			echo '<td>';
			echo '<div class="BuyContentListPrice">';
			if (($listrow2[8] == "") || ($listrow2[8] == NULL)||(ctype_space($listrow2[8]))) {
				echo '旧书：<span class="OldPriceBefore"></span>';
				echo '<span class="OldPriceAfter">' . $listrow2[6] . '元</span>';
			} else {
				echo '旧书：<span class="OldPriceBefore">' . $listrow2[6] . '元</span>';
				echo '<span class="OldPriceAfter">' . $listrow2[8] . '元</span>';
			}
			echo '<br /> 新书：';
			if (($listrow2[7] == "") || ($listrow2[7] == NULL)||(ctype_space($listrow2[7]))) {
				echo '<span class="NewPriceBefore"></span>';
				echo '<span class="NewPriceAfter">' . $listrow2[5] . '元</span>';
			} else {
				echo '<span class="NewPriceBefore">' . $listrow2[5] . '元</span>';
				echo '<span class="NewPriceAfter">' . $listrow2[7] . '元</span>';
			}
			echo '</div>';
			echo ' </td>';
			echo ' </tr>';
			echo '</table>';
			echo ' </div>';
		} else {//=============================================================================
			echo '<div class="BuyContentList">';
			echo '<table>';
			echo '<tr>';
			echo '<td>';
			echo '<img src="img/book/' . $listrow2[12] . '" class="BuyContentListPic" />';
			echo '</td>';
			echo '<td>';
			echo '<div class="BuyContentListMore">';
			echo '<span class="BookTitle">' . $listrow2[1] . '</span>';
			echo '<br />';
			echo '<span class="BookEditor">作者：' . $listrow2[3] . '</span>';
			echo '<br />';
			echo '<span class="BookPublish">出版社：' . $listrow2[2] . '</span>';
			echo ' <br />';
			echo ' <span class="BookIsbn">ISBN码：' . $listrow2[4] . '</span>';
			echo '<br />';
			echo '<span class="BookStock">库存：充足</span><span  id="thisId">' . $listrow2[0] . '</span>';
			echo '</div>';
			echo '</td>';
			echo '<td>';
			echo '<div class="BuyContentListPrice">';
			if (($listrow2[8] == "") || ($listrow2[8] == NULL)||(ctype_space($listrow2[8]))) {
				echo '旧书：<span class="OldPriceBefore"></span>';
				echo '<span class="OldPriceAfter">' . $listrow2[6] . '元</span>';
			} else {
				echo '旧书：<span class="OldPriceBefore">' . $listrow2[6] . '元</span>';
				echo '<span class="OldPriceAfter">' . $listrow2[8] . '元</span>';
			}
			echo '<br /> 新书：';
			if (($listrow2[7] == "") || ($listrow2[7] == NULL)||(ctype_space($listrow2[7]))) {
				echo '<span class="NewPriceBefore"></span>';
				echo '<span class="NewPriceAfter">' . $listrow2[5] . '元</span>';
			} else {
				echo '<span class="NewPriceBefore">' . $listrow2[5] . '元</span>';
				echo '<span class="NewPriceAfter">' . $listrow2[7] . '元</span>';
			}
			echo '</div>';
			echo '</td>';
			echo '</tr>';
			echo ' </table>';
			echo '</div>';
		}
	}
}

function selectCount($b, $where) {//输出编号
	$query2 = mysql_query("SELECT COUNT(*) FROM $b $where");
	$row2 = mysql_fetch_array($query2);
	if ($row2[0] == 0) {
		$count = 1;
	} else {
		$count = $row2[0];
	}
	$num = ceil($count / 6);
	for ($i = 1; $i <= $num; $i++) {
		echo "<li>" . ($num + 1 - $i) . "</li>";
	}
	echo "%%";
}

$type = $_POST['type'];
switch ($type) {
	case '0' :
		selectCount("b_hot_goods", "");
		BookList("b_hot_goods", "", "0");
		break;
	case '1' :
		$name = $_POST['name'];
		selectCount("b_rel_pro_maj", "WHERE id_category_major='$name'");
		BookList("b_rel_pro_maj", "WHERE id_category_major='$name'", "0");
		break;
	case '2' :
		$idMajor = $_POST['idMajor'];
		$number = $_POST['number'];
		$FirstNumber = ($number - 1) * 6;
		if ($idMajor == 0) {
			BookList("b_hot_goods", "", $FirstNumber);
		} else {
			BookList("b_rel_pro_maj", "WHERE id_category_major='$idMajor'", $FirstNumber);
		}
		break;
	default :
		break;
}
mysql_close();
?>