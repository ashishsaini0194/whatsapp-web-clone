var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.sockets.on('connection', function (socket) {
    console.log('A user connected');
    socket.on("Outrage", (data) => {
        console.log(data);
        module.exports.a = data;
        socket.broadcast.emit(data.client, { mess: data.mess, sender: data.sender, senderName: data.senderName, idn: 11 });
    })
    socket.on("tryThis", (data) => {
        console.log(data);
        // console.log(data.toString("base64"));
        socket.broadcast.emit(data.client, { a: data.buffData.toString("base64"), a1: data.sender, a2: data.senderName, a3: data.fileType, a4: data.fileName, idn: 22 });

    })
    // socket.on("hee",{a:"duafhgiushd"})
});

// socketApi.sendNotification = function() {
//     io.sockets.emit('hello', {msg: 'Hello World!'});
// }

module.exports = socketApi;
