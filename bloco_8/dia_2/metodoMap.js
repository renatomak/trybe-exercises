Array.prototype.map2 = function(callback){
    const newArry = [];
    for(let i = 0; i < this.length; i += 1){
        newArry.push(callback(this[i], i, this));
    }
    return newArry;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json);

console.log(carrinho.map2(paraObjeto).map2((item) => item.preco));