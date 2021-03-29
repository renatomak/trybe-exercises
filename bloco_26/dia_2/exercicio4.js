const fs = require("fs");

async function readFile() {
  try {
    const content = await fs.promises.readFile("./simpsons.json", "utf-8")
    //JSON.parse(content).map((item) => console.log(`${item.id} - ${item.name}`))
    return JSON.parse(content)
  } catch (error) {
    console.log(error.message)
  }
}

async function searchId(id){
 try {
  const content = await fs.promises.readFile("./simpsons.json", "utf-8")
   const foundId = JSON.parse(content).find((item) => item.id == id)

   if(!foundId) {
     throw new Error("id não encontrado!")
   }
   return foundId;

 } catch (error) {
   console.log("ERRO: ", error.message);
 }
}

// 3
async function changeFile() {
    try {
      const simpsons = await fs.promises.readFile('./simpsons.json', 'utf-8')
      const newSimpsons = JSON.parse(simpsons);
      newSimpsons.splice(5, 1)
      newSimpsons.splice(8, 1)
      await fs.promises.writeFile('./simpsons.json', JSON.stringify(newSimpsons), "utf-8")
    } catch (error) {
      console.log(error.message)
    }
}

// 4
async function newFile() {
  try {
    const simpsons = await fs.promises.readFile('./simpsons.json', 'utf-8');
    const newSimpsons = JSON.parse(simpsons).filter((item) => item.id <= 4)
    await fs.promises.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons), 'utf-8')
  } catch (error) {
    console.log(error.message)
  }
}

// 5
async function addPerson() {
  try {
    const simpsonFamily = await fs.promises.readFile('./simpsonFamily.json', 'utf-8');
    
    const newSimpsonFamily = JSON.parse(simpsonFamily);
    newSimpsonFamily.push({ id: '5', name: 'Nelson Muntz '});
    await fs.promises.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonFamily), 'utf-8')
    console.log(newSimpsonFamily)
  } catch (error) {
    console.log(error.message)
  }
}

// 6
async function toReplace() {
  try {
    const simpsonFamily = await fs.promises.readFile('./simpsonFamily.json', 'utf-8');
    const newSimpsonFamily = JSON.parse(simpsonFamily);
    newSimpsonFamily.pop();
    newSimpsonFamily.push({ id: '5', name: 'Maggie Simpson'});
    await fs.promises.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonFamily), 'utf-8')
    console.log(newSimpsonFamily)
  } catch (error) {
    console.log(error.message)
  }
}
/* searchId(1)
.then((resolve) => resolve ? console.log(resolve) : null); */

// changeFile();
 // readFile().then((resolve) => console.log(resolve))
 // newFile()
 // addPerson()
 toReplace()