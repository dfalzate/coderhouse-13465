import express from 'express'
import { Persona } from './lib/class'
import { sum } from './lib/functions.js'

const persona: Persona = new Persona('Diego', 30)
const responseSum = sum(4, 4)

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    persona,
    responseSum,
    saludo: 'Hola!'
  })
})

app.listen(8080, () => console.log('Server 8080'))