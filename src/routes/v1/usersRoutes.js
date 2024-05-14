const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1/users

/* 
    El método HTTP usado es un método POST porque en los métodos GET no se puede enviar información en el body de la petición.
    En el método implementado en el usersController, la información del correo y la contraseña se sacan precisamente del body de la petición.
*/
// ENDPOINT : /api/v1/users/
router.route("/").post(usersController.comprobarUser);

module.exports = router;
