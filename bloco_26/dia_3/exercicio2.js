const fs = require('fs');

async function readFileOne() {
  try {
    const data = await fs.promises.readFile('./arquivo1.txt', 'utf-8');
    return data;
  } catch (error) {
    console.log(error.message)
  }
}

async function readFileTwo() {
  try {
    const data = await fs.promises.readFile('./arquivo2.txt', 'utf-8');
    return data;
  } catch (error) {
    console.log(error.message)
  }
}

const after = Date.now()
readFileOne()
const duration1 = Date.now() - after;

console.log("Duração da leitura do arquivo 1: ", duration1)

const after2 = Date.now()
readFileTwo()
const duration2 = Date.now() - after2;

console.log("Duração da leitura do arquivo 2: ", duration2)