import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import session from 'express-session'
import redis from 'redis'
import RedisStore from 'connect-redis'
dotenv.config()

const client = redis.createClient(
  process.env.PORT_REDIS,
  process.env.HOST_REDIS,
)

client.auth(process.env.PASS_REDIS)

const redisStore= RedisStore(session)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))
app.use(session({
  store: new redisStore({
    host: 'localhost',
    port: 6379,
    client: client,
    ttl:300
  }),
  secret:process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge:60000
  }
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