//Import & using created Modules
const Person = require('./person');

const person = new Person("John Doe", 30);
console.log(person);
person.greeting();


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener: `, data));

logger.log('Hello World');
