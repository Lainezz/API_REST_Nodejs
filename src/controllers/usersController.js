const usersService = require("../services/usersService");

const comprobarUser = (req, res, next) => {
  const { body } = req;

  // Si los datos llegan incompletos, respondemos con un 400 - bad request
  if (!body.email || !body.password) {
    res.status(400).send({ mensaje: "Datos Incompletos" }).end();
  } else {
    const {email, password} = body

    usersService
      .checkUserEmail(email, password)
      .then((result) => {
        if (result) res.send(result).end();
        else res.status(404).send({ mensaje: "Usuario no encontrado" }).end();
      })
      .catch((err) =>
        res.status(500).send({ mensaje: "Fallo inesperado" }).end()
      );
  }
};

module.exports.comprobarUser = comprobarUser;
