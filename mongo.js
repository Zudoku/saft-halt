const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}
const password = process.argv[2]
const url = `mongodb+srv://fullstack_mooc_zudoku:${password}@cluster0.hyjhu.mongodb.net/phonenumbers?retryWrites=true&w=majority`

const contactInformationSchema = new mongoose.Schema({
    name: String,
    number: String,
})
  
const ContactInformation = mongoose.model('ContactInformation', contactInformationSchema)

const addPhoneNumber = (name, number) => {
    mongoose.connect(url)
    
    const contactInformation = new ContactInformation({
        name: name,
        number: number
    })
      
    contactInformation.save().then(response => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}

const listPhoneNumbers = () => {
    mongoose.connect(url)

    ContactInformation.find({}).then(result => {
        result.forEach(contactInformation => {
          console.log(`${contactInformation.name} ${contactInformation.number}`)
        })
        mongoose.connection.close()
    })
}
