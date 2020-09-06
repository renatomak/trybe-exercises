let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  }; 

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
  }; 

  let resultado = "";



  function imprimeChaveObjeto(obj1, obj2){
    let resultado = [];

        for(const i in obj1){
            if(i === "recorrente"){
                resultado[i] = "Ambos recorrentes"
            }else{
                resultado[i] = obj1[i] + " " + obj2[i]
            }
            console.log(resultado[i]);
        }
  }

  console.table(info)
 // imprimeChaveObjeto(info, info2);