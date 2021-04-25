const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const checkedEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email)
}

const checkedEmailPasswordMidlleware = (req, res, next) => {
  const { email, password } = req.body;
  if(!checkedEmail(email)){
    return res.send("Email inválido! (user@trybe.com)")
  }
  if(!(password.length>=4)) {
    return res.send(`A senha precisa ter mais de 4 caracteres`)
  }
  if(!(password.length<=8)) {
    return res.send(`A senha precisa ter no máximo 8 caracteres.`)
  }
  next()
}

router.post('/', checkedEmailPasswordMidlleware, (req, res) => {
  const token = crypto.randomBytes(12).toString('hex');
  return res.status(200).json({ token })
})


module.exports = router;