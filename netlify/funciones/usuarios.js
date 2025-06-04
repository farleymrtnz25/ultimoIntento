var express = require('express');
var cors = require("cors");
var serverless = require('serverless-http');
var app = express();
require('dotenv').config(); // Cargar variables de entorno desde .env
var usuroutes = require("../../backend/routes/usuariosrutas.js");

app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/.netlify/functiones', usuroutes);

exports.handler = serverless(app);