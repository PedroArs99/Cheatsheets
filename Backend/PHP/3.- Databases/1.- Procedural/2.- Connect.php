<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      require('../dbInfo.php');

      // Procedimental -------------------------------------------------------------
        //Gesti?n de errores
        $conexion = mysqli_connect($dbHost,$dbUser,$dbPassword,$dbName) or die("No se puede conectar");
        //Use UTF8 Enconding
        mysqli_set_charset($conexion,'utf8');

        $query = "SELECT * from Persona";

        $resultados = mysqli_query($conexion,$query); //resultSet

        //Recorrido de resultados
        while($row = mysqli_fetch_row($resultados)){
          echo var_dump($row);
        }

        //Cerrar conexión
        mysqli_close($conexion);
    ?>
  </body>
</html>
