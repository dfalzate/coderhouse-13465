const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './src/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Este es un titulo',
	})
})

app.get('/meter', (req, res) => {
	const { query } = req
	res.render('meter', {
		...query,
	})
})

app.listen(8081, () => console.log('Server started on 8081'))
