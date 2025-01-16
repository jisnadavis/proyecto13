const mongoose = require('mongoose')
const Products = require('../api/modelos/product')
const products = require('../../product')

const runseed = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://jisnadavis93:2tRETEeFVhVHwJ2t@resturantjarama.47dep.mongodb.net/?retryWrites=true&w=majority&appName=resturantjarama'
    )
    await Products.collection.drop()
    console.log('products deleted')
    await Products.insertMany(products)
    console.log('products inserted')
    await mongoose.disconnect()
  } catch (error) {
    console.log(error)
  }
}
runseed()
module.exports = { runseed }
