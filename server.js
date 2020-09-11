const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useUnifiedTopology: true,    
    useNewUrlParser: true 
});
requireDir('./src/models');

const Product = mongoose.model('Product');

// Rota
app.get('/', (req, res)=>{
    Product.create({
        title: "Teste",
        description: "teste descricao",
        url: "http://teste.com"
    })
    
    return res.send("teste");
});

app.listen(3001);