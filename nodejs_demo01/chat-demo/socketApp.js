const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var serverName = process.env.NAME || 'nodeLocal';

server.listen(port, function () {
    console.log('Server listening at port %d', port);
    console.log('Hello, I\'m %s, how can I help? ', serverName);
});

app.use(express.static(__dirname + '/public'));
app.head('/health', function (req, res) {
    res.sendStatus(200);
});

var numUsers = 0;

io.on('connection', function (socket) {
    socket.emit('my-name-is', serverName);
    var addedUser = false;
    socket.on('new message', function (data) {
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });
    
    socket.on('add user', function (username) {
        if(addedUser) return;
        socket.username = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login',{
            numUsers: numUsers
        });

        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });

    socket.on('typing', function () {
        socket.broadcast.emit('typing',{
            username: socket.username
        });
    });

    socket.on('stop typing', function () {
        socket.broadcast.emit('stop typing',{
            username: socket.username
        });
    });

    socket.on('disconnect', function () {
        if (addedUser){
            --numUsers;
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});