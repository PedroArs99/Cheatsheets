<?php
    require '../1.- dbInfo.php';

    $connection = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbName);
    
    $section = 'DEPORTE';
    $article = 'Zapatillas';
    $date = '8/12/19';
    $country = 'España';
    $price = '23,9€';

    // 1st Write Query
    $query = "INSERT INTO articulos (`SECCIÓN`, `NOMBRE ARTÍCULO`, `FECHA`, `PAÍS DE ORIGEN`, `PRECIO`) 
              VALUES (?,?,?,?,?)";

    // 2nd Create Prepared Statement
    $results = mysqli_prepare($connection, $query);

    // 3rd Bind Params
        /*Second params refers to param type.
            's' for Strings
            'i' for Integers
            'd' for Doubles
        */
    $success = mysqli_stmt_bind_param($results,'sssss',$section,$article,$date,$country,$price);

    //4th Execute Statements
    $success = mysqli_stmt_execute($results);
    if(!$success){
        echo "Error, Bad statement";
        exit();
    }
    echo "Article Inserted Successfully";

    //7th Close Statement
    mysqli_stmt_close($results);
    
?>