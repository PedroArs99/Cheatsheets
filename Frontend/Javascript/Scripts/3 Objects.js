//"JSON" - Similar 
const person = {
    firstName: "John",
    lastName: "Traversy",
    age: 30,
    hobbies: ['Music', 'sports', 'movies'],
    addres: {
        city: 'Boston',
        street: '50 main st',
    }
}

person.email = "John@gmail.com";

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.addres.city);

const { firstName, lastName } = person; //On ES6+
console.log(firstName);

//JSON Arrays
const toDo = [
    {
        id: 1,
        text: 'Take out Trash',
        completed: false
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        completed: false
    }
];  

console.log(toDo);


//JSON - Real
const toDoJson = JSON.stringify(toDo);

