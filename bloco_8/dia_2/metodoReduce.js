Array.prototype.reduce2 = function(callback, acc){
    const indexInit = acc ? 0 : 1;
    let acumulador = acc || this[0];
    for(let i = indexInit; i < this.length; i += 1){
        acumulador = callback(acumulador, this[i], i, this); 
    }
    return acumulador;
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]

const resultado = alunos.map((aluno) => aluno.nota).reduce2(function(acc, atual){
    return acc + atual;
}, 0);
console.log(resultado);