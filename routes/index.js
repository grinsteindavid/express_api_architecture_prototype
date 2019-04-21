const express = require('express')
const router = express.Router()
const middlewares = require('./middlewares')

router.use(middlewares.date)
router.use(middlewares.chance)
router.use('/clients', require('./clients'))

module.exports = router