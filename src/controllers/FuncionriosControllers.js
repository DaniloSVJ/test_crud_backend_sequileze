const Funcionario = require('../models/Funcionario')


module.exports  = {
    async store(req,res) {
      const  {name,cpf,nascimento} = req.body

      const func = await Funcionario.create({
          name,
          cpf,
          nascimento
      })

      return res.json(func)
    },
    async all(req,res){
        const func = await Funcionario.findAll();

        return res.json(func)
    },
    async index(req,res){
        const  {id} = req.params
        const func = await Funcionario.findByPk(id)

        return res.json(func)
    },
    async edite(req,res) {
        const  {id} = req.params
        const func = await Funcionario.findByPk(id)

        const  {name,cpf,nascimento} = req.body
        func.name = name
        func.cpf = cpf
        func.nascimento = nascimento
 
        const resultadoSave = await func.save();
        return res.json(resultadoSave)
      },
    async delete(req,res) {
        const  {id} = req.params
  
        const func = await Funcionario.destroy({
           where: {id:id}
        })
  
        return res.json(func)
      },

}