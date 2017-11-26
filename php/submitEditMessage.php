<?php
	include((dirname(__FILE__)) .'/ensureLogin.php');
	require((dirname(__FILE__)) .'/dbc.php');

	$guidelineName = $mysqli->real_escape_string($_POST["guideline_name"]);
	$msg = $mysqli->real_escape_string($_POST["edit_message"]);
	$guidelineID = $mysqli->real_escape_string($_POST["guideline_id"]);
$sql = "INSERT INTO `guideline_editMessage` (`guideline`, `user`, `guidelineShownName`, `editMessage`) 
VALUES ('". $guidelineID ."', '". $_SESSION['email'] . "', '". $guidelineName . "', '". $msg . "')";

if ($mysqli->query($sql) === TRUE) {
   // echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
print('<meta http-equiv="refresh" content="0;URL=http://198.211.127.239/guidelines/mockup/starter-kit/html/collapsible-menu/guidelines.html">');
$conn->close();

?>