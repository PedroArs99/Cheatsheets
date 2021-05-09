<?php
    $imageName = $_FILES['image']['name'];
    $imageType = $_FILES['image']['type'];
    $imageSize = $_FILES['image']['size'];

    require '../1.- dbInfo.php';

    $connection = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbName);
    mysqli_set_charset($connection,'utf8');

    $imageContent = mysqli_escape_string($connection,file_get_contents($_FILES['image']['tmp_name']));

    $query = "INSERT INTO Blobs(archive,name) VALUES ('$imageContent','$imageName')";

    $ok = mysqli_query($connection,$query);

    if(mysqli_affected_rows($connection) > 0){
        echo "Image added";
    }else{
        echo "Bad upload";
    }
    
?>