<?php

	include((dirname(__FILE__)) .'/ensureLogin.php');
	include((dirname(__FILE__)) .'/dbc.php');
	include((dirname(__FILE__)) .'/ensureAdmin.php');
		$_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
	$query = "INSERT INTO discarded_guideline
SELECT *
FROM guideline
WHERE guideline.id='". ($_POST["guideline"]) . "';

DELETE FROM guideline
WHERE guideline.id='".($_POST["guideline"])."';

  " ;
var_dump($query);

		if ($mysqli->multi_query($query) === TRUE) {
			
			
			echo  json_encode("ok");
			} else {
			echo "Error: " . $query . "<br>" . $mysqli->error;
		}
		
?>