/* To Auto Reload, use nodeMon*/
const http = require('http'); //Core Module
const path = require('path'); //Core Module
const fs = require('fs'); //Core Module

const PORT = process.env.PORT || 8080;

const server = http.createServer((request, response) => { 
    /* 
    INEFFICIENT

    if (request.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content);
        })
    } else if (request.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content);
        })
    } else if (request.url === '/api/users') {
        const users = [
            { name: 'John Doe', age: 30 },
            { name: 'Bob Smith', age: 50 }
        ];
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(users));
    }
    */
    
    //Build File Path
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);    
    
    //Get the extension
    let extName = path.extname(filePath);
    
    //Initital Content-Type
    let contentType = 'text/html'; 

    //Check the extension & set the content type
    switch (extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    
    //Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                //Page Not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content,'utf8');
                });
            } else {
                //Some server error
                response.writeHead(500);
                response.end(err.code);
            }
        } else {
            response.writeHead(200, { 'Content-Type': `${contentType}` });
            response.end(content, 'utf8');
        }
    })
});
server.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));
