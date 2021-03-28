const fs = require("fs");

async function readFile() {
  try {
    const content = await fs.promises.readFile("./simpsons.json", "utf-8")
    JSON.parse(content).map((item) => console.log(`${item.id} - ${item.name}`))
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


searchId(1)
.then((resolve) => resolve ? console.log(resolve) : null);
// readFile();