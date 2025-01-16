const { uploadfolder } = require('../../middleware/file')
const { isauth } = require('../../middleware/isauth')
const {
  geteventos,
  createevent,
  updateevent,
  deleteevent
} = require('../controllers/event')

const Eventrouter = require('express').Router()
Eventrouter.get('/', [isauth], geteventos)
Eventrouter.post(
  '/',
  [isauth],
  uploadfolder('event').single('eventimg'),
  createevent
)
Eventrouter.put(
  '/:id',
  [isauth],
  uploadfolder('event').single('eventimg'),
  updateevent
)
Eventrouter.delete('/:id', [isauth], deleteevent)
module.exports = Eventrouter
