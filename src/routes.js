const express = require('express');

const FuncionriosControllers =require ("./controllers/FuncionriosControllers");

const routes = express.Router();

routes.post('/funcionario',FuncionriosControllers.store);
routes.get('/funcionario',FuncionriosControllers.all);
routes.get('/funcionario/:id',FuncionriosControllers.index);
routes.put('/funcionario/:id',FuncionriosControllers.edite);
routes.delete('/funcionario/:id',FuncionriosControllers.delete);
module.exports = routes;

