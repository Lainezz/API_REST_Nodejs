const productosService = require("../services/productosService");

/*
  CONTROLADOR

  En el controlador se implementa la lógica de la aplicación.
  Desde el controlador, se llaman a los diferentes servicios que realizarán la interacción
  con la Base de Datos.
  En el controlador simplemente "se reparte el juego".
*/

/**
 * Función middleware para obtener todos los productos
 *
 * HTTP method: GET
 * @link https://expressjs.com/en/4x/api.html
 * @param {Object} req - El objeto request dado por express
 * @param {Object} res - Obj response dado por express
 * @param {Function} next - Llamada al siguiente middleware
 */
const getAllProducts = async (req, res, next) => {

  productosService.getAllProducts()
    .then((result) => {
      if (result) res.send(result).end();
      else res.status(404).send({ mensaje: "productos Not Found" }).end();
    })
    .catch((err) =>
      res.status(500).send({ mensaje: "Fallo inesperado" }).end()
    );
};

/**
 * Función middleware para obtener 1 producto
 *
 * HTTP method: GET
 * @link https://expressjs.com/en/4x/api.html
 * @param {Object} req - El objeto request dado por express
 * @param {Object} res - Obj response dado por express
 * @param {Function} next - Llamada al siguiente middleware
 */
const getOneProduct = (req, res, next) => {
  const {prod: nombreProd} = req.params;

  productosService.getOneProduct(nombreProd)
    .then((result) => {
      if(result) res.send(result).end()
      else res.status(404).send({mensaje: "producto Not Found"}).end()
    })
    .catch((err) =>
      res.status(500).send({ mensaje: "Fallo inesperado" }).end()
    );
};

/**
 * Función middleware para insertar 1 producto
 *
 * HTTP method: POST
 *
 * En esta funcion se define el método post de un producto.
 * SOLO se implementa la logica de la aplicacion, es decir, simplemente
 * valida que existen datos en el cuerpo de la petición y que,
 * si se inserta, manda los datos con el producto insertado,
 * y si no, envía el código de estado de error correspondiente
 *
 * @link https://expressjs.com/en/4x/api.html
 * @param {Object} req - El objeto request dado por express
 * @param {Object} res - Obj response dado por express
 * @param {Function} next - Llamada al siguiente middleware
 */
const postOneProduct = (req, res, next) => {
  const { body } = req;

  // Si los datos llegan incompletos, respondemos con un 400 - bad request
  if (!body.nombre || !body.precio) {
    res.status(400).send({ mensaje: "Datos Incompletos" }).end();
  } else {
    
    const rawProduct = {
      nombre: body.nombre,
      precio: body.precio,
    };

    productosService.createOneProduct(rawProduct)
      .then((result) => {
        if (result) res.send(result).end();
        else res.status(409).send({ mensaje: "Entrada duplicada" }).end();
      })
      .catch((err) =>
        res.status(500).send({ mensaje: "Fallo inesperado" }).end()
      );
  }
};

/**
 * Función middleware para actualizar 1 producto
 * *
 * HTTP method: PUT
 * @link https://expressjs.com/en/4x/api.html
 * @param {Object} req - El objeto request dado por express
 * @param {Object} res - Obj response dado por express
 * @param {Function} next - Llamada al siguiente middleware
 */
const putOneProduct = (req, res, next) => {
  
  const {prod: nombreProd} = req.params;
  const {body: rawProduct} = req

  if(!nombreProd || (!rawProduct.nombre && !rawProduct.precio)) {
    res.status(404).send({ mensaje: "Datos incompletos" }).end();
    return
  }
  
  productosService.updateOneProduct(nombreProd, rawProduct)
     .then((result) => {
       if (result) res.send(result).end();
       else res.status(400).send({ mensaje: "Producto no actualizado" }).end();
     })
     .catch((err) =>
       res.status(500).send({ mensaje: "Fallo inesperado" }).end()
     );
};

/**
 * Función middleware para eliminar 1 producto
 *
 * HTTP method: DELETE
 *
 * Elimina 1 producto de la base de datos
 * @link https://expressjs.com/en/4x/api.html
 * @param {Object} req - El objeto request dado por express
 * @param {Object} res - Obj response dado por express
 * @param {Function} next - Llamada al siguiente middleware
 */
const deleteOneProduct = (req, res, next) => {
  const { prod: nombreProd } = req.params;

  productosService.deleteOneProduct(nombreProd)
    .then((result) => {
      if (result) res.send(result).end();
      else res.status(400).send({ mensaje: "Producto no eliminado" }).end();
    })
    .catch((err) =>
      res.status(500).send({ mensaje: "Fallo inesperado" }).end()
    );
};

module.exports = {
  getAllProducts,
  getOneProduct,
  postOneProduct,
  putOneProduct,
  deleteOneProduct,
};
