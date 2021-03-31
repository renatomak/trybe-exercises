/* const express = require('express');
const data = require('../data/simpsons.json');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send(data)
})

app.post('/', async (req, res) => {
  const size = data.length;
  data[size] = { 
    id: `${size+1}`,
    name: req.body.name
  };

  try {
    await fs.promises.writeFile(__dirname + '/../data/simpsons.json', JSON.stringify(data));
    res.status(201).send({
      message: 'Salvo com sucesso'
    })
  } catch (error) {
    throw new Error(error)
  }
  console.log(data)
})

app.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  data[id - 1].name = name;

  try {
    await fs.promises.writeFile(__dirname + '/../data/simpsons.json', JSON.stringify(data));
    res.status(200).send({
      message: 'Salvo com sucesso'
    })
  } catch (error) {
    throw new Error(error)
  }
  console.log(data)
})

app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const index = id - 1;
  data.splice(index, 1);

  try {
    await fs.promises.writeFile(__dirname + '/../data/simpsons.json', JSON.stringify(data));
    res.status(204).send()
  } catch (error) {
    throw new Error(error)
  }
  console.log(data)
})

module.exports = app; */