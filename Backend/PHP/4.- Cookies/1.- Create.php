<?php
    setcookie("test","Data to be saved",time() + 30,'/');
    /*
    * @param: name of the cookie.
    * @param: information to be saved on the cookie;
    * @param: expiration time. 
        By default, if the cookie doesn't have a defined lifetime
            it's deleted when the browser is closed.
        time() gets the time when the cookie was created. 
        So time() + 30 means the cookie will be alive for 30 seconds.
    * @param: Path. Directories where PHP can reach the cookie.
        By default, if the cookie doesn't have a defined path 
            it's directory is the folder where the cookie was created.
    */  
    

?>