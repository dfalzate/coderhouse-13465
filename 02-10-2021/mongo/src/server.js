import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import MongoStore from 'connect-mongo'
import session from 'express-session'
import * as Middlewares from './middlewares/auth.middleware.js'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))
const options = { userNewUrlParser:true, useUnifiedTopology:true}
app.use(session({
  store: MongoStore.create({
    mongoUrl:process.env.MONGO_URI,
    options
  }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SECRET,
  cookie: {
    maxAge: 30000
  },
  rolling: true
}))

app.get('/contador', (req, res) => {
  if (req.session.contador) {
    req.session.contador++
    res.send(`Has visitado la pagina ${req.session.contador}`)
  } else {
    req.session.contador = 1
    res.send('Bienvenido!')
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.status(200).send('Logout!')
    } else {
      res.json({ err })
    }
  })
})

app.get('/login', (req, res) => {
  const { user, password } = req.query
  if (user !== 'user' || password !== 'password') {
    return res.send('Login failed!')
  }
  req.session.user=user
  req.session.admin = true
  res.send('Logging correcto')
})

app.get('/restringida', Middlewares.auth, (req, res) => {
  res.send('Esta informacion es restringida')
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))