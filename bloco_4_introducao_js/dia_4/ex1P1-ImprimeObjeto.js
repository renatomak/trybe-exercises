/**1 -Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
Valor esperado no console: Bem-vinda, Margarida */
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  }; 

  function imprimeObjeto(obj){
          console.log("Bem-vinda, " + obj.personagem)
  }

  imprimeObjeto(info);