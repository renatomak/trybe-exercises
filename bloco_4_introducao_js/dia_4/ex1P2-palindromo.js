/**Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false
 */

 function palindromo(palavra){
     palavra = String(palavra).toUpperCase();

    let invertida = palavra.split('').reverse().join('');

    return palavra === invertida;
 }

 console.log(palindromo("arara"));