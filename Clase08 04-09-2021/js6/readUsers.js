import { db } from './db.js'
;(async function () {
	try {
		const users = await db.select().from('usuarios')
		console.log(users)
	} catch (error) {
		console.log(error)
	} finally {
		db.destroy()
	}
})()
