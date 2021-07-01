const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = 3001;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

require('./sockets/feedSocket')(io);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})


http.listen(PORT, () => {
  console.log(`Servidor ouvindo a porta ${PORT}`);
});
