<!DOCTYPE html>
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Strings</title>
  </head>

  <body>
      <?php
        $var1 = "casa";
        $var2 = "CASA";
        $resultado = strcmp($var1,$var2); //Comparar strings - case Sensitive
        $resultado = strcasecmp($var1,$var2); //Compara Strings - case non Sensitive
          // 0 para iguales
          //1 para distintos

      ?>
  </body>

</html>
