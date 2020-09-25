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


console.log(fatorial(5))
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

