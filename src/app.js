const express = require("express");
const cors=require('cors')
const routes=require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.use(function(err,req,res,next){
    resp.status(404).end('Página não encontrada')
})
app.use(function(err,req,res,next){
    resp.status(500).end('Houve um erro interno no servidor')
})

app.listen(3333, () => console.log("conectado"));
