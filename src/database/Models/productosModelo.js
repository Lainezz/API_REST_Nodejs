const Producto = require("../Schemas/Producto");

const getAllProducts = () => {
  const allProducts = Producto.find()
    .exec()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });
  return allProducts;
};

const getOneProduct = (nombreProd) => {
  const productBD = Producto.findOne({ nombre: nombreProd })
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return productBD;
};

const deleteOneProduct = (nombreProd) => {
  const productBD = Producto.deleteOne({ nombre: nombreProd })
    .exec()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return productBD;
};

const createOneProduct = (newProduct) => {
  
  const auxProduct = newProduct;
  
  auxProduct.save()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });

  return auxProduct;
};

const updateOneProduct = (updatedProduct) => {
  const auxProduct = updatedProduct

  auxProduct.save()
    .then((result) => result)
    .catch((err) => {
      console.error(err);
      return false;
    });
  
  return auxProduct
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  deleteOneProduct,
  updateOneProduct
};
