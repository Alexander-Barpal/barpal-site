<html>
    <head>
        <title>My first PHP Website</title>
    </head>
    <body>
        <h2>Registration Page</h2>
        <a href="index.php">Click here to go back</a><br/><br/>
        <form action="register.php" method="POST">
           Enter Username: <input type="text" 
           name="username" required="required" /> <br/>
           Enter password: <input type="password" 
           name="password" required="required" /> <br/>
           <input type="submit" value="Register"/>
        </form>
    </body>
</html>
<?php
$con=mysqli_connect(
    $hostname = ini_get("mysqli.default_host"),
    $username = ini_get("admin"),
    $password = ini_get("P4ss112701."),
    $database = "barpalsite_php-test",
    $port = ini_get("mysqli.default_port"),
    $socket = ini_get("mysqli.default_socket")
);

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $usernamew = mysqli_real_escape_string($con, $_POST['username']);
    $passwordw = mysqli_real_escape_string($con, $_POST['password']);
    $bool = true;
   
    $query = mysqli_query($con,"Select * from users"); //Query the users table
    while($row = mysqli_fetch_array($query)) //display all rows from query
    {
        $table_users == $row['username']; // the first username row 
                                          // is passed on to $table_users, 
                                          // and so on until the query is finished
        if($usernamew == $table_users)     // checks if there are any matching fields
        {
            $bool = false; // sets bool to false
            Print '<script>alert("Username has been taken!");</script>';     //Prompts the user
            Print '<script>window.location.assign("register.php");</script>';//redirects to 
                                                                             //register.php
        }
    }

    if($bool) // checks if bool is true
    {
        mysqli_query($con ,"INSERT INTO users (username, password) _
                     VALUES ('$usernamew', 'passwordw')"); // inserts value into table users
        Print '<script>alert("Successfully Registered!");</script>';      // Prompts the user
        Print '<script>window.location.assign("register.php");</script>'; // redirects to 
                                                                          // register.php
    }
}
?>