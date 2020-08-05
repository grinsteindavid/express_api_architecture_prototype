require('dotenv').config()
const crons = require('./crons')
const config = require('./config')
const app = require('./app')


app.listen(config.server.port || 3000, () => {
    console.log(`HTTP Server port ${config.server.port || 3000}`)
    crons()
})