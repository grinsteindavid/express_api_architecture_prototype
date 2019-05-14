const express = require('express')
const router = express.Router()
const middlewares = require('./middlewares')

router.use(middlewares.auth)
router.use(middlewares.date)
router.use(middlewares.chance)
router.use(middlewares.queue)
router.use('/clients', require('./clients'))

module.exports = router