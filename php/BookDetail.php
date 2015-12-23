<?php
include "../admin/conn.php";
$type = $_GET['type'];
switch ($type) {
	case '1' :
		$id = $_GET['id'];
		$query = mysql_query("SELECT * FROM b_product WHERE id='$id'");
		$row = mysql_fetch_array($query);
		$query1 = mysql_query("SELECT text FROM b_ad WHERE number='1'");
		//输出logo地址
		$row1 = mysql_fetch_array($query1);
		echo $row1['text'] . "%%";
		echo "<tr>";
		echo '<td class="td1">';
		echo '<img src="img/book/' . $row[12] . '" />';
		echo '</td>';
		echo '<td class="td2">';
		echo '<div>' . $row[1] . '</div>';
		echo '<div>作者：' . $row[3] . '</div>';
		echo '<div>出版社：' . $row[2] . '</div>';
		echo '<div>ISBN码：' . $row[4] . '</div>';
		if (($row[8] == "") || ($row[8] == NULL) || (ctype_space($row[8]))) {
			echo '<div>旧书: <span></span><span>' . $row[6] . '</span>元</div>';
		} else {
			echo '<div>旧书: <span>' . $row[6] . '元</span><span>' . $row[8] . '</span>元</div>';
		}
		if (($row[7] == "") || ($row[7] == NULL) || (ctype_space($row[7]))) {
			echo '<div>新书: <span></span><span>' . $row[5] . '</span>元</div>';
		} else {
			echo '<div>新书: <span>' . $row[5] . '</span><span>' . $row[7] . '</span>元</div>';
		}
		echo '</td>';
		echo '<td class="td3">';
		echo '<div id="addnew">加入购物车</div>';
		echo '</td>';
		echo "</tr>";
		break;
	case '2' :
		$id = $_GET['id'];
		if (isset($_COOKIE['shopcar'])) {
			$cookiefirst = $_COOKIE['shopcar'];
			if (strstr($cookiefirst, $id."A1")) {
				echo "你的购物车已经有这件商品啦，无需添加";
			} else {
				$cookiesecond = (string)$cookiefirst . "--" . (string)$id."A1";
				setcookie("shopcar", $cookiesecond, time() + 2400, "/");
				echo "添加成功你可以到购物车去查看";
			}
		} else {
			setcookie("shopcar", $id."A1", time() + 2400, "/");
			echo "添加成功你可以到购物车去查看";
		}
		break;
	default :
		break;
}
mysql_close();
?>