//node modules
const express = require("express");
const socket = require("socket.io");

//setup the app
const app = express();

//use the environment port or 8000 if not supplied
const port = process.env.PORT || 8000;

//listen on the port defined
const server = app.listen(port, ()=>{
    console.log(`App listenting on ${port}`);
});

//serve static files
app.use(express.static('public'));

//setup the socket
const io = socket(server);

io.on('connection', (socket)=>{
    console.log('made socket connection', socket.id);

    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data);
    });

    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data);
    });
});
