const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { type } = require('os')
const { timeStamp } = require('console')
const userschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    apellidos: { type: String, required: true },
    email: { type: String, required: true },
    NIE: { type: String, required: true },
    dirreccion: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: [
        'event organizer',
        'jefe de cocina',
        'jefe de sala',
        'chef ejucutivo',
        'administrador',
        'office',
        'ayutante de cocina',
        'camarera',
        'camarero',
        'staff'
      ],
      default: 'staff'
    }
  },
  { timeStamp: true }
)
userschema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10)
  next()
})
const User = mongoose.model('users', userschema, 'users')
module.exports = User
