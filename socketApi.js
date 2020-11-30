var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.sockets.on('connection', function (socket) {
    console.log('A user connected');
    socket.on("Outrage", (data) => {
        console.log(data);
        module.exports.a = data;
        socket.broadcast.emit(data.client, { mess: data.mess, sender: data.sender, senderName: data.senderName, idn: 11, idNo: data.idNumber });
    })


    var array = [];
    socket.on("tryThis", (data) => {
        console.log(data.buffData);
        if (data.fileType == "video/mp4") {
            if (data.buffData != "ended") {
                array.push(data.buffData);
            } else {
                var newBuffer = new Buffer.concat(array); //all data is concatinated here
                array = [];
                socket.broadcast.emit(data.client, { a: newBuffer.toString("base64"), a1: data.sender, a2: data.senderName, a3: data.fileType, a4: data.fileName, idn: 22, a5: data.fileSize, idNo: data.idNumber });
            }
        }
        else {
            socket.broadcast.emit(data.client, { a: data.buffData.toString("base64"), a1: data.sender, a2: data.senderName, a3: data.fileType, a4: data.fileName, idn: 22, a5: data.fileSize, idNo: data.idNumber });
        }
    })
    socket.on("contacts", (data) => {
        console.log(data);
        socket.broadcast.emit(data.client, { a: data.jsonData, a1: data.sender, a2: data.senderName, a3: data.fileType, a4: data.fileName, idn: 22, idNo: data.idNumber, startingId: data.idNumberStarting });
    })
    socket.on("asyncUpload", (data) => {
        console.log(data.buffData);
        socket.broadcast.emit("everyOne", { a1: data.buffData.toString("base64"), a2: data.sender })
    })
    socket.on("indicator1", (data) => {
        console.log("data is : ", data);
        if (data.type == "contacts") {
            socket.broadcast.emit(data.whoSentFIles, { reciever: data.whoRecFiles, idn: 33, idNumber: data.idNumbertoSender, startingId: data.idNumberStarting, word: data.word, type: data.type })
        } else {
            socket.broadcast.emit(data.whoSentFIles, { reciever: data.whoRecFiles, idn: 33, idNumber: data.idNumbertoSender, startingId: "boom", word: data.word, type: data.type })
        }
    })
    // socket.on("hee",{a:"duafhgiushd"})
});

// socketApi.sendNotification = function() {
//     io.sockets.emit('hello', {msg: 'Hello World!'});
// }

module.exports = socketApi;
