const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const data = []

app.get('/', (req, res) => {
	res.render('../views/index', {
		data,
	})
})

app.post('/', (req, res) => {
	const { body } = req
	data.push(body)
	res.send('<script>alert("Grabado");windows.location.href="/";</script>')
})

app.listen(8080, () => console.log('Server started on 8080'))
