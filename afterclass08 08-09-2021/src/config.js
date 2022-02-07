import dotenv from 'dotenv'
dotenv.config()

export const config = {
	client: 'mysql2',
	connection: {
		host: process.env.HOST,
		user: process.env.DBUSER,
		password: process.env.DBPASSWORD,
		database: process.env.DB,
	},
}
