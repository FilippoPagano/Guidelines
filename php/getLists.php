<?php
	//	var_dump($_POST);
	include((dirname(__FILE__)) .'/ensureLogin.php');
	require((dirname(__FILE__)) .'/dbc.php');
	
	$query = "SELECT * FROM guideline_list LEFT JOIN guideline ON guideline_list.guideline = guideline.id WHERE guideline_list.user =  '". $_SESSION['email']  ."' 
	
	";
	
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
		//var_dump($results);
			$newResults = array();
	foreach ($results as $item){
	if (!array_key_exists($item["list"],$newResults )) {
	//var_dump($item["list"]);
		$newResults[$item["list"]] = array();
		
		
		}
		array_push($newResults[$item["list"]],$item);
	}
	echo(json_encode($newResults));
?>
	