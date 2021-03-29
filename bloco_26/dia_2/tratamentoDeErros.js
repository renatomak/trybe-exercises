function tratamentoDeErros(num) {
  try {
    if(num > 10 ) {
      throw new Error("Valor inválido, o valor deve ser menor que 10")
    }
    console.log("Valor: ", num)
  } catch (e) {
    console.log("ERROR: ", e.message)
  }
}

tratamentoDeErros(9)