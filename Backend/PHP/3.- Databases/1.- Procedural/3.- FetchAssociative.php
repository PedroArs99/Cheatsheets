<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>

    <style media="screen">  
      table{ 
        width: 75%;
        border: solid 1px black;
        border-collapse: collapse;
        text-align: left;
      }
      tr,td,th{
        border:solid 1px black;
      }
    </style>
  </head>
  <body>
    <?php
      require('../dbInfo.php');
      $conexion=mysqli_connect($dbHost,$dbUser,$dbPassword,$dbName)
        or die("No se pudo conectar");

      $query = "SELECT * from Productos";

      $resultados = mysqli_query($conexion,$query);
      echo "<table>
              <tr>
               <th>SECCIÓN</th>
               <th>NOMBRE ARTÍCULO</th>
               <th>FECHA</th>
               <th>PAÍS DE ORIGEN</th>
               <th>PRECIO</th>
              </tr> \n";
      while($row = mysqli_fetch_array($resultados, MYSQLI_ASSOC)){

        echo   "<tr>\n";
        echo      "<td>".$row['SECCIÓN']."</td>\n";
        echo      "<td>".$row['NOMBRE ARTÍCULO']."</td>\n";
        echo      "<td>".$row['FECHA']."</td>\n";
        echo      "<td>".$row['PAÍS DE ORIGEN']."</td>\n";
        echo      "<td>".$row['PRECIO']."</td>\n";
        echo   "</tr>";
      }
      echo "</table>"

    ?>
  </body>
</html>
