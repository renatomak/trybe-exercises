const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.send('Pong!')
})



app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
