const mongoose = require("mongoose")
const {Schema} = mongoose
const {model} = mongoose

const esquemaProductos = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
});


module.exports = model("Producto", esquemaProductos);
