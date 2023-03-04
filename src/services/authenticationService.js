const usuariosModelo = require("../database/Models/usuariosModelo");
const Session = require("../database/Schemas/Sessions")

const checkUserEmail = async (email, password) => {
  const usuario = await usuariosModelo.checkUserEmail(email, password);

  if (!usuario) return false;
  return usuario.email;
};

const addSession = async (email, sessionID) => {
  //1º Comprobamos que la sesión no existe. Si no existe, la insertamos
  if (!await usuariosModelo.checkSession(sessionID)) {

    const newSession = new Session({
      email: email,
      sessionId: sessionID
    })

    usuariosModelo.addSession(newSession);
  }
};

const checkSession = async (id_sesion) => {
  const session = await usuariosModelo.checkSession(id_sesion);
  if (!session) return false;
  return session.sessionId;
};

const checkIfSessionExist = async (id_usuario) => {
  const session = await usuariosModelo.checkIfSessionExist(id_usuario);
  if (!session) return false;
  return session.sessionId;
}

module.exports = {
  checkUserEmail,
  addSession,
  checkSession,
  checkIfSessionExist
};
