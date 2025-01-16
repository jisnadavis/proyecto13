const cloudinary = require('cloudinary').v2
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const connectcloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.cloud_name,
      api_key: process.env.api_key,
      api_secret: process.env.api_Secret
    })
    console.log('connectado con cloudinary')
  } catch (error) {
    console.log(error)
    console.log('no se puede connectar con cloudinary')
  }
}
module.exports = { connectcloudinary }
