const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//inicializando o app
const app = express();
app.use(express.json());
app.use(cors());

//inicializando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//importa os moduls
requireDir('./src/moduls/');

//rotas
app.use('/hunt', require('./src/routes'));

app.listen(3001);