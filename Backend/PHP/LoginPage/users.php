<?php
session_start();

if (!isset($_SESSION['user'])) {
    header('location: index.html');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users</title>

    <style>
        .button {
            background-color: lightcoral;
            border-radius: 7px;
            border: none;
            width: 5%;
            height: 5%;
        }

        .button:hover {
            border: dotted 1px black;
        }
    </style>
</head>

<body>
    <h1>Registered Users Page</h1>
    <?php
    echo "Welcome, " . $_SESSION['user'] . "!";
    ?>
    <form action="logout.php" method="post">
        <input class="button" type="submit" value="Logout">
    </form>

</body>

</html>