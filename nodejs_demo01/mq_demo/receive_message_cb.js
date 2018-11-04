const amqp = require('amqplib/callback_api');
const amqp_url = "amqp://arnni:123456@192.168.9.101/demo01";

var queue = 'TH_TESK02';

amqp.connect(amqp_url, function(err, conn){
    if(err){return console.error(err.message);}
    conn.createChannel(function(err, ch){
        if(err){return console.warn(err.message);}
        ch.consume(queue, function(msg){
            console.log(msg.content.toString().split('.'));
            var secs = msg.content.toString().split('.').length - 1;
            console.log(secs);
            console.log("[x] Received %s", msg.content.toString());
            setTimeout(function(){
                console.log("[x] done.");
            }, secs * 1000);
        }, {noAck:true});
    });
});