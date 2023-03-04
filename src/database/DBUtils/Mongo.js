const mongoose = require("mongoose");
const consoleInfo = require("../../utils/consoleInfo")

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}/?retryWrites=true&w=majority`;

const conectar = () =>
  mongoose
    .connect(connectionString)
    .then(() => {
      consoleInfo.infoDB("Mongo DB connected")
    })
    .catch((err) => {
      console.error(err);
    });

const desconectar = () =>
  mongoose
    .disconnect()
    .then(() => {
      console.log("MONGO DESCONECTADO");
    })
    .catch((err) => {
      console.error(err);
    });

module.exports = {
  conectar,
  desconectar
};
