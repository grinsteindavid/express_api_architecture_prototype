module.exports = {
	all: (request, response) => {
	  response.json({
	  	client_id: `${request.params.client}`, 
	    albums: [
	    	{id: '1', name: 'album 1'},
	    	{id: '2', name: 'album 2'}
	    ],
	    chance: request.chance,
	    message: request.message,
	    date: request.date
	  })
	},
	show: (request, response) => {
	  response.json({
	  	client_id: `${request.params.client}`, 
	    id: `${request.params.album}`, 
	    name: `album ${request.params.album}`,
	    chance: request.chance,
	    message: request.message,
	    date: request.date
	  })
	}
}