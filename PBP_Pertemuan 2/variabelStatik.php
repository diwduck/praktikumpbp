<?php
function diskon2()
{
    static $harga = 1000;
    $harga = 0.8 * $harga;
    echo 'Harga = ' . $harga . '<br/>';
}

$harga = 30;
diskon2();
diskon2();
echo 'Harga = ' . $harga . '<br/>';