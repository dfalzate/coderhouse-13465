import { db } from './db.js'
;(async function () {
	try {
		/* ------------------------------ tabla existe ------------------------------ */
		const exist = await db.schema.hasTable('usuarios')

		/* ------------------------------- crear tabla ------------------------------ */
		if (!exist) {
			await db.schema.createTable('usuarios', (table) => {
				table.increments('id').primary().notNullable()
				table.string('name', 50).notNullable()
				table.string('lastName', 60).notNullable()
				table.integer('identificacion').notNullable()
			})

			console.log('Tabla creada')
		}
		// const user = await db.select().from('usuarios')
		// // 'select * from usuarios'
		// console.log(user)
	} catch (error) {
		console.log(error)
	} finally {
		db.destroy()
	}
})()
