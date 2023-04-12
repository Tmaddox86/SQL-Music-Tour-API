'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.createTable('settimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      settime_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.TEXT
      },
      available_start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
    });
  },
  down : async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('settimes');
  }
};