<?php
    require '../1.- dbInfo.php';

    $connection = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbName);
    
    $user = 'admin';
    $password = 'admin';

    // 1st Write Query
    $query = "SELECT * 
              FROM Usuarios
              WHERE Usuario = ?";

    // 2nd Create Prepared Statement
    $results = mysqli_prepare($connection, $query);

    // 3rd Bind Params
        /*Second params refers to param type.
            's' for Strings
            'i' for Integers
            'd' for Doubles
        */
    $success = mysqli_stmt_bind_param($results,'s',$user);

    //4th Execute Statements
    $success = mysqli_stmt_execute($results);
    if(!$success){
        echo "Error, Bad statement";
        exit();
    }

    //5th Bind Results
    $success = mysqli_stmt_bind_result($results,$Column1,$Column2);
    echo "User Found <br> <br>";

    //6th Get Results
    while(mysqli_stmt_fetch($results)){
        echo 'User: '.$Column1.'<br>'.'Password: '.$Column2;
    }

    //7th Close Statement
    mysqli_stmt_close($results);
    
?>