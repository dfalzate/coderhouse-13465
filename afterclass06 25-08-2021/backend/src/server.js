const express = require('express')
const emoji = require('node-emoji')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer, {
	cors: {
		origin: 'http://localhost:3000',
	},
})

let users = ['Diego']
let messages = []

io.on('connection', (socket) => {
	console.log(emoji.get('fire'), 'Bienvenidos al chat')
	socket.on('users', (_users) => {
		users = _users
		io.emit('users', users)
	})
	socket.on('message', (message) => {
		messages.push(message)
		io.emit('messages', messages)
	})
})

app.get('/users', (req, res) => {
	res.status(200).json(users)
})

httpServer.listen(8080, () => console.log(emoji.get('computer'), 'Server started on 8080'))
