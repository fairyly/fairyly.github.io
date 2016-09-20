<?php

if ($_GET['action'] == 'checkname') {
    $user = array('id'=>0);
    if ($_GET['username'] == 'liyi')  {
        $user = array('id'=>11, 'name'=>'liyi');     
    }
    echo json_encode($user);
    exit;
} elseif ($_GET['action'] == 'getcode') {
    echo rand(1001,9999);    
    exit;
}


