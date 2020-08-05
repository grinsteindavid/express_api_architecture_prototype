const express = require('express')
const morgan = require('morgan')

const cors = require('cors')
const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', require('./routes'))

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

module.exports = app
