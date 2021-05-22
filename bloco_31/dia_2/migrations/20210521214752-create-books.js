'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BookTable = queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantity: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    return BookTable 
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Book")
  }
};
