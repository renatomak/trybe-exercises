let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim",
  }; 

  function imprimeChaveObjeto(obj){
        for(const i in obj){
            console.log(i);
        }
  }

  imprimeChaveObjeto(info);