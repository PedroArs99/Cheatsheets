<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Search Page</title>

    <?php
      function Select($busqueda){
        require('../DataBase/dbInfo.php');


        $conexion=mysqli_connect($dbHost,$dbUser,$dbPassword,$dbName)
          or die("No se pudo conectar");

        $query = "SELECT * FROM Productos WHERE  `NOMBRE ARTÍCULO`='$busqueda'";

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
        echo "</table>";

      }
      ?>

  </head>
  <body>
      <?php
        $busqueda = $_GET['buscar'];

        $direccion = $_SERVER['PHP_SELF'];

        if($busqueda != NULL){
          Select($busqueda);
        }else{

          echo "<form action='$direccion' method='get'>
                  <label>Buscar: <input type='text' name='buscar'></label>
                  <input type='submit'>
                </form>";
        }
      ?>
  </body>
</html>
