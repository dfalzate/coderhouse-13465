import { db } from './db.js'
;(async function () {
	try {
		await db.from('usuarios').del().where('id', 6)
		console.log('Usuario borrado!')
	} catch (error) {
		console.log(error)
	} finally {
		db.destroy()
	}
})()
