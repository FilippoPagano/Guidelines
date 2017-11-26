<?php
	include_once("dbc.php");
	function validate_input() {
    /*TODO*/
	}
	function store_input() {
    /*TODO*/
	}
	//var_dump($_POST);
	$cat = $mysqli->real_escape_string($_POST["cat"]);
	$subcat = $mysqli->real_escape_string($_POST["subcat"]);
	$title = $mysqli->real_escape_string($_POST["title"]);
	$desc = $mysqli->real_escape_string($_POST["desc"]);
	$ref = $mysqli->real_escape_string($_POST["ref"]);
	$HRI = $_POST['HRI']?1:0;
	$MOTIONBASED = $_POST['MOTION-BASED']?1:0;
	$MSE = $_POST['MSE']?1:0;
	$WIVR = $_POST['WIVR']?1:0;
	$TANGIBLES = $_POST['TANGIBLES']?1:0;
	$TOUCH = $_POST['TOUCH']?1:0;
$sql = "INSERT INTO `guideline` (`HRI`, `MOTION-BASED`, `MSE`, `WIVR`, `TANGIBLES`, `TOUCH`, `CAT`, `SUBCAT`, `TITLE`, `DESCRIPTION`, `REFERENCE`) 
VALUES ('". $HRI ."', '". $MOTIONBASED . "', '". $MSE . "', '". $WIVR . "', '". $TANGIBLES . "', '". $TOUCH . "', '". $cat . "', '". $subcat . "', '". $title ."', '". $desc ."', '".$ref."')";

if ($mysqli->query($sql) === TRUE) {
   // echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
print('<meta http-equiv="refresh" content="0;URL=http://198.211.127.239/guidelines/mockup/starter-kit/html/collapsible-menu/guidelines.html">');
$conn->close();

//die();
	
	
?>