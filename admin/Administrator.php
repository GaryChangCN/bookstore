<?php
include "conn.php";
$type = $_POST['type'];
switch ($type) {
	case '1' : //超级管理员核实
		$name = $_POST['name'];
		$query = mysql_query("select password,id from b_admin where name ='$name'", $link);
		$row1 = mysql_fetch_array($query);
		$id = $row1['id'];
		$pass = $row1['password'];
		$password = $_POST['password'];
		$md5password = md5($password);
		if ($md5password == $pass) {
			echo "inline#" . $id;
		} else {
			echo "none";
		}
		break;
	case '2' : //超级管理员修改
		$name1 = $_POST['name'];
		$password1 = $_POST['password'];
		$md5password = md5($password1);
		$id1 = $_POST['id'];
		mysql_query("UPDATE b_admin SET name='$name1',password='$md5password' WHERE id='$id1' ");
		echo "修改成功";
		include_once "logout.php";
		break;
	case '3':  // 管理员账号查看
		$query=mysql_query("SELECT id,name FROM b_admin LIMIT 1,30");
	    while ($row=mysql_fetch_array($query)) {
	    	echo "<li>编号:".$row['id']."-账号：".$row['name']."</li>";
	    }
		break;
	case '4':   //修改管理员信息
		$name2=$_POST['name'];
		$password2=$_POST['password'];
		$id2=$_POST['id'];
		$md5password2=md5($password2);
		$power=$_POST['power'];
		mysql_query("UPDATE b_admin SET name='$name2',password='$md5password2',power='$power' WHERE id='$id2' ");
		echo "修改成功";
		break;
	case '5': //添加管理员
		$name3=$_POST['name'];
		$password3=$_POST['password'];
		$power3=$_POST['power'];
		$md5password3=md5("$password3");
		mysql_query("INSERT INTO b_admin VALUES('','$name3','$md5password3','$power3')");
		echo '<script type="text/javascript">
		alert("添加成功");
		parent.location.reload();
	    </script>';
		break;	
	case '6':
		$id4=$_POST['id'];
		mysql_query("DELETE FROM b_admin WHERE id='$id4'");
		echo "删除成功";
		break;			
	default :
		break;
}
mysql_close();
?>