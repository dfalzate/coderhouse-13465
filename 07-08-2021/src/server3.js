const express = require('express')
const { Router } = express //Nueva linea

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
	console.log(Date.now())
	next()
})

app.use('/public', express.static('./src/files'))

const routerPersona = new Router() //Nueva linea
const routerMascota = new Router() //Nueva linea

const personas = []
const mascotas = []

function middle1(req, res, next) {
	console.log('Hola soy un middleware1')
	next()
}
function middle2(req, res, next) {
	console.log('Hola soy un middleware2')
	next()
}
function middle3(req, res, next) {
	console.log('Hola soy un middleware3')
	next()
}

app.get('/', middle1, middle3, middle2, (req, res) => {
	// eslint-disable-next-line no-undef
	res.sendFile(__dirname + '/files/index.html')
})

routerPersona.get('/', (req, res) => {
	res.send({
		personas,
	})
})

routerPersona.post('/', (req, res) => {
	const data = req.body
	personas.push(data)
	res.send('Grabado')
})

routerMascota.get('/', (req, res) => {
	res.send({
		mascotas,
	})
})

routerMascota.post('/', (req, res) => {
	const data = req.body
	mascotas.push(data)
	res.send('Grabado')
})
routerMascota.use(middle2)
app.use('/personas', routerPersona) //Nueva linea
app.use('/mascotas', routerMascota) //Nueva linea

app.listen(8083, () => console.log('Server on port 8083'))
