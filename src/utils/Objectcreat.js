const fs = require('fs')

const convertObject = () => {
  fs.readFile('productt.csv', 'utf-8', (error, data) => {
    if (error) {
      console.error('Error reading the file:', error.message)
      return
    }

    if (data) {
      const rows = data.split('\r\n').filter((row) => row.trim() !== '')

      const cleanedRows = rows.map((row) =>
        row
          .replaceAll('é', 'e')
          .replaceAll('ñ', 'n')
          .replace(/,{2,}/g, ',')
          .trim()
      )

      const keys = cleanedRows
        .shift()
        .split(',')
        .map((key) => key.trim().replaceAll(' ', '_'))

      const arrayOfProducts = cleanedRows.map((row) => {
        const values = row.split(',')
        const product = {}
        keys.forEach((key, index) => {
          if (key) {
            product[key] =
              key == 'stock'
                ? Number(values[index])
                : key == 'fecha_de_caducidad'
                ? new Date(values[index])
                : values[index]
          }
        })
        return product
      })

      // Write the file only once after processing
      fs.writeFile(
        'product.js',
        JSON.stringify(arrayOfProducts, null, 2),
        'utf-8',
        (err) => {
          if (err) {
            console.error('Error writing to the file:', err.message)
            return
          }
          console.log('File written successfully')
        }
      )
    } else {
      console.error('No data found in the file.')
    }
  })
}

module.exports = { convertObject }
