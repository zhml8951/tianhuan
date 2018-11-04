const amqp = require('amqplib/callback_api');
const amqpObj = {
    protocol: 'amqp',
    hostname: '172.16.1.71',
    port: 5672,
    username: 'user',
    password: '123456',
    locale: 'utf8',
    frameMax: 0,
    heartbeat: 0,
    vhost: '/'
};
const amqp_url = 'amqp://arnni:123456@192.168.9.101/demo01';
var queue = "MESSAGE_HELLO";
var msgContent = 'RabbitMQ, sent a sample message.';
amqp.connect(amqp_url, function (err, conn) {
    if (err) {
        console.error('[AMQP]', err.message);
        return setTimeout(start, 1000);
    }
    conn.createChannel(function (err, channel) {
        if (err){
           return console.warn(err); 
        } 
        console.log('ok');
        // channel.assertQueue(queue,{durable:false});
        channel.assertQueue(queue);
        channel.sendToQueue(queue, Buffer.from(msgContent));
        console.log("[x] Sent --{ %s }--", queue);
        setTimeout(function(){conn.close(); process.exit(0)}, 1000);
    });
});