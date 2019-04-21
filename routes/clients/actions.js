const queue = require('../../queue')

module.exports = {
	all: (request, response) => {
		response.json({
			clients: [
				{id: '1', name: 'client 1'},
				{id: '2', name: 'client 2'}
			],
			chance: request.chance,
			message: request.message,
			date: request.date
		})
	},
	show: (request, response) => {
		response.json({
			id: `${request.params.client}`, 
			name: `client ${request.params.client}`,
			chance: request.chance,
			message: request.message,
			date: request.date
		})
	},
	create: (request, response) => {

		const client = {
			name: request.body.name,
			email: request.body.email
		}

		const job = queue.create('email', {
		    subject: `New client ${client.name}`,
		    to: client.email,
		    client: client,
		    template: `<p>Welcome ${client.name}</p>`
		})
		.delay(3000)
	    .priority('high')
	    .save()

	    response.json({
			client: client
		})
	}
}