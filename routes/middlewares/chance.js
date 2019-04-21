
module.exports = (request, response, next) => {
  request.chance = Math.random()
  next()
}