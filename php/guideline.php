<?php
	//include((dirname(__FILE__)) .'/ensureLogin.php');
	include((dirname(__FILE__)) .'/dbc.php');
	
	
	$query = "SELECT guideline.*,  temp.Comments ,  temp2.Upvotes ,  temp3.Downvotes FROM guideline  " .
	"LEFT JOIN  (  SELECT    guideline.id,    COUNT(guideline_comment.id) AS COMMENTS
  FROM    guideline
  LEFT JOIN   guideline_comment ON guideline_comment.guideline = guideline.id
  GROUP BY
    guideline.id
) temp ON temp.id = guideline.id
LEFT JOIN
  (
  SELECT
    guideline.id,
    COUNT(guideline_upvote.id) AS UPVOTES
  FROM
    guideline
  LEFT JOIN
    guideline_upvote ON guideline_upvote.guideline = guideline.id
  GROUP BY
    guideline.id
) temp2 ON temp2.id = guideline.id
LEFT JOIN
  (
  SELECT
    guideline.id,
    COUNT(guideline_downvote.id) AS DOWNVOTES
  FROM
    guideline
  LEFT JOIN
    guideline_downvote ON guideline_downvote.guideline = guideline.id
  GROUP BY
    guideline.id
) temp3 ON temp3.id = guideline.id"
	
	
	." WHERE guideline.id ='" .  $mysqli->real_escape_string($_GET['guideline']) . "';";
	
	
	
	
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