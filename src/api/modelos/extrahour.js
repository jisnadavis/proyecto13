const mongoose = require('mongoose')
const extrahours = new mongoose.Schema(
  {
    name_of_the_staff: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
    fecha: { type: Date, required: true },
    hours: { type: Number, required: true },
    lugar: { type: String, required: true }
  },
  { timestamps: true }
)
const Extrahour = mongoose.model('extrahours', extrahours, 'extrahours')
module.exports = Extrahour
