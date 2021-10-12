const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let frase = 'Hola mundo como están'

app.get('/api/frase', (req, res) => {
	res.status(400).send(frase)
})
app.get('/api/letras/:num', (req, res) => {
	const { num } = req.params
	try {
		res.status(200).send(frase[num - 1])
	} catch (error) {
		res.status(400).json({ error: 'Mensaje' })
	}
})

app.get('/api/palabras/:num', (req, res) => {
	const { num } = req.params
	const arrFrase = frase.split(' ')
	res.status(200).send(arrFrase[num - 1])
})

app.post('/api/palabras', (req, res) => {
	const { palabra } = req.body
	const arrFrase = frase.split(' ')
	arrFrase.push(palabra)
	frase = arrFrase.join(' ')
	res.json({
		agregada: palabra,
		pos: arrFrase.length,
	})
})

app.put('/api/palabras/:pos', (req, res) => {
	const palabra = req.body.palabra

	const posicion = req.params.pos - 1

	const arrFrase = frase.split(' ')

	const borrada = arrFrase[posicion]

	arrFrase[posicion] = palabra
	frase = arrFrase.join(' ')

	res.json({
		actualizada: palabra,
		anterior: borrada,
	})
})

app.delete('/api/palabras/:pos', (req, res) => {
	const posicion = req.params.pos - 1

	const arrFrase = frase.split(' ')

	const borrada = arrFrase[posicion]

	arrFrase.splice(posicion, 1)

	frase = arrFrase.join(' ')

	res.json({
		borrada,
	})
})

const PORT = 8081

app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`)
})
