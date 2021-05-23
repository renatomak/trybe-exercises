const express = require("express");
const router = require('./routers/BooksRouters')

const app = express();
app.use(express.json());

app.use(router);

const port = 3000;

app.listen(port, () => console.log(`Rodando na porta ${port}`));

/* 
app.get("/books", (req, res) => {
  Book.findAll().then(dados => {
    res.status(200).json(dados)
  }).catch( e => {
    console.log(e.message);
  })
})

app.get('/book/:id', (req, res) => {
  const { id } = req.params;

  Book.findByPk(id).then( item => {
    res.status(200).json(item);
  }).catch( e => {
    console.log(e.message);
  })
})

app.post('/book', (req, res) => {
  const {title, author, pageQuantity, createdAt} = req.body;
  const newBook = {title, author, pageQuantity, createdAt};
  Book.create(newBook).then(data => {
    res.status(200).json(data);
  }).catch( e => {
    console.log(e.message);
  })
});

app.post('/book/:id', (req, res) => {
  const { id } = req.params;
  const {title, author, pageQuantity, createdAt} = req.body;
  const newBook = {title, author, pageQuantity, createdAt};
  
  Book.update(newBook, {
    where: { id: id }
  }).then(data => {
    res.status(200).json({ message: 'Atualizado com sucesso!'});
  }).catch( e => {
    console.log(e.message);
  })
});

app.delete('/book/:id', (req, res) => {
  const { id } = req.params;

  Book.destroy({
    where: { id: id }
  }).then(data => {
    res.status(200).json({ message: 'Livro removido com sucesso!'});
  }).catch( e => {
    console.log(e.message);
  })
}); */