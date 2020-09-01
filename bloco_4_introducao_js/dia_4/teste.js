// Criação do objeto curso
var curso = {
    nome: "Curso de desenvolvimento Front-end 2019/09 - BH",
    modulos: {
      internet: {
        descricao: "Como a internet funciona",
        semana: 1,
        tipo: "teórica",
        estado: "completo"
      },
      shell: {
        descricao: "Shell Script",
        semana: 1,
        tipo: ["teórica", "prática"],
        estado: "completo"
      },
      html: {
        descricao: "HTML + CSS",
        semana: [2, 3],
        tipo: "prática",
        estado: "em andamento"
      }
    },
    quantidade_alunos: 10,
    arquivado: false
  };

  console.log(curso.modulos.internet.descricao)