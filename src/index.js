/**
 * 
 * API Rest sencilla para control de inventario
 * Incluye gestión de usuarios por Session
 * 
 * @author @Lainezz
 * @version 1.0
 */

require("dotenv").config()
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const v1 = require("./routes/v1/indexRoutes");
const utils = require("./utils/consoleInfo")
const auth = require("./controllers/authenticationController")
const DB = require("./database/DBUtils/Mongo")

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(cookieParser());
app.use(cors())


app.use(utils.infoBeginOfRequest);

DB.conectar();
app.use("/api/v1", auth.authenticateUser, v1);


//FUNCION Genérica de gestión de errores
app.use((err, req, res, next) => {
  console.error("ERROR:" + err.stack);
  res.end();
});

app.listen(PORT, () => {
  console.log(
    "\x1b[41m%s\x1b[0m",
    `[server]  🚀 Server listening on port ${PORT} 🚀`
  );
});

/*
TUTORIAL
https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/

VIDEO YT
https://www.youtube.com/watch?v=qFmwRriNJWs&t=5s

SESSION VS TOKEN
https://stackoverflow.com/questions/47515991/how-to-setup-an-authentication-middleware-in-express-js
https://www.youtube.com/watch?v=o14rCK37RAY
https://www.youtube.com/watch?v=bywKD040J_o

SOAP VS REST
https://www.guru99.com/comparison-between-web-services.html

PUT VS POST
https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.4
https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.3

*/
