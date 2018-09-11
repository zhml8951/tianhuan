var myModule = require('./module');
myModule.setName("Arnni");
myModule.sayHello();
var hello2 = require('./module');
hello2.setName("zhml");
hello2.sayHello();

var singleObj = require('./singleObject').Hello;
