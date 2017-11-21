<?php
		include((dirname(__FILE__)) .'/dbc.php');

		$query = "SELECT * FROM user WHERE id ='" .  $mysqli->real_escape_string($_GET['user']) . "';";
		
		 if ($result = $mysqli->query($query)){  
	// 	var_dump($result);
        $results = array();
        while($row = $result->fetch_assoc()) {
            array_push($results, $row);
//	var_dump($row);
        }

        $result->close();
    }
	
    $mysqli-> close();
//	var_dump($results);
	 echo( json_encode($results[0])); 
?>