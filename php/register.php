<?php


include((dirname(__FILE__)) .'/dbc.php');

if (isset($_POST["email"]) && isset($_POST["password"])&& isset($_POST["name"])){

    $email = $mysqli->real_escape_string($_POST["email"]);
    $password =$mysqli->real_escape_string($_POST["password"]);
    $name =$mysqli->real_escape_string($_POST["name"]);
    $query = "SELECT email FROM user WHERE email='" .$email."';";
    if (($result = $mysqli->query($query)) and ($result->num_rows == 0)){
        $query ="INSERT INTO user(email, password, name) VALUES('" .$email. "','".$password."','".$name."');";
        if ($result = $mysqli->query($query)){
            session_start();
            $_SESSION['email']= $email;
            $ret = ['ok',session_id() ];
            echo(json_encode($ret));
            die();
        } else{
            var_dump($result);
            echo('couldnt register');
            //couldnt register
        }

    } else{
        echo('email already taken');    
    }

} else {
    echo('no info');
}

?>