var amqp = require('amqplib/callback_api');
var queue = 'MESSAGE_HELLO';
amqp.connect('amqp://user:123456@172.16.1.71', function(err, conn){
    if(err) return console.error(err);
    conn.createChannel(function(err, ch){
        // ch.assertQueue(queue, {durable: false});
        ch.assertQueue(queue);
        console.log("[*] Waiting fro messages in %s,, to exit press CTRL+C", queue);
        ch.consume(queue, function(msg){
            console.log("[X] Received --{ %s }--", msg.content.toString());
        }, {noAck:true});
    });
});