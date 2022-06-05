
const Sequelize = require('sequelize');

const conexao = new Sequelize("celke","root","SQL123",
    {host: 'localhost', 
    dialect: 'mysql'}
);

conexao.authenticate().then(function(){
    console.log("OK: Conexão com banco de dados realizada com sucesso!")
}).catch(function(){
    console.log("Erro: Não conectado com o banco de dados!");
});


module.exports = conexao;
