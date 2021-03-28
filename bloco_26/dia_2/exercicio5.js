const fs = require("fs");

async function manyFile() {
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  let arrayPromise = [];
  try {
    await array.map((item, index) => {
      const promise = fs.promises.writeFile(`./file${index+1}.txt`, item)
      arrayPromise[index] = `file${index+1}.txt`;
    })
   
    const string = await Promise.all(
      arrayPromise.map((item) => fs.promises.readFile(`./${item}`, 'utf-8'))
    )

    console.log(string.join(' '))
  } catch (error) {
    console.log(error)
  }
}

manyFile();
