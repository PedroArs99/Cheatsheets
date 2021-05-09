<!DOCTYPE html>
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ControlFlow</title>
  </head>
  <body>
    <?php
      // IF ********************************************************************
        $var = true;

        if($var){
          echo "true";
        }else{
          echo "false";
        }

       echo $var? "true" : "false";
      //************************************************************************

      // SWITCH ****************************************************************
        switch($var):
          Case true:
            echo "true";
            break;
          Case false:
            echo "false";
            break;
          default:
            echo "default";
        endswitch
      //************************************************************************

      // WHILE, DO-WHILE, FOR **************************************************
        //igual que java
      //************************************************************************

    ?>
  </body>
</html>
