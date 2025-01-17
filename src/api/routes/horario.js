const { isauth } = require('../../middleware/isauth')
const { gethorariobyid, createhorario } = require('../controllers/Horario')

const Horariorouter = require('express').Router()
Horariorouter.get('/:id', [isauth], gethorariobyid)
Horariorouter.post('/', [isauth], createhorario)
module.exports = Horariorouter
