const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3001;
const value = true;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET']
  }
});

io.on('connection', (client) => {
  console.log(`Novo usuário conectado ${client.id}`);

  client.on('user', () => {
    const 
  })
});

app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ok: true})
});

http.listen(PORT, () => {
  console.log('Servidor ouvindo na porta ', PORT);
});
