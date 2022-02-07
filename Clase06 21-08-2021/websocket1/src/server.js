const express = require('express')
const emoji = require('node-emoji')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer, {
	cors: {
		origin: 'http://localhost:3000',
	},
})

const messages = []

io.on('connection', (socket) => {
	console.log(emoji.get('pizza'), 'Usuario conectado')
	socket.emit('connectionMessage', 'Bienvenidos a el socket Coderhouse')
	socket.emit('messageBackend', messages)
	socket.on('disconnect', () => {
		console.log(emoji.get('fire'), 'Usuario desconectado')
	})
	socket.on('messageFront', (data) => {
		console.log(data)
		messages.push({
			socketId: socket.id,
			mensaje: data,
		})
		io.sockets.emit('messageBackend', messages)
	})
})

setTimeout(() => {
	io.sockets.emit('connectionMessage', 'Mensaje para todos')
}, 10000)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./src/public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})

httpServer.listen(8080, () => console.log(emoji.get('computer'), 'Server started on 8080'))
