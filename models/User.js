const Conexao = require('Sequelize');

const db = require('./db');

const User = db.define('users',{
    id: {
        type: Conexao.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
    },
    name: {
        type: Conexao.STRING,
        allowNull: false,        
    },
    email: {
        type: Conexao.STRING,
        allowNull: false,
    }
});

//cria a tabela, caso ela não exista
//User.sync();

//Ela verifica se há alguma alteração na tabela e executa a alteração na estrutura
//User.sync({ alter: true})

module.exports = User ;


