'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cursos', [
      {
        sigla: "IE01",
        nome: "Cálculo 1",
        descricao: "Aprenda sobre cálculo 1",
        areaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sigla: "IE02",
        nome: "Cálculo 2",
        descricao: "Aprenda sobre cálculo 2",
        areaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sigla: "IE03",
        nome: "Cálculo 3",
        descricao: "Aprenda sobre cálculo 3",
        areaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cursos', null, {});
  }
};