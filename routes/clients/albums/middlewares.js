module.exports = {
	message: (request, response, next) => {
		request.message = 'hello world'
		next()
	}
}