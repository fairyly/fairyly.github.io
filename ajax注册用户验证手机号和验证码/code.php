<?php
if(!isset($_SESSION)){ //判断session是否开启
    session_start(); //开启就session
} 
$width=70; //布画宽度
$height=25; //布画高度
$length=4;//验证码长度
$code=getcode($length); //获取随机字符串
$_SESSION['verfyCode'] = strtolower($code); 

$img=imagecreate($width,$height);
$bgcolor=imagecolorallocate($img,240,240,240);
$rectangelcolor=imagecolorallocate($img,150,150,150);
imagerectangle($img,1,1,$width-1,$height-1,$rectangelcolor);//画边框
$font = dirname(__FILE__).'/heiti.ttf';
for($i=0;$i<$length;$i++){//循环写字
    $codecolor=imagecolorallocate($img,mt_rand(50,200),mt_rand(50,128),mt_rand(50,200));
    $angle=rand(-20,20);
    $charx=$i*15+8;
    $chary=($height+14)/2+rand(-1,1);
    imagettftext($img,15,$angle,$charx,$chary,$codecolor,$font, $code[$i]);
}
for($i=0;$i<20;$i++){//循环画线
    $linecolor=imagecolorallocate($img,mt_rand(0,250),mt_rand(0,250),mt_rand(0,250));
    $linex=mt_rand(1,$width-1);
    $liney=mt_rand(1,$height-1);
    imageline($img,$linex,$liney,$linex+mt_rand(0,4)-2,$liney+mt_rand(0,4)-2,$linecolor);
}
for($i=0;$i<100;$i++){//循环画点
    $pointcolor=imagecolorallocate($img,mt_rand(0,250),mt_rand(0,250),mt_rand(0,250));
    imagesetpixel($img,mt_rand(1,$width-1),mt_rand(1,$height-1),$pointcolor);
}
function getcode($length){//生成php随机数 
    $pattern = '1234567890ABCDEFGHIJKLOMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';//字符池
    for($i=0;$i<$length;$i++) { 
        $key .= $pattern{mt_rand(0,35)}; 
    } 
    return $key; 

}
ob_clean();
header('Content-type:image/png'); 
imagepng($img);
