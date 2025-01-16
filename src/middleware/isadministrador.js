const User = require('../api/modelos/staff')
const { verifytoken } = require('../utils/jwt')

const isadministrador = async (req, res, next) => {
  try {
    const isauth = req.headers.authorization
    const parsedtoken = isauth.split(' ')
    const token = parsedtoken[1]
    const { id } = verifytoken(token)
    const user = await User.findById(id)
    req.user = user
    user.password = null
    if (user.role === 'administrador') {
      next()
    } else {
      return res.status(403).json('you are not administrador')
    }
  } catch (error) {
    console.log(error)
    res.status(400).json('no esta authorizado  ')
  }
}
module.exports = { isadministrador }
