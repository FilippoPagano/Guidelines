<?php
	
	include((dirname(__FILE__)) .'/ensureLogin.php');
	require((dirname(__FILE__)) .'/dbc.php');
	
	if (isset($_POST["comment"]) && isset($_POST["guideline"])){
		sendComment($mysqli->real_escape_string($_POST["guideline"]), $mysqli->real_escape_string($_POST["comment"]),$mysqli);
	}
	
	function sendComment($guideline, $comment, $mysqli){

		
		$query = "INSERT INTO guideline_comment (guideline, date, text, user) 
		
		SELECT '" . $guideline . "', NOW() ,'" . $comment .  "', id
		FROM user WHERE email='". $_SESSION['email']  ."';";
		
		
		if ($mysqli->query($query) === TRUE) {
			
			
			echo  json_encode("ok");
			} else {
			echo "Error: " . $query . "<br>" . $mysqli->error;
		}
		
		
		$mysqli->close();
	}
	
?>