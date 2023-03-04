const Session = require("../Schemas/Sessions");
const User = require("../Schemas/Users")



const checkUserEmail = async (email, password) => {
  const user = await User.findOne({ email: email, password: password })
    .exec()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return user;
};

const checkSession = async (sessionId) => {
  const session = await Session.findOne({ sessionId: sessionId })
    .exec()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return session;
};

const checkIfSessionExist = async (email) => {
  const session = await Session.findOne({ email: email })
    .exec()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return session;
};

const addSession = (newSession) => {
  const session = newSession
  
  session
    .save()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });
  
  return session
};

module.exports = {
  checkUserEmail,
  addSession,
  checkSession,
  checkIfSessionExist
};
