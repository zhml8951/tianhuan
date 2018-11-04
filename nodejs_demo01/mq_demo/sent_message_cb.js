const amqp = require('amqplib/callback_api');
const amqp_url = "amqp://arnni:123456@192.168.9.101/demo01";

var queue = 'TH_TESK02';
var msg = process.argv.slice(2).join(' ') || 'Task default message.';

amqp.connect(amqp_url, function(err, conn){
    if(err){
        console.error('[amqp_connect]', err.message);
        return setTimeout(start, 1000);
    }
    conn.createChannel(function(err, ch){
        if(err){return console.warn('[amqp_channel]', err.message);}
        ch.assertQueue(queue, {durable: true});
        ch.sendToQueue(queue, Buffer.from(msg), {persistent: true});
        console.log("[x] Sent '%s'", msg);
    });
    setTimeout(function(){conn.close(); process.exit(0)}, 5);
});