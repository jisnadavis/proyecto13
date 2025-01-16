const bcrypt = require('bcrypt')
const User = require('../modelos/staff')
const { generatesign } = require('../../utils/jwt')
const getstaff = async (req, res, next) => {
  try {
    const staff = await User.find().select('-password')
    return res.status(200).json(staff)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}
const registerstaff = async (req, res, next) => {
  try {
    const newstaff = new User(req.body)
    newstaff.role = 'staff'
    console.log(newstaff.role)
    const staffexsist = await User.findOne({ email: newstaff.email })
    if (staffexsist) {
      return res.status(409).json('the email is already exisist')
    }
    const savestaff = await newstaff.save()
    return res.status(201).json(savestaff)
  } catch (error) {
    console.log(error)
    return res.status(400).json('cant not register the staff')
  }
}
const loginstaff = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const staff = await User.findOne({ email })
    if (!staff) {
      return res.status(400).json({ message: 'email or password is incorrect' })
    }
    const ispasswordvalid = bcrypt.compareSync(password, staff.password)
    if (!ispasswordvalid) {
      return res.status(400).json({ message: 'email or password is incorrect' })
    }
    if (ispasswordvalid) {
      const token = generatesign(staff._id)
      console.log(token)
      return res.status(200).json({ token, staff })
    }
  } catch (error) {
    console.error('error occurred', error)
    return res.status(500).json({ message: 'internal server error' })
  }
}
const updatestaffrole = async (req, res, next) => {
  try {
    const { id } = req.params
    const { role } = req.body
    if (
      ![
        'event organizer',
        'jefe de cocina',
        'jefe de sala',
        'camarera',
        'office',
        'camarero',
        'chef ejucutivo',
        'administrador',
        'ayutante de cocina',
        'staff'
      ].includes(role)
    ) {
      return res.status(400).json('invalid role')
    }
    const staff = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true, runValidators: true }
    )
    if (!staff) {
      return res.status(404).json('user not found')
    }
    return res.status(200).json(staff)
  } catch (error) {
    console.log(error)
    return res.status(500).json('internal server error')
  }
}
const deletestaff = async (req, res, next) => {
  try {
    const { id } = req.params
    const requestingUser = req.user
    const staffTodelete = await User.findById(id)
    if (!staffTodelete) {
      return res.status(404).json('staff not found')
    }
    if (
      requestingUser._id.toString() !== id &&
      requestingUser.role !== 'administrador'
    ) {
      return res.status(403).json('access denied')
    }
    await User.findByIdAndDelete(id)
    return res.status(200).json({ message: 'staff deleted successfully' })
  } catch (error) {
    console.log(error)
    return res.status(500).json('internal server error')
  }
}
module.exports = {
  getstaff,
  registerstaff,
  loginstaff,
  updatestaffrole,
  deletestaff
}
