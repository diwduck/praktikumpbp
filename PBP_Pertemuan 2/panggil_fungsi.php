<?php
require_once('function2.php');

// panggil fungsi hitung_diskon
$harga = 10000;
$diskon = 20;
$harga_diskon = hitung_diskon($harga, $diskon);
echo 'Harga sebelum diskon = ' . $harga . '<br/>';
echo 'Harga setelah diskon = ' . $harga_diskon . '<br/>';

// fungsi faktorial
echo '<br/>';
print(faktorial(4));