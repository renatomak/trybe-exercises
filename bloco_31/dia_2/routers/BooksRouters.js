const express = require('express');
const BooksControler = require('../controller/BooksControler')

const router = express.Router();

router.get('/books', BooksControler.getAllBooks);
router.get('/book/:id', BooksControler.getById);
router.post('/book', BooksControler.createBook);
router.post('/book/:id', BooksControler.updateBook);
router.delete('/book/:id', BooksControler.deleteBook);


module.exports = router;
