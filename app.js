
const expres = require('express');
const app = expres();
//const db = require('./models/db');
const User = require('./models/User');

//informo que vou receber dados no formato Jason
app.use(expres.json());


app.get("/",async (req, res) => {
    res.send("Página inicial de sistema na porta 8080!");
});

app.post("/cadastrar",async (req, res) => {
    console.log(req.body);
    
    await  User.create(req.body)   
    .then(() => {
        //retorno padrão status 200
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });            
    }).catch(() => { 
        //retorno padrão status 400
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });         
    });

    //res.send("Página cadastrar");
});

app.listen(8080,() =>  {
    console.log("Servidor iniciado na porta 8080: ")
});
