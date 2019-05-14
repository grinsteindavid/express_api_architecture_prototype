const Queue = require('../../queue')

module.exports = (request, response, next) => {
  request.queue = Queue
  next()
}