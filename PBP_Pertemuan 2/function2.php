<?php
// prosedur
function print_mhs($nama, $nim, $prodi)
{
    echo 'Nama : ' . $nama . '<br/>';
    echo 'NIM : ' . $nim . '<br/>';
    echo 'Prodi : ' . $prodi . '<br/>';
}

print_mhs('Thoriq', '24060122130086', 'Informatika');

// menghitung harga setelah diskon
// parameter input : harga dan diskon
function hitung_diskon($harga, $diskon)
{
    $harga = $harga - ($harga * $diskon / 100);
    return $harga;
}

// menghitung harga setelah diskon
// parameter input : harga dan diskon (default = 10)
function hitung_diskon2($harga, $diskon = 10)
{
    $harga = $harga - ($harga * $diskon / 100);
    return $harga;
}

// menghitung harga setelah diskon
// harga menjadi parameter input dan output
function hitung_diskon3(&$harga, $diskon)
{
    $harga = $harga - ($harga * $diskon / 100);
    return $harga;
}

// fungsi rekursif untuk menghitung nilai faktorial
function faktorial($n)
{
    if ($n == 0) {
        return 1;
    } else {
        return $n * faktorial($n - 1);
    }
}