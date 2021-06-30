const Joi = require('joi');
const jwt = require('jsonwebtoken');

const JWT_SECRET  = 'meuSegredoSuperSegreto';

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

module.exports = async (req, res) => {
  console.log(req.body)
  const { error } = validateBody(req.body);
  console.log(error)
  /* Se o login for admin e a senha estiver incorreta */
  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    return res.status(404).json({ message: 'Invalid username or password' });
  }

  /* Definimos admin como true se username e password estiverem corretos */
  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';

  const payload = {
    username: req.body.username,
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
};

