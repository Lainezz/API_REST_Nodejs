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
  const allProducts = productosModelo.getAllProducts();
  return allProducts;
};

const getOneProduct = (nombreProd) => {
  const productBD = productosModelo.getOneProduct(nombreProd);
  return productBD;
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
  
  const productBD = await productosModelo.getOneProduct(newProduct.nombre);

  if(!productBD)
    return productosModelo.createOneProduct(newProduct);
  else
    return undefined
};

const updateOneProduct = async (nombreProd, rawProduct) => {
  
  const now = new Date().toISOString();
  const productBD = await productosModelo.getOneProduct(nombreProd);

  if(!productBD) return undefined

  productBD.nombre = rawProduct.nombre
  productBD.precio = rawProduct.precio
  productBD.createdAt = productBD.createdAt
  productBD.updatedAt = now

  productosModelo.updateOneProduct(productBD);
  return productBD;

}

const deleteOneProduct = async (nombreProd) => {
  
  //Busco el producto a eliminar
  const productBD = await productosModelo.getOneProduct(nombreProd);
  
  if (productBD){
    //Elimino el producto
    productosModelo.deleteOneProduct(nombreProd)
    return productBD

  } else return undefined;
  
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct
};
