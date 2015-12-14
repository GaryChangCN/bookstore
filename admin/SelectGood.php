<?php
	include "conn.php";
	$query=mysql_query("SELECT b_name,b_isbn FROM b_product",$link);
	while($row=mysql_fetch_array($query)){
		echo "<li>".$row['b_name']."#".$row['b_isbn']."</li>";
	}
	?>
