//Using const it's possible to changes values but not the pointer to another array
const numbers = new Array(1, 2, 3, 4, 5); 
numbers[3] = 6;

console.log(numbers);
console.log(numbers[1]);

//Methods
numbers.push(7); //Adds elements at the end
numbers.unshift(0); //Add elements at first position
numbers.pop(); //Gives the last element

console.log(Array.isArray(numbers));

console.log(numbers.indexOf(5));





