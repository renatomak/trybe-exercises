const uppercase = (str, callback) => {
    callback(str.toUpperCase());
}

let string = 'Renato Marques da Silva';

const teste = (str) => console.log(str);

uppercase(string, teste);

module.exports = uppercase;