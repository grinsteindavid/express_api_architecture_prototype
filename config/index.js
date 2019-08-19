module.exports = {
	redis: {
		port: process.env.REDIS_PORT,
		host: process.env.REDIS_HOST,
		auth: process.env.REDIS_AUTH
	},
	server: {
		port: process.env.PORT
	},
	database: {
		client: 'mysql2',
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME
		}
	}
}