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
 
// Populate Eadd number from JSON $obj array and store into $Eadd.
$Eadd = $obj['Eadd'];

// Populate Otime_ number from JSON $obj array and store into $Otime_.
$Otime_ = $obj['Otime_'];

// Populate Ctime_ number from JSON $obj array and store into $Ctime_.
$Ctime_ = $obj['Ctime_'];

// Populate DClose number from JSON $obj array and store into $DClose.
$DClose = $obj['DClose'];

// Populate Temp_ number from JSON $obj array and store into $Temp_.
$Temp_ = $obj['Temp_'];

// Populate Shift_ number from JSON $obj array and store into $Shift_.
$Shift_ = $obj['Shift_'];

// Populate Enoshift_ number from JSON $obj array and store into $Enoshift_.
$Enoshift_ = $obj['Enoshift_'];

// Populate Enoempshift_ number from JSON $obj array and store into $Enoempshift_.
$Enoempshift_ = $obj['Enoempshift_'];

// Populate Enotables_ number from JSON $obj array and store into $Enotables_.
$Enotables_ = $obj['Enotables_'];

// Populate Enochairs_ number from JSON $obj array and store into $Enochairs_.
$Enochairs_ = $obj['Enochairs_'];

// Populate cashreg_ number from JSON $obj array and store into $cashreg_.
$cashreg_ = $obj['cashreg_'];

// Populate Yofbusiness_ number from JSON $obj array and store into $Yofbusiness_.
$Yofbusiness_ = $obj['Yofbusiness_'];

// Populate Branches_ number from JSON $obj array and store into $Branches_.
$Branches_ = $obj['Branches_'];

// Populate Blocation_ number from JSON $obj array and store into $Blocation_.
$Blocation_ = $obj['Blocation_'];

// Populate Etalk_ number from JSON $obj array and store into $Etalk_.
$Etalk_ = $obj['Etalk_'];

// Populate Smartphone number from JSON $obj array and store into $Smartphone.
$Smartphone = $obj['Smartphone'];

// Populate Otherinfo_ number from JSON $obj array and store into $Otherinfo_.
$Otherinfo_ = $obj['Otherinfo_'];

 
 // Creating SQL query and insert the record into MySQL database table.
//$Sql_Query = "insert into Surveys(name,email,phone_number) values ('$name','$email','$phone_number')";
$query  = "insert into subjects_ (";
$query .= "Eatery, Ladd, Eadd,Otime_,Ctime_,DClose,Temp_,Shift_,Enoshift_,Enoempshift_,Enotables_, ";
$query .= "Enochairs_, cashreg_, Yofbusiness_, Branches_, Blocation_, Etalk_, Smartphone, Shift_, Otherinfo_"; 
$query .= ") values(";
$query .= "'$Eatery','$Ladd','$Otime_','$Ctime_','$DClose','$Temp_','$Shift_','$Enoshift_','$Enoempshift_',";
$query .= "'$Enotables_','$Enochairs_','$cashreg_','$Yofbusiness_','$Branches_','$Blocation_','$Etalk_',";
$query .= "'$Smartphone','$Shift_',,'$Otherinfo_'";
 
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
