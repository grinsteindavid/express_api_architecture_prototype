const { check, validationResult } = require('express-validator/check');

module.exports = {
	errorsMiddleware: (request, response, next) => {

		const errors = validationResult(request);

		if (!errors.isEmpty()) {
			return response.status(422).json({ errors: errors.array() })
		} else {
			return next()
		}
	},
	conditions: {
		create: [
			check('name')
				.isLength({ min: 5 })
				.withMessage('must be at least 5 chars long'), 
			check('email')
				.isEmail().withMessage('must contain an email')
				.isLength({ min: 5 }).withMessage('must be at least 5 chars long')
		]
	}
}