const exercicioUm = require("./exercicio1");

const aleatorio = () => Math.floor(Math.random() * 100);

const executaAleatorio = async () => {
  const a = aleatorio();
  const b = aleatorio();
  const c = aleatorio();

  const resultado = await exercicioUm("a", b, c);

  return resultado;
};


executaAleatorio()
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))