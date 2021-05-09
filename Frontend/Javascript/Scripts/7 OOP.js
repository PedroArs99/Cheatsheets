//ES6, Best Option
class Car{
    constructor(color,power,brand) {
        this.color = color;
        this.power = power;
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }
}

//ES5
//Constructor
function Person(firstName, LastName, age, birthDate) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.age = age;
    this.birthDate = new Date(birthDate)

    //Method
    this.getBirthYear = function () {
        return this.birthDate.getFullYear();
    }
}

//Method (Other way, recommended)
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.LastName;
}

//Insantiation, for both ways
const person1 = new Person('Brad', 'Traversy', 30, '12-27-1999'); //mm/dd/yyyy
console.log(person1);
console.log(person1.birthDate);

//Calling methods
console.log(person1.getBirthYear());
console.log(person1.getFullName());



