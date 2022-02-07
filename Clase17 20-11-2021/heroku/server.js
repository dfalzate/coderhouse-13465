import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
	console.log('<h1>Server is working! Cambio</h1>')
	res.status(200).send('<h1>Server is working! Cambio</h1>')
})

app.get('/info', (req, res) => {
	res.status(200).send(`Puerto ${process.env.PORT}`)
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'), `Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))
