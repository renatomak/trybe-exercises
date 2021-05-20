const jwt = require('jsonwebtoken');

const  JWT_SECRET  = 'meuSegredoSuperSegreto';

 const auth = (req, res, next) => {
  const { authorization: token } = req.headers;
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {

    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload

    next()
  } catch (err) {
    console.error(err.message);
    res.status(401).send({ message: 'jwt malformed' });
  }
};

module.exports = {
  auth
}