const event = require('events');
class EventEmitter extends event{}
const eventEmitter = new EventEmitter();

var connectHandle = () => {
    console.log('connect success..');
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandle);

eventEmitter.on('data_received', () =>{
    console.log('data received seccuss.');
    console.log('will to finished!!');
    eventEmitter.emit('finished');
});

var finished = () => {
    console.log('all finished.......');
}
eventEmitter.on('finished', finished);

eventEmitter.emit('connection');
