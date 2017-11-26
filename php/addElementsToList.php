<?php
	//	var_dump($_POST);
	include((dirname(__FILE__)) .'/ensureLogin.php');
	require((dirname(__FILE__)) .'/dbc.php');
	$_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

		if (isset($_POST["list"])&& isset($_POST["selectedItems"])){

		saveToList($_POST["list"],$_POST["selectedItems"],$mysqli);
	} else {
			echo "Error: " ."Insert guideline";
	}
	
	function saveToList($list,$selectedItems, $mysqli){
	var_dump($list);
	var_dump($selectedItems);
	foreach ($selectedItems as $item){

				

$query = "
       INSERT INTO guideline_list (guideline, user, list)
       SELECT * FROM (SELECT '". $item["id"]  ."','". $_SESSION['email']  ."', '". $list  ."') as tmp
	   WHERE NOT EXISTS (SELECT * FROM guideline_list 
                   WHERE user = '". $_SESSION['email']  ."'
                   AND guideline = '". $item["id"]  ."'
                   AND guideline_list.list = '". $list  ."') LIMIT 1

 ";

		
		
		if ($mysqli->query($query) === TRUE) {
			
			
			echo  json_encode("ok");
			} else {
			echo "Error: " . $query . "<br>" . $mysqli->error;
		}
		
		
		
	}
	$mysqli->close();
	}
	?>