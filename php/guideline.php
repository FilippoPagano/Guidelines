<?php
	//include((dirname(__FILE__)) .'/ensureLogin.php');
	include((dirname(__FILE__)) .'/dbc.php');
	
	
	$query = "SELECT * FROM guideline WHERE id ='" .  $mysqli->real_escape_string($_GET['guideline']) . "';";
//	var_dump($query);
	
	 if ($result = $mysqli->query($query)){  
	// 	var_dump($result);
        $results = array();
        while($row = $result->fetch_assoc()) {
            array_push($results, $row);
//	var_dump($row);
        }

        $result->close();
    }
	
	$query = "SELECT guideline_comment.user as uid, user.name as uname, guideline_comment.text, guideline_comment.date
	FROM guideline_comment 
	LEFT JOIN user ON guideline_comment.user = user.id
	 WHERE guideline ='" .  $mysqli->real_escape_string($_GET['guideline']) . "'";
	//var_dump($query);
	 if ($result = $mysqli->query($query)){  
	// 	var_dump($result);
        $results[0]['comments'] = array();
        while($row = $result->fetch_assoc()) {
            array_push($results[0]['comments'], $row);
//	var_dump($row);
        }

        $result->close();
    }
	
    $mysqli-> close();
//	var_dump($results);
	 echo( json_encode($results[0])); 
	
?>