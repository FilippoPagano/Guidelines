<?php
	session_start();
	if(isset($_SESSION['email']) ) {
		$ret = ['ok',session_id()];
		echo(json_encode($ret));
		die();
	}
	include((dirname(__FILE__)) .'/dbc.php');
    
	if (!empty($_POST["email"]) && !empty($_POST["password"])){
		$email = $mysqli->real_escape_string($_POST["email"]);
		$password =$mysqli->real_escape_string($_POST["password"]);
		$query = "SELECT email FROM user WHERE email='" .$email."' AND password ='".$password."';";
		if (($result = $mysqli->query($query)) and ($result->num_rows == 1)){
			$user  = array();
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
				array_push($user, $row);
				
			}
			$_SESSION['email']= $email;
			$ret = ['ok',session_id(), $user[0]["email"] ];
			echo(json_encode($ret));
			die();
			} else{
			echo(json_encode('wrong login'));    
		}
		
	} else {echo(json_encode('no info'));}
	
	// Send to client
	ob_end_flush();
?>