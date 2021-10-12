import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import session from 'express-session'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))
app.use(session({
  secret:process.env.SECRET,
  resave: false,
  saveUninitialized:false,
}))

const name = (req) =>  req.session?.name ?? '*' 

app.get('/', (req, res) => {
  if (req.session.contador) {
    req.session.contador++
    res.send(`${name(req)} a visitado la pagina ${req.session.contador}`)
  } else {
    req.session.name = req.query.name
    req.session.contador = 1
    res.send(`Bienvenido!, ${name(req)}`)
  }
})

app.get('/olvidar', (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.send(`Hasta luego ${name(req)}`)
    }else{
      res.send(err)
    }
  })
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))