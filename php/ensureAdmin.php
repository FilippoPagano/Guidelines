<?php
session_start();
if (!isset($_SESSION['email'])){
    header('HTTP/1.0 401 Unauthorized');
    $response['status']='error';
    $response['reason']='unauthorized';
    echo json_encode($response);
    exit();
}

$query = "SELECT email FROM user WHERE email='". $_SESSION['email']  ."' AND isAdmin='1';";
//var_dump($query);
if (($result = $mysqli->query($query)) and ($result->num_rows == 1)){
			$user  = array();
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
				array_push($user, $row);
				
			}
		
			} else{
			   header('HTTP/1.0 401 Unauthorized');
    $response['status']='error';
    $response['reason']='unauthorized';
    echo json_encode($response);
    exit();
		}
		
		?>