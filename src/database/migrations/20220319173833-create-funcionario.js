'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('funcionarios', { 
            id:{
              type: Sequelize.INTEGER,
              primarykey: true,
              autoIncrement: true,
              allowNull: false 
            } ,
            name:{
              type: Sequelize.STRING,
              allowNull: false 
            } ,
            cpf:{
              type: Sequelize.STRING,
              allowNull: false 
            } ,
            nascimento:{
              type: Sequelize.DATE,
              allowNull: false 
            } ,
            created_at:{
              type: Sequelize.DATE,
              allowNull: false 
            } ,
            updated_at:{
              type: Sequelize.DATE,
              allowNull: false 
            } 


          },
          {
            tableName: "funcionarios"
          }
      );
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('funcionarios');
     
  }
};
