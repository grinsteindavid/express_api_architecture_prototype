const cron = require('node-cron')

// ┌────────────── second (optional)
// │ ┌──────────── minute
// │ │ ┌────────── hour
// │ │ │ ┌──────── day of month
// │ │ │ │ ┌────── month
// │ │ │ │ │ ┌──── day of week
// │ │ │ │ │ │
// │ │ │ │ │ │
// * * * * * *

module.exports = () => {
	cron.schedule('* * * * *', require('./tasks/log_every_min'))

	cron.schedule('* * * * *', require('./tasks/print_working_directory'))
}