class Person{   
    constructor (
        public name: string,
        private age: number,
        readonly phone: string, //By default it's public
        protected sex: string
    ){}
}

class Student extends Person{
    constructor(name: string, age: number, phone: string, sex: string) {
        super(name, age, phone, sex);
    }
}