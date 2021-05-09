<?php 
    require '../1.- dbInfo.php';

    // 1st Create Connection
    $connection = new mysqli($dbHost, $dbUser,$dbPassword,$dbName);
    if($connection->connect_errno){
        exit("Bad Connection ".$connection->connect_errno);
    }

    // 2nd Set charset
    $connection->set_charset('utf8');

    // 3rd Make Query
    $query = "SELECT * FROM Usuarios";

    $results = $connection->query($query);

    while($rows = $results->fetch_assoc()){
        echo "User: ".$rows['Usuario']."<br>";
        echo "Password: ".$rows['Contraseña']."<br>";
    }

    $connection->close();


?>