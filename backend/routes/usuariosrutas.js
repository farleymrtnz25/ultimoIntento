const express = require("express");
const router = express.Router();
const usuariosmodel = require("../modelo/usuariosmodelo.js");

router.post("/", usuariosmodel.ingresar);

module.exports = router;