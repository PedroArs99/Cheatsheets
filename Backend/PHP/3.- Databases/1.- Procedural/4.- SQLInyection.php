<?php
    require '../1.- dbInfo.php';

    $connection = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbName);
    
    //MÉTODO I - No permitir caracteres extraños en las variables
    $user = mysqli_real_escape_string($connection, $_GET['user']);
    $password = mysqli_real_escape_string($connection, $_GET['pwd']);

    
    $query = "DELETE FROM Usuarios 
                WHERE Usuario = '$user' and 
                        Contraseña = '$password'";
    


?>