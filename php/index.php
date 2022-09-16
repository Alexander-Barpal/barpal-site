<html>
    <head>
        <title>My first PHP Website</title>
    </head>
    <body>
        <?php
            echo "<p>Hello World!</p>";
        ?>
    </body>
</html> 
<?php
// Connect to the database server
$mysql = mysqli_connect("localhost", "admin", "P4ss112701.") or die(mysqli_error($mysql));

// Open to the database
mysqli_select_db($mysql, "barpalsite_PHP_test") or die(mysqli_error($mysql));

// Select all records from the "Individual" table
$result = mysqli_query($mysql, "SELECT * FROM lifetimes")
or die(mysqli_error($mysql));

// Loop thru each record (using the PHP $row variable),
// then display the first name and last name of each record.
while($row = mysqli_fetch_array($result)){
	echo $row['name']. " - ". $row['id']. " - ". $row['email'];
	echo "<br>";
}
?>