const express = require('express');

const PORT = 3000;
const router = require('./src/router');

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
