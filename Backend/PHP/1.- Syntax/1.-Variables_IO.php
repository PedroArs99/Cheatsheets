<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title> Variables </title>
  </head>

  <body>
    <?php
      // Declaración de Constantes *********************************************
        define("NAME","Value");

        echo NAME;
        echo "<br>";
      //************************************************************************


      // Declaración de Variables **********************************************
      $string1 = "Contenido string1";
      /* Diferencia entre comillas dobles y simples:
      * Dobles: Interpreta el Contenido
      * Simplex: Para comillas anidadas y para poner algo literalmente, sin procesado
      */
      $integer1 = 0;

      /* Cuando dentro de una función quiero referirme a una variable global hay
      * que declararla.
      * En caso contrario declara una variable local con el mismo nombre
      * ej:
      */
      $var_global = "algo";
      function alguna(){
        global $var_global;
      }

      //************************************************************************

      // VARIABLES ESTÁTICAS ***************************************************
        function increment(){
          static $contador = 0;
          $contador++;

          echo "$contador <br>";
        }

        increment();
        increment();
        increment();
        increment();
        // muestra [1,2,3,4]
        // si no fuese static mostraria [1.1.1.1]

      //************************************************************************



      //E-S ********************************************************************
      print $string1;
      print "<br> El valor de una variable es: ".$string1."<br>"; //Concatenar Strings
      print "El valor de una variable es: $string1 <br>";

      echo "echo tiene la misma funcion que print";
      /* Diferencia entre print y echo
      * echo admite -> echo $var1,$var2
      * print devuelve siempre 1 (es más lenta)
      * MEJOR USAR ECHO
      */
      //************************************************************************

      // CASTING ***************************************************************
        $num = "1";
        $var = 1;

        $resultado = (int) $num + $var;
      //************************************************************************

    ?>
  </body>
</html>
