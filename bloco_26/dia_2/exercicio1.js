/* function exercicioUm(a, b, c) {
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
} */

const exercicioUm = async (a, b, c) => {
  
  try {
    const resultado = await ((a + b) * c);
    if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
     throw new Error("Todos os valores precisam ser inteiros");
    } else if (resultado <= 50) {
      throw new Error("Valor muito baixo");
    }
    return resultado;
  } catch (e) {
    console.log("ERROR: ", e.message)
  }
};

 exercicioUm(1, 3, 2)

module.exports = exercicioUm;
