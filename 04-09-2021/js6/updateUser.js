import { db } from './db.js'
;(async function () {
	try {
		await db.from('usuarios').update('identificacion', 4).where('id', 4)
		console.log('Update realizado!')
	} catch (error) {
		console.log(error)
	} finally {
		db.destroy()
	}
})()
