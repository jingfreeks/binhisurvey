<?php
include 'DBConfig.php';

// Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Eatery from JSON $obj array and store into $Eatery.
$Eatery = $obj['Eatery'];
 
// Populate Ladd from JSON $obj array and store into $Ladd.
$Ladd = $obj['Ladd'];
 
 
 // Creating SQL query and insert the record into MySQL database table.
//$Sql_Query = "insert into Surveys(name,email,phone_number) values ('$name','$email','$phone_number')";
$query  = "insert into subjects_ (";
$query .= "Eatery, Ladd";
$query .= ") values(";
$query .= "'$Eatery','$Ladd'";
$query .= ")";
 
 if(mysqli_query($connect_,$query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Data Inserted Successfully into MySQL Database' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($connect_);
 

<?php>
