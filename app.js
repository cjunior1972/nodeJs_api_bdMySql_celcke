
const expres = require('express');
const app = expres();

const db = require('./models/db');

app.get("/",async (req, res) => {
    res.send("Página inicial de sistema na porta 8080!");
});

app.post("/cadastrar",async (req, res) => {
    res.send("Página cadastrar");
});


app.listen(8080,() =>  {
    console.log("Servidor iniciado na porta 8080: ")
});
