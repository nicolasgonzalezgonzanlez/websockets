const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use(express.static('public'))

io.on('connection', function (socket) {
  console.log('nuevo cliente conectado')
  socket.emit('message', 'Bienvenido')
})

server.listen(8080, function () {
  console.log('Servicio iniciado en http://localhost:8080')
})
