const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

const data = [
	{
		nombre: 'Nombre 1',
		estilo: 'estilo1',
	},
	{
		nombre: 'Nombre 2',
		estilo: 'estilo2',
	},
	{
		nombre: 'Nombre 3',
		estilo: 'estilo1',
	},
]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine(
	'hbs',
	handlebars({
		extname: '.hbs',
		defaultLayout: 'index.hbs',
		// eslint-disable-next-line no-undef
		layoutsDir: __dirname + '/views/layouts',
		// eslint-disable-next-line no-undef
		partialsDir: __dirname + '/views/partials',
	}),
)

app.use(express.static('public'))

app.set('views', './src/views')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
	res.render('main', {
		data,
		exist: false,
	})
})

app.listen(8080, () => console.log('Server started on 8080'))
