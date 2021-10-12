const express = require('express')

const app = express()

app.get('/ruta', (req, res, next) => {
	res.send('Hola mundo servidor express')
})

const PORT = 3001

const server = app.listen(PORT, () => {
	console.log(`Servidor express corriendo en port ${PORT}`)
})

server.on('error', (error) => console.log(error))
