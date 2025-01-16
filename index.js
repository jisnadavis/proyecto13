const express = require('express')
const cors = require('cors')

const { connectdb } = require('./src/config/db')
const Staffrouter = require('./src/api/routes/staff')
const { connectcloudinary } = require('./src/config/cloudinary')
const Eventrouter = require('./src/api/routes/event')
const { convertObject } = require('./src/utils/Objectcreat')
const { Productrouter } = require('./src/api/routes/product')
require('dotenv').config()

const app = express()
app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed methods
    allowedHeaders: 'Content-Type, Authorization'
  })
)

connectdb()
connectcloudinary()
app.use(express.json())
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use('/api/v1/staffs', Staffrouter)
app.use('/api/v1/eventos', Eventrouter)
app.use('/api/v1/products', Productrouter)
app.listen(3000, () => {
  console.log('http://localhost:3000')
})
