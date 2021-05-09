<?php
  //Import external PHP files
  include("Variables_IO.php");

  require("Variables_IO.php");

  /*Diferencia entre include y require:
  *   include: No da mensaje de error
  *   require: No se ejecuta nada en adelante si no está
  */

  //Declare Functions
  //$default -> parámetro por defecto
  //$arg1 -> parámetro por valor
  //$arg2 -> parámetro por referencia
    function funcion1($arg1, &$arg2, $default = 1){
      echo "Function body <br>";

      return 1;
    }
 ?>

<!-- "Main" -->
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title> Functions </title>
  </head>

  <body>
    <?php
        funcion1();
    ?>
  </body>

</html>
