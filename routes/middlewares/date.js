
module.exports = (request, response, next) => {
  request.date = Date()
  next()
}