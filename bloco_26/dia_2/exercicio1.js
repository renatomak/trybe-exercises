function exercicioUm(a, b, c) {
  const promise = new Promise((response, reject) => {
    const resultado = ((a + b) * c);
    if(typeof a != "number" || typeof b != "number" || typeof c != "number") {
      reject(new Error("Todos os valores precisam ser inteiros"))
    } else if( resultado <= 50){
      reject(new Error("Valor muito baixo"))
    }

    response(resultado)
      
  })

  return promise;
}

exercicioUm(3, 3, 10)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))