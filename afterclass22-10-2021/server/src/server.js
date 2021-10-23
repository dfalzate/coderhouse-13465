import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { fork } from 'child_process'
import path from 'path'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

const compute = fork(path.resolve()+'/computo.js')

app.get('/calculo', (req, res) => {
  compute.on('message', (result) => {
    console.log('RESULT=>', result)
    res.end(`Computo = ${result}`)
  })
  compute.send('start')
})

app.get('*', (req, res) => {
  res.end('Otra ruta')
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))