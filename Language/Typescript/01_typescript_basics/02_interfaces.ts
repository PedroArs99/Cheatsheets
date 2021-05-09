let user: {
    name: string,
    age: number,
    [key: string]: any //This allows to modify the structure
};

user.surname = "James"; 

interface Person{
    name: string;
    readonly age: number; //Value can only be assigned on declaration
    [key: string]: any;

    hello(): string;
}

let person: Person = {
    name: 'Zura',
    age: 28,
    surname: 'James',

    hello(): string {
        return `Hello my name is ${this.name}`;
    }
}
