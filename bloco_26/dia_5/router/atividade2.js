const express = require('express');
const axios = require('axios');

const router = express.Router();


function verifyToken(token) {
  const tokenRegex = /^(\d|\w){12}$/gm;
  return tokenRegex.test(token);
}

router.get('/', async (req, res) => {
  const { authorization: token } = req.header;
  console.log(token)
  const tokenIsValid = verifyToken(token);
  if (tokenIsValid) {
    const btcEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
    const btcData = await axios.get(btcEndpoint).then(({ data }) => data);
    return res.status(200).json({ btcData });
  } else {
    return res.status(401).json('email or password is incorrect.');
  }
});

module.exports = router;