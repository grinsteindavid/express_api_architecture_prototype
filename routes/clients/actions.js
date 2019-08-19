
module.exports = {
	all: async (request, response) => {
		const clients = await request.knex().table('clients').select('*')

		response.json({
			clients: clients,
			chance: request.chance,
			message: request.message,
			date: request.date
		})
	},
	show: async (request, response) => {
		const client = await request.knex().table('clients').where({ id: request.params.client}).first().select('*')

		response.json({
			client: client,
			chance: request.chance,
			message: request.message,
			date: request.date
		})
	},
	create: async (request, response) => {
		const id = await request.knex('clients').insert({
			name: request.body.name,
			email: request.body.email
		})

		const client = await request.knex('clients').where({ id: id[0] }).first().select('*')

		const job = request.queue.create('email', {
		    subject: `New client ${client.name}`,
		    to: client.email,
		    client: client,
		    template: 'new_client'
		})
		.delay(3000)
	    .priority('high')
	    .save()

	    response.json({
			client: client
		})
	}
}