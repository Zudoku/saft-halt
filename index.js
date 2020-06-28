const express = require('express')

const app = express()

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


app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    let id = req.params.id
    let foundPerson = persons.find(person => person.id == id)

    if (foundPerson) {
        res.json(foundPerson)
    } else {
        res.status(404).end()
    }
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