const express = require('express')
const compression = require('compression')

const app = express()

const mensaje = 'Hola que tal'
const mensajeLargo = mensaje.repeat(1000)

app.get('/saludo', (req, res) => {
  res.send(mensajeLargo)
})
app.get('/saludoZip', compression(), (req, res) => {
  res.send(mensajeLargo)
})

const PORT = Number(process.argv[2]) || 3000
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})