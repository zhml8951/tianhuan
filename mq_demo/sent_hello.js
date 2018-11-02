var amqp = require('amqplib');
amqp.connect('amqp:user:123456@172.16.1.71').then(function(conn){
    return conn.createChannel().then(function(ch){
        var qName = 'MX_HELLO';
        var msgText = 'RabbitMQ message 01';
        var ok = ch.assertExchange(q, {durable:false});
    })
})