<?php
	header("Content-type:text/html;charset=utf-8");
	//一.接受数据
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	//二.修路搭桥
	//1.连接数据库
	$conn = mysql_connect("localhost","root","root");

	//2.判断
	if(!$conn){
		die ('连接数据库失败！');
	}else{
		//选择库
		mysql_select_db("yiguo",$conn);
		//数据
		$sql="select * from yonghu where username='$username' and userpass='$userpass'";
		$result = mysql_query($sql,$conn);
		//关闭数据库
		mysql_close($conn);
		//响应
		$rows=mysql_num_rows($result);
		if($rows==0){
			echo "0";
		}else{
			echo "1";
		}
	}

?>