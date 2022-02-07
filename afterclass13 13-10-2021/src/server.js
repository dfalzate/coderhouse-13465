import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import passport from 'passport'
import path from 'path'
import session from 'express-session'
import { Strategy } from 'passport-google-oauth20'
import { ensureLoggedIn }  from 'connect-ensure-login'

dotenv.config()
passport.use(new Strategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/oauth2/redirect/accounts.google.com',
  scope: ['profile'],
  state:true
},
  function (accessToken, refreshToken, profile, done) {
  return done(null,profile)
}
))

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(id, cb) {
  cb(null, id);
});


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))
app.set('views', path.resolve() + '/views')
app.set('view engine', 'ejs')
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())

const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/login/federated/accounts.google.com', passport.authenticate('google'))
router.get('/oauth2/redirect/accounts.google.com',
  passport.authenticate('google', { assignProperty: 'User', failureRedirect: '/login' }),
  function (req, res, next) {
    const user = {
      displayName:req.User.displayName
    }
    req.login(user, function (err) {
      if (err) { return next(err) }
      res.redirect('/')
    })
}
)

router.get('/',ensureLoggedIn(), function (req, res) {
  console.log('Login!')
  res.send(`<h1>Entra ${req.user.displayName}</h1><a href="/logout">Logout</a></a>`)
})

router.get('/logout', function (req, res){
  req.logout()
  res.redirect('/login')
})

app.use('/',router)

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))