const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/sumar/:num1/:num2', (req, res) => {
	const num1 = req.params.num1
	const num2 = req.params.num2
	const respuesta = Number(num1) + Number(num2)
	res.status(200).send(respuesta.toString())
})

app.get('/api/sumar', (req, res) => {
	const { num1, num2 } = req.query
	const suma = Number(num1) + Number(num2)
	res.status(200).json({ resultado: suma })
})

app.get('/api/sumar/:operacion', (req, res) => {
	const { operacion } = req.params
	console.log(req.body)
	const sum = eval(operacion)
	res.status(200).json({ respuesta: sum })
})

app.post('/api', (req, res) => {
	res.send('Ok post')
})

app.put('/api', (req, res) => {
	res.send('Ok put')
})

app.delete('/api', (req, res) => {
	res.send('Ok delete')
})

app.listen(8082, () => {
	console.log('Server 8082')
})
