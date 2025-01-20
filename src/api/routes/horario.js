const { isauth } = require('../../middleware/isauth')
const {
  gethorariobyid,
  createhorario,
  updatehorario
} = require('../controllers/Horario')

const Horariorouter = require('express').Router()
Horariorouter.get('/:id', [isauth], gethorariobyid)
Horariorouter.post('/', [isauth], createhorario)
Horariorouter.put('/:id', [isauth], updatehorario)
module.exports = Horariorouter
