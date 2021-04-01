const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');
const rescue = require('express-rescue');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send('Pong!')
})

app.get('/simpsons', rescue(async (req, res) => {
  try {
    const data = await fs.promises.readFile("./simpsons.json", "utf-8")
    return res.status(200).send(data)
  } catch (error) {
    throw new Error("Erro o ler o arquivo!")
  }
}))

app.get('/simpsons/:id', rescue(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.promises.readFile("./simpsons.json", "utf-8")
    const simpsonId = JSON.parse(data).find((item) => item.id == id)
    return res.status(200).send(JSON.stringify(simpsonId))
  } catch (error) {
    throw new Error("Erro o ler o arquivo!")
  }
}))

/* app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send({"message": `Hello, ${name}!`})
}) */

app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  if(age > 17) return res.status(200).send({"message": `Hello, ${name}!`})

  return res.status(401).send({"message": "Unauthorized"})
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).send({ "message": `Seu nome é ${name} e você tem ${age} anos de idade`})
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
