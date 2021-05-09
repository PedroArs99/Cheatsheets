const http = require('http'); //Core Module

//Create Server Object
http.createServer((req, response) => {
    //Write Response
    response.write('Hello World');
    response.end();
}).listen(8080,()=>console.log('Server Running...'));