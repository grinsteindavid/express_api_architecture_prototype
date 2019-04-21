const express = require('express')
const router = express.Router({ mergeParams: true })
const actions = require('./actions')
const middlewares = require('./middlewares')

router.use(middlewares.message)

router.get('/', actions.all)
router.get('/:album([0-9]+)', actions.show)

module.exports = router