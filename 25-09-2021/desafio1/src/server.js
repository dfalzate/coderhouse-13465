import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

const nombres = ['Diego', 'Alejandro', 'Lucia', 'Martha']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca']
const colores =['rojo','verde','azul','amarillo','naranja']

app.get('/test', (req, res) => {
  const users = []
  for (let i = 0; i < 10; i++) {
    const user = {}
    user.nombre=nombres[Math.round(Math.random()*(nombres.length-1))]
    user.apellidos=apellidos[Math.round(Math.random()*(apellidos.length-1))]
    user.color = colores[Math.round(Math.random() * (colores.length - 1))]
    users.push(user)
  }
  res.status(200).json({users})
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost/${PORT}`))
server.on('error', (err) => console.log(err))