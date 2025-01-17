const mongoose = require('mongoose')
const Horario = require('../modelos/Horario')
const User = require('../modelos/staff')

const gethorariobyid = async (req, res, next) => {
  try {
    const { id } = req.params
    const requestinguser = req.user
    const staff_details = await User.findById(id)
    console.log(staff_details)
    const horariostaff = await Horario.findOne({
      name_of_the_staff: staff_details._id
    }).populate('name_of_the_staff', 'name')
    if (!horariostaff) {
      return res.status(404).json({ message: 'Horario not found.' })
    }

    const isAuthorized =
      requestinguser.role === 'chef ejucutivo' ||
      horariostaff.name_of_the_staff.some(
        (staff) => staff._id.toString() === requestinguser._id.toString()
      )

    if (!isAuthorized) {
      return res
        .status(403)
        .json(
          'You are not authorized to see the duty of this particular person.'
        )
    }

    return res.status(200).json({
      message: `Horario details fetched successfully.`,
      horario: horariostaff
    })
  } catch (error) {
    console.error(error)
    return res
      .status(400)
      .json({ message: 'Unable to get the horario.', error: error.message })
  }
}
const createhorario = async (req, res, next) => {
  try {
    const { name_of_the_staff, fecha, lugar, Time, status } = req.body
    const requestinguser = req.user
    if (
      requestinguser.role !== 'chef ejucutivo' &&
      requestinguser.role !== 'jefe de sala'
    ) {
      console.log(requestinguser.role)
      return res
        .status(403)
        .json({ message: 'you are not organized to create horario' })
    }
    const isValidDate = (dateString) => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (!dateRegex.test(dateString)) return false

      const parsedDate = new Date(dateString)
      return !isNaN(parsedDate.getTime())
    }

    if (!isValidDate(fecha)) {
      return res.status(400).json({
        message:
          'Invalid date format. Please enter the date in yyyy-mm-dd format.'
      })
    }

    const parsedDate = new Date(fecha)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (parsedDate < today) {
      return res
        .status(400)
        .json({ message: 'The date should be greater than or equal to today.' })
    }
    if (!name_of_the_staff || !lugar || !Time || !status) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    const newhorario = new Horario({
      name_of_the_staff,
      fecha: parsedDate,
      lugar,
      Time,
      status
    })
    await newhorario.save()
    return res
      .status(200)
      .json({ message: 'horrario created successfully', horario: newhorario })
  } catch (error) {
    console.log(error)
    return res
      .status(400)
      .json({ message: 'unable to create the horario', error: error.message })
  }
}
const updatehorario = async (req, res, next) => {}
module.exports = { gethorariobyid, createhorario }
