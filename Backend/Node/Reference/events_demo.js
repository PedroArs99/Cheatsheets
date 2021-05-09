const eventEmitter = require('events'); //Core Module

class MyEmitter extends eventEmitter { }

//Init Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log('Event Fired'));

//Init Event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');