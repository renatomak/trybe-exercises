const { Book } = require("../models");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    
    res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
}

const createBook = async (req, res) => {
  try {
    const {title, author, pageQuantity, createdAt} = req.body;
    const newBook = {title, author, pageQuantity, createdAt};

    const result = await Book.create(newBook);

    res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const {title, author, pageQuantity, createdAt} = req.body;
    const newBook = {title, author, pageQuantity, createdAt};

    await Book.update(newBook, { where: { id: id } });

  res.status(200).json({ message: 'Atualizado com sucesso!'});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({ where: { id: id } });
    res.status(200).json({ message: 'Livro removido com sucesso!'});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
}


module.exports = {
  getAllBooks,
  getById,
  createBook,
  updateBook,
  deleteBook,
}
