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

function calculo() {
  let sum=0
  for (let i = 0; i < 2e4; i++) {
    sum++;
    console.log(sum)
  }
  return sum
}

let visitas = 0

app.get('/calculo', (req, res) => {
  const resultado = calculo()
  res.status(200).json({resultado})
})
app.get('/visitas', (req, res) => {
  ++visitas
  res.status(200).json({ visitas })
})



const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))