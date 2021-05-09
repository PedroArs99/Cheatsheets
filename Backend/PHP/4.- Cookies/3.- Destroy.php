<?php
    setcookie('Name of the previously created cookie','any value',time()-1);
    //If we set a cookie with an expiration time in the past the cookie
    //will be deleted.
?>