var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000);
app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', (socket) => {
  console.log('socket ', socket.id);
  socket.on('draw', (data) => {
    socket.broadcast.emit('draw', data);
  });
});
