var admin = require('firebase-admin')

var serviceAccount = require('./coder-f5274-firebase-adminsdk-10un6-5877867719.json')

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://coder-f5274.firebaseio.com',
})

const db = admin.firestore()
const query = db.collection('usuarios')

console.log('Conected!')

async function createUser() {
	try {
		let id = 2
		let doc = query.doc(`${id}`)
		await doc.create({ nombre: 'Usuario2', dni: 2222222 })
	} catch (error) {
		console.log(error)
	}
}

// createUser()

async function readAll() {
	try {
		let response = await query.get()
		response = response.docs.map((user) => {
			return {
				id: user.id,
				nombre: user.data().nombre,
				dni: user.data().dni,
			}
		})
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}

// readAll()

async function readOne() {
	try {
		const doc = query.doc('2')
		const item = await doc.get()
		let response = item.data()
		response.id = item.id
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}
// readOne()

async function update() {
	try {
		const doc = query.doc('1')
		const item = await doc.update({ dni: 666666 })
		console.log(item)
	} catch (error) {
		console.log(error)
	}
}

// update()

async function deleteUser() {
	try {
		const doc = query.doc('1')
		const item = await doc.delete()
		console.log(item)
	} catch (error) {
		console.log(error)
	}
}

deleteUser()
