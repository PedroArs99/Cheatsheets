const eventEmitter = require('events'); //Core Module
const uuid = require('uuid'); //Installed Module

console.log(uuid.v4()); //Generate uuid

class Logger extends eventEmitter{
    log(msg) {
        //Call Event
        this.emit('message', { id: uuid.v4(), msg });
    }
}
 
module.exports = Logger;


 