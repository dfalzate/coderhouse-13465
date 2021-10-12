import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import './db.js'
import UserRouter from './routers/user.router.js'
import AuthRouter from './routers/auth.router.js'
import * as  AuthMiddleware from './middlewares/auth.middleware.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

app.use('/user', UserRouter)
app.use('/auth', AuthRouter)

app.get('/private', AuthMiddleware.isAuth, (req, res) => {
  res.status(200).send('Estas autorizado!')
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))