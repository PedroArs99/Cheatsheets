<?php
  // Indexados por numero
  $semana[] = "Lunes";
  $semana[] = "Martes";
  $semana[] = "Miercoles";

  $semana = array("Lunes", "Martes", "Miercoles");

  // Indexados por nombre
  $fecha = array("Dia" => 10, "Mes" => 11, "Year"=>2019);

  echo $fecha["Dia"]."<br>";

  //Comprobar si una vble es un array
  is_array($fecha);

  //Recorrido indexado por nombre
  foreach ($fecha as $key => $value) {
    echo $key."->".$value."<br>";
  }

  //Recorrido indexado por numero
  for($i=0;$i<count($semana);$i++){
    echo $semana[$i]."<br>";
  }

  //Ordenado
  sort($semana);


  //Matrices *******************************************************************
  $select = array("Nombre"=>array("Nombre1","Nombre2","Nombre3"),
                  "Apellido" => array("Apellido1","Apellido2","Apellido3"),
                  "DNI"=>array("0000x","1111y","2222z")
            );

  echo var_dump($select);

?>
