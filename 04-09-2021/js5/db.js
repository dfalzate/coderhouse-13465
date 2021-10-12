const { config } = require('./config.js')
const knex = require('knex')(config)
console.log(config)
;(async function () {
	try {
		const user = await knex.select().from('usuarios')
		// 'select * from usuarios'
		console.log(user)
	} catch (error) {
		console.log(error)
	} finally {
		knex.destroy()
	}
})()
