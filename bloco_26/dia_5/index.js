const express = require('express')
const bodyParser = require('body-parser');
const login = require('./router/atividade1');
const coindesk = require('./router/atividade2');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.get('/', (req, res) => {
  return res.send('Atividades dia 5!')
})

app.use('/login', login);
app.use('/btc/price', coindesk)

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
