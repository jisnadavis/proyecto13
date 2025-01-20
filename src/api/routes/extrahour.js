const { isauth } = require('../../middleware/isauth')
const {
  updateextrahour,
  getExtraHourById,
  createextrahour
} = require('../controllers/extrahour')

const Extrahourrouter = require('express').Router()
Extrahourrouter.get('/:id', [isauth], getExtraHourById)
Extrahourrouter.post('/:id', [isauth], createextrahour)
Extrahourrouter.put('/:id', [isauth], updateextrahour)
module.exports = Extrahourrouter
