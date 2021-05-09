//STRINGS -------------------------------------------------------------------------------------------
const message = 'Hello World';
const now = 2019;
const tags = 'Technology, computers, IoT';

console.log('My name is ' + name + ' and I am ' + now + ' years old'); //Concatenation 
console.log(`My name is ${name} and I am ${now} years old`); //Concatenation on ES6+
console.log(name.length);
console.log(name.toUpperCase);
console.log(name.toLowerCase);
console.log(name.substring(1, 3).toUpperCase); //[1,3)

console.log(name.split('')); //Split into an array letter by letter
//Useful for: 
console.log(tags.split(', ')); //Gives an array with each word inside
//---------------------------------------------------------------------------------------------------

//ARRAYS --------------------------------------------------------------------------------------------
const fruits = ['apple','orange','strawberry','melon','watermelon'];

fruits.forEach(function (n) {
    console.log(`foreach Function: ${n}`);
});

const mappedFruits = fruits.map(function (f) {
    return 'mapped: ' + f; 
});

console.log(mappedFruits);


const filteredfruits = fruits.filter(function (f) {
    return f.length === 5;
});

console.log(filteredfruits);

