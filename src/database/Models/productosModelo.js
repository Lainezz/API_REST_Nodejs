const Producto = require("../Schemas/Producto");

const getAllProducts = () => {
  const productos = Producto.find()
    .exec()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });
  return productos;
};

const getOneProduct = (nombre) => {
  const producto = Producto.findOne({ nombre: nombre })
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return producto;
};

const deleteOneProduct = (nombre) => {
  const producto = Producto.deleteOne({ nombre: nombre })
    .exec()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return producto;
};

const createOneProduct = (newProduct) => {
  
  const producto = newProduct;
  
  producto.save()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return producto;
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  deleteOneProduct,
};
