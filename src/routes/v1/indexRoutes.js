const express = require("express")
const router = express.Router()
const productos = require("./productosRoutes")
const users = require("./usersRoutes")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1

// ENDPOINT : /api/v1/productos
router.use("/productos", productos);

// ENDPOINT : /api/v1/productos
router.use("/users", users)

    

module.exports = router