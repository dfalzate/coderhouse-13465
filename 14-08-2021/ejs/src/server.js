const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mascotas = [
	{
		nombre: 'Mascota 1',
		raza: 'Raza 1',
		edad: 1,
	},
	{
		nombre: 'Mascota 2',
		raza: 'Raza 2',
		edad: 2,
	},
	{
		nombre: 'Mascota 3',
		raza: 'Raza 3',
		edad: 3,
	},
]

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('pages/index', {
		mascotas,
		title: 'Este es un titulo',
	})
})

app.get('/about', (req, res) => {
	res.render('pages/about')
})

app.listen(8080, () => console.log('Server started on 8080'))
