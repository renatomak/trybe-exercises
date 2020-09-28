/* function fatorial(num){
    if(num === 0){
        return 1;
    }else{
        return ( num * fatorial(num - 1))
    }
} */

const fatorial = num => {
    if(num === 0){
        return 1;
    }else{
        return ( num * fatorial(num - 1))
    }
}

/* function longestWord(frase){
    frase = frase.split(' ');
    let longest = frase[0];
    for(const palavra of frase){
        if(palavra.length > longest.length){
            longest = palavra;
        }
    }
    return longest;
}
 */
const longestWord = (frase) => {
    frase = frase.split(' ');
    let longest = frase[0];

    frase.forEach(palavra => {
        if(palavra.length > longest.length){
            longest = palavra;
        }
    });
    return longest;
}


/* function funcao1(string){
    /* `Ele quebrou a xícara.
    Eu uso o chapéu.
    A fumaça sai pela chaminé.
    O bebê está chorando.
    Papai está cochilando.
    O jogador chuta a bola.
    Ela toma xarope.
    Xingar não é legal.
    O xerife toma conta.
    A Maria está usando um xale.`
    return  `Trybe x aqui`.replace(/x/gi, string);
}
 */

let array = 'JavaScript, HTML, CSS, REACT, nodejs'

funcao1 = string => {
    return array.replace(/a/gi, string);
}

console.log(fatorial(5))
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
console.log(funcao1('Bebeto'))

