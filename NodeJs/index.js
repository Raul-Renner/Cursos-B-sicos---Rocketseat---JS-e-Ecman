const express = require('express');
var mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Iniciando a aplicação
const app = express();

app.use(express.json());

app.use(cors());

//iniciando o BD
mongoose.connect("mongodb://localhost:27017/nodeapi",{ useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

//router
app.use('/api', require("./src/routes"));

app.listen(3002);