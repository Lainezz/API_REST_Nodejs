const usuariosModelo = require("../database/Models/usuariosModelo");

const checkUserEmail = async (email, password) => {
  
    console.log(email)
    console.log(password);
  
    const usuario = await usuariosModelo.checkUserEmail(email, password);

    console.log(usuario)
  if (!usuario) return false;
  return usuario;
};

module.exports.checkUserEmail = checkUserEmail;