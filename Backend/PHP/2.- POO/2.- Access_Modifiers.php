<?php
    class Clase{
      public $property1;
      private $property2;
      protected $property3;

      static $property4;

      function access_Static(){
        self::$property4 = 0;
      }

      static function f1(){
        return self::$property4;
      }
    }
?>
