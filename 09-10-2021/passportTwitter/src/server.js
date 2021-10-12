import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import session from 'express-session'
import handlebars from 'express-handlebars'
import passport from 'passport'
import { Strategy } from 'passport-twitter'
import path from 'path'
dotenv.config()

passport.use(new Strategy({
  consumerKey: process.env.TWITTER_ID,
  consumerSecrett: process.env.TWITTER_SECRET,
  callbackURL: '/auth/twitter/callback',
}, (token, tokenSecret, profile, done) => {
  console.log(profile)
  return done(null, profile)
}))

passport.serializeUser((user, done) => {
  done(null,user)
})
passport.deserializeUser((id, done) => {
  done(null, id)
})

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge:300000
  }
}))
app.use(passport.initialize())
app.use(passport.session())
app.engine('.hbs', handlebars({ extname: '.hbs', defaultLayout: 'main.hbs' }))
app.set('view engine','.hbs')
app.use(express.static('public'))


app.get('/login', (req, res) => {
  res.sendFile(path.resolve() + '/public/login.html')
})

app.get('/auth/twitter', passport.authenticate('twitter'))

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/failLogin'
}))


app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/datos')
  } else {
    res.redirect('/login')
  }
})

app.get('/failLogin', (req, res) => {
  console.log('Login error')
  res.render('login-error', {})
  
})

app.get('/datos', (req, res) => {
  if (req.isAuthenticated()) {
    if (!req.user.contador) req.user.contador = 0
    req.user.contador++
    res.render('datos', {
      nombre: req.user.displayName,
      foto: req.user.photos[0].value,
      contador:req.user.contador
    })
  }
})

app.get('/logout',(req, res)=> {
  req.logout()
  res.redirect('/')
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))