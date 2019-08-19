const express = require('express')
const router = express.Router({ mergeParams: true })
const actions = require('./actions')
const validations = require('./validations')

router.use('/:client([0-9]+)/albums', require('./albums'))

router.get('/', actions.all)
router.post('/', [...validations.conditions.create, validations.errorsMiddleware], actions.create)
router.get('/:client([0-9]+)', actions.show)

module.exports = router