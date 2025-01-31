const mongoose = require('mongoose')
const Extrahour = require('../modelos/extrahour')
const User = require('../modelos/staff')
const getExtraHourById = async (req, res, next) => {
  try {
    const { id } = req.params
    const requestingUser = req.user
    const extraHours = await Extrahour.find({ name_of_the_staff: id }).populate(
      'name_of_the_staff',
      'name'
    )
    if (!extraHours || extraHours.length === 0) {
      return res.status(404).json({ message: 'No extra hour records found.' })
    }

    const isManager = ['chef ejecutivo', 'jefe de sala'].includes(
      requestingUser.role
    )
    const authorizedExtraHours = extraHours.filter((extraHour) => {
      if (
        !extraHour.name_of_the_staff ||
        !Array.isArray(extraHour.name_of_the_staff)
      ) {
        return false
      }

      return (
        isManager ||
        extraHour.name_of_the_staff.some(
          (staff) => staff._id.toString() === requestingUser._id.toString()
        )
      )
    })

    if (authorizedExtraHours.length === 0) {
      return res.status(403).json({
        message: 'You are not authorized to view these records.'
      })
    }

    // Return the authorized records
    return res.status(200).json({
      message: 'Extra hour details fetched successfully.',
      extraHours: authorizedExtraHours
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Unable to fetch extra hour details.',
      error: error.message
    })
  }
}
const createextrahour = async (req, res, next) => {
  try {
    const { id } = req.params
    const requestinguser = req.user

    if (requestinguser._id.toString() !== id.toString()) {
      return res.status(403).json({
        message: 'You are not authorized to create extra hours for this staff.'
      })
    }

    const { fecha, hours, lugar } = req.body

    const parsedDate = new Date(fecha)
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({
        message:
          'Invalid date format. Please enter the date in yyyy-mm-dd format.'
      })
    }

    if (typeof hours !== 'number' || hours <= 0) {
      return res.status(400).json({
        message: 'Invalid hours. Please provide a positive number.'
      })
    }

    const staff = await User.findById(id)
    if (!staff) {
      return res.status(404).json({ message: 'Staff member not found.' })
    }

    const extrahour = new Extrahour({
      name_of_the_staff: staff._id,
      fecha: parsedDate,
      hours,
      lugar
    })

    await extrahour.save()

    return res.status(201).json({
      message: 'Extra hour record created successfully.',
      extrahour
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Unable to create extra hour record.',
      error: error.message
    })
  }
}

const updateextrahour = async (req, res, next) => {
  try {
    const { id } = req.params
    const requestinguser = req.user
    const { fecha, hours, lugar } = req.body
    const extrahour = await Extrahour.findById(id)
    if (!extrahour) {
      return res.status(404).json({ message: 'Extra hour record not found.' })
    }
    if (
      requestinguser._id.toString() !== extrahour.name_of_the_staff.toString()
    ) {
      return res.status(403).json({
        message: 'You are not authorized to update this extra hour record.'
      })
    }
    const isValidDate = (dateString) => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (!dateRegex.test(dateString)) return false

      const parsedDate = new Date(dateString)
      return !isNaN(parsedDate.getTime())
    }

    if (fecha && !isValidDate(fecha)) {
      return res.status(400).json({
        message:
          'Invalid date format. Please enter the date in yyyy-mm-dd format.'
      })
    }
    const parsedDate = fecha ? new Date(fecha) : extrahour.fecha
    if (hours && (typeof hours !== 'number' || hours <= 0)) {
      return res.status(400).json({
        message: 'Invalid hours. Please provide a positive number.'
      })
    }
    if (fecha) extrahour.fecha = parsedDate
    if (hours) extrahour.hours = hours
    if (lugar) extrahour.lugar = lugar
    await extrahour.save()
    return res.status(200).json({
      message: 'Extra hour record updated successfully.',
      extrahour
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Unable to update extra hour record.',
      error: error.message
    })
  }
}

module.exports = { getExtraHourById, createextrahour, updateextrahour }
