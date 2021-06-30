'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Books", [
      {
        title: "livro1",
        author: "autor 1",
        pageQuantity: 10,
        createdAt: '2021-01-01',
      },
      {
        title: "livro2",
        author: "autor 2",
        pageQuantity: 20,
        createdAt: '2021-01-01',
      },
      {
        title: "A",
        author: "autorA",
        pageQuantity: 20,
        createdAt: '2021-02-01',
      },
      {
        title: "B",
        author: "autorB",
        pageQuantity: 20,
        createdAt: '2021-03-01',
      },
      {
        title: "C",
        author: "autorC",
        pageQuantity: 20,
        createdAt: '2021-04-01',
      },
      {
        title: "D",
        author: "autorD",
        pageQuantity: 20,
        createdAt: '2021-05-01',
      },

    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Books", null, {})
  }
};
