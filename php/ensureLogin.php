<?php
session_start();
if (!isset($_SESSION['email'])){
    header('HTTP/1.0 401 Unauthorized');
    $response['status']='error';
    $response['reason']='unauthorized';
    echo json_encode($response);
    exit();
}
?>