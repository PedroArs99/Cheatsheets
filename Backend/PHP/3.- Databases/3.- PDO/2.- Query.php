<?php
    // PDP : PHP Data Object
    require '../1.- dbInfo.php';

    $host = "mysql:host=$dbHost; dbname=$dbName";
    $user = 'admin';
    
    try{
        $base = new PDO($host,$dbUser,$dbPassword);
        $base->exec("SET CHARACTER SET utf8");

        $query = "SELECT * FROM Usuarios WHERE Usuario = ?";

        $statement = $base->prepare($query);
        $statement->execute(array($user));

        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            echo $row['Usuario']."<br>";
            echo $row['Contraseña'];
        }

        $statement->closeCursor();

    }catch(Exception $e){
        die($e->getMessage());
    }

    

    
?>
