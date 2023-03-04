const productosModelo = require("../database/Models/productosModelo");
const Producto = require("../database/Schemas/Producto");

/**
  SERVICIOS

  En esta parte de la aplicación vamos a implementar toda la parte de interacción
  con la base de datos.
  Aquí implementaríamos la lógica del negocio. Es decir, las reglas que se aplican
  a la hora de resolver "problemas reales".

  @link https://stackoverflow.com/questions/4816692/what-is-a-good-example-of-a-service-layer-in-asp-net-mvc/4817935#4817935
*/


const getAllProducts = () => {
  const allProductos = productosModelo.getAllProducts();
  return allProductos;
};

const getOneProduct = (nombre) => {
  const producto = productosModelo.getOneProduct(nombre);
  return producto;
};

const createOneProduct = async (rawProduct) => {
  
  const today = new Date().toISOString();

  //"Construyo" el nuevo objeto, estableciendo la fecha de alta y la de modificacion
  const newProduct = new Producto({
    nombre: rawProduct.nombre,
    precio: rawProduct.precio,
    createdAt: today,
    updatedAt: today,
  });
  
  const producto = await getOneProduct(newProduct.nombre);

  if(!producto)
    return productosModelo.createOneProduct(newProduct);
  else
    return undefined
};

const deleteOneProduct = async (nombre) => {
  
  //Busco el producto a eliminar
  const producto = await getOneProduct(nombre);
  
  if (producto){
    //Elimino el producto
    productosModelo.deleteOneProduct(nombre)
    return producto
    
  } else return undefined;
  
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  deleteOneProduct
};
