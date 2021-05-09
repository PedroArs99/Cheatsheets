//Setting a value here assigns a default value to the parameter
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums());
console.log(addNums(3, 4));

//Arrow Functions on ES6+
const addNumbers = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNumbers(2, 7));


