const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send('Pong!')
})

/* app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send({"message": `Hello, ${name}!`})
}) */

app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  if(age > 17) return res.status(200).send({"message": `Hello, ${name}!`})

  return res.status(401).send({"message": "Unauthorized"})
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
