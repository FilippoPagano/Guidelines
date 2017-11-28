<?php
	include_once("dbc.php");
	function validate_input() {
    /*TODO*/
	}
	function store_input() {
    /*TODO*/
	}
	//var_dump($_POST);
	$id = $_POST['id']?$mysqli->real_escape_string($_POST["id"]):0;
	$cat = $mysqli->real_escape_string($_POST["cat"]);
	$subcat = $mysqli->real_escape_string($_POST["subcat"]);
	$title = $mysqli->real_escape_string($_POST["title"]);
	$desc = $mysqli->real_escape_string($_POST["desc"]);
	$ref = $mysqli->real_escape_string($_POST["ref"]);
	$public = $_POST['public']?1:0;
	$HRI = $_POST['HRI']?1:0;
	$MOTIONBASED = $_POST['MOTION-BASED']?1:0;
	$MSE = $_POST['MSE']?1:0;
	$WIVR = $_POST['WIVR']?1:0;
	$TANGIBLES = $_POST['TANGIBLES']?1:0;
	$TOUCH = $_POST['TOUCH']?1:0;
	
$sql = "INSERT INTO `guideline` (" . (($id!=0)?"`id`, ":"") . "`public`, `HRI`, `MOTION-BASED`, `MSE`, `WIVR`, `TANGIBLES`, `TOUCH`, `CAT`, `SUBCAT`, `TITLE`, `DESCRIPTION`, `REFERENCE`) 
VALUES ('" . (($id!=0)?($id . "', '"):"" ). $public ."', '". $HRI ."', '". $MOTIONBASED . "', '". $MSE . "', '". $WIVR . "', '". $TANGIBLES . "', '". $TOUCH . "', '". $cat . "', '". $subcat . "', '". $title ."', '". $desc ."', '".$ref."')
 ON DUPLICATE KEY UPDATE `public`=" . $public .", `HRI`='". $HRI ."', `MOTION-BASED`=". $MOTIONBASED . ", `MSE`='". $MSE . "', `WIVR`='". $WIVR . "', `TANGIBLES`='". $TANGIBLES . "', `TOUCH`='". $TOUCH . "', `CAT`='". $cat . "', `SUBCAT`='". $subcat . "', `TITLE`='". $title ."', `DESCRIPTION`='". $desc ."', `REFERENCE`='".$ref."'";
//var_dump($sql);
if ($mysqli->query($sql) === TRUE) {
  //  echo ("New record created successfully");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
echo('<meta http-equiv="refresh" content="0;URL=http://198.211.127.239/guidelines/mockup/starter-kit/html/collapsible-menu/guidelines.html">');
//$conn->close();

//die();
	
	
?>