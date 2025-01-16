const multer = require('multer')
const mongoose = require('mongoose')
const Eventos = require('../modelos/event')
const { deletefile } = require('../../utils/delete')
const geteventos = async (req, res, next) => {
  try {
    const eventos = await Eventos.find()
      .populate('eventorganizer', 'name')
      .exec()
    return res.status(200).json(eventos)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error in showing eventos')
  }
}
const createevent = async (req, res, next) => {
  try {
    const { title, date, location, description, Number_of_attendees } = req.body
    const eventcreater = req.user

    if (eventcreater.role != 'event organizer') {
      return res
        .status(403)
        .json({ message: 'you are not authorizerd to create the events' })
    }
    const isValidDate = (dateString) => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (!dateRegex.test(dateString)) return false

      const parsedDate = new Date(dateString)
      return !isNaN(parsedDate.getTime())
    }

    if (!isValidDate(date)) {
      return res.status(400).json({
        message:
          'Invalid date format. Please enter the date in yyyy-mm-dd format.'
      })
    }

    const parsedDate = new Date(date)

    const organizerArry = [new mongoose.Types.ObjectId(eventcreater)]
    const newEvent = new Eventos({
      title,
      date: parsedDate,
      location,
      description,
      Number_of_attendees,
      eventimg: req.file.path,
      eventorganizer: organizerArry
    })
    await newEvent.save()
    return res.status(200).json(newEvent)
  } catch (error) {
    console.log(error)
    return res
      .status(400)
      .json({ message: 'unable to create the event', error: error.message })
  }
}
const updateevent = async (req, res, next) => {
  try {
    const { id } = req.params
    const { title, date, location, Number_of_attendees, description } = req.body
    console.log(
      'Number_of_attendees:',
      Number_of_attendees,
      'Type:',
      typeof Number_of_attendees
    )

    const eventcreater = req.user
    if (eventcreater.role !== 'event organizer') {
      return res
        .status(403)
        .json({ message: 'You are not authorized to update the events.' })
    }
    const oldevent = await Eventos.findById(id)
    if (!oldevent) {
      return res.status(404).json({ message: 'Event not found.' })
    }
    if (title) oldevent.set('title', title)

    if (date) {
      const isValidDate = (dateString) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!dateRegex.test(dateString)) return null

        const parsedDate = new Date(dateString)
        return !isNaN(parsedDate.getTime()) ? parsedDate : null
      }

      const parsedDate = isValidDate(date)
      if (!parsedDate) {
        return res.status(400).json({
          message:
            'Invalid date format. Please enter the date in yyyy-mm-dd format.'
        })
      }
      oldevent.set('date', parsedDate)
    }

    if (location) oldevent.set('location', location)
    if (description) oldevent.set('description', description)

    if (Number_of_attendees) {
      const attendees = Number(Number_of_attendees)
      if (isNaN(attendees) || attendees < 0) {
        return res.status(400).json({
          message:
            'Invalid number of attendees. It must be a non-negative number.'
        })
      }
      oldevent.set('Number_of_attendees', attendees)
    }

    if (req.file) {
      if (oldevent.eventimg) {
        try {
          console.log('Deleting old image:', oldevent.eventimg)
          await deletefile(oldevent.eventimg)
        } catch (error) {
          console.error('Error deleting file:', error.message)
        }
      }
      oldevent.set('eventimg', req.file.path)
    }
    console.log('***************************')
    console.log('the body is', req.body)

    const eventupdated = await oldevent.save()
    console.log('Updated Event:', eventupdated)
    return res.status(200).json(eventupdated)
  } catch (error) {
    console.error('Update Error:', error)
    return res
      .status(400)
      .json({ message: 'Unable to update event.', error: error.message })
  }
}
const deleteevent = async (req, res, next) => {
  try {
    const { id } = req.params
    const requestinguser = req.user
    if (!requestinguser.role == 'eventorganizer') {
      return res.status(403).json({
        message: 'you cant delete the event only eveny organizer can delete'
      })
    }
    const event = await Eventos.findById(id)
    if (!event) {
      return res.status(404).json({
        message: 'event not found'
      })
    }
    const eventtodelete = await Eventos.findByIdAndDelete(id)
    if (eventtodelete.eventimg) {
      try {
        console.log('Deleting image:', eventtodelete.eventimg)
        deletefile(eventtodelete.eventimg)
      } catch (error) {
        console.error('Error deleting file:', error.message)
      }
    }
    return res.status(200).json({
      message: 'event deleted sucessfully',
      deleteevent: eventtodelete
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json('Unable to delete event')
  }
}

module.exports = { geteventos, createevent, updateevent, deleteevent }
