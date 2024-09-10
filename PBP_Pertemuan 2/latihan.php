<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Print Nilai Mahasiswa</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <h1 class="display-4 text-center">Print Data Mahasiswa</h1>
    <?php

    function hitung_rata($array)
    {
        $sum = 0;
        foreach ($array as $value) {
            $sum += $value;
        }
        $average = $sum / sizeof($array);
        return $average;
    }

    function print_mhs($array_mhs)
    {
        echo '<table class="table table-bordered table-striped">';
        echo '<thead>';
        echo '<tr>';
        echo '
            <th>Nama</th>
            <th>Nilai 1</th>
            <th>Nilai 2</th>
            <th>Nilai 3</th>
            <th>Rata-Rata</th>
        ';
        echo '</tr>';
        echo '</thead>';
        echo '<tbody>';

        foreach ($array_mhs as $nama_mhs => $array_nilai_mhs) {
            echo '<tr>';

            echo '<td>' . $nama_mhs . '</td>';
            foreach ($array_nilai_mhs as $nilai) {
                echo '<td>' . $nilai . '</td>';
            }
            echo '<td>' . hitung_rata($array_nilai_mhs) . '</td>';

            echo '</tr>';
        }

        echo '</tbody>';
        echo '</table>';
    }

    $array_mhs = [
        'Abdul' => [89, 90, 54],
        'Budi' => [78, 60, 64],
        'Nina' => [67, 56, 84],
        'Budi' => [87, 69, 50],
        'Budi' => [98, 65, 74],
    ];

    print_mhs($array_mhs);
    ?>
</body>

</html>