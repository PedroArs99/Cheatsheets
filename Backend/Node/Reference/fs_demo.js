const fs = require('fs'); //Core Module - File System
const path = require('path'); //Core Module

//Create Folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created'); 
});

//Create and Write File
fs.writeFile(path.join(__dirname, '/test','hello.txt'), 'Hello World!', err => {
    if (err) throw err;
    console.log('File written to');

    //It's Asynchronous, so you have to make the append after it finish, or it may  overwrite
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Written from NodeJS!', err => {
        if (err) throw err;
        console.log('File written to');
    });
});

//Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
});

//Rename a File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'modi_hello.txt'), err => {
    if (err) throw err;
    console.log('File Renamed...');
});




