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
  const allProducts = await productosService.getAllProducts();
  
  res.send(allProducts).end();
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
const getOneProduct = async (req, res, next) => {
  let nombreProducto = req.params.prod;
  const producto = await productosService.getOneProduct(nombreProducto);
  res.send(producto).end();
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

    const createdProduct = productosService.createOneProduct(rawProduct);

    if (createdProduct) {
      res.send(createdProduct).end();
    } else {
      res.status(409).send({ mensaje: "Entrada duplicada" }).end();
    }
  }
};

/**
 * Función middleware para actualizar 1 producto
 *
 * @todo - falta implementacion
 *
 * HTTP method: PUT
 * @link https://expressjs.com/en/4x/api.html
 * @param {Object} req - El objeto request dado por express
 * @param {Object} res - Obj response dado por express
 * @param {Function} next - Llamada al siguiente middleware
 */
const putOneProduct = (req, res, next) => {
  let nombreProducto = req.params.prod;
  res.send(`<h1>PUT ${nombreProducto}</h1>`).end();
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
const deleteOneProduct = async (req, res, next) => {
  let { prod } = req.params;

  const deletedProduct = await productosService.deleteOneProduct(prod);

  if (!deletedProduct) {
    res.status(400).send({ mensaje: "Producto no eliminado" }).end();
  } else {
    res.send(deletedProduct).end();
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  postOneProduct,
  putOneProduct,
  deleteOneProduct,
};
