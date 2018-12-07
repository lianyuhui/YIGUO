<?php
header("Content-type:text/html;charset=utf-8");
//接收数据
$username = $_GET['username'];
//连接数据库
$conn = mysql_connect("localhost","root","root");
if(!$conn){
	echo "数据库连接失败";
}else{
	//选择数据库
	mysql_select_db("yiguo",$conn);
	//执行SQL语句
	$sqlstr = "select * from yonghu where username = '$username'";
	$result = mysql_query($sqlstr,$conn);
	//关闭数据库
	
	$rows=mysql_num_rows($result);
	if($rows==0){
		echo "0";
	}else{
		echo "1";
	}
	mysql_close($conn);
}
?>