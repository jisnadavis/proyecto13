const jwt = require('jsonwebtoken')
const generatesign = (id) => {
  return jwt.sign({ id }, process.env.jwt_token, { expiresIn: '30d' })
}
const verifytoken = (token) => {
  try {
    const secretkey = process.env.jwt_token
    return jwt.verify(token, secretkey)
  } catch (error) {
    console.error('JWT verification error:', error.message)
    throw new Error('Token verification failed')
  }
}
module.exports = { generatesign, verifytoken }
