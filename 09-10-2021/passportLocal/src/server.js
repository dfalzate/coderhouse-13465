import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import handlebars from 'express-handlebars'
import path from 'path'
import session from 'express-session'
import passport from './utils/passport.util.js'
import './db.js'
import UserRouter from './routers/auth.route.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))
app.engine('.hbs', handlebars({ extname: '.hbs', defaultLayout: 'main.hbs' }))
app.set('view engine', '.hbs')
app.use(express.static(path.resolve() + '/views'))
app.use(session({
  secret: process.env.SECRET,
  cookie: {
    maxAge:Number(process.env.EXPIRE)
  },
  rolling: true,
  resave: true,
  saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use('/',UserRouter)

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))