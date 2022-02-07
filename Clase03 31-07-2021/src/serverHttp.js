const http = require('http')

const server = http.createServer((req, res) => res.end('Hola mundo servidor HTTP'))

const PORT = 3000

const connectedServer = server.listen(PORT, () => {
	console.log(`Servidor escuchando en HTTP puerto ${PORT} `)
})
