const { v1: uuid } = require("uuid");
const consoleInfo = require("../utils/consoleInfo");
const authenticationService = require("../services/authenticationService");

/*
    AUTHENTICATION BY SESSION
    La idea aquí es que el usuario se loguee con usuario y contraseña
    Si el usuario y la contraseña existen, entonces se le otorga una
    id única que se guardará en un fichero JSON.
*/

const authenticateUser = async (req, res, next) => {
  const { password, email } = req.body;
  const { cookies } = req;

  //Si no hay datos relativos a la autenticación del usuario, se rechaza la conexión
  if (!password && !email && !cookies.sessionId) {
    consoleInfo.infoGenericErrorMessage("No autorizado");
    res.status(401).send({ mensaje: "NO AUTORIZADO" }).end();
    return;
  }

  //Si hay datos relativos al email y la contraseña, entonces se trata como si fuera el primer login
  if (req.body && password && email) {
    //SE comprueba que el usuario está registrado en el sistema
    const email_db = await authenticationService.checkUserEmail(email, password);
    
    if (!email_db) {
      
      consoleInfo.infoGenericErrorMessage("Usuario no autorizado");
      res.status(401).send({ mensaje: "NO AUTORIZADO" }).end();
      return;
    }

    //Si el usuario existe, primero comprobamos si tiene una session asignada
    let sessionId = await authenticationService.checkIfSessionExist(email_db);
    if (!sessionId) {
      sessionId = uuid();
      authenticationService.addSession(email_db, sessionId);
    }

    res.cookie("sessionId", sessionId, { hhtpOnly: true });

    consoleInfo.infoGenericMessage(`User ${email_db} OK`);

    next();
  } else if (cookies.sessionId) {
    //Si el usuario ya se ha logueado anteriormente, se comprueba la validez de su cookie
    //Si no se encuentra su sessionId, entonces es que el usuario no es reconocido
    const { sessionId } = cookies;
    if (!(await authenticationService.checkSession(sessionId))) {
      consoleInfo.infoGenericErrorMessage("Session no autorizada");
      res.status(401).send({ mensaje: "NO AUTORIZADO" }).end();
      return;
    }

    consoleInfo.infoGenericMessage(`Session ${sessionId} OK`);
    next();
  } else {
    throw new Error("Error desconocido");
  }
};

module.exports.authenticateUser = authenticateUser;
