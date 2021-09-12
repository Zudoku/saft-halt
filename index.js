require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors())
app.use(express.static('build'))

const ContactInformation = require('./models/contactInformation')

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "Ilkka Lipsanen",
        "number": "+358-60-60606060",
        "id": 5
    },
    {
        "name": "skkrt",
        "number": "12313",
        "id": 7
    }
]


app.get('/api/persons', (req, res, next) => {
    ContactInformation.find({})
    .then(contacts => {
        res.json(contacts)
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
    const id = req.params.id

    ContactInformation.findById(id)
    .then(foundContactInformation => {
      if (foundContactInformation) {
        res.json(foundContactInformation)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    const id = req.params.id

    ContactInformation.findByIdAndRemove(id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    const body = req.body

    const contactInformation = {
        number: body.number
    }

    ContactInformation.findByIdAndUpdate(id, contactInformation, { new: true })
    .then(updatedContactInformation => {
      res.json(updatedContactInformation)
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const payload = req.body

    const name = payload.name
    const number = payload.number

    if (!isString(name) || !isString(number)) {
        res.status(400)
        res.send({ error: 'Bad request: You must provide name and number as string values!' })
        return
    }

    if (persons.some((person) => person.name == name)) {
        res.status(400)
        res.send({ error: 'Bad request: Name is not unique!' })
        return
    }

    const contactInformation = new ContactInformation({
        name: name,
        number: number,
    })

    contactInformation.save()
    .then(savedContactInformation => {
        res.json(savedContactInformation)
    })
    .catch(error => next(error))

})

app.get('/info', (req, res) => {
    let personsText = `Phonebook has information for ${persons.length} people.`
    let timeText = new Date().toISOString()
    let responseText = `${personsText}\n\n${timeText}`
    res.send(responseText)
})

const errorHandler = (error, request, res, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return res.status(400).send({ error: 'malformatted id' })
    }
  
    next(error)
  }
  
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Phonebook backend running on port ${PORT}`)
})

// https://stackoverflow.com/a/17772086
const isString = (x) => {
    return Object.prototype.toString.call(x) === "[object String]"
}
