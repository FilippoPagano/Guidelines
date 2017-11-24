<?php
	
	include((dirname(__FILE__)) .'/ensureLogin.php');
	require((dirname(__FILE__)) .'/dbc.php');
	
	if (isset($_POST["guideline"])){
		sendUpvote($mysqli->real_escape_string($_POST["guideline"]),$mysqli);
	} else {
			echo "Error: " ."Insert guideline";
	}
	
	function sendUpvote($guideline, $mysqli){

		
		$query = "INSERT INTO guideline_upvote (guideline, user) 
		SELECT '" . $guideline . "', '". $_SESSION['email']  ."'
  FROM dual
 WHERE NOT EXISTS (SELECT 1 
                     FROM guideline_upvote 
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