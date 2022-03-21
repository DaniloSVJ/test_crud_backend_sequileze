
const   {Model, DataTypes} = require('sequelize')

class Funcionario extends Model {
    static  init(sequelize){
        super.init({
             name: DataTypes.STRING,
             cpf:DataTypes.STRING,
             nascimento: DataTypes.DATE,         
        },{
            sequelize 
        })
    }    
}

module.exports = Funcionario;