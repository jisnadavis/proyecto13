const { isadministrador } = require('../../middleware/isadministrador')
const { isauth } = require('../../middleware/isauth')
const {
  getstaff,
  registerstaff,
  loginstaff,
  updatestaffrole,
  deletestaff
} = require('../controllers/users')

const Staffrouter = require('express').Router()
Staffrouter.get('/', [isauth], getstaff)
Staffrouter.post('/', registerstaff)
Staffrouter.post('/login', loginstaff)
Staffrouter.put('/:id', [isadministrador], updatestaffrole)
Staffrouter.delete('/:id', [isauth], deletestaff)
module.exports = Staffrouter
