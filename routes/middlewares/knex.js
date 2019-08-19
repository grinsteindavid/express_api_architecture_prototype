const config = require('../../config')
const Knex = require('knex')(config.database)

module.exports = (request, response, next) => {
    request.knex = Knex
    next()
}