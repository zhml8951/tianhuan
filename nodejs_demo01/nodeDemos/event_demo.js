var EventEmitter = require('events').EventEmitter;
const event_demo = new EventEmitter();
event_demo.on('some_event', function () {
    console.log('some_event.... ');
});
setTimeout(function () {
    event_demo.emit('some_event');
}, 1000);

const events_2 = require('events');
const emitter_2 = new events_2.EventEmitter();
emitter_2.on('someEvents2', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

emitter_2.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emitter_2.emit('someEvent', 'arg1参数', 'arg2参数');

var events_3 = require('events');
var eventsEmitter_3 = new events_3.EventEmitter();

var listener3_1 = function listener3_1() {
    console.log('Listen3_1 execute....');
};

var listener3_2 = function listener3_2() {
    console.log('Listen3_2 execute ....');
};

eventsEmitter_3.addListener('connection3',listener3_2);

eventsEmitter_3.on('connection3', listener3_1);

var eventListeners3 = eventsEmitter_3.listenerCount('connection3');
console.log('Listeners3 have ' + eventListeners3 + '...');

eventsEmitter_3.emit('connection3');

eventsEmitter_3.removeListener('connection3', listener3_1);
console.log('Listener3_1 no in listener');

eventsEmitter_3.emit('connection3');

eventListeners3 = eventsEmitter_3.listenerCount('connection3');

console.log('connection3 have ' + eventListeners3);
console.log("every things ok!");