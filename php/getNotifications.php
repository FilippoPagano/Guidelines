<?php
	include((dirname(__FILE__)) .'/ensureLogin.php');
	require((dirname(__FILE__)) .'/dbc.php');
	include((dirname(__FILE__)) .'/ensureAdmin.php');
	
	$query = "SELECT * FROM `guideline` WHERE `public` =0";
	
		//var_dump($query);
	 if ($result = $mysqli->query($query)){  
	// 	var_dump($result);
        $results = array();
        while($row = $result->fetch_assoc()) {
            array_push($results, $row);
//	var_dump($row);
        }

        $result->close();
    }
		$query = "SELECT * FROM `guideline_editMessage`";
	
		//var_dump($query);
	 if ($result = $mysqli->query($query)){  
	// 	var_dump($result);
        while($row = $result->fetch_assoc()) {
            array_push($results, $row);
//	var_dump($row);
        }

        $result->close();
    }
	
echo(json_encode($results));

?>