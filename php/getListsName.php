<?php
	//	var_dump($_POST);
	include((dirname(__FILE__)) .'/ensureLogin.php');
	require((dirname(__FILE__)) .'/dbc.php');
	
	$query = "SELECT distinct list FROM guideline_list WHERE guideline_list.user =  '". $_SESSION['email']  ."' ;";
	//var_dump($query);
	 if ($result = $mysqli->query($query)){  
	// 	var_dump($result);
        $results = array();
        while($row = $result->fetch_assoc()) {
            array_push($results, $row['list']);
//	var_dump($row);
        }

        $result->close();
    }

	echo(json_encode($results));
?>
	