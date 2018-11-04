const amqp = require('amqplib/callback_api');
var queue = 'MESSAGE_HELLO';
const amqp_url = 'amqp://arnni:123456@192.168.9.101/demo01'
amqp.connect(amqp_url, function(err, conn){
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