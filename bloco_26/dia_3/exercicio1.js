const fs = require('fs');



const readFileOne = () => {
  try {
    const data = fs.readFileSync('./arquivo1.txt', 'utf-8');
    return data;
  } catch (error) {
    console.log(error.message)
  }
}

const readFileTwo = () => {
  try {
    const data = fs.readFileSync('./arquivo2.txt', 'utf-8');
    return data;
  } catch (error) {
    console.log(error.message)
  }
}

const countTimeExec = () => {
  const after = Date.now();
  const arq1 = readFileOne();
  const duration = (Date.now() - after);
  console.log("Arquivo Um: ", duration, 'ms', ' Tamanho: ', arq1.length, 'bytes')

  const after2 = Date.now();
  const arq2 = readFileTwo('arquivo2.txt');
  const duration2 = (Date.now() - after2);
  console.log("Arquivo Dois: ", duration2, 'ms', ` Tamanho: ${arq2.length} bytes`)



console.log("Duração total do script: ", duration2 + duration)
}

countTimeExec();

