// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reverseInt = parseInt(String(n).split('').reverse().join(''));
    if(n < -1 ){
        reverseInt -= (reverseInt * 2)
    }
   return reverseInt;
}

console.log(reverseInt(-9));

module.exports = reverseInt;
