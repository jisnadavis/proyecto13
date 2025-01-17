const mongoose = require('mongoose')
const Horarioschema = new mongoose.Schema(
  {
    name_of_the_staff: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
    fecha: { type: Date, required: true },
    lugar: { type: String, required: true },
    Time: { type: String, required: true },
    status: {
      type: String,
      enum: ['on_duty', 'leave', 'baja', 'vacaciones', 'extra'],
      required: true
    }
  },
  { timestamps: true }
)
const Horario = mongoose.model('horarios', Horarioschema, 'horarios')
module.exports = Horario
