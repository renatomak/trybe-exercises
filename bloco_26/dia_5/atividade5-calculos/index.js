const express = require('express');
const routeOperations = require('./routes/routeOperations')


const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send({
    messager: 'Atividade 5'
  })
})

app.use(express.json())

app.use('operacao', routeOperations)

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})