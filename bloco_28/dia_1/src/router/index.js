const express = require('express');
const { login, me } = require('../controller');
const { auth } = require('../middlewares/auth')

const router = express.Router();

router.get('/users/me', auth, me);
router.post('/login', login);

module.exports =  router ;