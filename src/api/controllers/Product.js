const Products = require('../modelos/product')

const mongoose = require('mongoose')
const getproduct = async (req, res, next) => {
  try {
    const products = await Products.find()
    return res.status(200).json(products)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error showing the products')
  }
}
const getProductCategoria = async (req, res, next) => {
  try {
    const { categoria } = req.params
    const product = await Products.find({ categoria })
    if (!product) {
      return res.status(403).json({ message: 'no product available' })
    }
    return res.status(200).json(product)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error showing the product')
  }
}
const createproduct = async (req, res, next) => {
  try {
    const {
      name_of_the_products,
      categoria,
      fecha_de_caducidad,
      stock,
      provedor
    } = req.body
    const requestinguser = req.user
    if (requestinguser.role !== 'chef ejucutivo') {
      return res
        .status(403)
        .json('you are not authorized to create the product ')
    }
    const isValidDate = (dateString) => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (!dateRegex.test(dateString)) return false

      const parsedDate = new Date(dateString)
      return !isNaN(parsedDate.getTime())
    }

    if (!isValidDate(fecha_de_caducidad)) {
      return res.status(400).json({
        message:
          'Invalid date format. Please enter the date in yyyy-mm-dd format.'
      })
    }
    const parsedDate = new Date(fecha_de_caducidad)
    const newproduct = new Products({
      name_of_the_products,
      categoria,
      fecha_de_caducidad: parsedDate,
      stock,
      provedor
    })
    await newproduct.save()
    return res
      .status(200)
      .json({ message: 'product created succesfully', product: newproduct })
  } catch (error) {
    console.log(error)
    return res
      .status(400)
      .json({ message: 'unable to create the product', error: error.message })
  }
}
const updateproduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const {
      name_of_the_products,
      categoria,
      fecha_de_caducidad,
      stock,
      provedor
    } = req.body
    const requestinguser = req.user

    console.log(requestinguser.name)
    console.log(requestinguser.role)

    if (requestinguser.role !== 'chef ejucutivo') {
      return res
        .status(403)
        .json('You are not authorized to update the product')
    }

    const mongoose = require('mongoose')
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID format' })
    }

    const oldproduct = await Products.findById(id)
    if (!oldproduct) {
      console.log(`No product found with ID: ${id}`)
      return res.status(401).json('There is no product')
    }

    if (name_of_the_products) {
      oldproduct.set('name_of_the_products', name_of_the_products)
    }

    if (fecha_de_caducidad) {
      const isValidDate = (dateString) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!dateRegex.test(dateString)) return null

        const parsedDate = new Date(dateString)
        return !isNaN(parsedDate.getTime()) ? parsedDate : null
      }

      const parsedDate = isValidDate(fecha_de_caducidad)
      if (!parsedDate) {
        return res.status(400).json({
          message:
            'Invalid date format. Please enter the date in yyyy-mm-dd format.'
        })
      }
      oldproduct.set('fecha_de_caducidad', fecha_de_caducidad)
    }

    if (categoria) {
      oldproduct.set('categoria', categoria)
    }

    if (provedor) {
      oldproduct.set('provedor', provedor)
    }

    if (stock) {
      const stockvalue = Number(stock)
      if (isNaN(stockvalue) || stockvalue < 0) {
        return res.status(400).json({
          message: 'Invalid stock value. It must be a non-negative number.'
        })
      }
      oldproduct.set('stock', stockvalue)
    }

    const productupdated = await oldproduct.save()
    console.log('The product updated successfully')
    return res.status(200).json({
      message: 'The product updated successfully',
      product: productupdated
    })
  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: 'Unable to update product.',
      error: error.message
    })
  }
}
const deleteproduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const requestinguser = req.user
    if (requestinguser.role !== 'chef ejucutivo') {
      return res.status(403).json({
        message: 'you cant delete the product only chef ejucutivo can delete'
      })
    }
    const product = await Products.findById(id)
    if (!product) {
      return res.status(404).json({
        message: 'product not found'
      })
    }
    const producttodelete = await Products.findByIdAndDelete(id)
    console.log(producttodelete.name_of_the_products)

    return res.status(200).json({
      message: 'product deleted sucessfully',
      deleted_product: producttodelete
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json('Unable to delete product')
  }
}

module.exports = {
  getproduct,
  createproduct,
  getProductCategoria,
  updateproduct,
  deleteproduct
}
