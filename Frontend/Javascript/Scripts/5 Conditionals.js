const z = 5;

//Double equal just match the value
// 10 == '10' is true
//Triple equal match the value + data type
// 10 === '10' is false
if (z == 5) {
    console.log('x is 5');    
} else if (z == 10) {
    console.log('x is 10');    
} else {
    console.log('x is not either 5 or 10');
}

//Ternary Operator
const color = z > 5 ? 'red' : 'blue';

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break
    default:
        console.log('color is not red or blue');
        break;
}

