const { isauth } = require('../../middleware/isauth')
const {
  getproduct,
  createproduct,
  getProductCategoria,
  updateproduct,
  deleteproduct
} = require('../controllers/Product')

const Productrouter = require('express').Router()
Productrouter.get('/', [isauth], getproduct)
Productrouter.get('/:categoria', [isauth], getProductCategoria)
Productrouter.post('/', [isauth], createproduct)
Productrouter.put('/:id', [isauth], updateproduct)
Productrouter.delete('/:id', [isauth], deleteproduct)
module.exports = { Productrouter }
