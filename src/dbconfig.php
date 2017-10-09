<?php
 
//Define your host here.
define("DB_SERVER","192.168.56.7");
 
//Define your database name here.
define("DB_NAME","Survey");
 
//Define your database username here.
define("DB_USER","root");
 
//Define your database password here.
define("DB_PASS","");

$connect_=mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME); 

	if (mysqli_connect_errno()){
		die("Database Connection failed");
	}
?>


