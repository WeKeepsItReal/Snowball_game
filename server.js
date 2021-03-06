var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;


server.listen(port, () => {
    console.log('Server listening at port %d',port);
});

app.use(express.static(path.join(__dirname, 'public')));

// global state 

io.on('connection', (socket) => {
    console.log("got a connection!")
    socket.on('stateUpdate', function(player){
        console.log('got state update', player)
        //io.sockets.emit('stateUpdateForwadedByServer', player)
        socket.emit('stateUpdateForwadedByServer', player)
    })
    // we have new connection

    socket.on("test", data => {
        console.log(data)
    })
})