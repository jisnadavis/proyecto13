const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String },
    Number_of_attendees: { type: Number, required: true, default: 0 },
    eventimg: { type: String, required: false },
    eventorganizer: [{ type: mongoose.Types.ObjectId, ref: 'users' }]
  },
  { timeStamp: true }
)
const Eventos = mongoose.model('events', eventSchema, 'events')
module.exports = Eventos
