const listEndpoints = require('express-list-endpoints')
const app = require('../app.js')

console.log(listEndpoints(app))
