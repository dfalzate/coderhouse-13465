import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

import UserRouter from './routers/user.route.js'

import './db.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
	console.log('Server is working!')
	res.status(200).send('Server is working!')
})

app.use('/user', UserRouter)

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'), `Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))
