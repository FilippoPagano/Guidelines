<?php
	include_once("connectdb.php");
	function validate_input() {
    /*TODO*/
	}
	function store_input() {
    /*TODO*/
	}
	
	 $query = "SELECT guideline.CAT, COMMENTS, UPVOTES, DOWNVOTES, guideline.DESCRIPTION, REPLACE(REPLACE(guideline.HRI,0,'false'),1,'true') as HRI, REPLACE(REPLACE(guideline.`MOTION-BASED`,0,'false'),1,'true') as `MOTION-BASED`, REPLACE(REPLACE(guideline.MSE,0,'false'),1,'true') as MSE, guideline.REFERENCE, guideline.SUBCAT, REPLACE(REPLACE(guideline.TANGIBLES,0,'false'),1,'true') as TANGIBLES, guideline.TITLE, REPLACE(REPLACE(guideline.TOUCH,0,'false'),1,'true') as TOUCH, REPLACE(REPLACE(guideline.WIVR,0,'false'),1,'true') as WIVR, guideline.id FROM guideline " .
	 
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
) temp3 ON temp3.id = guideline.id
WHERE 1" ;
	// var_dump($query);
	if ($result = $mysqli->query($query)){  
        $rows = array();
        while($row = $result->fetch_assoc()) {
            array_push($rows, $row);

        }

        $result->close();
    }
    $mysqli-> close();
	//var_dump($rows);
    print(json_encode($rows)); 
	
	
?>