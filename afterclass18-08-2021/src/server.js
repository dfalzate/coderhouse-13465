const express = require('express')
const emoji = require('node-emoji')
const uuid = require('uuid')

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

const productos = [
	{
		id: uuid.v4(),
		name: 'Producto 1',
		description: 'Descripción 1',
		image: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-1024.png',
	},
	{
		id: uuid.v4(),
		name: 'Producto 2',
		description: 'Descripción 2',
		image: 'https://cdn0.iconfinder.com/data/icons/social-media-circle-6/1024/instagram-1024.png',
	},
	{
		id: uuid.v4(),
		name: 'Producto 3',
		description: 'Descripción 3',
		image: 'https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_23-whatsapp-1024.png',
	},
]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.render('index', {
		productos,
	})
})

app.get('/producto/:id', (req, res) => {
	const { id } = req.params
	const product = productos.filter((producto) => {
		console.log(producto.id, id)
		if (producto.id === id) {
			console.log('entra')
			return producto
		}
	})[0]
	res.render('producto', {
		product,
	})
})

app.get('/create', (req, res) => {
	res.render('formulario')
})

app.post('/', (req, res) => {
	const data = req.body
	data.id = uuid.v4()
	productos.push(data)
	console.log(emoji.get('ballot_box_with_check'), 'Grabado!')
	res.status(200).send('<div><h3>Grabado!</h3><button><a href="/">Regresar</a></button></div>')
})

app.listen(8080, () => console.log(emoji.get('pizza'), 'Server started on 8080'))
