<?php

function diskon()
{
    $harga = 1000;
    $harga = 0.2 * $harga;
}

$harga = 2000;
diskon();
echo 'Harga = ' . $harga . '<br/>';