const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//! Primera parte

// app.engine('ntl', (filePath, options, callback) => {
// 	fs.readFile(filePath, (err, content) => {
// 		if (err) return callback(new Error(err))
// 		const rendered = content.toString().replace('#title#', options.title).replace('#message#', options.message)
// 		return callback(null, rendered)
// 	})
// })

//! Desafío genérico

app.engine('cte', (filePath, options, callback) => {
	fs.readFile(filePath, (err, content) => {
		if (err) return callback(new Error(err))
		const rendered = content
			.toString()
			.replace('^^titulo$$', options.titulo)
			.replace('^^mensaje$$', options.mensaje)
			.replace('^^autor$$', options.autor)
			.replace('^^version$$', options.version)
		return callback(null, rendered)
	})
})

app.set('views', './views')
app.set('view engine', 'cte')

app.get('/cte1', (req, res) => {
	res.render('plantilla1', {
		titulo: 'Este es el titulo',
		mensaje: 'Este es un mensaje',
		autor: 'Autor',
		version: 'v1.1',
	})
})

app.listen(8080, () => console.log('Server started on 8080'))
