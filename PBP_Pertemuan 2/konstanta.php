<?php
echo htmlentities($_SERVER["PHP_SELF"]);
define("PWI", "Pemrograman Web dan Internet");
echo 'Hari ini sedang praktikum ' . PWI . '<br/>';
$constant_name = 'PWI';
echo 'Hari ini sedang praktikum ' . PWI . '<br/>';

// konstanta bawaan PHP
echo 'File yang sedang diproses "' . __FILE__ . '" pada baris "' . __LINE__ . '" <br/>';