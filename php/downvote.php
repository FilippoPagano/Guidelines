<?php
	
	include((dirname(__FILE__)) .'/ensureLogin.php');
	require((dirname(__FILE__)) .'/dbc.php');
	
	if (isset($_POST["guideline"])){
		sendDownvote($mysqli->real_escape_string($_POST["guideline"]),$mysqli);
	} else {
			echo "Error: " ."Insert guideline";
	}
	
	function sendDownvote($guideline, $mysqli){

		
		$query = "INSERT INTO guideline_downvote (guideline, user) 
		SELECT '" . $guideline . "', '". $_SESSION['email']  ."'
  FROM dual
 WHERE NOT EXISTS (SELECT 1 
                     FROM guideline_downvote 
                    WHERE user = '". $_SESSION['email']  ."'
                      AND guideline = '" . $guideline . "')";
		
		
		if ($mysqli->query($query) === TRUE) {
			
			
			echo  json_encode("ok");
			} else {
			echo "Error: " . $query . "<br>" . $mysqli->error;
		}
		
		
		$mysqli->close();
	}
	
?>