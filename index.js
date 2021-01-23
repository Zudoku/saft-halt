const express = require('express')

const app = express()

app.use(express.json())

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

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(20000)) + 1
}


app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const foundPerson = persons.find(person => person.id == id)

    if (foundPerson) {
        res.json(foundPerson)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    persons = persons.filter(person => person.id != id)

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const payload = req.body

    const name = payload.name
    const number = payload.number

    const createdPerson = {
        name: name,
        number: number,
        id: generateId(),
    }
    persons = persons.concat(createdPerson)

    res.json(createdPerson)
})

app.get('/info', (req, res) => {
    let personsText = `Phonebook has information for ${persons.length} people.`
    let timeText = new Date().toISOString()
    let responseText = `${personsText}\n\n${timeText}`
    res.send(responseText)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Phonebook backend running on port ${PORT}`)
})

function isString(x) {
    return Object.prototype.toString.call(x) === "[object String]"
}