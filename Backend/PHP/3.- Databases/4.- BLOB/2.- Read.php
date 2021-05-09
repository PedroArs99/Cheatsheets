<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        require '../1.- dbInfo.php';

        $connection = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);
        mysqli_set_charset($connection, 'utf8');

        $query = "SELECT * FROM Blobs";
        $results  = mysqli_query($connection,$query);

        while($rows = mysqli_fetch_assoc($results)){
            echo "Name: ".$rows['name']."<br>";
            $content = $rows['archive'];
            echo "<img height='250' src='data:image/*;base64, ".base64_encode($content)."' >";
        }

    ?>
</body>
</html>