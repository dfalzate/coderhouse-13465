import './db.js'
import { UsuariosModel } from './models/usuarios.models.js'

const users = [
	{
		nombre: 'Nombre1',
		apellido: 'Apellido1',
		email: 'email@email.com',
		usuario: 'usuario1',
		password: '123456',
	},
	{
		nombre: 'Nombre2',
		apellido: 'Apellido2',
		email: 'email@email.com',
		usuario: 'usuario2',
		password: '123456',
	},
	{
		nombre: 'Nombre3',
		apellido: 'Apellido3',
		email: 'email@email.com',
		usuario: 'usuario3',
		password: '123456',
	},
]

async function createUser() {
	try {
		const responseUsuario = await UsuariosModel.create(users)
		console.log(responseUsuario)
		// const usuario = new UsuariosModel(users)
		// console.log(usuario)
		// usuario.nombre = 'Diego'
		// usuario.save()
	} catch (error) {
		console.log(error)
	}
}

// createUser()

async function readAll() {
	try {
		const response = await UsuariosModel.find()
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}

// readAll()

async function update() {
	try {
		const response = await UsuariosModel.updateOne({ nombre: 'Diego' }, { password: 111111, direccion: 'Calle' })
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}
// update()

async function readOne() {
	try {
		const response = await UsuariosModel.findOne({ nombre: 'Diego' })
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}

// readOne()

async function deleteUser() {
	try {
		const response = await UsuariosModel.deleteOne({ nombre: 'Diego' })
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}

// deleteUser()
async function busquedas() {
	console.log(await UsuariosModel.find({ apellido: 'Apellido1' }, { nombre: 1 }))
	console.log(await UsuariosModel.find({}).sort({ nombre: -1 }))
	console.log(await UsuariosModel.find({}).skip(2).limit(2))
}

// busquedas()

// const response = await EstudiantesModel.aggregate([
//   {
//     $match: {
//       curso: '1A',
//     },
//   },
//   {
//     $group: {
//       _id: null,
//       promedio: { $avg: '$nota' },
//     },
//   },
// ])
