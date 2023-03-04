const express = require("express")
const router = express.Router()
const productos = require("./productosRoutes")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1


// ENDPOINT : /api/v1/productos
router.use("/productos", productos);

    

module.exports = router