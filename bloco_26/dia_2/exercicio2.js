const exercicioUm = require('./exercicio1')

const aleatorio = () => Math.floor(Math.random() * 20);

const a = aleatorio();
const b = aleatorio();
const c = aleatorio();

exercicioUm(a, b, c)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))