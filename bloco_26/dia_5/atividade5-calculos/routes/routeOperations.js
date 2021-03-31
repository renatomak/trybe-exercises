const express = require('express')
const app = express();


app.put('/:soma/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const sum = parseInt(num1) + parseInt(num2)
  res.status(200).send({ resultado: sum})
})

module.exports = app;
