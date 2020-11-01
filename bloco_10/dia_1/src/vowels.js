/* --- Directions
Write a function that returns the number of vowels
used in a string.  Vowels are the characters 'a', 'e'
'i', 'o', and 'u'.
--- Examples
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0 */

const vowelsArray = ['A', 'E', 'I', 'O', 'U'];

function vowels(str) {
    let vowelNumber = 0;
    str.toUpperCase().split('').forEach((caracter) => {
        vowelsArray.forEach((vowel) => caracter === vowel && vowelNumber++)
    })

    return vowelNumber;
}

module.exports = vowels;
