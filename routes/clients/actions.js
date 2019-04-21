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
	}
}