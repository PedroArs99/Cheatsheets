<?php
    require 'config.php';

    try{
        //Protection from SQL Inyection
        $user = htmlentities(addslashes($_POST['user'])); 
        $password = htmlentities(addslashes($_POST['password']));

        $base = new PDO(HOST,USER,PASSWORD);
        $base->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        $query = "SELECT * 
                  FROM Usuarios 
                  WHERE Usuario = ? AND
                        Contraseña = ?";
        
        $statement = $base->prepare($query);
        $statement->execute(array($user,$password));

        if($statement->rowCount() == 1){
            session_start();
            $_SESSION['user'] = $user;

            header('location: users.php');
        }else{
            header('location: index.html');
        }
    }catch(Exception $e){
        die($e->getMessage());
    }
?>