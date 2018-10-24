var amqp = require('amqp');

var connection = amqp.createConnection({url: "amqp://user:123456@172.16.1.71"});
connection.on('ready', function () {
    var callbackCalled = false;
    var exchange = connection.exchange('exchange_name', {type: 'direct', autoDelete: false});
    connection.queue("queue_name", {autoDelete: false}, function (queue) {
        queue.bind('exchange_name', 'queue_name', function () {
            exchange.publish('queue_name', 'This is message is testing...');
            callbackCalled = true;

            setTimeout(function () {
                console.log("Single queue bind callback succeed");
                connection.end();
                connection.destroy();
            }, 5000);
        });
        queue.subscribe(function (message) {
            console.log('At 5 second received message is: ' + message.data);
        });
    });
});