const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

// lets not log the database to console for security reasons
// console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


const contactInformationSchema = new mongoose.Schema({
    name: String,
    number: String,
})

contactInformationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
const ContactInformation = mongoose.model('ContactInformation', contactInformationSchema)

module.exports = ContactInformation