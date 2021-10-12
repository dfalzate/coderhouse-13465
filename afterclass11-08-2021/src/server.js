const express = require('express')
const app = express()
const validateData = require('./middlewares/middlewares')
const fs = require('fs')

let personas = []

async function readData() {
	try {
		const data = await fs.promises.readFile('personas.txt', 'utf-8')
		personas = JSON.parse(data)
	} catch (error) {
		console.log(error)
	}
}

readData()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	// eslint-disable-next-line no-undef
	res.sendFile(__dirname + '/files/index.html')
})

app.post('/', validateData, async (req, res) => {
	const { body } = req
	personas.push(body)
	try {
		fs.writeFile('personas.txt', JSON.stringify(personas), () => {
			res.status(200).send('Grabado!')
		})
	} catch (error) {
		console.log(error)
	}
})

app.listen(8080, () => console.log('Server 8080'))
