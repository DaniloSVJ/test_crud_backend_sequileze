const Sequilize = require('sequelize');

const dbConfig = require('../config/database');

const Funcionario = require('../models/Funcionario');



const connection =new Sequilize(dbConfig);

Funcionario.init(connection)

module.exports = connection;