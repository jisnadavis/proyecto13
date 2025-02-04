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

    const isManager =
      requestinguser.role === 'chef ejucutivo' ||
      requestinguser.role === 'jefe de sala'

    const isPartOfStaff = horariostaff.name_of_the_staff.some(
      (staff) => staff._id.toString() === requestinguser._id.toString()
    )

    const isAuthorized = isManager || isPartOfStaff
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
    const horariosData = req.body
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

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const createdHorarios = []

    for (let horarioData of horariosData) {
      const { name_of_the_staff, fecha, lugar, Time, status } = horarioData

      if (!isValidDate(fecha)) {
        return res.status(400).json({
          message:
            'Invalid date format. Please enter the date in yyyy-mm-dd format.'
        })
      }

      const parsedDate = new Date(fecha)
      if (parsedDate < today) {
        return res.status(400).json({
          message: 'The date should be greater than or equal to today.'
        })
      }

      if (!name_of_the_staff || !lugar || !Time || !status) {
        return res.status(400).json({ message: 'All fields are required.' })
      }

      const newHorario = new Horario({
        name_of_the_staff,
        fecha: parsedDate,
        lugar,
        Time,
        status
      })

      await newHorario.save()
      createdHorarios.push(newHorario)
    }

    return res.status(200).json({
      message: 'Horarios created successfully',
      horarios: createdHorarios
    })
  } catch (error) {
    console.log(error)
    return res
      .status(400)
      .json({ message: 'Unable to create the horarios', error: error.message })
  }
}

const updatehorario = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name_of_the_staff, fecha, lugar, Time, status } = req.body
    const requestinguser = req.user

    if (
      requestinguser.role !== 'chef ejecutivo' &&
      requestinguser.role !== 'jefe de sala'
    ) {
      console.log(requestinguser.role)
      return res
        .status(403)
        .json({ message: 'You are not authorized to update horario.' })
    }

    const staff_details = await User.findById(id)
    if (!staff_details) {
      return res.status(404).json({ message: 'Staff not found.' })
    }

    const horarios = await Horario.find({
      name_of_the_staff: { $in: [staff_details._id] }
    })

    if (horarios.length === 0) {
      return res.status(404).json({ message: 'Horario not found.' })
    }

    const oldhorario = horarios[0]

    if (name_of_the_staff) {
      const newStaff = await User.findById(name_of_the_staff)
      if (!newStaff) {
        return res.status(404).json({ message: 'New staff not found.' })
      }

      oldhorario.name_of_the_staff = [newStaff._id]
    }

    if (fecha) {
      const isValidDate = (datestring) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!dateRegex.test(datestring)) return null
        const parsedDate = new Date(datestring)
        return !isNaN(parsedDate.getTime()) ? parsedDate : null
      }

      const parsedDate = isValidDate(fecha)
      if (!parsedDate) {
        return res.status(400).json({
          message:
            'Invalid date format. Please enter the date in yyyy-mm-dd format.'
        })
      }
      oldhorario.fecha = parsedDate
    }

    if (lugar) oldhorario.lugar = lugar
    if (Time) oldhorario.Time = Time
    if (status) oldhorario.status = status

    await oldhorario.save()

    return res
      .status(200)
      .json({ message: 'Horario updated successfully.', horario: oldhorario })
  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: 'Unable to update the horario.',
      error: error.message
    })
  }
}

module.exports = { gethorariobyid, createhorario, updatehorario }
