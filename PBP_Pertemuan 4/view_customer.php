<?php

session_start();
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
}

include('./header.php')
?>
<div class="card mt-5">
    <div class="card-header">Customers Data</div>
    <div class="card-body">
        <a href="add_customer.php" class="btn btn-primary mb-4">+ Add Customer Data</a>
        <a href="admin.php" class="btn btn-primary mb-4">Admin Info</a>
        <a href="logout.php" class="btn btn-danger mb-4">Logout</a>
        <br>
        <table class="table table-striped">
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Action</th>
            </tr>
            <?php
            // Include our login information
            require_once('./lib/db_login.php');
            // Execute the query
            $query = "SELECT * FROM customers ORDER BY customerid";
            $result = $db->query($query);

            if (!$result) {
                die("Could not query the database: <br />" . $db->error . "<br>Query: " . $query);
            }

            // Fetch and display the results
            $i = 1;
            while ($row = $result->fetch_object()) {
                echo '<tr>';
                echo '<td>' . $i . '</td>';
                echo '<td>' . $row->name . '</td>';
                echo '<td>' . $row->address . '</td>';
                echo '<td>' . $row->city . '</td>';
                echo '<td><a class="btn btn-warning btn-sm" href="edit_customer.php?id=' . $row->customerid . '">Edit</a>&nbsp;<a class="btn btn-danger btn-sm" href="delete_customer.php?id=' . $row->customerid . '">Delete</a></td>';
                echo '</tr>';
                $i++;
            }
            echo '</table>';
            echo '<br />';
            echo 'Total Rows = ' . $result->num_rows;

            $result->free();
            $db->close();
            ?>
    </div>
</div>
<?php include('./footer.php') ?>