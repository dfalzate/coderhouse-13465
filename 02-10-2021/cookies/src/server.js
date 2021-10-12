import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))
app.use(cookieParser(process.env.COOKIE_SECRET))

const data = {
  nombre: "Nombre",
  apellido: "Apellido",
  edad:30
}

app.get('/cookieIlimitada', (req, res) => {
  res.cookie('ilimitada',data).send('Cookie ilimitada')
})

app.get('/cookieLimitada', (req, res) => {
  res.cookie('limitada','limitada',{maxAge:30000}).send('Cookie limitada')
})

app.get('/get', (req, res) => {
  res.send(req.cookies.limitada)
})

app.get('/delete', (req, res) => {
  res.clearCookie('ilimitada').send('Cookie borrada')
})

app.get('/cookieFirmada', (req, res) => {
  res.cookie('firmada',data,{signed:true,maxAge:60000}).send('Cookie firmada')
})

app.get('/getFirmada', (req, res) => {
  res.send(req.signedCookies.firmada)
})


const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))