const url = require('url'); //Core Module
const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

//Get the serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); //Same thing

//Get the root Domain
console.log(myUrl.host);
console.log(myUrl.hostname); //Hostname doesn't gives the port

//Pathname
console.log(myUrl.pathname);

//Serialized Query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add Params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));







