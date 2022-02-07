import { db } from './db.js'

const users = [
	{ name: 'Nombre1', lastName: 'Apellido1', identificacion: 1 },
	{ name: 'Nombre2', lastName: 'Apellido2', identificacion: 2 },
	{ name: 'Nombre3', lastName: 'Apellido3', identificacion: 3 },
]

;(async function () {
	try {
		const response = await db.insert(users).from('usuarios')
		console.log('Usuarios insertados!')
		console.log(response)
	} catch (error) {
		console.log(error)
	} finally {
		db.destroy()
	}
})()
