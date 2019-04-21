const kue = require('kue')
const config = require('../config')

const queue = kue.createQueue({
  prefix: 'kue',
  redis: {
    port: config.redis.port,
    host: config.redis.host,
    auth: config.redis.auth,
    db: 3, // if provided select a non-default redis db
    options: {
      // see https://github.com/mranney/node_redis#rediscreateclient
    }
  }
})

queue.process('email', require('./tasks/email'))

module.exports = queue