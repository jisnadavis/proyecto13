const mongoose = require('mongoose')
const Productschema = new mongoose.Schema(
  {
    name_of_the_products: { type: String, required: true },
    categoria: { type: String, required: true },
    fecha_de_caducidad: { type: Date },
    stock: { type: Number, required: true },
    provedor: { type: String, required: true }
  },
  { timestamps: true }
)
const Products = mongoose.model('products', Productschema, 'products')
module.exports = Products
