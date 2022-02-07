const express = require( 'express')
const emoji = require( 'node-emoji')
const cors = require( 'cors')
const morgan = require( 'morgan')
const dotenv = require( 'dotenv')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

app.get('/noconsole', (req,res)=>{
  res.status(200).send(`PID ${process.pid}`)
})

app.get('/console', (req,res)=>{
  console.log(process.pid)
  res.status(200).send(`Console PID ${process.pid}`)
})

const PORT = process.argv[2] || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))