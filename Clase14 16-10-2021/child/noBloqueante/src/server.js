import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { fork } from 'child_process'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))


let visitas = 0
const computo = fork('calculo.js')

app.get('/calculo', (req, res) => {
  computo.on('message', (resultado) => {
    res.status(200).json({resultado})
    console.log('resultado+++++',resultado)
  })
  computo.send('start')
})

app.get('/visitas', (req, res) => {
  ++visitas
  res.status(200).json({ visitas })
})



const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))