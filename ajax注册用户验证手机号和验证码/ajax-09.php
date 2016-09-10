<?php
session_start();
if (!empty($_POST) && !empty($_POST['username'])) {
    $_POST['vcode'] = trim($_POST['vcode']);

    if ($_SESSION['verfyCode'] != strtolower($_POST['vcode'])) {
        echo $_SESSION['verfyCode'];
        echo ' vs '.$_POST['vcode'];
        echo '验证码不对';
        exit;
    }
    print_r($_POST);
}
else
{
    echo rand(10000,99999);
}
